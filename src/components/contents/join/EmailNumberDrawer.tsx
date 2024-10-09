/* eslint-disable @typescript-eslint/no-explicit-any */
import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React, { useEffect, useRef } from 'react';

type EmailNumberProps = {
  authNumber: any;
  isOpen: unknown;
  onClose: () => void;
  onChange: (e: any) => void;
  onClick: () => void;
};

const EmailNumber = ({
  authNumber,
  isOpen,
  onClose,
  onChange,
  onClick,
}: EmailNumberProps) => {
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
          onChange={onChange}
          className="h-[52px] px-[16px] mb-[25px] text-[16px] focus:outline-none text-center text-gray-100 bg-gray-30 rounded-[8px] dark:bg-[#2a2a2a] dark:focus:ring-white dark:text-gray-30"
        />
        <Button
          disabled={authNumber?.length !== 6}
          buttonType={
            authNumber?.length === 6 ? `fill-semibold` : `disabled-semibold`
          }
          name="확인"
          onClick={onClick}
        />
      </div>
    </Drawer>
  );
};

export default EmailNumber;
