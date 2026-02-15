export const ReadingRightNow = () => {
  return (
    <aside className="border-primary/10 bg-background-light dark:bg-background-dark/80 hidden w-80 flex-col gap-6 border-l p-6 lg:flex">
      <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
        Now Reading
      </h2>
      <div className="shadow-primary/10 relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
        <img
          alt="Currently reading"
          className="h-full w-full object-cover"
          data-alt="High resolution book cover of The Art of Code"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAreEjPKV2VOxikzXZSGVZ3JAKjsL1OvIxGdZ_cqLjv2Amg-Q2gG1z0viksNnqGS-JeRKk6l_pivjOGv06zRQ9t_IQZXag9pN4VFUXngPx6YPr7_LxCa_XAoiYbqhfAom1iSjR_PfcWjzEl8QUMBKOy7XTryQz1UxmDHTkcna2tLHbJs0SoKVXqaMQ_9aTWrnKn9HVou3ORWAKBrhrAVuuzocQ8rqbl3XqjuzA8tCYqd3qEbsGDBkEciLf-Wu0IFrDiqgldZ2_0PHRT"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6">
          <div className="text-white">
            <h3 className="text-xl font-bold">The Great Beyond</h3>
            <p className="text-sm text-white/70">Eleanor P. Vance</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-500">Progress</span>
          <span className="text-primary text-sm font-bold">64%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="bg-primary h-full w-[64%] rounded-full shadow-[0_0_10px_rgba(25,25,230,0.5)]"></div>
        </div>
        <p className="text-center text-[11px] text-slate-500">
          248 of 390 pages read
        </p>
      </div>
      <div className="mt-auto grid grid-cols-2 gap-3">
        <button className="hover:bg-primary/10 hover:border-primary/20 flex flex-col items-center justify-center rounded-xl border border-transparent bg-slate-200/50 p-4 transition-colors dark:bg-slate-800/50">
          <span className="material-icons-round text-primary mb-1">
            bookmark
          </span>
          <span className="text-xs font-bold">Add Note</span>
        </button>
        <button className="hover:bg-primary/10 hover:border-primary/20 flex flex-col items-center justify-center rounded-xl border border-transparent bg-slate-200/50 p-4 transition-colors dark:bg-slate-800/50">
          <span className="material-icons-round text-primary mb-1">share</span>
          <span className="text-xs font-bold">Share</span>
        </button>
      </div>
    </aside>
  );
};
