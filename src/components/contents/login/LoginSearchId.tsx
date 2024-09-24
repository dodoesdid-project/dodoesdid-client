import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';

const LoginSearchId = () => {
  return (
    <div className="px-[16px]">
      <p className="mt-[10px] mb-[18px] text-gray-100 text-[20px] font-semibold dark:text-white">
        가입시 사용한 휴대폰 번호를 입력해주세요.
      </p>
      <Input placeholder="‘-’없이 숫자만 입력해주세요" />
      <Button
        buttonType="disabled-semibold"
        name="확인"
        style={{ position: 'fixed', bottom: '50px' }}
      />
    </div>
  );
};

export default LoginSearchId;
