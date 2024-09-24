import Button from '@components/common/Button';

import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  email: string;
};

const LoginSearchIdSuccess = ({ email }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="px-[16px] flex flex-col">
      <div className="text-[20px] font-semibold">
        <p className="text-gray-100 dark:text-white">{email}</p>
        <p className="text-gray-70 dark:text-gray-60">입니다.</p>
      </div>
      <div className="flex w-[calc(100%-32px)] gap-[11px] absolute bottom-[50px] left-[50%] translate-x-[-50%]">
        <Button
          buttonType="fill-semibold"
          name="로그인"
          onClick={() => navigate('/login-email')}
        />
        <Button
          buttonType="tinted-semibold"
          name="비밀번호 재설정"
          onClick={() => navigate('/login-email/search/pw')}
        />
      </div>
    </div>
  );
};

export default LoginSearchIdSuccess;
