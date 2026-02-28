import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/api/axios';
import { booksKeys } from '@/lib/tanstack';

export const useUpdateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userBookId,
      data,
    }: {
      userBookId: string;
      data: any;
    }) => {
      const response = await api.patch(`/user-books/${userBookId}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: booksKeys.all });
    },
  });
};
