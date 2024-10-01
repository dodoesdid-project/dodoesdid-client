import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';

const MypageChangePasswordPrevContainer = () => {
  return (
    <div className="px-[16px]">
      <p className="text-gray-100 text-[20px] font-semibold my-[10px] dark:text-gray-30">
        현재 비밀번호를 입력해주세요
      </p>
      <Input placeholder="8자리 이상, 영문 대소문자/숫자/특수문자 사용 가능" />
      <Button
        buttonType="fill-semibold"
        name="다음"
        style={{ marginTop: '160px' }}
      />
    </div>
  );
};

export default MypageChangePasswordPrevContainer;
