import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';

import DodosedidImageDark from '@assets/images/home/dodoesdid-disabled-dark.png';
import DodosedidImage from '@assets/images/home/dodoesdid-disabled.png';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const DodoesdidNotFound = () => {
  const navigate = useNavigate();
  const isDarkMode = useIsDarkMode();
  return (
    <>
      <>
        <TopBar title="두더지" />
        <div className="mt-[166px] flex flex-col items-center">
          <p className="text-gray-100 text-[16px] mb-[22px] dark:text-gray-30">
            두더지가 아직 없으시네요, 다짐을 등록해주세요!
          </p>
          <Button
            buttonType="fill-semibold"
            name="다짐 등록하기"
            style={{ marginBottom: '102px' }}
            onClick={() => navigate('/')}
          />
          <img
            src={isDarkMode ? DodosedidImageDark : DodosedidImage}
            alt="두더지"
          />
        </div>
      </>
    </>
  );
};
export default DodoesdidNotFound;
