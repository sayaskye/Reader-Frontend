import { useQuery } from '@tanstack/react-query';

import { booksKeys } from '@/lib/tanstack';
import { booksService } from '@/features/library/services';
import type { UserBook } from '../types/book';

export const useGetBooks = () => {
  const query = useQuery<UserBook[]>({
    queryKey: booksKeys.all,
    queryFn: async () => await booksService.getMyBooks(),
    staleTime: 1000 * 60,
  });
  return query;
};
