import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './RootLayout';
import { Introduction, MainPage, Story, StoryWrite, StoryView } from './pages';

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
      {
        path: '/story',
        element: <Story />,
      },
      {
        path: '/story-write',
        element: <StoryWrite />,
      },
      {
        path: '/story-view',
        element: <StoryView />,
      },
    ],
  },
]);
