import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React from 'react';

type Props = { onClose: () => void; onClick: () => void };

const MyPageSignOutDrawer = ({ onClose, onClick }: Props) => {
  const isDarkMode = useDarkMode();

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
        <p className="text-gray-100 font-semibold text-[16px] mb-[16px] text-center dark:text-gray-30">
          정말 탈퇴하시겠어요?
        </p>
        <p className="text-gray-90 text-[14px] mb-[20px] px-[10px] text-center dark:text-gray-40">
          탈퇴하실 경우 두더지에서 작성한 모든 글과 활동 내역이 삭제돼요. 삭제된
          정보는 다시 복구할 수 없으므로 신중하게 결정해주세요.
        </p>
        <Button
          buttonType="tinted-semibold"
          name="아니요"
          style={{ marginBottom: '10px' }}
          onClick={onClose}
        />
        <Button
          buttonType="fill-semibold"
          name="예, 탈퇴하겠습니다"
          onClick={onClick}
        />
      </div>
    </Drawer>
  );
};

export default MyPageSignOutDrawer;
