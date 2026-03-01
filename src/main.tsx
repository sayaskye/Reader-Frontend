import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { TanStackProvider } from '@/providers/TanStack';
import { router } from '@/routes';
import LayoutError from '@/components/layout/LayoutError';

import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanStackProvider>
      <LayoutError>
        <RouterProvider router={router} />
      </LayoutError>
    </TanStackProvider>
  </StrictMode>,
);
