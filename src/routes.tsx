import { createBrowserRouter } from 'react-router-dom';

import { Library, Reader, NotFoundPage } from '@/pages';

export const router = createBrowserRouter([
  /* {
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
  }, */
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
    element: <div>Login</div>, //<LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />, // 404
  },
]);
