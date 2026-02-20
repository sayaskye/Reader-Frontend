import { Bookmark, Share } from 'lucide-react';

export const ReadingRightNow = () => {
  return (
    <aside className="border-muted bg-card hidden w-80 flex-col gap-6 border-l p-6 lg:flex">
      <h2 className="text-foreground font-serif text-lg font-extrabold">
        Reading right now
      </h2>
      <div className="relative aspect-3/4 overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
        <img
          alt="Currently reading"
          className="h-full w-full object-cover"
          data-alt="High resolution book cover of The Art of Code"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAreEjPKV2VOxikzXZSGVZ3JAKjsL1OvIxGdZ_cqLjv2Amg-Q2gG1z0viksNnqGS-JeRKk6l_pivjOGv06zRQ9t_IQZXag9pN4VFUXngPx6YPr7_LxCa_XAoiYbqhfAom1iSjR_PfcWjzEl8QUMBKOy7XTryQz1UxmDHTkcna2tLHbJs0SoKVXqaMQ_9aTWrnKn9HVou3ORWAKBrhrAVuuzocQ8rqbl3XqjuzA8tCYqd3qEbsGDBkEciLf-Wu0IFrDiqgldZ2_0PHRT"
        />
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/95 via-black/70 to-transparent p-6">
          <div className="text-white">
            <h3 className="text-xl font-bold">The Great Beyond</h3>
            <p className="text-sm text-white/80">Eleanor P. Vance</p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-foreground text-sm font-semibold">
            Progress
          </span>
          <span className="text-primary text-sm font-bold">64%</span>
        </div>
        <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
          <div className="bg-primary h-full w-[64%] rounded-full shadow-[0_0_10px_rgba(212,163,115,0.3)]"></div>
        </div>
        <p className="text-foreground text-center text-[11px]">
          248 of 390 pages read
        </p>
      </div>
      <div className="mt-auto grid grid-cols-2 gap-3">
        <button className="bg-card hover:bg-primary/5 border-primary/30 hover:border-primary/20 flex cursor-pointer flex-col items-center justify-center rounded-xl border p-4 shadow-sm transition-colors">
          <span className="text-primary mb-1">
            <Bookmark />
          </span>
          <span className="text-foreground text-xs font-bold">Add Note</span>
        </button>
        <button className="bg-card hover:bg-primary/5 border-primary/30 hover:border-primary/20 flex cursor-pointer flex-col items-center justify-center rounded-xl border p-4 shadow-sm transition-colors">
          <span className="text-primary mb-1">
            <Share />
          </span>
          <span className="text-foreground text-xs font-bold">Share</span>
        </button>
      </div>
    </aside>
  );
};
