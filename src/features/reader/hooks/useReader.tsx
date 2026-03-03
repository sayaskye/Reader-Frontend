import { useEffect, useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import { useShallow } from 'zustand/react/shallow';
import { useBookToLocal, useGetBooks } from '@/features/library/hooks';
import { readerService } from '../services/reader';
import { readerStore } from '@/store/reader';
import { useUpdateBook } from './useUserBookUpdate';

export const useReader = (id: string | undefined) => {
  const [epub, setEpub] = useState<any>(null);
  const [htmlChapter, setHtmlChapter] = useState<any>(null);

  const { currentChapter, setChapter, handleNextStore, handlePrevStore } =
    readerStore(
      useShallow((state) => ({
        currentChapter: id ? (state.progress[id] ?? 0) : 0,
        setChapter: state.setChapter,
        handleNextStore: state.handleNext,
        handlePrevStore: state.handlePrev,
      })),
    );

  const scrollRef = useRef<HTMLElement>(null);

  const { loadBook, isLoading, error, currentBlob } = useBookToLocal();
  const { data } = useGetBooks({ limit: 20 });

  const userBookId = data?.pages
    .flatMap((page) => page.data)
    .find((ub) => ub.bookId === id || ub.book.id === id)?.id;

  const currentBookData = data?.pages
    .flatMap((page) => page.data)
    .find((ub) => ub.bookId === id || ub.book.id === id)?.book;

  const totalSpineItems = epub?.order?.readingOrder?.length ?? 0;

  const hasNextPage =
    totalSpineItems > 0 && currentChapter < totalSpineItems - 1;
  const hasPrevPage = currentChapter > 0;

  // Helpers para mantener la interfaz de uso anterior
  const handleNext = () => id && handleNextStore(id, totalSpineItems);
  const handlePrev = () => id && handlePrevStore(id);

  //Reverse search for title chapters
  const currentChapterTitle = (() => {
    if (!epub?.order?.readingOrder || !currentBookData?.tableOfContents)
      return 'Loading...';
    for (let i = currentChapter; i >= 0; i--) {
      const fileName = epub.order.readingOrder[i];
      const tocEntry = currentBookData?.tableOfContents.find((item: any) => {
        const normalizedHref = item.href.split('#')[0].replace(/^\.\.\//, '');
        return normalizedHref === fileName;
      });
      if (tocEntry) return tocEntry.title;
    }
    return 'Cover';
  })();

  // Initial load book from store/network
  useEffect(() => {
    if (!id || !currentBookData) return;
    if (currentBookData) {
      loadBook({ ...currentBookData });
    }
  }, [id, currentBookData]);

  // Initialize EPUB from blob
  useEffect(() => {
    const initialize = async () => {
      if (currentBlob) {
        const data = await readerService.extractEpubData(currentBlob);
        setEpub(data);
      }
    };
    initialize();
  }, [currentBlob]);

  // Management of chapters and service worker
  useEffect(() => {
    const chapterChange = async (chapter: number) => {
      if (!epub || !id) return;

      const registration = await navigator.serviceWorker.ready;
      if (!navigator.serviceWorker.controller) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      const worker = navigator.serviceWorker.controller || registration.active;

      if (worker) {
        worker.postMessage({ type: 'SET_BOOK', bookId: id });
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
      await renderChapter(epub, chapter, id);

      if (scrollRef.current) {
        scrollRef.current.scrollTo(0, 0);
      }
    };
    chapterChange(currentChapter);
  }, [currentChapter, id, epub]);

  //Waits 3 seconds, then updates the book
  const { mutate: updateProgress } = useUpdateBook();

  useEffect(() => {
    if (!userBookId || totalSpineItems <= 0) return;

    const isLastChapter = currentChapter === totalSpineItems - 1;
    const status = isLastChapter ? 'completed' : 'reading';

    const timer = setTimeout(() => {
      updateProgress({
        userBookId,
        data: {
          lastPosition: currentChapter,
          totalPages: totalSpineItems,
          status,
          lastReadAt: new Date().toISOString(),
        },
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentChapter, totalSpineItems, userBookId]);

  const goToChapterByHref = (href: string) => {
    if (!id) return;
    const index = getChapterByHref(href);
    if (index !== -1) {
      setChapter(id, index);
    }
  };

  const getChapterByHref = (href: string) => {
    if (!epub?.order?.readingOrder || !id) return;
    let target = href.split('#')[0];
    target = target
      .replace(/^\.\.\//, '') //  ../
      .replace(/^OEBPS\//, '') //  OEBPS/
      .replace(/^\.\//, ''); //  ./
    return epub.order.readingOrder.indexOf(target);
  };

  const renderChapter = async (
    epub: any,
    chapterIndex: number,
    bookId: string,
  ) => {
    const { zip, opfPath, order } = epub;
    const chapterHref = order.readingOrder[chapterIndex];

    if (!chapterHref) return;

    const fullPath = readerService.resolveZipPath(opfPath, chapterHref);
    const htmlContent = await zip.file(fullPath)?.async('string');
    const cleanHtml = DOMPurify.sanitize(htmlContent);
    const parser = new DOMParser();
    const doc = parser.parseFromString(cleanHtml, 'text/html');

    doc
      .querySelectorAll("style, link[rel='stylesheet']")
      .forEach((el) => el.remove());
    doc
      .querySelectorAll('[style]')
      .forEach((el) => el.removeAttribute('style'));

    doc.querySelectorAll('svg').forEach((svg) => {
      const svgImage = svg.querySelector('image');
      if (svgImage) {
        const src =
          svgImage.getAttribute('xlink:href') || svgImage.getAttribute('href');
        if (src) {
          const newImg = doc.createElement('img');
          newImg.setAttribute('src', src);
          newImg.className = 'epub-converted-img';
          svg?.parentNode?.replaceChild(newImg, svg);
        }
      }
    });

    doc.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src');
      if (!src) return;
      const zipPath = readerService.resolveZipPath(fullPath, src);
      img.setAttribute('src', `/epub-content/${bookId}/${zipPath}`);
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    });

    doc.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#')) return;
      const resolved = readerService.resolveZipPath(fullPath, href);
      a.setAttribute('data-epub-link', resolved);
      a.setAttribute('href', '#');
      a.classList.add('epub-link');
    });

    doc.querySelectorAll('font, center').forEach((el) => el.remove());
    setHtmlChapter(doc.body.innerHTML);
  };

  return {
    epub,
    isLoading,
    error,
    htmlChapter,
    currentChapter,
    currentBookData,
    hasNextPage,
    hasPrevPage,
    handleNext,
    handlePrev,
    currentChapterTitle,
    totalChapters: totalSpineItems,
    goToChapterByHref,
    getChapterByHref,
    scrollRef,
    userBookId,
  };
};
