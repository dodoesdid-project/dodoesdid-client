import useIsDarkMode from '@lib/hooks/useIsDarkMode';
import useToggle from '@lib/hooks/useToggle';

import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';
import MypageGroupExitDrawer from '@components/contents/mypage/MypageGroupExitDrawer';
import MypageGroupNotifyDrawer from '@components/contents/mypage/MypageGroupNotifyDrawer';

import { ReactComponent as ArrowDark } from '@assets/images/common/arrow-left-white.svg';
import { ReactComponent as Arrow } from '@assets/images/common/arrow-left.svg';
import { ReactComponent as DarkModeIconActive } from '@assets/images/common/moon-white.svg';
import { ReactComponent as ShareDark } from '@assets/images/common/share-white.svg';
import { ReactComponent as Share } from '@assets/images/common/share.svg';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyGroupInfoPage = () => {
  const navigate = useNavigate();
  const isDarkMode = useIsDarkMode();
  const [isOpenNotifyDrawer, toggleNotifyDrawer] = useToggle();
  const [isOpenExitDrawer, toggleExitDrawer] = useToggle();

  return (
    <>
      <TopBar title="그룹 편집" onClickBack={() => navigate(-1)} />
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
        <div>
          <div className="mb-[16px]">
            <p className="text-gray-100 font-semibold text-[16px] mb-[16px] dark:text-gray-30">
              그룹 닉네임
            </p>
            <div
              className="w-full px-[16px] py-[10px] flex justify-between items-center bg-gray-30 rounded-[8px] cursor-pointer dark:bg-[#2a2a2a]"
              onClick={() => navigate('/mypage/group/info/nickname')}
            >
              <p className="text-gray-100 dark:text-gray-30">1일 1다짐</p>
              {isDarkMode ? (
                <ArrowDark className="rotate-180" />
              ) : (
                <Arrow className="rotate-180" />
              )}
            </div>
          </div>
          <div className="mb-[16px]">
            <p className="text-gray-100 font-semibold text-[16px] mb-[16px] dark:text-gray-30">
              그룹 공지
            </p>
            <div
              className="w-full px-[16px] py-[10px] flex justify-between items-center bg-gray-30 rounded-[8px] cursor-pointer dark:bg-[#2a2a2a]"
              onClick={toggleNotifyDrawer}
            >
              <p className="text-gray-70 dark:text-gray-30 dark:text-gray-60">
                그룹의 공지사항을 적어보세요
              </p>
              {isDarkMode ? (
                <ArrowDark className="rotate-180" />
              ) : (
                <Arrow className="rotate-180" />
              )}
            </div>
          </div>
          <div className="mb-[16px]">
            <p className="text-gray-100 font-semibold text-[16px] mb-[16px] dark:text-gray-30">
              그룹 초대링크
            </p>
            <div className="w-full px-[16px] py-[10px] flex justify-between items-center bg-gray-30 rounded-[8px] cursor-pointer dark:bg-[#2a2a2a]">
              <p className="text-gray-100 dark:text-gray-30">URL</p>
              {isDarkMode ? <ShareDark /> : <Share />}
            </div>
          </div>
          <Button
            buttonType="tinted-semibold"
            name="그룹 나가기"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '120px',
            }}
            onClick={toggleExitDrawer}
          />
        </div>
      </div>
      {isOpenNotifyDrawer && (
        <MypageGroupNotifyDrawer
          isOpen={isOpenNotifyDrawer}
          onClose={toggleNotifyDrawer}
        />
      )}
      {isOpenExitDrawer && (
        <MypageGroupExitDrawer
          isOpen={isOpenExitDrawer}
          onClose={toggleExitDrawer}
        />
      )}
    </>
  );
};

export default MyGroupInfoPage;
