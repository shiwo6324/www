import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login-page/index.tsx';
import FormPage from './pages/form-page/index.tsx';
import FilePeviewPage from './pages/file-peview-page/index.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/form',
    element: <FormPage />,
  },
  {
    path: '/prveView',
    element: <FilePeviewPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
