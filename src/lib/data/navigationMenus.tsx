import { ReactComponent as DodoesdidIconActive } from '@assets/images/nav/dodoesdid-active.svg';
import { ReactComponent as DodoesdidIcon } from '@assets/images/nav/dodoesdid.svg';
import { ReactComponent as FeedIconActive } from '@assets/images/nav/feed-active.svg';
import { ReactComponent as FeedIcon } from '@assets/images/nav/feed.svg';
import { ReactComponent as HomeIconActive } from '@assets/images/nav/home-active.svg';
import { ReactComponent as HomeIcon } from '@assets/images/nav/home.svg';
import { ReactComponent as MypageIconActive } from '@assets/images/nav/mypage-active.svg';
import { ReactComponent as MypageIcon } from '@assets/images/nav/mypage.svg';

import React, { ReactElement } from 'react';

export const navigationMenus: {
  id: number;
  name: string;
  icon: ReactElement;
  iconActive: ReactElement;
  link: string;
}[] = [
  {
    id: 1,
    name: '홈',
    icon: <HomeIcon />,
    iconActive: <HomeIconActive />,
    link: '/',
  },
  {
    id: 2,
    name: '피드',
    icon: <FeedIcon />,
    iconActive: <FeedIconActive />,
    link: '/feed',
  },
  {
    id: 3,
    name: '두더지',
    icon: <DodoesdidIcon />,
    iconActive: <DodoesdidIconActive />,
    link: '/dodoesdid',
  },
  {
    id: 4,
    name: 'MY',
    icon: <MypageIcon />,
    iconActive: <MypageIconActive />,
    link: '/mypage',
  },
];
