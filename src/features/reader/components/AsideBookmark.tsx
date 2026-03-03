import { Bookmark } from 'lucide-react';

export const AsideBookmark = () => {
  return (
    <div>
      <span className="text-foreground text-ssm tracking-widest-plus px-2 font-bold uppercase">
        Bookmarks
      </span>
      <div className="mt-3 space-y-2">
        <div className="group hover:border-primary/40 bg-muted/80 hover:bg-muted/60 cursor-pointer rounded-lg border p-3 shadow-sm transition-all">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-foreground text-ssm font-bold">Page 142</span>
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
    </div>
  );
};
