import { useMutation, useQueryClient } from '@tanstack/react-query';

import { booksKeys } from '@/lib/tanstack';
import { booksService } from '@/features/library/services';
import { useNotificationStore } from '@/store/notifications';

export const useUploadBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: booksKeys.all,
    mutationFn: (formData: FormData) => booksService.uploadBook(formData),
    onSuccess: () => {
      useNotificationStore.getState().notify('Successful upload', 'success');
      queryClient.invalidateQueries({ queryKey: booksKeys.all });
    },
    onError: (error) => {
      useNotificationStore.getState().notify(error.message, 'error');
    },
  });
};
