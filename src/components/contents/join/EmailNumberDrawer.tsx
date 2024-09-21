import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React, { useEffect, useRef } from 'react';

type EmailNumberProps = {
  isOpen: unknown;
  onClose: () => void;
};

const EmailNumber = ({ isOpen, onClose }: EmailNumberProps) => {
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
          인증번호 입력
        </p>
        <input
          type="number"
          ref={inputRef}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value.length >= 6) {
              e.target.value = e.target.value.slice(0, 6);
            }
          }}
          className="p-[10px] mb-[25px] focus:outline-none text-center text-[32px] text-gray-100 font-bold dark:bg-[#2a2a2a] dark:focus:ring-white"
        />
        <Button buttonType={`disabled-semibold`} name="확인" />
      </div>
    </Drawer>
  );
};

export default EmailNumber;
