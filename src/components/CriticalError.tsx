import { useNotificationStore } from '@/store/notifications';

export const CriticalErrorOverlay = () => {
  const { criticalError } = useNotificationStore();
  if (!criticalError) return null;
  const getErrorMessage = () => {
    if (criticalError.code === -1) return "You don't have network access";
    if (criticalError.code === 0) return 'Server is offline';
    if (criticalError.code === 503) return 'Server under maintenance';
    return `System error (${criticalError.code})`;
  };
  return (
    <div className="bg-background/80 animate-in fade-in fixed inset-0 z-9999 flex items-center justify-center backdrop-blur-md duration-300">
      <div className="bg-card border-border max-w-md rounded-2xl border p-8 text-center shadow-2xl">
        <div className="bg-destructive/10 text-destructive mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
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
        </div>
        <h2 className="text-2xl font-bold tracking-tight">
          {getErrorMessage()}
        </h2>
        <p className="text-muted-foreground mt-2">{criticalError.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="bg-primary text-primary-foreground mt-6 w-full rounded-lg px-4 py-2 font-medium transition-all hover:opacity-90 active:scale-95"
        >
          Reload page
        </button>
      </div>
    </div>
  );
};
