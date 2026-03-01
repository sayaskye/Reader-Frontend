import { Toaster } from 'sonner';
import { CriticalErrorOverlay } from '../CriticalError';

interface Props {
  children: React.ReactNode;
}
export default function LayoutError({ children }: Props) {
  return (
    <div className="bg-background relative min-h-screen">
      {children}
      <CriticalErrorOverlay />
      <Toaster
        position="bottom-right"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              'flex items-center gap-3 w-full max-w-[350px] p-4 rounded-xl border shadow-2xl backdrop-blur-md transition-all duration-300',
            success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
            error: 'bg-destructive/10 border-destructive/20 text-destructive',
            info: 'bg-card/50 border-border/50 text-foreground',
            title: 'text-sm font-medium leading-none',
            description: 'text-xs opacity-80',
          },
        }}
      />
    </div>
  );
}
