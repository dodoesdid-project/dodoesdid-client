import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import Button from '@components/common/Button';

import { ReactComponent as CloseDarkButton } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseButton } from '@assets/images/common/close.svg';

import { Drawer } from 'antd';
import React from 'react';

type LoginSearchPwSuccessDrawerProps = { onClose: () => void };

const LoginSearchPwSuccessDrawer = ({
  onClose,
}: LoginSearchPwSuccessDrawerProps) => {
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
          비밀번호 재설정이 완료되었습니다.
          <br />
          두더지로 돌아가서 재로그인 해주세요.
        </p>
        <Button buttonType="fill-semibold" name="두더지로 이동" />
      </div>
    </Drawer>
  );
};

export default LoginSearchPwSuccessDrawer;
