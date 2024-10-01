import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';

const MypageChangePasswordNextContainer = () => {
  return (
    <div className="px-[16px] mt-[10px]">
      <div className="flex flex-col gap-[18px] mb-[42px]">
        <p className="text-gray-100 text-[20px] font-semibold dark:text-gray-30">
          새로운 비밀번호를 입력해주세요
        </p>
        <Input placeholder="8자리 이상, 영문 대소문자/숫자/특수문자 사용 가능" />
      </div>
      <div className="flex flex-col gap-[18px] mb-[42px]">
        <p className="text-gray-100 text-[20px] font-semibold dark:text-gray-30">
          비밀번호를 한 번 더 입력해주세요
        </p>
        <Input placeholder="비밀번호를 한 번 더 입력해주세요" />
      </div>
      <Button buttonType="fill-semibold" name="다음" />
    </div>
  );
};

export default MypageChangePasswordNextContainer;
