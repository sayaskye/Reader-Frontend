import { Button } from '@/components/ui/button';

interface EmptyLibraryProps {
  onClearFilters: () => void;
}

export const EmptyLibrary = ({ onClearFilters }: EmptyLibraryProps) => {
  return (
    <div className="animate-in fade-in zoom-in flex flex-1 flex-col items-center justify-center py-20 duration-300">
      <h3 className="text-foreground font-serif text-2xl font-bold">
        No books found
      </h3>
      <p className="text-foreground/60 mt-2 max-w-70 text-center text-sm">
        We couldn't find any books matching your current filters. Try adjusting
        them or add a new title.
      </p>

      <div className="mt-8 flex gap-3">
        <Button
          variant="outline"
          onClick={onClearFilters}
          className="border-foreground/10 bg-secondary/30 hover:bg-secondary cursor-pointer rounded-xl px-6"
        >
          Clear filters
        </Button>
        {/* <Button className="bg-primary text-background hover:bg-primary/90 shadow-primary/20 cursor-pointer rounded-xl px-6 font-bold shadow-lg">
          <Plus size={16} className="mr-2" />
          Add Book
        </Button> */}
      </div>
    </div>
  );
};
