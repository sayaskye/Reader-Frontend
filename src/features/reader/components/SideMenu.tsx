import { ChevronUp, Edit, Languages, Share2 } from 'lucide-react';

export const SideMenu = () => {
  return (
    <div className="bg-bg-sidebar border-primary/30 z-20 flex h-full w-16 flex-col items-center gap-6 border-2 py-8">
      <button className="group relative">
        <span className="text-primary group-hover:text-primary-hover transition-colors">
          <Edit />
        </span>
        <span className="bg-bg-sidebar text-primary text-ssm absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded px-2 py-1 whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Annotations
        </span>
      </button>
      <button className="group relative">
        <span className="text-primary group-hover:text-primary-hover transition-colors">
          <Languages />
        </span>
        <span className="bg-bg-sidebar text-primary text-ssm absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded px-2 py-1 whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Translate
        </span>
      </button>
      <button className="group relative">
        <span className="text-primary group-hover:text-primary-hover transition-colors">
          <Share2 />
        </span>
        <span className="bg-bg-sidebar text-primary text-ssm absolute top-1/2 right-full mr-4 -translate-y-1/2 rounded px-2 py-1 whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Quote
        </span>
      </button>
      <div className="mt-auto">
        <button className="text-primary hover:border-primary hover:text-primar-hover flex h-10 w-10 items-center justify-center rounded-full border border-[#D4C5A9] transition-all hover:bg-[#EBE2CD]">
          <ChevronUp />
        </button>
      </div>
    </div>
  );
};
