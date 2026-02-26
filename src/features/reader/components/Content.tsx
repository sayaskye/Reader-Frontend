import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ArrowBigLeftDashIcon,
  ChevronLeft,
  ChevronRight,
  Search,
  Settings,
} from 'lucide-react';
import DOMPurify from 'dompurify';

import { useBookToLocal, useGetBooks } from '@/features/library/hooks';
import { readerService } from '../services/reader';

export const Content = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  const [epub, setEpub] = useState<any>(null);
  const [htmlChapter, setHtmlChapter] = useState<any>(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const { loadBook, isLoading, error, currentBlob } = useBookToLocal();
  const { data: userBooks } = useGetBooks();

  useEffect(() => {
    const currentBook = userBooks?.find((b) => b.book.id === id)?.book;

    if (currentBook) {
      loadBook({
        ...currentBook,
      });
    }
  }, [id, userBooks]);

  useEffect(() => {
    const initialize = async () => {
      if (currentBlob) {
        const data = await readerService.extractEpubData(currentBlob);
        setEpub(data);
      }
    };
    initialize();
  }, [currentBlob]);

  useEffect(() => {
    const chapterChange = async (chapter: number) => {
      if (!epub) return;
      const registration = await navigator.serviceWorker.ready;
      if (!navigator.serviceWorker.controller) {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      const worker = navigator.serviceWorker.controller || registration.active;

      if (worker) {
        worker.postMessage({ type: 'SET_BOOK', bookId: id });
        /* await new Promise((resolve) => setTimeout(resolve, 50)); */
      }

      await renderChapter(epub, chapter, id);
    };

    chapterChange(currentChapter);
  }, [currentChapter, id, epub]);

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

    doc.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src');
      if (!src) return;
      const zipPath = readerService.resolveZipPath(fullPath, src);
      img.setAttribute('src', `/epub-content/${bookId}/${zipPath}`);
    });

    doc.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (href.startsWith('http')) return;
      const resolved = readerService.resolveZipPath(fullPath, href);
      a.setAttribute('href', resolved);
    });
    doc.querySelectorAll('font, center').forEach((el) => el.remove());
    const normalizedHtml = doc.body.innerHTML;
    setHtmlChapter(normalizedHtml);
  };

  if (isLoading) return <div>Loading book content...</div>;
  if (error) return <div>Error: {error.message}</div>;

  function createMarkup() {
    return { __html: htmlChapter };
  }

  return (
    <main className="custom-scrollbar bg-background relative flex flex-1 flex-col overflow-y-auto">
      <div className="toolbar-hover-zone group absolute top-0 right-0 left-0 z-30 h-24">
        <div className="toolbar-container -translate-y-4 p-6 opacity-0 transition-all duration-300 ease-out">
          <div className="bg-card border-t-primary/95 border-foreground mx-auto flex max-w-4xl items-center justify-between rounded-xl border px-6 py-3 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <button className="text-primary hover:text-accent hover:bg-foreground flex h-10 w-10 items-center justify-center rounded-lg transition-all">
                <ArrowBigLeftDashIcon />
              </button>
              <div className="bg-foreground mx-2 h-6 w-px"></div>
              <span className="text-primary font-serif text-sm font-bold opacity-80">
                Chapter 2: The Silent Observatory
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-primary hover:text-accent hover:bg-foreground flex h-10 w-10 items-center justify-center rounded-lg transition-all">
                <Search />
              </button>
              <button className="text-primary hover:text-accent hover:bg-foreground flex h-10 w-10 items-center justify-center rounded-lg transition-all">
                <Settings />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="text-foreground mx-auto max-w-5xl flex-1 px-12 pt-10 font-serif text-lg leading-[1.9] select-text">
        {
          <div
            dangerouslySetInnerHTML={createMarkup()}
            className="prose prose-reader prose-lg prose-a:no-underline prose-headings:text-primary prose-headings:mb-12 prose-headings:text-4xl prose-headings:font-bold prose-p:mb-8 prose-p:ndent-8 max-w-none"
          />
        }
      </div>
      {/*  */}
      <div className="bg-card border-primary/90 fixed bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-6 rounded-full border px-6 py-3 shadow-sm backdrop-blur-md">
        <button
          className="text-primary hover:text-accent flex cursor-pointer items-center gap-2 transition-colors"
          onClick={() => setCurrentChapter(currentChapter - 1)}
        >
          <ChevronLeft />
          <span className="text-xs font-bold tracking-widest uppercase">
            Prev
          </span>
        </button>
        <div className="text-primary text-ssm bg-muted rounded-full px-3 py-1 font-mono font-bold">
          Chapter {currentChapter}
        </div>
        <button
          className="text-primary hover:text-accent flex cursor-pointer items-center gap-2 transition-colors"
          onClick={() => setCurrentChapter(currentChapter + 1)}
        >
          <span className="text-xs font-bold tracking-widest uppercase">
            Next
          </span>
          <ChevronRight />
        </button>
      </div>
    </main>
  );
};
