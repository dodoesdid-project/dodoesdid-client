import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';

const LoginSearchPw = () => {
  return (
    <div className="px-[16px]">
      <div className="flex flex-col gap-[18px]">
        <p className="text-[20px] font-semibold text-gray-100 dark:text-white">
          가입 시 사용한 이메일을 입력해주세요.
          <br />
          비밀번호 재설정 메일을 보내드릴게요.
        </p>
        <Input placeholder="이메일을 입력하세요" />
      </div>
      <Button buttonType="disabled-semibold" name="확인" />
    </div>
  );
};

export default LoginSearchPw;
