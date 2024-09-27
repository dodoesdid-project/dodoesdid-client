import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import { ReactComponent as CameraDarkIcon } from '@assets/images/home/camera-white.svg';
import { ReactComponent as CameraIcon } from '@assets/images/home/camera.svg';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePersonalPage = () => {
  const navigate = useNavigate();
  const isDarkMode = useDarkMode();

  return (
    <div className="px-[16px]">
      <TopBar title="나의 프로필 만들기" onClickBack={() => navigate(-1)} />
      <div className="bg-gray-30 w-[146px] h-[146px] rounded-full flex justify-center items-center cursor-pointer mb-[45px] mx-auto dark:bg-[#2a2a2a]">
        {isDarkMode ? <CameraDarkIcon /> : <CameraIcon />}
      </div>
      <Input placeholder="닉네임을 입력하세요" />
      <Button
        buttonType="disabled-semibold"
        name="다음"
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

export default ProfilePersonalPage;
