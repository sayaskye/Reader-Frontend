import { useEffect } from 'react';
import { readerStore } from '@/store/reader';
import type { useGetBooks } from './useGetBooks';

interface Props {
  queryBooks: ReturnType<typeof useGetBooks>;
}

export const useUpdateProgressFromApi = ({ queryBooks }: Props) => {
  useEffect(() => {
    const apiPages = queryBooks?.data?.pages;
    if (!apiPages) return;

    readerStore.setState((state) => {
      const newProgress = { ...state.progress };
      let hasChanges = false;

      for (const page of apiPages) {
        for (const ub of page.data) {
          const id = ub?.book?.id;
          if (!id) continue;

          const apiPosition = ub.lastPosition ?? 0;
          const localPossition = state.progress[id] ?? 0;

          if (apiPosition > localPossition) {
            newProgress[id] = apiPosition;
            hasChanges = true;
          }
        }
      }
      return hasChanges ? { progress: newProgress } : state;
    });
  }, [queryBooks.data]);
};
