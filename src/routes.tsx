import { createBrowserRouter } from 'react-router-dom';

import { NotFoundPage } from '@/pages/NotFound';
import { Library } from './pages/Library';

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
    path: '/login',
    element: <div>Login</div>, //<LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />, // 404
  },
]);
