import { useEffect, useState } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  // localStorage의 테마를 체크해서, dark이면 dark모드
  const localStorageChecker = (): boolean => {
    if (!localStorage.theme) return false;
    return localStorage.theme === 'dark' ? true : false;
  };

  const [dark, setDark] = useState(localStorageChecker());
  // 수동으로 다크모드 on off 버튼
  const darkButton = () => {
    setDark((state) => {
      const update = !state;
      if (update) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
      return update;
    });
  };

  // localStorage의 테마가 dark이거나 || localStorage의 테마가 존재하지않으면서 window.matchMedia로 사용자의os에설정된 사용자가 선호하는 다크모드설정에 접근할수있다면 다크모드로실행해라
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return [dark, darkButton];
};

export default useDarkMode;
