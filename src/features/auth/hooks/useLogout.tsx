import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authKeys } from '@/lib/tanstack';
import { authService } from '@/features/auth/services';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: authKeys.all,
    mutationFn: () => authService.logout(),
    onSuccess: (data) => {
      navigate('/login');
      queryClient.resetQueries();
      console.log('Successful logout', data);
    },
    onError: (error) => {
      console.error('Error on logout', error);
    },
  });
};
