import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import { ReactComponent as BackDarkIcon } from '@assets/images/common/arrow-left-white.svg';
import { ReactComponent as BackIcon } from '@assets/images/common/arrow-left.svg';
import { ReactComponent as CloseDarkIcon } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseIcon } from '@assets/images/common/close.svg';

import React from 'react';
import { Link } from 'react-router-dom';

type TopBarProps = {
  backLink?: string;
  title: string;
  close?: boolean;
  onClickBack?: () => void;
};

const TopBar = ({ backLink, title, close, onClickBack }: TopBarProps) => {
  const isDarkMode = useIsDarkMode();

  return (
    <div className="w-full h-[44px] flex items-center mb-[32px]">
      {backLink ? (
        <Link to={backLink}>
          {isDarkMode ? (
            <BackDarkIcon className="m-[10px] cursor-pointer" />
          ) : (
            <BackIcon className="m-[10px] cursor-pointer" />
          )}
        </Link>
      ) : onClickBack ? (
        isDarkMode ? (
          <BackDarkIcon
            className="m-[10px] cursor-pointer"
            onClick={onClickBack}
          />
        ) : (
          <BackIcon className="m-[10px] cursor-pointer" onClick={onClickBack} />
        )
      ) : (
        <div className="w-[38px]"></div>
      )}
      <p className="flex-1 text-center text-gray-100 text-[17px] font-semibold dark:text-white">
        {title}
      </p>
      {close ? (
        isDarkMode ? (
          <CloseDarkIcon className="m-[10px] cursor-pointer" />
        ) : (
          <CloseIcon className="m-[10px] cursor-pointer" />
        )
      ) : (
        <div className="w-[38px]"></div>
      )}
    </div>
  );
};

export default TopBar;
