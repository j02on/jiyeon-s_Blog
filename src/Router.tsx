import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import { MainPage } from './pages';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);
