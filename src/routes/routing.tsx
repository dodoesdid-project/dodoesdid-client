import DodoesdidPage from '@pages/DodoesdidPage';
import FeedDetailPage from '@pages/FeedDetailPage';
import FeedPage from '@pages/FeedPage';
import Mypage from '@pages/Mypage';
import Homepage from '@pages/home';
import JoinGroupPage from '@pages/home/join-group';
import ProfileGroupPage from '@pages/home/profile-group';
import ProfileGroupSuccessPage from '@pages/home/profile-group-success';
import ProfilePersonalPage from '@pages/home/profile-personal';
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
      {
        element: <PrivateRoute />,
        children: [
          { path: '/home/profile-personal', element: <ProfilePersonalPage /> },
          { path: '/home/profile-group', element: <ProfileGroupPage /> },
          {
            path: '/home/profile-group/success',
            element: <ProfileGroupSuccessPage />,
          },
          { path: '/home/join-group', element: <JoinGroupPage /> },
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
      { path: '/feed/:id', element: <FeedDetailPage /> },
    ],
  },
]);

export default router;
