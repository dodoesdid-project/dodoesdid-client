import DodoesdidPage from '@pages/DodoesdidPage';
import FeedPage from '@pages/FeedPage';
import Homepage from '@pages/Homepage';
import Mypage from '@pages/Mypage';

import DefaultLayout from '@components/common/base/DefaultLayout';

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

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
        path: '/mypage',
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
