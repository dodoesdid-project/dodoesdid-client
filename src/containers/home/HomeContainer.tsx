/* eslint-disable @typescript-eslint/no-unused-vars */
import { getGroups } from '@lib/api/home';
import { getUser } from '@lib/api/user';

import TopBar from '@components/common/TopBar';
import NoProfileGuide from '@components/contents/home/NoProfileGuide';

import { ReactComponent as ArrowLeft } from '@assets/images/common/arrow-left-gray.svg';
import { ReactComponent as ArrowRight } from '@assets/images/common/arrow-right-gray.svg';

import HomeGroupContainer from '@/containers/home/HomeGroupContainer';
import { useQuery } from '@tanstack/react-query';

import HomeDazimContainer from './HomeDazimContainer';
import React, { useEffect, useState } from 'react';

const HomeContainer = () => {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });

  return (
    <div>
      <TopBar title="홈" />
      {/* 그룹없을때 */}
      {!user?.data.profile && <NoProfileGuide />}
      {/* 그룹있을때 */}
      {user?.data.profile && (
        <>
          {/* 그룹 */}
          <HomeGroupContainer />
          {/* 공지사항 */}
          <div className="px-[16px] py-[12px] bg-primary-100 mb-[12px]">
            s 공지사항
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
            <p className="text-primary text-[32px] font-bold text-center mb-[8px] dark:text-primary-200">
              00:08:20
            </p>
            {/* 다짐 */}
            <HomeDazimContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeContainer;
