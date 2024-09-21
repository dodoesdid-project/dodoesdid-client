/* eslint-disable @typescript-eslint/no-unused-vars */
import useToggle from '@lib/hooks/useToggle';

import AgreeStep from '@components/contents/join/AgreeStep';
import BirthStep from '@components/contents/join/BirthStep';
import EmailDrawer from '@components/contents/join/EmailDrawer';
import EmailNumberDrawer from '@components/contents/join/EmailNumberDrawer';
import EmailStep from '@components/contents/join/EmailStep';
import NameStep from '@components/contents/join/NameStep';
import PasswordStep from '@components/contents/join/PasswordStep';
import PhoneStep from '@components/contents/join/PhoneStep';
import SuccessDrawer from '@components/contents/join/SuccessDrawer';

import React from 'react';

const JoinContainer = () => {
  const [isOpenEmailDrawer, toggleEmailDrawer] = useToggle();
  const [isOpenEmailNumberDrawer, toggleEmailNumberDrawer] = useToggle();
  const [isOpenSuccessDrawer, toggleSuccessDrawer] = useToggle();

  const steps = [
    {
      id: 1,
      content: <EmailStep />,
    },
    {
      id: 2,
      content: <PasswordStep />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* step 1 */}
      {/* <EmailStep /> */}
      {/* step 1-2*/}
      {/* <button onClick={toggleEmailDrawer}>EmailDrawer</button> */}
      {/* <button onClick={toggleEmailNumberDrawer}>EmailNumber</button> */}
      {/* step 2 */}
      {/* <PasswordStep /> */}
      {/* step 3 */}
      {/* <NameStep /> */}
      {/* step 4 */}
      {/* <BirthStep /> */}
      {/* step 5 */}
      {/* <PhoneStep /> */}
      {/* step 6 */}
      {/* <AgreeStep /> */}
      <button onClick={toggleSuccessDrawer}>SuccessDrawer</button>
      {isOpenSuccessDrawer && <SuccessDrawer onClose={toggleSuccessDrawer} />}

      {isOpenEmailDrawer && <EmailDrawer onClose={toggleEmailDrawer} />}
      {isOpenEmailNumberDrawer && (
        <EmailNumberDrawer
          isOpen={isOpenEmailNumberDrawer}
          onClose={toggleEmailNumberDrawer}
        />
      )}
    </div>
  );
};

export default JoinContainer;
