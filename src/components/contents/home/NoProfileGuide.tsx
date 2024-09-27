import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import Button from '@components/common/Button';

import DodosedidImageDark from '@assets/images/home/dodoesdid-disabled-dark.png';
import DodosedidImage from '@assets/images/home/dodoesdid-disabled.png';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoProfileGuide = () => {
  const navigate = useNavigate();
  const isDarkMode = useIsDarkMode();

  return (
    <div className="mt-[177px] flex flex-col items-center">
      <p className="text-gray-100 text-[16px] mb-[22px] dark:text-gray-30">
        프로필이 아직 없으시네요, 프로필을 만들어주세요!
      </p>
      <Button
        buttonType="fill-semibold"
        name="프로필 만들기"
        style={{ marginBottom: '100px' }}
        onClick={() => navigate('/home/profile-personal')}
      />
      <img
        src={isDarkMode ? DodosedidImageDark : DodosedidImage}
        alt="두더지"
      />
    </div>
  );
};

export default NoProfileGuide;
