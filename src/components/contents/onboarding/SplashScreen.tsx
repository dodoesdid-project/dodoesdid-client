import { ReactComponent as Logo } from '@assets/images/common/logo.svg';
import DodosedidImage from '@assets/images/login/dodoesdid-login.png';

import React from 'react';

const SplashScreen = () => {
  return (
    <div className="bg-primary h-lvh relative z-50">
      <div className="absolute top-[50%] translate-y-[-50%]">
        <div className="flex flex-col items-center gap-[12px]">
          <p className="text-white font-semibold text-[17px]">
            친구들과 함께 하는 1일 1다짐
          </p>
          <Logo />
          <img src={DodosedidImage} alt="두더지이미지" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
