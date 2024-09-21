import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import React from 'react';

const PasswordStep = () => {
  return (
    <div className="mt-[44px] px-[16px]">
      <TopBar title="회원가입" backLink="#" />
      <div className="flex flex-col gap-[24px] mb-[30px]">
        <Input
          label="비밀번호를 작성해주세요"
          placeholder="8자리 이상, 영문 대소문자/숫자/특수문자 사용 가능"
        />
        <Input
          label="비밀번호를 한 번 더 입력해주세요"
          placeholder="비밀번호를 한 번 더 입력해주세요"
        />
      </div>
      <Button buttonType="disabled-semibold" name="다음" />
    </div>
  );
};

export default PasswordStep;
