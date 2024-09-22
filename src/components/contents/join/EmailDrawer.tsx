import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React from 'react';

type EmailDrawerProps = {
  onClose: () => void;
  onClick: () => void;
};

const EmailDrawer = ({ onClose, onClick }: EmailDrawerProps) => {
  const isDarkMode = useIsDarkMode();
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
        <p className="mb-[54px] text-center text-gray-100 font-semibold text-[16px] dark:text-gray-30 ">
          이메일이 발송되었습니다.
          <br />
          메일에서 인증번호 6자리를 확인하고 입력해주세요.
        </p>
        <Button buttonType="fill-semibold" name="확인" onClick={onClick} />
      </div>
    </Drawer>
  );
};

export default EmailDrawer;
