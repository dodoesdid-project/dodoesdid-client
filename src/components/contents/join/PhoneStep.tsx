import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import React from 'react';

const PhoneStep = () => {
  return (
    <div className="mt-[44px]">
      <TopBar title="회원가입" />
      <div className="px-[16px] flex flex-col gap-[156px]">
        <Input
          label="휴대폰 번호를 입력해주세요"
          placeholder="‘-’없이 숫자만 입력해주세요  "
        />
        <Button buttonType="disabled-semibold" name="다음" />
      </div>
    </div>
  );
};

export default PhoneStep;
