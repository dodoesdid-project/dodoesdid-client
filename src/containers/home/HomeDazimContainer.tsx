import HomeDazim from '@components/contents/home/HomeDazim';

import { DazimUser, Dazims } from '../../types/dazims';
import { Groups } from '../../types/groups';
import { User } from '../../types/user';
import React from 'react';

type Props = {
  groups: Groups;
  user: User;
  dazims: Dazims;
  isTooltip: boolean;
  onClickDazim: () => void;
};

const HomeDazimContainer = ({
  groups,
  user,
  dazims,
  isTooltip,
  onClickDazim,
}: Props) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-[24px]">
        {groups.length === 0 && <HomeDazim user={user} groups={groups} />}
        {dazims?.users.map((user: DazimUser) => (
          <div key={user.id}>
            <HomeDazim
              user={user}
              isMe={user.isMe}
              isTooltip={isTooltip}
              onClick={onClickDazim}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeDazimContainer;
