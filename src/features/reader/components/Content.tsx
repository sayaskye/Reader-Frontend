import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Content = ({
  isLoading,
  error,
  htmlChapter,
  currentChapter,
  hasPrevPage,
  handlePrev,
  totalChapters,
  hasNextPage,
  handleNext,
  scrollRef,
  goToChapterByHref,
}: any) => {
  const navigate = useNavigate();
  const handleInternalClick = (e: React.MouseEvent) => {
    const target = (e.target as HTMLElement).closest('a[data-epub-link]');
    if (target) {
      e.preventDefault();
      const destination = target.getAttribute('data-epub-link');
      if (destination) {
        goToChapterByHref(destination);
      }
    }
  };
  if (isLoading) return <div>Loading book content...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main
      className="custom-scrollbar bg-background relative flex flex-1 flex-col overflow-y-auto"
      onClick={handleInternalClick}
      ref={scrollRef}
    >
      <div className="w-full p-5">
        <Button
          className="flex w-full md:hidden"
          onClick={() => navigate(`/library`)}
        >
          Back to library
        </Button>
      </div>

      {/* <div className="toolbar-hover-zone group absolute top-0 right-0 left-0 z-30 h-24">
        <div className="toolbar-container -translate-y-4 p-6 opacity-0 transition-all duration-300 ease-out">
          <div className="bg-card border-t-primary/95 border-foreground mx-auto flex max-w-4xl items-center justify-between rounded-xl border px-6 py-3 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <button className="text-primary hover:text-accent hover:bg-foreground flex h-10 w-10 items-center justify-center rounded-lg transition-all">
                <ArrowBigLeftDashIcon />
              </button>
              <div className="bg-foreground mx-2 h-6 w-px"></div>
              <span className="text-primary font-serif text-sm font-bold opacity-80">
                {getChapterTitle(currentChapterTitle)}
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
      </div> */}

      <div className="text-foreground mx-auto max-w-5xl flex-1 px-6 pb-30 font-serif text-lg leading-[1.9] select-text sm:px-12 sm:pt-10">
        <div
          dangerouslySetInnerHTML={{ __html: htmlChapter }}
          className="prose prose-reader prose-lg prose-a:no-underline prose-headings:text-primary prose-headings:mb-12 prose-headings:text-4xl prose-headings:font-bold prose-p:mb-8 prose-p:ndent-8 max-w-none"
        />
      </div>

      <div className="bg-card border-primary/90 fixed bottom-8 left-1/2 z-10 flex w-full -translate-x-1/2 scale-75 items-center justify-center gap-6 rounded-full border px-6 py-3 shadow-sm backdrop-blur-md md:w-auto md:scale-100">
        {/* Botón Prev */}
        <button
          className={`text-primary flex cursor-pointer items-center gap-2 transition-colors ${
            !hasPrevPage && 'pointer-events-none cursor-not-allowed opacity-30'
          }`}
          onClick={handlePrev}
        >
          <ChevronLeft />
          <span className="text-xs font-bold tracking-widest uppercase">
            Prev
          </span>
        </button>

        {/* Indicador de progreso */}
        <div className="text-primary text-ssm bg-muted rounded-full px-3 py-1 font-mono font-bold">
          {currentChapter + 1} / {totalChapters}
        </div>

        {/* Botón Next */}
        <button
          className={`text-primary flex cursor-pointer items-center gap-2 transition-colors ${
            !hasNextPage && 'pointer-events-none cursor-not-allowed opacity-30'
          }`}
          onClick={handleNext}
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
