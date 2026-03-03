import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ReaderSpoilerState {
  hideSpoilers: boolean;
  setSpoiler: (value: boolean) => void;
  toggleSpoiler: () => void;
}

export const useSpoilerStore = create<ReaderSpoilerState>()(
  persist(
    (set) => ({
      hideSpoilers: false,

      setSpoiler: (value) => set({ hideSpoilers: value }),

      toggleSpoiler: () =>
        set((state) => ({ hideSpoilers: !state.hideSpoilers })),
    }),
    {
      name: 'reader-content-spoiler',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
