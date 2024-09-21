import Button from '@components/common/Button';

import { Drawer } from 'antd';
import React from 'react';

type SuccessDrawerProps = {
  onClose: () => void;
};

const SuccessDrawer = ({ onClose }: SuccessDrawerProps) => {
  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={onClose}
      open
      className="dark:bg-[#2a2a2a]"
    >
      <div className="flex flex-col mt-[50px]">
        <p className="mb-[54px] text-center text-gray-100 font-semibold text-[16px] dark:text-gray-30 ">
          회원가입이 완료되었습니다.
          <br />
          로그인을 완료해주세요.
        </p>
        <Button buttonType="fill-semibold" name="확인" />
      </div>
    </Drawer>
  );
};

export default SuccessDrawer;
