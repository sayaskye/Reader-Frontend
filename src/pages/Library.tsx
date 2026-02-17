import { LibraryContent } from '@/features/library/components/LibraryContent';
import { ReadingRightNow } from '@/features/library/components/ReadingRightNow';
import { Sidebar } from '@/features/library/components/Sidebar';
import { StickToTop } from '@/features/library/components/StickToTop';

export const Library = () => {
  return (
    <div className="bg-bg-main text-text-main flex min-h-screen">
      <Sidebar />
      <main className="bg-bg-main flex h-screen flex-1 flex-col overflow-hidden">
        <StickToTop />
        <LibraryContent />
      </main>
      <ReadingRightNow />
    </div>
  );
};
