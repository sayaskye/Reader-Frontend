import { Library, Loader2, LogOut, MoonStar, Sun } from 'lucide-react';
import { useTheme } from '@/hooks';
import { useLogout } from '@/features/auth/hooks';
import { Button } from '@/components/ui/button';

export const Sidebar = () => {
  //TODO: this won't work this way, it is just a place holder
  const { applyTheme, theme } = useTheme();
  const changeTheme = theme === 'light' ? 'dark' : 'light';
  const { mutate: logout, isPending } = useLogout();
  return (
    <aside className="border-muted bg-card flex w-full flex-row flex-wrap items-center justify-center gap-4 border-r py-4 md:w-20 md:flex-col md:justify-between md:py-8">
      <div className="flex flex-row items-center justify-center gap-5">
        <div className="bg-primary text-background shadow-primary/10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl shadow-lg">
          <Library strokeWidth={3} />
        </div>
        <span className="text-primary text-4xl italic md:hidden">Reader</span>
      </div>
      {/* <nav className="flex flex-col gap-6">
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
      </nav> */}
      <div className="border-primary mt-auto flex flex-row items-center justify-center gap-6 rounded-3xl border md:flex-col md:border-none">
        {/* <button className="hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-colors">
          <Settings />
        </button> */}
        <Button
          variant="ghost"
          className="hover:text-primary flex cursor-pointer items-center justify-center rounded-xl transition-colors"
          onClick={() => applyTheme(changeTheme)}
        >
          {theme === 'light' ? (
            <div className="flex flex-row items-center justify-between gap-2">
              <MoonStar />
              <span className="md:hidden">Dark theme</span>
            </div>
          ) : (
            <div className="flex flex-row items-center justify-between gap-2">
              <Sun />
              <span className="md:hidden">Light theme</span>
            </div>
          )}
        </Button>

        <Button
          variant="ghost"
          onClick={() => logout()}
          disabled={isPending}
          className="hover:text-primary flex cursor-pointer items-center justify-center rounded-xl transition-colors"
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <div className="flex flex-row items-center justify-between gap-2">
              <LogOut className="h-5 w-5" />
              <span className="md:hidden">Logout</span>
            </div>
          )}
        </Button>
      </div>
    </aside>
  );
};
