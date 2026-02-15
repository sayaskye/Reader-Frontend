export const StickToTop = () => {
  return (
    <header className="bg-background-dark border-background-light/10 sticky top-0 z-50 flex items-center justify-between gap-6 border-b px-8 py-4 backdrop-blur-md">
      <div className="flex max-w-2xl flex-1 items-center gap-4">
        <div className="relative w-full">
          <span className="material-icons-round absolute top-1/2 left-4 -translate-y-1/2 text-slate-400">
            search Icon
          </span>
          <input
            className="focus:ring-primary font-display w-full rounded-xl border-none bg-slate-200/50 py-3 pr-4 pl-12 text-sm transition-all placeholder:text-slate-500 focus:ring-2 dark:bg-slate-800/50"
            placeholder="Search your library..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <select className="focus:ring-primary cursor-pointer appearance-none rounded-xl border-none bg-slate-200/50 px-4 py-2.5 text-xs font-semibold focus:ring-1 dark:bg-slate-800/50">
          <option>Format: All</option>
          <option>PDF</option>
          <option>EPUB</option>
          <option>MOBI</option>
        </select>
        <select className="focus:ring-primary cursor-pointer appearance-none rounded-xl border-none bg-slate-200/50 px-4 py-2.5 text-xs font-semibold focus:ring-1 dark:bg-slate-800/50">
          <option>Genre: All</option>
          <option>Fiction</option>
          <option>Science</option>
          <option>Philosophy</option>
          <option>Technology</option>
        </select>
        <select className="focus:ring-primary cursor-pointer appearance-none rounded-xl border-none bg-slate-200/50 px-4 py-2.5 text-xs font-semibold focus:ring-1 dark:bg-slate-800/50">
          <option>Status: All</option>
          <option>Reading</option>
          <option>Finished</option>
          <option>Unread</option>
        </select>
        <div className="mx-2 h-6 w-px bg-slate-700"></div>
        <button className="bg-primary hover:bg-primary/90 shadow-primary/20 flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-lg transition-all">
          <span className="material-icons-round text-sm">add</span>
          Import
        </button>
      </div>
    </header>
  );
};
