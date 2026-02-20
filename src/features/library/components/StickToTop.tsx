import { Search, Plus } from 'lucide-react';

export const StickToTop = () => {
  return (
    <header className="glass-panel sticky top-0 z-50 flex items-center justify-between gap-6 px-8 py-4">
      <div className="flex max-w-2xl flex-1 items-center gap-4">
        <div className="relative w-full">
          <span className="text-foreground absolute top-1/2 left-4 -translate-y-1/2">
            <Search size={16} />
          </span>
          <input
            className="bg-secondary text-foreground focus:ring-primary/50 font-display placeholder:text-foreground/70 w-full rounded-xl border-none py-3 pr-4 pl-12 text-sm transition-all outline-none focus:ring-2"
            placeholder="Search your library..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <select className="bg-secondary text-foreground focus:ring-primary cursor-pointer appearance-none rounded-xl border-none px-4 py-2.5 text-xs font-semibold outline-none focus:ring-1">
          <option>Format: All</option>
          <option>PDF</option>
          <option>EPUB</option>
          <option>MOBI</option>
        </select>
        <select className="bg-secondary text-foreground focus:ring-primary cursor-pointer appearance-none rounded-xl border-none px-4 py-2.5 text-xs font-semibold outline-none focus:ring-1">
          <option>Genre: All</option>
          <option>Fiction</option>
          <option>Science</option>
          <option>Philosophy</option>
          <option>Technology</option>
        </select>
        <select className="bg-secondary text-foreground focus:ring-primary cursor-pointer appearance-none rounded-xl border-none px-4 py-2.5 text-xs font-semibold outline-none focus:ring-1">
          <option>Status: All</option>
          <option>Reading</option>
          <option>Finished</option>
          <option>Unread</option>
        </select>
        <div className="bg-muted mx-2 h-6 w-px"></div>
        <button className="bg-primary text-background hover:bg-accent shadow-primary/10 flex cursor-pointer items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold shadow-lg transition-all">
          <Plus size={16} />
          Import
        </button>
      </div>
    </header>
  );
};
