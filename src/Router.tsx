import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import { Introduction, MainPage } from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/introduction',
        element: <Introduction />,
      },
    ],
  },
]);
