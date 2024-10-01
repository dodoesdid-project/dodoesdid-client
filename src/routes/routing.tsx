import DodoesdidPage from '@pages/DodoesdidPage';
import FeedPage from '@pages/FeedPage';
import Homepage from '@pages/Homepage';
import JoinPage from '@pages/join';
import LoginPage from '@pages/login';
import LoginEmailPage from '@pages/login/email';
import LoginSearchIdPage from '@pages/login/search-id';
import LoginSearchPwPage from '@pages/login/search-pw';
import Mypage from '@pages/mypage';
import AccountManagePage from '@pages/mypage/account';
import MyGroupPage from '@pages/mypage/group';
import MyGroupInfoPage from '@pages/mypage/group-info';
import ChangeGroupNicknamePage from '@pages/mypage/group-nickname';
import ChangeNicknamePage from '@pages/mypage/nickname';
import ChangePasswordPage from '@pages/mypage/password';
import ChangePhonePage from '@pages/mypage/phone';
import ChangeProfilePage from '@pages/mypage/profile';
import SignOutPage from '@pages/mypage/signout';
import SignOutAgreePage from '@pages/mypage/signout-agree';

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
          { path: '/mypage/profile', element: <ChangeProfilePage /> },
          { path: '/mypage/profile/nickname', element: <ChangeNicknamePage /> },
          { path: '/mypage/account', element: <AccountManagePage /> },
          { path: '/mypage/account/password', element: <ChangePasswordPage /> },
          { path: '/mypage/account/phone', element: <ChangePhonePage /> },
          { path: '/mypage/group', element: <MyGroupPage /> },
          { path: '/mypage/group/info', element: <MyGroupInfoPage /> },
          {
            path: '/mypage/group/info/nickname',
            element: <ChangeGroupNicknamePage />,
          },
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
      { path: '/mypage/account/signout', element: <SignOutPage /> },
      { path: '/mypage/account/signout-agree', element: <SignOutAgreePage /> },
    ],
  },
]);

export default router;
