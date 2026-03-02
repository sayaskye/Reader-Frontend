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
  uploadBook: async (formData: FormData) => {
    const response = await api.post('/books', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};
