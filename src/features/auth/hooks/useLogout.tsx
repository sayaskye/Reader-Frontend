import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/features/auth/services/auth';
import { useNotificationStore } from '@/store/notifications';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      queryClient.clear();
      navigate('/login', { replace: true });
      useNotificationStore.getState().notify('Successful logout', 'success');
    },
    onError: (error) => {
      useNotificationStore.getState().notify(error.message, 'error');
    },
  });
};
