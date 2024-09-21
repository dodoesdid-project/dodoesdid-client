import DodoesdidPage from '@pages/DodoesdidPage';
import FeedPage from '@pages/FeedPage';
import Homepage from '@pages/Homepage';
import JoinPage from '@pages/JoinPage';
import Mypage from '@pages/Mypage';

import DefaultLayout from '@components/common/base/DefaultLayout';
import NoNavLayout from '@components/common/base/NoNavLayout';

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
  {
    element: <NoNavLayout />,
    children: [{ path: '/join', element: <JoinPage /> }],
  },
]);

export default router;
