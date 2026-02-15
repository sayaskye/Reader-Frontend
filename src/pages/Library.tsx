import { LibraryContent } from '@/features/library/components/LibraryContent';
import { ReadingRightNow } from '@/features/library/components/ReadingRightNow';
import { Sidebar } from '@/features/library/components/Sidebar';
import { StickToTop } from '@/features/library/components/StickToTop';

export const Library = () => {
  return (
    <div className="dark bg-background-light dark:bg-background-dark dark:text-soft-white font-display flex min-h-lvh text-slate-800">
      <Sidebar />
      <main className="flex h-screen flex-1 flex-col overflow-hidden">
        <StickToTop />
        <LibraryContent />
      </main>
      <ReadingRightNow />
    </div>
  );
};
