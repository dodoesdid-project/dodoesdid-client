import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer, RadioChangeEvent } from 'antd';
import React, { useEffect, useRef } from 'react';

type HomeDazimTitleDrawerProps = {
  value: string;
  isOpen: unknown;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | RadioChangeEvent,
  ) => void;
  onClick: () => void;
  onClose: () => void;
};

const HomeDazimTitleDrawer = ({
  value,
  isOpen,
  onChange,
  onClick,
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
        <p className="mb-[26px] text-center text-gray-100 font-semibold text-[16px] dark:text-gray-30 ">
          오늘의 다짐을 입력하세요.
        </p>
        <input
          type="text"
          value={value}
          ref={inputRef}
          className="h-[52px] px-[16px] mb-[25px] text-[16px] focus:outline-none text-center text-gray-100 bg-gray-30 rounded-[8px] dark:bg-[#2a2a2a] dark:focus:ring-white dark:text-gray-30"
          onChange={onChange}
        />
        <Button
          disabled={value === ''}
          buttonType={`fill-semibold`}
          name="완료"
          onClick={onClick}
        />
      </div>
    </Drawer>
  );
};

export default HomeDazimTitleDrawer;
