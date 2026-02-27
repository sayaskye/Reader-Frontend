import { api } from '@/api/axios';
import type {
  PaginatedUserBooks,
  GetBooksParams,
} from '@/features/library/types/book';

export const booksService = {
  getMyBooks: async (params: GetBooksParams): Promise<PaginatedUserBooks> => {
    const response = await api.get('/user-books/my-books', { params });
    return response.data;
  },
  toggleFav: async (bookId: string) => {
    const response = await api.patch(`/user-books/favorite/${bookId}`);
    return response.data;
  },
};
