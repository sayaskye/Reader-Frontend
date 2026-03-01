import { create } from 'zustand';
import { toast } from 'sonner';

interface NotificationState {
  // Critical errors (Server Down, DB Error)
  criticalError: { message: string; code: number } | null;

  // Dispatchers
  notify: (message: string, type?: 'success' | 'error' | 'info') => void;
  setCriticalError: (error: { message: string; code: number } | null) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  criticalError: null,

  notify: (message, type = 'info') => {
    if (type === 'success') toast.success(message);
    else if (type === 'error') toast.error(message);
    else toast(message);
  },

  setCriticalError: (error) => set({ criticalError: error }),
}));
