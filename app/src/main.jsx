import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Shorts from './pages/Shorts.jsx';
import Subscriptions from './pages/Subscriptions.jsx';
import Library from './pages/Library.jsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/shorts', element: <Shorts /> },
  { path: '/subscriptions', element: <Subscriptions /> },
  { path: '/library', element: <Library /> },
]);

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
