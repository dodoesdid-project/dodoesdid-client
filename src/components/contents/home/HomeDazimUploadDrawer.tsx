import useDarkMode from '@lib/hooks/useDarkMode';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React from 'react';

type HomeDazimUploadDrawerProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClose: () => void;
};

const HomeDazimUploadDrawer = ({
  onChange,
  onClose,
}: HomeDazimUploadDrawerProps) => {
  const isDarkMode = useDarkMode();

  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open
      className="dark:bg-[#1a1a1a]"
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
        <label
          htmlFor="dazimPhoto"
          className="w-full h-[54px] rounded-[8px] bg-primary text-white text-[16px] font-semibold flex justify-center items-center cursor-pointer"
        >
          업로드
        </label>
        <input type="file" id="dazimPhoto" hidden onChange={onChange} />
      </div>
    </Drawer>
  );
};

export default HomeDazimUploadDrawer;
