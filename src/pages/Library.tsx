import { LibraryContent } from '@/features/library/components/LibraryContent';
import { Sidebar } from '@/features/library/components/Sidebar';
import { StickToTop } from '@/features/library/components/StickToTop';
import { useBookFilters, useGetBooks } from '@/features/library/hooks';

export const Library = () => {
  const filterControls = useBookFilters();
  const { isFetching } = useGetBooks(filterControls.currentFilters);
  return (
    <div className="bg-background text-foreground flex min-h-screen">
      <Sidebar />
      <main className="bg-background flex h-screen flex-1 flex-col overflow-hidden">
        <StickToTop controls={filterControls} isFetching={isFetching} />
        <LibraryContent
          filters={filterControls.currentFilters}
          onResetFilters={filterControls.resetFilters}
        />
      </main>
      {/* <ReadingRightNow /> */}
    </div>
  );
};
