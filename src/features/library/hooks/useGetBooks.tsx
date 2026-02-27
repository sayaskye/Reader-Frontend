import { useQuery } from '@tanstack/react-query';

import { booksKeys } from '@/lib/tanstack';
import { booksService } from '@/features/library/services';
import type {
  PaginatedUserBooks,
  GetBooksParams,
} from '@/features/library/types/book';

export const useGetBooks = (
  params: GetBooksParams = { page: 1, limit: 10 },
) => {
  const query = useQuery<PaginatedUserBooks>({
    queryKey: booksKeys.list(params),
    queryFn: async () => await booksService.getMyBooks(params),
    staleTime: 1000 * 60,
  });
  return query;
};
