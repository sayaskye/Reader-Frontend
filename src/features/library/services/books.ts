import { api } from '@/api/axios';

export const booksService = {
  getMyBooks: async () => {
    const response = await api.get('/user-books/my-books');
    return response.data;
  },
};
