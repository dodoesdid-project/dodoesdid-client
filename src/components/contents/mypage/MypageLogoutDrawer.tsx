import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React from 'react';

type Props = { onClose: () => void; onClick: () => void };

const MypageLogoutDrawer = ({ onClose, onClick }: Props) => {
  const isDarkMode = useDarkMode();

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
        <p className="text-gray-100 font-semibold text-[16px] dark:text-gray-30 mb-[54px] text-center">
          정말 로그아웃하시겠어요?
        </p>
        <Button buttonType="fill-semibold" name="로그아웃" onClick={onClick} />
      </div>
    </Drawer>
  );
};

export default MypageLogoutDrawer;
