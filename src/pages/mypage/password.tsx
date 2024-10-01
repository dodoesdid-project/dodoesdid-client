/* eslint-disable @typescript-eslint/no-unused-vars */
import TopBar from '@components/common/TopBar';

import MypageChangePasswordNextContainer from '@/containers/mypage/MypageChangePasswordNextContainer';
import MypageChangePasswordPrevContainer from '@/containers/mypage/MypageChangePasswordPrevContainer';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="비밀번호 변경" onClickBack={() => navigate(-1)} />
      {/* <MypageChangePasswordPrevContainer /> */}
      {/* <MypageChangePasswordNextContainer /> */}
    </div>
  );
};

export default ChangePasswordPage;
