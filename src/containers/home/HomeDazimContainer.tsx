/* eslint-disable @typescript-eslint/no-explicit-any */
import HomeDazim from '@components/contents/home/HomeDazim';

import { Groups } from '../../types/groups';
import { User } from '../../types/user';
import React from 'react';

type Props = {
  groups: Groups;
  user: User;
  dazims: any;
  onClickDazim: () => void;
};

const HomeDazimContainer = ({ groups, user, dazims, onClickDazim }: Props) => {
  // console.log(dazims);

  return (
    <>
      <div className="grid grid-cols-2 gap-[24px]">
        {groups.length === 0 && <HomeDazim user={user} groups={groups} />}
        {dazims?.data.map((dazim: any) => (
          <div key={dazim.id}>
            <HomeDazim user={dazim} isMe={dazim.isMe} onClick={onClickDazim} />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeDazimContainer;
