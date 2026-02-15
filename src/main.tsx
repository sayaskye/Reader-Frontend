import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { TanStackProvider } from '@/providers/TanStack';
import { router } from '@/routes';

import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanStackProvider>
      <RouterProvider router={router} />
    </TanStackProvider>
  </StrictMode>,
);
