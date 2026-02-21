import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { authKeys } from '@/lib/tanstack';
import { authService } from '@/features/auth/services';

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: authKeys.all,
    mutationFn: () => authService.logout(),
    onSuccess: (data) => {
      navigate('/login');
      console.log('Successful logout', data);
    },
    onError: (error) => {
      console.error('Error on logout', error);
    },
  });
};
