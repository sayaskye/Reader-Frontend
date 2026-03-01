import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from '@tanstack/react-query';
import { booksKeys } from '@/lib/tanstack';
import { booksService } from '@/features/library/services';
import type { PaginatedUserBooks } from '@/features/library/types/book';
import { useNotificationStore } from '@/store/notifications';

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookId: string) => booksService.toggleFav(bookId),
    onMutate: async (bookId) => {
      await queryClient.cancelQueries({ queryKey: booksKeys.lists() });
      const previousQueries = queryClient.getQueriesData<
        InfiniteData<PaginatedUserBooks>
      >({
        queryKey: booksKeys.lists(),
      });

      queryClient.setQueriesData<InfiniteData<PaginatedUserBooks>>(
        { queryKey: booksKeys.lists() },
        (old) => {
          if (!old) return old;
          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              data: page.data.map((ub) =>
                ub.bookId === bookId
                  ? { ...ub, isFavorite: !ub.isFavorite }
                  : ub,
              ),
            })),
          };
        },
      );

      return { previousQueries };
    },
    onError: (_, __, context) => {
      context?.previousQueries?.forEach(([queryKey, oldData]) => {
        queryClient.setQueryData(queryKey, oldData);
      });
      useNotificationStore.getState().notify('Favorite action error', 'error');
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: booksKeys.lists() });
    },
  });
};
