import { useEffect, useState } from 'react';
import { useNotificationStore } from '@/store/notifications';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';

export const CriticalErrorOverlay = () => {
  const { criticalError, setCriticalError } = useNotificationStore();
  const [elapsed, setElapsed] = useState(0);

  const isServerOffline = criticalError?.code === 0;

  // Countdown timer to give user a sense of progress when server is waking up
  useEffect(() => {
    if (!isServerOffline) {
      setElapsed(0);
      return;
    }
    setElapsed(0);
    const interval = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        if (next >= 35) {
          setCriticalError(null);
        }
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isServerOffline, criticalError, setCriticalError]);

  const getErrorTitle = () => {
    if (!criticalError) return '';
    if (criticalError.code === -1) return 'No Internet Connection';
    if (criticalError.code === 0) return 'Server is Waking Up';
    if (criticalError.code === 503) return 'Server Under Maintenance';
    return `System Error (${criticalError.code})`;
  };

  const progressPercent = isServerOffline
    ? Math.min((elapsed / 35) * 100, 99)
    : 0;

  return (
    <Dialog
      open={!!criticalError}
      onOpenChange={(open) => {
        if (!open) setCriticalError(null);
      }}
    >
      <DialogContent className="max-w-md text-center [&>div]:text-center">
        <DialogHeader className="items-center gap-4">
          {/* Icon */}
          <div
            className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${
              isServerOffline
                ? 'bg-amber-500/10 text-amber-500'
                : 'bg-destructive/10 text-destructive'
            }`}
          >
            {isServerOffline ? (
              /* Server / power icon */
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12H3m9-9v2m9 7h-2M6.343 6.343l-1.414-1.414m13.142 0l-1.414 1.414M12 19v2m-4.95-2.05l-1.414 1.414M18.95 18.95l-1.414-1.414M12 7a5 5 0 100 10A5 5 0 0012 7z"
                />
              </svg>
            ) : (
              /* Warning triangle */
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            )}
          </div>

          <DialogTitle className="text-2xl font-bold tracking-tight">
            {getErrorTitle()}
          </DialogTitle>

          <DialogDescription className="text-muted-foreground text-sm">
            {criticalError?.message}
          </DialogDescription>
        </DialogHeader>

        {/* Extra info for server-offline / waking-up state */}
        {isServerOffline && (
          <div className="space-y-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-left">
            <p className="text-foreground text-sm font-medium">
              🚀 Demo server is starting up
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This is a demo running on a free instance that goes to sleep when
              inactive. It typically takes{' '}
              <span className="text-foreground font-medium">~35 seconds</span>{' '}
              to wake up. Please wait a moment and the page will recover.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sorry for the inconvenience.
            </p>

            {/* Progress bar */}
            <div className="space-y-1.5">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-amber-500/10">
                <div
                  className="h-full rounded-full bg-amber-500 transition-all duration-1000 ease-linear"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-muted-foreground text-right text-xs">
                {elapsed}s elapsed
              </p>
            </div>
          </div>
        )}

        <DialogFooter className="gap-2 sm:justify-center">
          <button
            onClick={() => setCriticalError(null)}
            className="border-border text-muted-foreground hover:bg-muted w-full cursor-pointer rounded-lg border px-4 py-2 font-medium transition-all active:scale-95"
          >
            Dismiss
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-primary-foreground w-full cursor-pointer rounded-lg px-4 py-2 font-medium transition-all hover:opacity-90 active:scale-95"
          >
            Reload page
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
