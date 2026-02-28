import { normalizeAuthors } from '@/lib/normalize-authors';
import { getChapterTitle } from '@/lib/normalize-title';
import { Library } from 'lucide-react';
import { useNavigate } from 'react-router';

interface EpubData {
  zip: any; // JSZip instance
  opfPath: string;
  order: {
    readingOrder: string[]; // spine
  };
}
interface AsideProps {
  currentBook: any;
  currentChapter: number;
  onJumpToChapter: (href: string) => void;
  totalChapters: number;
  epub: EpubData;
}

export const Aside = ({
  currentBook,
  currentChapter,
  onJumpToChapter,
  totalChapters,
  epub,
}: AsideProps) => {
  const navigate = useNavigate();
  if (!currentBook) return;
  const toc = currentBook?.tableOfContents ?? [];
  const progress =
    totalChapters > 0
      ? Math.round(((currentChapter + 1) / totalChapters) * 100)
      : 0;

  return (
    <aside className="bg-card border-card z-20 flex h-full w-72 flex-col border-r shadow-xl shadow-black/10">
      <div className="border-card border-b p-6">
        <div className="mb-6 flex items-center gap-3">
          <div
            className="bg-primary text-background flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg shadow-sm"
            onClick={() => navigate('/library')}
          >
            <Library strokeWidth={2} size={20} />
          </div>
          <h1 className="text-foreground text-sm font-bold tracking-tight uppercase opacity-80">
            Library Navigator
          </h1>
        </div>

        <div className="space-y-1">
          <div className="text-foreground mb-3 text-xs font-semibold tracking-widest uppercase">
            Book Details
          </div>
          <div className="group flex cursor-pointer gap-3">
            <div className="relative">
              <img
                className="h-auto w-48 rounded object-cover shadow-md transition-transform duration-300 group-hover:-translate-y-1"
                src={currentBook?.coverUrl}
                alt={currentBook?.title}
              />
              <div className="absolute inset-0 rounded ring-1 ring-black/10 ring-inset"></div>
            </div>
            <div className="flex flex-col justify-start">
              <span className="text-foreground font-serif text-sm leading-tight font-bold">
                {currentBook?.title || 'Loading...'}
              </span>
              <span className="text-foreground mt-1 text-xs">
                {normalizeAuthors(currentBook.author) ||
                  currentBook.author ||
                  'Unknown Author'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="custom-scrollbar flex-1 overflow-y-auto p-4">
        <div className="mb-6">
          <span className="text-foreground text-ssm tracking-widest-plus px-2 font-bold uppercase">
            Chapters
          </span>
          <ul className="mt-3 space-y-1">
            {toc?.map((chapter: any, index: number) => {
              const currentFileInSpine =
                epub?.order?.readingOrder[currentChapter];
              const normalizedChapterHref = chapter.href
                .split('#')[0]
                .replace(/^\.\.\//, '');

              const isActive = normalizedChapterHref === currentFileInSpine;

              return (
                <li key={index}>
                  <button
                    onClick={() => onJumpToChapter(chapter.href)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      isActive
                        ? 'text-foreground border-primary bg bg-primary/10 border-l-[3px] font-bold shadow-sm'
                        : 'text-foreground hover:bg-primary/10 opacity-80'
                    }`}
                  >
                    <span className="text-ssm w-4 font-serif opacity-60">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="truncate">
                      {getChapterTitle(chapter.title)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div>
          <span className="text-foreground text-ssm tracking-widest-plus px-2 font-bold uppercase">
            Bookmarks
          </span>
          <div className="mt-3 space-y-2">
            <div className="group hover:border-primary/40 bg-muted/80 hover:bg-muted/60 cursor-pointer rounded-lg border p-3 shadow-sm transition-all">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-foreground text-ssm font-bold">
                  Page 142
                </span>
                <span className="text-primary">
                  <Bookmark size={14} />
                </span>
              </div>
              <p className="text-foreground/80 line-clamp-2 font-serif text-xs leading-relaxed italic">
                "The stars didn't just shine; they hummed a melody only the lost
                could hear..."
              </p>
            </div>
          </div>
        </div> */}
      </nav>

      <div className="border-card bg-background border-t p-4">
        <div className="mb-2 flex items-center justify-between text-[11px] font-bold">
          <span className="text-foreground">READING PROGRESS</span>
          <span className="text-foreground">{progress}%</span>
        </div>
        <div className="bg-muted h-1.5 w-full overflow-hidden rounded-full">
          <div
            className="bg-primary h-full shadow-[0_0_10px_rgba(139,94,60,0.5)] transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </aside>
  );
};
