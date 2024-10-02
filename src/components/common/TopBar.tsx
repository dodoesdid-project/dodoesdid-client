import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import { ReactComponent as BackDarkIcon } from '@assets/images/common/arrow-left-white.svg';
import { ReactComponent as BackIcon } from '@assets/images/common/arrow-left.svg';
import { ReactComponent as CloseDarkIcon } from '@assets/images/common/close-white.svg';
import { ReactComponent as CloseIcon } from '@assets/images/common/close.svg';

import ThemeButton from './ThemeButton';
import React from 'react';
import { Link } from 'react-router-dom';

type TopBarProps = {
  backLink?: string;
  title?: string;
  close?: boolean;
  darkButton?: boolean;
  onClickBack?: () => void;
};

const TopBar = ({
  backLink,
  title,
  close,
  darkButton,
  onClickBack,
}: TopBarProps) => {
  const isDarkMode = useIsDarkMode();

  return (
    <div className="w-full h-[44px] flex items-center mb-[32px] relative">
      {backLink && (
        <Link to={backLink} className="m-[10px] cursor-pointer absolute">
          {isDarkMode ? <BackDarkIcon /> : <BackIcon />}
        </Link>
      )}
      {onClickBack &&
        (isDarkMode ? (
          <BackDarkIcon
            className="m-[10px] cursor-pointer"
            onClick={onClickBack}
          />
        ) : (
          <BackIcon className="m-[10px] cursor-pointer" onClick={onClickBack} />
        ))}
      <p className="flex-1 text-center text-gray-100 text-[17px] font-semibold dark:text-white">
        {title}
      </p>
      {close &&
        (isDarkMode ? (
          <CloseDarkIcon className="cursor-pointer absolute right-[10px]" />
        ) : (
          <CloseIcon className="cursor-pointer absolute right-[10px]" />
        ))}
      {darkButton && <ThemeButton className="absolute right-[10px]" />}
    </div>
  );
};

export default TopBar;
