import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const JoinGroupPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="" onClickBack={() => navigate(-1)} />
      <p className="mt-[123px] text-gray-100 font-semibold test-[16px] mb-[30px] text-center dark:text-gray-30 ">
        초대 받은 링크 URL을 입력해주세요.
      </p>
      <div className="px-[16px]">
        <textarea className="w-full h-auto overflow-hidden mb-[50px] focus:outline-none text-center text-[32px] text-gray-70 font-bold bg-[transparent] dark:text-gray-60 dark:focus:ring-white" />
        <Button buttonType="fill-semibold" name="그룹 입장하기" />
      </div>
    </div>
  );
};

export default JoinGroupPage;
