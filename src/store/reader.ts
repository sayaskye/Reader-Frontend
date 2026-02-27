import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ReaderState {
  progress: Record<string, number>;

  setChapter: (bookId: string, index: number) => void;
  getChapter: (bookId: string) => number;
  handleNext: (bookId: string, total: number) => void;
  handlePrev: (bookId: string) => void;
}

export const readerStore = create<ReaderState>()(
  persist(
    (set, get) => ({
      progress: {},

      getChapter: (bookId) => {
        return get().progress[bookId] ?? 0;
      },

      setChapter: (bookId, index) =>
        set((state) => ({
          progress: { ...state.progress, [bookId]: index },
        })),

      handleNext: (bookId, total) => {
        const current = get().getChapter(bookId);
        if (current < total - 1) {
          get().setChapter(bookId, current + 1);
        }
      },

      handlePrev: (bookId) => {
        const current = get().getChapter(bookId);
        if (current > 0) {
          get().setChapter(bookId, current - 1);
        }
      },
    }),
    {
      name: 'reader-content-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
