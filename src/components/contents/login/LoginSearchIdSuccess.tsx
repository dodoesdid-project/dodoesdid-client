import Button from '@components/common/Button';

import React from 'react';

const LoginSearchIdSuccess = () => {
  return (
    <div className="px-[16px] flex flex-col">
      <div className="text-[20px] font-semibold">
        <p className="text-gray-100 dark:text-white">didoesdid@gmail.com</p>
        <p className="text-gray-70 dark:text-gray-60">입니다.</p>
      </div>
      <div className="flex w-[calc(100%-32px)] gap-[11px] absolute bottom-[50px] left-[50%] translate-x-[-50%]">
        <Button buttonType="fill-semibold" name="로그인" />
        <Button buttonType="tinted-semibold" name="비밀번호 재설정" />
      </div>
    </div>
  );
};

export default LoginSearchIdSuccess;
