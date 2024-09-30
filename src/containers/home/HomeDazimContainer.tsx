import useToggle from '@lib/hooks/useToggle';

import HomeDazim from '@components/contents/home/HomeDazim';
import HomeToastPopup from '@components/contents/home/HomeToastPopup';

import React from 'react';

type HomeDazimContainerProps = {
  user: {
    groupName: string | null;
    userImageUrl: string;
    userNickName: string;
  };
  state: string;
};

const HomeDazimContainer = ({ user, state }: HomeDazimContainerProps) => {
  const [isOpenToastPopup, toggleToastPopup] = useToggle();

  const onClickDazim = () => {
    console.log(user);

    if (state === 'null') {
      return toggleToastPopup();
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-[24px]">
        <HomeDazim user={user} state={state} onClick={onClickDazim} />
      </div>
      {isOpenToastPopup && <HomeToastPopup onClose={toggleToastPopup} />}
    </>
  );
};

export default HomeDazimContainer;
