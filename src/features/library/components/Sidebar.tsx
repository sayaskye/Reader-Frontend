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
    <aside className="border-muted bg-card flex w-10 flex-col items-center gap-8 border-r py-8 md:w-20">
      <div className="bg-primary text-background shadow-primary/10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm shadow-lg md:h-12 md:w-12 md:rounded-xl">
        <Library strokeWidth={3} />
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
      <div className="mt-auto flex flex-col items-center justify-center gap-6">
        {/* <button className="hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-colors">
          <Settings />
        </button> */}
        <Button
          variant="ghost"
          className="hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-colors"
          onClick={() => applyTheme(changeTheme)}
        >
          {theme === 'light' ? <MoonStar /> : <Sun />}
        </Button>

        <Button
          variant="ghost"
          onClick={() => logout()}
          disabled={isPending}
          className="hover:text-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl transition-colors"
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <LogOut className="h-5 w-5" />
          )}
        </Button>
      </div>
    </aside>
  );
};
