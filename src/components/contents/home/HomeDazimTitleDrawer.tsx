import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React, { useEffect, useRef } from 'react';

type HomeDazimTitleDrawerProps = { isOpen: unknown; onClose: () => void };

const HomeDazimTitleDrawer = ({
  isOpen,
  onClose,
}: HomeDazimTitleDrawerProps) => {
  const isDarkMode = useDarkMode();

  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

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
        <p className="mb-[26px] text-center text-gray-100 font-semibold text-[16px] dark:text-gray-30 ">
          오늘의 다짐을 입력하세요.
        </p>
        <input
          type="text"
          ref={inputRef}
          className="p-[10px] mb-[25px] focus:outline-none text-center text-[32px] text-gray-100 font-bold dark:bg-[#2a2a2a] dark:focus:ring-white dark:text-gray-30"
        />
        <Button disabled buttonType={`fill-semibold`} name="완료" />
      </div>
    </Drawer>
  );
};

export default HomeDazimTitleDrawer;
