import { ReactComponent as Logo } from '@assets/images/common/logo.svg';
import { ReactComponent as DodosedidImage } from '@assets/images/login/dodoesdid-login.svg';
import { ReactComponent as GoogleIcon } from '@assets/images/login/google.svg';
import { ReactComponent as KakaoIcon } from '@assets/images/login/kakao.svg';

import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="bg-primary h-lvh flex flex-col justify-between">
      <div className="pt-[182px] flex flex-col items-center">
        <p className="text-white font-semibold text-[14px] mb-[12px]">
          친구들과 함께 하는 1일 1다짐
        </p>
        <Logo className="mb-[16px]" />
        <DodosedidImage />
      </div>
      <div className="pb-[50px] flex flex-col items-center px-[16px]">
        <a
          href={`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/kakao-sign-in`}
          className="w-full h-[52px] rounded-[8px] bg-[#fee500] text-black text-[16px] font-semibold flex items-center justify-center gap-[8px] mb-[12px]"
        >
          <KakaoIcon />
          <p>카카오로 시작하기</p>
        </a>
        <a
          href={`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/google-sign-in`}
          className="w-full h-[52px] rounded-[8px] bg-white text-black text-[16px] font-semibold flex items-center justify-center gap-[8px] mb-[36px]"
        >
          <GoogleIcon />
          <p>Google로 시작하기</p>
        </a>
        <p className="text-white text-[16px] ">
          <Link to={'/login-email'}>이메일로 로그인</Link> /{' '}
          <Link to={'/join'}>회원가입</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
