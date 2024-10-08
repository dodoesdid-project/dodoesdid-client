import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React from 'react';

type LoginSearchPwDrawerProps = {
  email: string;
  onClose: () => void;
  onClick: () => void;
};

const LoginSearchPwDrawer = ({
  email,
  onClose,
  onClick,
}: LoginSearchPwDrawerProps) => {
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
        <p className="text-primary font-semibold text-[16px] text-center mb-[18px]">
          {email}
        </p>
        <p className="text-gray-100 font-semibold text-[16px] text-center mb-[56px] dark:text-gray-30">
          비밀번호 재설정 메일이 발송되었습니다.
          <br />위 메일에서 비밀번호 재설정을 완료해주세요.
        </p>
        <Button buttonType="fill-semibold" name="확인" onClick={onClick} />
      </div>
    </Drawer>
  );
};

export default LoginSearchPwDrawer;
