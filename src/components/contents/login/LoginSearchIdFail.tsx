import Button from '@components/common/Button';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSearchIdFail = () => {
  const navigate = useNavigate();

  return (
    <div className="px-[16px]">
      <p className="text-gray-100 text-[20px] font-semibold dark:text-white">
        해당하는 사용자를 찾을 수 없습니다.
      </p>
      <div className="flex w-[calc(100%-32px)] gap-[11px] absolute bottom-[50px] left-[50%] translate-x-[-50%]">
        <Button
          buttonType="fill-semibold"
          name="로그인"
          onClick={() => navigate('/login-email')}
        />
        <Button
          buttonType="tinted-semibold"
          name="회원가입"
          onClick={() => navigate('/join')}
        />
      </div>
    </div>
  );
};

export default LoginSearchIdFail;
