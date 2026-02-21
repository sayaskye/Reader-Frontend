import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { authKeys } from '@/lib/tanstack';
import type { LoginFormValues } from '@/schemas';
import { authService } from '@/features/auth/services';

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: authKeys.all,
    mutationFn: (data: LoginFormValues) => authService.login(data),
    onSuccess: (data) => {
      navigate('/library');
      console.log('Successful login', data);
    },
    onError: (error) => {
      console.error('Error on login', error);
    },
  });
};
