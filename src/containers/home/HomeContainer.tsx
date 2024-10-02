import { getGroups } from '@lib/api/groups';
import { getUser } from '@lib/api/user';

import TopBar from '@components/common/TopBar';
import HomeTimer from '@components/contents/home/HomeTimer';
import NoProfileGuide from '@components/contents/home/NoProfileGuide';

import { ReactComponent as ArrowLeft } from '@assets/images/common/arrow-left-gray.svg';
import { ReactComponent as ArrowRight } from '@assets/images/common/arrow-right-gray.svg';
import { ReactComponent as Notice } from '@assets/images/home/notice.svg';

import HomeGroupContainer from '@/containers/home/HomeGroupContainer';
import { useQuery } from '@tanstack/react-query';

import HomeDazimContainer from './HomeDazimContainer';
import React from 'react';

const HomeContainer = () => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  const { data: groups } = useQuery({
    queryKey: ['groups'],
    queryFn: () => getGroups(),
  });

  return (
    <div>
      <TopBar title="홈" darkButton />
      {!user?.data.profile ? (
        <NoProfileGuide />
      ) : (
        <>
          {/* 그룹 */}
          <HomeGroupContainer groups={groups} />
          {/* 공지사항 */}
          <div className="px-[16px] py-[12px] bg-[#E2F8FF] mb-[12px] flex items-center gap-[12px]">
            <Notice />
            <p className="text-primary text-[12px] font-semibold">
              그룹 공지사항을 입력해보세요.
            </p>
          </div>
          <div className="px-[16px]">
            {/* 시간 */}
            <div className=" flex justify-between items-center mb-[8px]">
              <ArrowLeft className="cursor-pointer" />
              <p className="text-gray-90 text-[20px] font-semibold dark:text-gray-40">
                10월 3일
              </p>
              <ArrowRight className="cursor-pointer" />
            </div>
            {/* 타이머 */}
            <HomeTimer />
            {/* 다짐 */}
            <HomeDazimContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeContainer;
