import DodoesdidPage from '@pages/DodoesdidPage';
import FeedPage from '@pages/FeedPage';
import Homepage from '@pages/Homepage';
import Mypage from '@pages/Mypage';
import JoinPage from '@pages/join';
import LoginPage from '@pages/login';
import LoginEmailPage from '@pages/login/email';
import LoginSearchIdPage from '@pages/login/search-id';
import LoginSearchPwPage from '@pages/login/search-pw';

import DefaultLayout from '@components/common/base/DefaultLayout';
import NoNavLayout from '@components/common/base/NoNavLayout';

import PrivateRoute from './PrivateRoute';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        element: <PrivateRoute />,
        children: [
          { path: '/', element: <Homepage /> },
          { path: '/feed', element: <FeedPage /> },
          { path: '/dodoesdid', element: <DodoesdidPage /> },
          { path: '/mypage', element: <Mypage /> },
        ],
      },
    ],
  },
  {
    element: <NoNavLayout />,
    children: [
      { path: '/join', element: <JoinPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/login-email', element: <LoginEmailPage /> },
      { path: '/login-email/search/id', element: <LoginSearchIdPage /> },
      { path: '/login-email/search/pw', element: <LoginSearchPwPage /> },
    ],
  },
]);

export default router;
