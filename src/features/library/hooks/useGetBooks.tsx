import { useInfiniteQuery } from '@tanstack/react-query';
import { booksKeys } from '@/lib/tanstack';
import { booksService } from '@/features/library/services';
import type {
  PaginatedUserBooks,
  GetBooksParams,
} from '@/features/library/types/book';

export const useGetBooks = (params: GetBooksParams = { limit: 10 }) => {
  return useInfiniteQuery<PaginatedUserBooks>({
    queryKey: booksKeys.list(params),
    queryFn: async ({ pageParam = 1 }) =>
      await booksService.getMyBooks({ ...params, page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.hasNextPage ? lastPage.page + 1 : undefined,
    staleTime: 1000 * 60,
  });
};
