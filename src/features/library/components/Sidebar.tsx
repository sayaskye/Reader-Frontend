/// <reference types="vite-plugin-svgr/client" />
import Logo from '@/assets/icon.svg?react';

export const Sidebar = () => {
  return (
    <aside className="border-primary/10 bg-background-light dark:bg-background-dark/50 flex w-20 flex-col items-center gap-8 border-r py-8">
      <div className="shadow-primary/20 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg">
        <Logo />
      </div>
      <nav className="flex flex-col gap-6">
        <button className="text-primary bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
          <span className="material-icons-round">D</span>
        </button>
        <button className="hover:text-primary flex h-12 w-12 items-center justify-center rounded-xl text-slate-400 transition-colors">
          <span className="material-icons-round">C</span>
        </button>
        <button className="hover:text-primary flex h-12 w-12 items-center justify-center rounded-xl text-slate-400 transition-colors">
          <span className="material-icons-round">F</span>
        </button>
        <button className="hover:text-primary flex h-12 w-12 items-center justify-center rounded-xl text-slate-400 transition-colors">
          <span className="material-icons-round">H</span>
        </button>
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <button className="hover:text-primary flex h-12 w-12 items-center justify-center rounded-xl text-slate-400 transition-colors">
          <span className="material-icons-round">S</span>
        </button>
        <div className="bg-primary/20 border-primary/30 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border">
          <img
            alt="Profile"
            className="h-full w-full object-cover"
            data-alt="User profile avatar portrait"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYxs0GtaC6yctZ2bUK1_zhAJ3q5bvMZzThWtt274nIZ0bi0dcV3_4tNc6Ts1oAPT22yPkhdvB8aXfMFOxcyTkIU4SwZI195notXPq-UH6IBitLkltknPv8ks435xL-D__njNcc7irYG3TwqBQ4dL2EruLh0wTBjW9Hnjg6Cd788Hw34yo0ffNSm2cfLvtRL4AS_iqEiJtnNQhfH165kK55UfFLpgFdqFTcrPM0vhqAJfM7hncPbMDTtBR3FHn05tu6ugcsnAHpaJvo"
          />
        </div>
      </div>
    </aside>
  );
};
