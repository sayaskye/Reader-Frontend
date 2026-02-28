import { Search, Plus, Star, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { useBookFilters } from '@/features/library/hooks';

interface StickToTopProps {
  controls: ReturnType<typeof useBookFilters>;
  isFetching: boolean;
}

export const StickToTop = ({ controls, isFetching }: StickToTopProps) => {
  const { searchTerm, setSearchTerm, form, currentFilters } = controls;

  return (
    <header className="glass-panel sticky top-0 z-50 flex items-center justify-between gap-6 px-8 py-4">
      <div className="flex max-w-2xl flex-1 items-center gap-4">
        <div className="relative w-full">
          <span className="text-foreground/50 absolute top-1/2 left-4 -translate-y-1/2">
            {isFetching ? (
              <Loader2 size={16} className="text-primary animate-spin" />
            ) : (
              <Search size={16} />
            )}
          </span>
          <Input
            className="bg-secondary focus-visible:ring-primary/50 h-11 rounded-xl border-none pl-12 focus-visible:ring-2"
            placeholder="Search your library..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Toggle
          pressed={currentFilters.isFavorite}
          onPressedChange={(pressed) => form.setValue('isFavorite', pressed)}
          className="data-[state=on]:bg-primary data-[state=on]:text-background h-10 w-10 rounded-xl"
        >
          <Star
            size={18}
            fill={currentFilters.isFavorite ? 'currentColor' : 'none'}
          />
        </Toggle>

        <Select
          value={currentFilters.status}
          onValueChange={(val) => form.setValue('status', val)}
        >
          <SelectTrigger className="bg-secondary h-10 min-w-30 rounded-xl border-none">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="to-read">To Read</SelectItem>
            <SelectItem value="reading">Reading</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="on-hold">On Hold</SelectItem>
          </SelectContent>
        </Select>

        <div className="bg-muted mx-2 h-6 w-px"></div>

        <Button className="bg-primary hover:bg-primary/90 h-10 rounded-xl px-5 font-bold">
          <Plus size={16} className="mr-2" />
          Import
        </Button>
      </div>
    </header>
  );
};
