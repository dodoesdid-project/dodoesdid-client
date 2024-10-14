import Button from '@components/common/Button';

import Tooltip from '@assets/images/onboarding/dodoesdid-tooltip.png';
import Dodoesdid from '@assets/images/onboarding/dodoesdid.png';
import EmojiFestival from '@assets/images/onboarding/emoji-festival.png';
import EmojiFire from '@assets/images/onboarding/emoji-fire.png';
import EmojiStar from '@assets/images/onboarding/emoji-star.png';
import Step1 from '@assets/images/onboarding/onboarding1.png';
import Step2 from '@assets/images/onboarding/onboarding2.png';
import Step3 from '@assets/images/onboarding/onboarding3.png';
import Step4 from '@assets/images/onboarding/onboarding4.png';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

const OnBoardingPage = () => {
  const [swiperIndex, setSwiperIndex] = useState(0); // -> 페이지네이션용
  const [swiper, setSwiper] = useState<SwiperClass>(); // -> 슬라이드용
  const navigate = useNavigate();

  const onClickComplete = () => {
    localStorage.setItem('isOnboard', 'true');
    navigate('/');
  };

  return (
    <div className="bg-primary-100 h-[calc(100lvh-100px)] flex">
      <div className="w-full">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="onBoardingSwiper"
          onActiveIndexChange={(e: SwiperClass) => setSwiperIndex(e.realIndex)}
          onSwiper={(e: SwiperClass) => {
            setSwiper(e);
          }}
        >
          <SwiperSlide>
            <img
              src={Step1}
              className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
            />
            <div className="absolute bottom-0 bg-white h-[200px] w-full flex flex-col items-center desktop:w-[375px]">
              <span className="text-primary font-semibold text-[11px] border-[1px] border-solid border-primary-500 px-[8px] py-[4px] rounded-[32px] mt-[56px] mb-[16px]">
                그룹 생성
              </span>
              <p className="text-gray-100 text-[20px] font-bold mb-[8px] text-center">
                다짐을 시작해볼까요?
              </p>
              <p className="text-gray-80 text-[14px] text-center mb-[40px]">
                다짐을 시작하기 전에
                <br />
                그룹을 생성하고 친구들을 초대해보세요.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Step2}
              className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
            />
            <img
              src={Dodoesdid}
              className="absolute top-[51%] translate-y-[-51%] right-[15%] animate-bounce"
            />
            <img
              src={Tooltip}
              className="absolute top-[44%] translate-y-[-44%] right-[5%] animate-bounce"
            />
            <div className="absolute bottom-0 bg-white h-[200px] w-full flex flex-col items-center desktop:w-[375px]">
              <span className="text-primary font-semibold text-[11px] border-[1px] border-solid border-primary-500 px-[8px] py-[4px] rounded-[32px] mt-[56px] mb-[16px]">
                메인 홈
              </span>
              <p className="text-gray-100 text-[20px] font-bold mb-[8px] text-center">
                매일 다짐을 등록하고 인증해요
              </p>
              <p className="text-gray-80 text-[14px] text-center mb-[40px]">
                실천 상태에 따라 뚜두의 모습이 바뀌어요.
                <br />
                다짐을 달성하고 잠자는 뚜두를 깨워보세요!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Step3}
              className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
            />
            <img
              src={EmojiFire}
              className="absolute top-[34%] translate-y-[-34%] left-6 animate-bounce"
            />
            <img
              src={EmojiFestival}
              className="absolute top-[40%] translate-y-[-40%] right-10 animate-bounce"
            />
            <img
              src={EmojiStar}
              className="absolute top-[50%] translate-y-[-50%] left-6 animate-bounce"
            />
            <div className="absolute bottom-0 bg-white h-[200px] w-full flex flex-col items-center desktop:w-[375px]">
              <span className="text-primary font-semibold text-[11px] border-[1px] border-solid border-primary-500 px-[8px] py-[4px] rounded-[32px] mt-[56px] mb-[16px]">
                피드
              </span>
              <p className="text-gray-100 text-[20px] font-bold mb-[8px] text-center">
                친구들의 다짐을 한눈에
              </p>
              <p className="text-gray-80 text-[14px] text-center mb-[40px]">
                친구들과 함께 이모티콘과 댓글로
                <br />
                서로의 다짐을 응원해보세요!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Step4}
              className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
            />
            <div className="absolute bottom-0 bg-white h-[200px] w-full flex flex-col items-center desktop:w-[375px]">
              <span className="text-primary font-semibold text-[11px] border-[1px] border-solid border-primary-500 px-[8px] py-[4px] rounded-[32px] mt-[56px] mb-[16px]">
                두더지
              </span>
              <p className="text-gray-100 text-[20px] font-bold mb-[8px] text-center">
                지난 나의 다짐은 어땠을까?
              </p>
              <p className="text-gray-80 text-[14px] text-center mb-[40px]">
                이번 주, 이번 달 동안 달성한
                <br />
                나의 다짐들을 한눈에 볼 수 있어요.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="fixed bottom-0 w-[calc(100%-16px)] left-[50%] translate-x-[-50%] desktop:w-[375px]">
        {swiperIndex !== 3 ? (
          <Button
            buttonType="tinted-semibold"
            name="다음"
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            onClick={() => swiper?.slideNext()}
          />
        ) : (
          <Button
            buttonType="fill-semibold"
            name="두더지 시작하기"
            style={{
              position: 'absolute',
              bottom: '32px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            onClick={onClickComplete}
          />
        )}
      </div>
    </div>
  );
};

export default OnBoardingPage;
