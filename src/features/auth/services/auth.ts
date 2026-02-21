import { api } from '@/api/axios';
import type { LoginFormValues, RegisterFormValues } from '@/schemas';

export const authService = {
  login: async (data: LoginFormValues) => {
    const response = await api.post('/auth/login', data);
    return response.data;
  },
  register: async (data: RegisterFormValues) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  },
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },
};
