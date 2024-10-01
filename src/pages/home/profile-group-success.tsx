import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';

import React from 'react';
import { Link } from 'react-router-dom';

const ProfileGroupSuccessPage = () => {
  return (
    <div>
      <TopBar title="" backLink="/home/profile-group" />
      <p className="mt-[104px] mb-[44px] text-gray-100 font-semibold text-center dark:text-gray-30 ">
        그룹이 생성되었어요
        <br />
        친구들에게 그룹을 공유하고 초대해보세요
      </p>
      <div className="w-[146px] h-[146px] rounded-full overflow-hidden mx-auto flex mb-[16px]">
        <img src="http://via.placeholder.com/800x480" alt="그룹프로필이미지" />
      </div>
      <p className="text-primary text-[32px] font-bold text-center">그룹명</p>
      <Link
        to={'#'}
        className="block text-primary underline text-[14px] absolute bottom-[120px] left-[50%] translate-x-[-50%]"
      >
        두더지 시작하기
      </Link>
      <Button
        disabled
        buttonType="disabled-semibold"
        name="그룹 공유하기"
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

export default ProfileGroupSuccessPage;
