import HomeGroup from '@components/contents/home/HomeGroup';

import { ReactComponent as GroupPlusIcon } from '@assets/images/home/groupplus.svg';

import { Tooltip } from 'antd';
import React from 'react';
// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeGroupContainer = () => {
  return (
    <>
      <Swiper className="px-[16px!important] my-[8px]" slidesPerView={4.2}>
        <SwiperSlide>
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
            <div className="w-[72px] h-[72px] rounded-full flex justify-center items-center bg-gray-30 cursor-pointer dark:bg-[#2a2a2a]">
              <GroupPlusIcon />
            </div>
          </Tooltip>
        </SwiperSlide>
        <SwiperSlide>
          <HomeGroup />
        </SwiperSlide>
        <SwiperSlide>
          <HomeGroup />
        </SwiperSlide>
        <SwiperSlide>
          <HomeGroup />
        </SwiperSlide>
        <SwiperSlide>
          <HomeGroup />
        </SwiperSlide>
        <SwiperSlide>
          <HomeGroup />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeGroupContainer;
