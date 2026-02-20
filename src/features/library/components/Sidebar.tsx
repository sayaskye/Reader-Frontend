import { useNavigate } from 'react-router-dom';
import {
  Library,
  LayoutDashboard,
  Shapes,
  Star,
  History,
  Settings,
  MoonStar,
  Sun,
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export const Sidebar = () => {
  const { applyTheme, theme } = useTheme();
  //TODO: this won't work this way, it is just a place holder
  const changeTheme = theme === 'light' ? 'dark' : 'light';
  const navigate = useNavigate();
  return (
    <aside className="border-muted bg-card flex w-20 flex-col items-center gap-8 border-r py-8">
      <div
        className="bg-primary text-background shadow-primary/10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl shadow-lg"
        onClick={() => navigate('/login')}
      >
        <Library strokeWidth={3} size={40} />
      </div>
      <nav className="flex flex-col gap-6">
        <button className="text-primary bg-primary/10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl">
          <LayoutDashboard />
        </button>
        <button className="hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-colors">
          <Shapes />
        </button>
        <button className="hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-colors">
          <Star />
        </button>
        <button className="hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-colors">
          <History />
        </button>
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <button className="hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-colors">
          <Settings />
        </button>
        <button
          className="hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-colors"
          onClick={() => applyTheme(changeTheme)}
        >
          {theme === 'light' ? <MoonStar /> : <Sun />}
        </button>
        <div className="bg-primary/20 border-primary/30 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border">
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
