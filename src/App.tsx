import DodoesdidPage from '@pages/DodoesdidPage';
import FeedPage from '@pages/FeedPage';
import Homepage from '@pages/Homepage';
import Mypage from '@pages/Mypage';

import DefaultLayout from '@components/common/DefaultLayout';

import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Homepage />,
        },
        {
          path: '/feed',
          element: <FeedPage />,
        },
        {
          path: '/dodoesdid',
          element: <DodoesdidPage />,
        },
        {
          path: 'mypage',
          element: <Mypage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
