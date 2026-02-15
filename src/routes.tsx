import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout/MainLayout';
import { NotFoundPage } from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, //Layout with <Navbar /> and <Outlet />
    children: [
      {
        index: true,
        element: <div>Home</div>, //<HomePage />,
      },
      {
        path: 'reader/:bookId',
        element: <div>Book:id</div>, //<ReaderPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <div>Login</div>, //<LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />, // 404
  },
]);
