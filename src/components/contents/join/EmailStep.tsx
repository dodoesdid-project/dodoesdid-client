import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import React from 'react';

const EmailStep = () => {
  return (
    <div className="mt-[44px]">
      <TopBar title="회원가입" />
      <div className="px-[16px] flex gap-[8px] items-end">
        <Input label="이메일을 알려주세요" placeholder="dodosedid@dazim.com" />
        <button className="h-[52px] bg-gray-30 text-[16px] font-semibold rounded-[8px] px-[16px] py-[12px] text-gray-60 active:bg-primary active:text-white">
          인증완료
        </button>
      </div>
    </div>
  );
};

export default EmailStep;
