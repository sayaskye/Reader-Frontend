import { Grid2x2, List } from 'lucide-react';
import { useInfiniteScroll } from '@/hooks';
import { useGetBooks } from '@/features/library/hooks';
import { DownloadableBookCard } from '@/features/library/components';

export const LibraryContent = () => {
  const queryBooks = useGetBooks({ limit: 20 });
  const allBooks = queryBooks.data?.pages.flatMap((page) => page.data) ?? [];

  const { loadMoreRef } = useInfiniteScroll({
    hasNextPage: queryBooks.hasNextPage,
    isFetchingNextPage: queryBooks.isFetchingNextPage,
    fetchNextPage: queryBooks.fetchNextPage,
  });

  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-foreground font-serif text-3xl font-extrabold tracking-tight">
            {queryBooks.isLoading ? 'Loading library' : 'Your library'}
          </h1>
          <p className="text-foreground mt-1 text-sm">
            {allBooks.length} books in total
          </p>
        </div>
        <div className="bg-secondary border-muted flex rounded-lg border p-1">
          <button className="bg-card text-primary rounded-md p-2 shadow-sm">
            <Grid2x2 size={14} />
          </button>
          <button className="text-foreground hover:text-primary p-2 transition-colors">
            <List size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7">
        {allBooks.map((ub) => (
          <DownloadableBookCard key={ub.id} ub={ub} />
        ))}
      </div>

      <div
        ref={loadMoreRef}
        className="mt-8 flex h-10 w-full items-center justify-center"
      >
        {queryBooks.isFetchingNextPage && (
          <p className="bg-card text-foreground border-muted rounded-xl border px-8 py-3 text-sm font-bold shadow-sm">
            Loading more books...
          </p>
        )}
      </div>
    </div>
  );
};
