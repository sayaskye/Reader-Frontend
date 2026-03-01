import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authKeys } from '@/lib/tanstack';
import type { RegisterFormValues } from '@/schemas';
import { authService } from '@/features/auth/services';
import { useNotificationStore } from '@/store/notifications';

export const useRegister = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: authKeys.all,
    mutationFn: (data: RegisterFormValues) => authService.register(data),
    onSuccess: () => {
      navigate('/library');
      queryClient.resetQueries();
      useNotificationStore.getState().notify('Successful register', 'success');
    },
    onError: (error) => {
      useNotificationStore.getState().notify(error.message, 'error');
    },
  });
};
