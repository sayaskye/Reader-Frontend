import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Library, Reader, NotFoundPage, Login } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/library',
    element: <Library />,
  },
  {
    path: '/reader/:id',
    element: <Reader />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFoundPage />, // 404
  },
]);
