import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Library, Reader, NotFoundPage, Login, Register } from '@/pages';
import { AuthGuard } from '@/features/auth/components';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    element: <AuthGuard />,
    children: [
      {
        path: '/library',
        element: <Library />,
      },
      {
        path: '/reader/:id',
        element: <Reader />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />, // 404
  },
]);
