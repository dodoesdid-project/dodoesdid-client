import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import React from 'react';

const NameStep = () => {
  return (
    <div className="mt-[44px]">
      <TopBar title="회원가입" />
      <div className="px-[16px] flex flex-col gap-[156px]">
        <Input label="이름을 입력해주세요" placeholder="ex)김다짐" />
        <Button buttonType="disabled-semibold" name="다음" />
      </div>
    </div>
  );
};

export default NameStep;
