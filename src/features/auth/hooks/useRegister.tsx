import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { authKeys } from '@/lib/tanstack';
import type { RegisterFormValues } from '@/schemas';
import { authService } from '@/features/auth/services';

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: authKeys.all,
    mutationFn: (data: RegisterFormValues) => authService.register(data),
    onSuccess: (data) => {
      navigate('/library');
      console.log('Successful register', data);
    },
    onError: (error) => {
      console.error('Error on register', error);
    },
  });
};
