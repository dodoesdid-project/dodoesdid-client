import { useEffect, useState } from 'react';

const useIsDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const targetNode = document.documentElement;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const currentClassList = targetNode.classList;
          setIsDarkMode(currentClassList.contains('dark'));
        }
      });
    });

    setIsDarkMode(targetNode.classList.contains('dark'));
    observer.observe(targetNode, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  return isDarkMode;
};

export default useIsDarkMode;
