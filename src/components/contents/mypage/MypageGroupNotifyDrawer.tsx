import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React, { useEffect, useRef } from 'react';

type Props = {
  value: string;
  isOpen: boolean;
  onClick: () => void;
  onClose: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MypageGroupNotifyDrawer = ({
  value,
  isOpen,
  onClick,
  onClose,
  onChange,
}: Props) => {
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
        <p className="text-gray-100 font-semibold text-[16px] text-center mb-[16px] dark:text-gray-30">
          그룹원의 홈에 표시될 공지사항을 적어보세요.
        </p>
        <input
          type="text"
          value={value}
          ref={inputRef}
          onChange={onChange}
          className="h-[52px] px-[16px] mb-[25px] text-[16px] font-semibold focus:outline-none text-center text-gray-100 bg-gray-30 rounded-[8px] dark:bg-[#2a2a2a] dark:focus:ring-white dark:text-gray-30"
        />
        <Button buttonType="fill-semibold" name="확인" onClick={onClick} />
      </div>
    </Drawer>
  );
};

export default MypageGroupNotifyDrawer;
