import useToggle from '@lib/hooks/useToggle';

import HomeDazim from '@components/contents/home/HomeDazim';
import HomeToastPopup from '@components/contents/home/HomeToastPopup';

import React from 'react';

const HomeDazimContainer = () => {
  const [isOpenToastPopup, toggleToastPopup] = useToggle();

  return (
    <>
      <div className="grid grid-cols-2 gap-[24px]">
        <HomeDazim state="null" />
        <HomeDazim state="hide" />
        <HomeDazim state="full" />
        <HomeDazim state="half" />
      </div>
      {isOpenToastPopup && <HomeToastPopup onClose={toggleToastPopup} />}
    </>
  );
};

export default HomeDazimContainer;
