import Button from '@components/common/Button';
import CheckBox from '@components/common/CheckBox';
import TopBar from '@components/common/TopBar';

import React from 'react';

const AgreeStep = () => {
  return (
    <div className="mt-[44px]">
      <TopBar title="회원가입" />
      <div className="px-[16px]">
        <p className="text-gray-100 text-[20px] font-semibold py-[10px] dark:text-gray-30">
          서비스 이용약관
        </p>
        <div className="bg-gray-30 rounded-[8px] p-[16px] mb-[20px] dark:bg-gray-100 dark:text-white">
          <CheckBox label="전체 동의" />
        </div>
        <div className="flex flex-col px-[16px] gap-[16px] mb-[30px]">
          <div className="rounded-[8px] mb-[8px]">
            <CheckBox label="만 14세 이상이에요 (필수)" />
          </div>
          <div className="rounded-[8px] flex justify-between items-center">
            <CheckBox label="서비스 이용약관에 동의 (필수)" />
            <Button
              buttonType="outline-round"
              name="보기"
              style={{ width: '28px', padding: '8px 6px', fontSize: '12px' }}
            />
          </div>
          <div className="rounded-[8px] flex justify-between items-center">
            <CheckBox label="개인정보 수집 및 이용에 동의 (필수)" />
            <Button
              buttonType="outline-round"
              name="보기"
              style={{ width: '28px', padding: '8px 6px', fontSize: '12px' }}
            />
          </div>
        </div>
        <Button buttonType="disabled-semibold" name="완료" />
      </div>
    </div>
  );
};

export default AgreeStep;
