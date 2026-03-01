import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authKeys } from '@/lib/tanstack';
import type { LoginFormValues } from '@/schemas';
import { authService } from '@/features/auth/services';
import { useNotificationStore } from '@/store/notifications';

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: authKeys.all,
    mutationFn: (data: LoginFormValues) => authService.login(data),
    onSuccess: () => {
      navigate('/library');
      queryClient.resetQueries();
    },
    onError: (error) => {
      useNotificationStore.getState().notify(error.message, 'error');
    },
  });
};
