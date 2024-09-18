import { ReactComponent as BackIcon } from '@assets/images/common/arrow-left.svg';
import { ReactComponent as CloseIcon } from '@assets/images/common/close.svg';

import React from 'react';

type TopBarProps = { title: string; close?: boolean };

const TopBar: React.FC<TopBarProps> = ({ title, close }) => {
  return (
    <div className="w-full h-[44px] flex items-center mb-[32px]">
      <BackIcon className="m-[10px] cursor-pointer" />
      <p className="flex-1 text-center text-gray-100 text-[17px] font-semibold">
        {title}
      </p>
      {close ? (
        <CloseIcon className="m-[10px] cursor-pointer" />
      ) : (
        <div className="w-[38px]"></div>
      )}
    </div>
  );
};

export default TopBar;
