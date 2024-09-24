import Button from '@components/common/Button';
import CheckBox from '@components/common/CheckBox';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import { ReactComponent as Logo } from '@assets/images/common/logo-mix.svg';

import React from 'react';
import { Link } from 'react-router-dom';

const LoginEmail = () => {
  return (
    <div className="pt-[44px] flex flex-col h-lvh justify-between">
      <div>
        <TopBar title="로그인" backLink="/login" />
        <div className="px-[16px]">
          <Logo />
          <p className="py-[22px] text-[20px] font-semibold text-gray-100 dark:text-white">
            시작해볼까요?
          </p>
          <p className="text-gray-90 text-[16px] mb-[36px] dark:text-white">
            회원 서비스 이용을 위해 로그인 해주세요.
          </p>
          <div className="flex flex-col gap-[16px] mb-[24px]">
            <Input placeholder="이메일을 입력하세요" />
            <Input placeholder="비밀번호를 입력하세요" />
            <CheckBox label="자동로그인" />
          </div>
          <div className="flex gap-[8px] justify-center text-gray-90 text-[14px] dark:text-white">
            <Link to={'/login-email/search/id'}>아이디 찾기</Link> |{' '}
            <Link to={'/login-email/search/pw'}>비밀번호 찾기</Link>
          </div>
        </div>
      </div>
      <Button
        buttonType="disabled-semibold"
        name="로그인"
        style={{ alignSelf: 'center', marginBottom: '50px' }}
      />
    </div>
  );
};

export default LoginEmail;
