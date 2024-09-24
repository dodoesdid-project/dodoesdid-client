import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';

const LoginSearchPwSetting = () => {
  return (
    <div className="px-[16px]">
      <Input label="새 비밀번호" />
      <Input label="새 비밀번호 확인" />
      <Button
        buttonType="fill-semibold"
        name="확인"
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  );
};

export default LoginSearchPwSetting;
