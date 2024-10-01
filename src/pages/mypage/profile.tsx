import useIsDarkMode from '@lib/hooks/useIsDarkMode';

import TopBar from '@components/common/TopBar';

import { ReactComponent as BackDarkIcon } from '@assets/images/common/arrow-left-white.svg';
import { ReactComponent as BackIcon } from '@assets/images/common/arrow-left.svg';
import { ReactComponent as DarkModeIconActive } from '@assets/images/common/moon-white.svg';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChangeProfilePage = () => {
  const navigate = useNavigate();
  const isDarkMode = useIsDarkMode();

  return (
    <div>
      <TopBar title="프로필 편집" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <div className="w-[120px] aspect-square cursor-pointer relative mx-auto mb-[28px]">
          <img
            src="http://via.placeholder.com/640x480"
            alt="유저이미지"
            className="w-[120px] aspect-square rounded-full"
          />
          <div className="w-[32px] aspect-square rounded-full bg-[rgba(0,0,0,.7)] absolute bottom-[10px] right-0 flex justify-center items-center">
            <DarkModeIconActive />
          </div>
        </div>
        <div className="mb-[16px]">
          <p className="text-gray-100 text-[16px] font-semibold mb-[8px] dark:text-gray-30">
            닉네임
          </p>
          <div
            onClick={() => navigate('/mypage/profile/nickname')}
            className="bg-gray-30 rounded-[8px] flex justify-between p-[16px] cursor-pointer dark:bg-[#2a2a2a]"
          >
            <p className="text-gray-100 dark:text-gray-30">유저닉네임자리</p>
            {isDarkMode ? (
              <BackDarkIcon className="rotate-180" />
            ) : (
              <BackIcon className="rotate-180" />
            )}
          </div>
        </div>
        <div className="mb-[16px]">
          <p className="text-gray-100 text-[16px] font-semibold mb-[8px] dark:text-gray-30 ">
            이메일
          </p>
          <div
            onClick={() => navigate(-1)}
            className="bg-gray-30 rounded-[8px] flex justify-between p-[16px] cursor-pointer dark:bg-[#2a2a2a]"
          >
            <p className="text-gray-100 dark:text-gray-30">이메일자리</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfilePage;
