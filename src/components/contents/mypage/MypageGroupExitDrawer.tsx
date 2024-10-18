import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React, { useEffect, useRef } from 'react';

type Props = {
  groupName: string;
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
};

const MypageGroupExitDrawer = ({
  groupName,
  isOpen,
  onClose,
  onClick,
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
        <p className="text-primary font-semibold text-[16px] mb-[19px] text-center">
          {groupName}
        </p>
        <p className="text-gray-100 font-semibold text-[16px] mb-[42px] text-center dark:text-gray-30">
          그룹을 나가시겠어요?
          <br />
          그룹에서 달성한 다짐 기록은 모두 삭제됩니다.
        </p>
        <div className="flex gap-[11px]">
          <Button buttonType="fill-semibold" name="취소" onClick={onClose} />
          <Button
            buttonType="tinted-semibold"
            name="나가기"
            onClick={onClick}
          />
        </div>
      </div>
    </Drawer>
  );
};

export default MypageGroupExitDrawer;
