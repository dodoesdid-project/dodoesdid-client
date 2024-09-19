import useDarkMode from '@lib/hooks/useDarkMode';

import { ReactComponent as DarkModeIconActive } from '@assets/images/common/moon-white.svg';
import { ReactComponent as DarkModeIcon } from '@assets/images/common/moon.svg';
import { ReactComponent as LightModeIconActive } from '@assets/images/common/sun-white.svg';
import { ReactComponent as LightModeIcon } from '@assets/images/common/sun.svg';

import React from 'react';

const ThemeButton = () => {
  const [dark, toggleDarkMode] = useDarkMode();
  return (
    <>
      <div className="flex gap-[3px] px-[6px] py-[4px] bg-gray-40 w-min rounded-[60px] dark:bg-gray-100">
        <button
          onClick={toggleDarkMode}
          className="p-[6px] rounded-full bg-primary dark:bg-gray-100"
        >
          {dark ? (
            <LightModeIcon />
          ) : (
            <LightModeIconActive width={18} height={18} />
          )}
        </button>
        <button
          onClick={toggleDarkMode}
          className="p-[6px] rounded-full dark:bg-primary"
        >
          {dark ? <DarkModeIconActive /> : <DarkModeIcon />}
        </button>
      </div>
    </>
  );
};

export default ThemeButton;
