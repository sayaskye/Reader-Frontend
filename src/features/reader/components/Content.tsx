import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ArrowBigLeftDashIcon,
  ChevronLeft,
  ChevronRight,
  Ellipsis,
  Search,
  Settings,
  Sparkles,
  Volume2,
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
      <div className="text-foreground mx-auto max-w-2xl flex-1 px-12 font-serif text-lg leading-[1.9] select-text">
        {
          <div
            dangerouslySetInnerHTML={createMarkup()}
            className="prose prose-lg dark:prose-invert"
          />
        }

        {/* <h2 className="text-primary mb-12 text-4xl font-bold tracking-tight">
          The Silent Observatory
        </h2>
        <p className="mb-8 indent-8">
          The wind at this altitude carried more than just the cold. It carried
          the weight of centuries, whispering through the stone archways of the
          observatory like a ghost seeking rest. Elias adjusted his lens, the
          brass cold against his fingertips. Above, the cosmic wheel turned in
          its slow, indifferent cycle, oblivious to the small man watching from
          the edge of the world.
        </p>
        <p className="mb-8 indent-8">
          He had spent most of his life chasing a
          <span className="bg-primary/20 border-primary/50 text-primary group hover:bg-primary/30 relative cursor-help rounded border-b-2 px-1 transition-colors">
            singular
          </span>
          truth. One that existed between the spaces of the stars. It was an
          <span className="bg-primary/20 border-primary text-primary relative cursor-pointer rounded border-b-2 px-1">
            ephemeral
          </span>
          notion, fleeting and hard to grasp.
        </p> */}
        {/*  */}
        {/* <div className="relative">
          <div className="bg-card border-primary/50 absolute -top-4 left-1/2 z-50 w-80 -translate-x-1/2 -translate-y-full rounded-xl border p-5 shadow-sm">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <h3 className="text-primary font-serif text-xl leading-none font-bold">
                  ephemeral
                </h3>
                <p className="text-primary font-display mt-1 text-sm font-semibold italic">
                  /əˈfem(ə)rəl/
                </p>
              </div>
              <button className="bg-primary/10 text-primary hover:bg-primary/20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors">
                <Volume2 />
              </button>
            </div>
            <div className="space-y-3">
              <p className="text-foreground font-display text-sm leading-relaxed">
                <span className="text-primary text-ssm mr-1 font-bold uppercase">
                  adjective:
                </span>
                Lasting for a very short time; fleeting or transitory.
              </p>
              <div className="bg-muted text-primary border-foreground rounded-lg border p-3 font-serif text-sm italic">
                "The beauty of the aurora was ephemeral, vanishing as quickly as
                it had arrived."
              </div>
            </div>
            <div className="font-display border-foreground mt-4 flex gap-2 border-t pt-4">
              <button className="bg-primary text-primary-foreground hover:bg-accent text-ssm flex-1 cursor-pointer rounded py-2 font-bold tracking-wider uppercase shadow-sm transition-colors">
                Save Word
              </button>
              <button className="text-primary hover:text-foreground border-foreground hover:bg-foreground cursor-pointer rounded border px-3 transition-colors">
                <Ellipsis />
              </button>
            </div>
            <div className="border-t-primary/50 absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 translate-y-full border-10 border-b-0 border-r-transparent border-l-transparent drop-shadow-sm filter"></div>
          </div>
        </div> */}
        {/*  */}
        {/* <p className="mb-8 indent-8">
          But here, in the silence of the peaks, the answers seemed closer. The
          sky wasn't just a map; it was a memory. Every pulse of light from a
          distant supernova was a message sent ages ago, finally arriving to be
          witnessed by a single pair of eyes.
        </p>
        <p className="mb-8 indent-8">
          "Do you see it?" a voice asked from the shadows.
        </p>
        <p className="mb-8 indent-8">
          Elias didn't turn. He knew that voice better than his own heartbeat.
          Lyra had a way of appearing exactly when the silence became too heavy.
          She moved with a practiced grace, her presence grounding the ethereal
          beauty of the night into something tangible.
        </p>
        <div className="group flex items-center justify-center gap-6 py-12 opacity-40">
          <div className="to-primary h-px w-24 bg-linear-to-r from-transparent"></div>
          <span className="text-primary">
            <Sparkles />
          </span>
          <div className="to-primary h-px w-24 bg-linear-to-l from-transparent"></div>
        </div>
        <p className="mb-8 indent-8">
          She stood beside him, her silhouette sharp against the glittering
          tapestry of the cosmos. "The alignment is beginning," she whispered.
          "If the legends are true, the gate will only remain open as long as
          the blue star holds its position."
        </p> */}
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
