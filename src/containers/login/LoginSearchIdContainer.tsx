/* eslint-disable @typescript-eslint/no-unused-vars */
import TopBar from '@components/common/TopBar';
import LoginSearchId from '@components/contents/login/LoginSearchId';
import LoginSearchIdFail from '@components/contents/login/LoginSearchIdFail';
import LoginSearchIdSuccess from '@components/contents/login/LoginSearchIdSuccess';

import React from 'react';

const LoginSearchIdContainer = () => {
  return (
    <div className="pt-[44px] h-lvh justify-between">
      <TopBar title="아이디찾기" />
      {/* <LoginSearchId /> */}
      {/* <LoginSearchIdSuccess /> */}
      {/* <LoginSearchIdFail /> */}
    </div>
  );
};

export default LoginSearchIdContainer;
