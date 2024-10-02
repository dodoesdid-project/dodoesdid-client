import HomeGroup from '@components/contents/home/HomeGroup';

import { ReactComponent as GroupPlusIcon } from '@assets/images/home/groupplus.svg';

import { Groups } from '../../types/groups';
import { Tooltip } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  groups: Groups;
};

const HomeGroupContainer = ({ groups }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Swiper className="px-[16px!important] my-[8px]" slidesPerView={4.2}>
        <SwiperSlide>
          {groups ? (
            <div
              onClick={() => navigate('/home/profile-group')}
              className="w-[72px] h-[72px] rounded-full flex justify-center items-center bg-gray-30 cursor-pointer dark:bg-[#2a2a2a]"
            >
              <GroupPlusIcon />
            </div>
          ) : (
            <Tooltip
              open
              placement="right"
              title={
                <span>
                  아직 그룹이 없으시군요.
                  <br />
                  그룹을 추가해보세요!
                </span>
              }
              color="#3F73F7"
              overlayInnerStyle={{ padding: '12px' }}
            >
              <div
                onClick={() => navigate('/home/profile-group')}
                className="w-[72px] h-[72px] rounded-full flex justify-center items-center bg-gray-30 cursor-pointer dark:bg-[#2a2a2a]"
              >
                <GroupPlusIcon />
              </div>
            </Tooltip>
          )}
        </SwiperSlide>
        {groups?.length > 0 &&
          groups.map((group) => (
            <SwiperSlide key={group.id}>
              <HomeGroup imagePath={group.thumbnail} name={group.name} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default HomeGroupContainer;
