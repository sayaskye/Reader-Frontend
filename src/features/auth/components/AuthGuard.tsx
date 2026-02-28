import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/api/axios';
import { Loader2 } from 'lucide-react';

export const AuthGuard = () => {
  const location = useLocation();

  const { isLoading, isError } = useQuery({
    queryKey: ['auth-session'],
    queryFn: async () => {
      const { data } = await api.get('/auth/validate');
      return data;
    },
    retry: false,
    staleTime: 1000 * 60 * 60,
  });

  if (isLoading) {
    return (
      <div className="bg-background flex h-screen items-center justify-center">
        <Loader2 className="text-primary animate-spin" size={40} />
      </div>
    );
  }

  if (isError && navigator.onLine) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
