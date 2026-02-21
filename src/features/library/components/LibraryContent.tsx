import { Grid2x2, List } from 'lucide-react';
import { useGetBooks } from '@/features/library/hooks';
import { BookCard } from '@/features/library/components/BookCard';

export const LibraryContent = () => {
  const queryBooks = useGetBooks();
  return (
    <div className="custom-scrollbar flex-1 overflow-y-auto p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-foreground font-serif text-3xl font-extrabold tracking-tight">
            {queryBooks.data ? 'Your library' : 'Loaging library'}
          </h1>
          <p className="text-foreground mt-1 text-sm">
            {queryBooks.data?.length ?? 0} books in total •{' '}
            {queryBooks.data?.length ?? 0} currently being read
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
      {/* //TODO: fix responsive */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7">
        {queryBooks.data?.map((ub) => (
          <BookCard userBook={ub} key={ub.id} />
        ))}
      </div>
      <div className="mt-12 flex justify-center pb-8">
        <button className="bg-card text-foreground hover:bg-secondary border-muted rounded-xl border px-8 py-3 text-sm font-bold shadow-sm transition-colors">
          Load More Titles
        </button>
      </div>
    </div>
  );
};
