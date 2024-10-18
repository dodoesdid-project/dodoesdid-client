import { ReactComponent as Logo } from '@assets/images/common/logo.svg';
import { ReactComponent as DodosedidImage } from '@assets/images/login/dodoesdid-login.svg';

import React from 'react';

const SplashScreen = () => {
  return (
    <div className="bg-primary w-full h-lvh relative z-50">
      <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
        <div className="flex flex-col items-center">
          <p className="text-white font-semibold text-[14px] mb-[12px]">
            친구들과 함께 하는 1일 1다짐
          </p>
          <Logo className="mb-[16px]" />
          <DodosedidImage />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
