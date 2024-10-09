import Button from '@components/common/Button';

import { Drawer } from 'antd';
import React from 'react';

type Props = {
  onClose: () => void;
};

const EmailDuplicateDrawer = ({ onClose }: Props) => {
  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open
      className="dark:bg-[#1a1a1a]"
    >
      <div className="flex flex-col mt-[50px]">
        <p className="mb-[54px] text-center text-gray-100 font-semibold text-[16px] dark:text-gray-30 ">
          이미 가입된 이메일입니다.
          <br />
          기존 이메일로 로그인해주세요.
        </p>
        <Button buttonType="fill-semibold" name="확인" onClick={onClose} />
      </div>
    </Drawer>
  );
};

export default EmailDuplicateDrawer;
