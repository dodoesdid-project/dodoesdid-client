import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React from 'react';

type HomeDazimUploadDrawerProps = { onClose: () => void };

const HomeDazimUploadDrawer = ({ onClose }: HomeDazimUploadDrawerProps) => {
  const isDarkMode = useDarkMode();

  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open
      className="dark:bg-[#2a2a2a]"
      zIndex={1500}
    >
      <div className="flex flex-col">
        {isDarkMode ? (
          <CloseDarkButton
            onClick={onClose}
            className="cursor-pointer mb-[24px] self-end"
          />
        ) : (
          <CloseButton
            onClick={onClose}
            className="cursor-pointer mb-[24px] self-end"
          />
        )}
        <p className="mb-[24px] text-center text-gray-100 font-semibold text-[16px] dark:text-gray-30 ">
          사진을 업로드하여
          <br />
          다짐 인증을 완료하세요.
        </p>
        <Button disabled buttonType={`fill-semibold`} name="업로드" />
      </div>
    </Drawer>
  );
};

export default HomeDazimUploadDrawer;
