import useIsDarkMode from '@lib/hooks/useIsDarkMode';
import useToggle from '@lib/hooks/useToggle';

import Divider from '@components/common/Divider';
import TopBar from '@components/common/TopBar';
import MypageLogoutDrawer from '@components/contents/mypage/MypageLogoutDrawer';

import { ReactComponent as ArrowRightDark } from '@assets/images/common/arrow-right-gray60.svg';
import { ReactComponent as ArrowRight } from '@assets/images/common/arrow-right-gray70.svg';

import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AccountManagePage = () => {
  const isDarkMode = useIsDarkMode();
  const navigate = useNavigate();
  const [isOpenLogoutDrawer, toggleLogoutDrawer] = useToggle();

  const onClickLogout = () => {
    localStorage.removeItem('authorization');
    navigate('/login');
  };

  return (
    <>
      <TopBar title="계정 관리" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <div
          className="py-[16px] flex items-center justify-between cursor-pointer"
          onClick={() => navigate(`/mypage/account/password`)}
        >
          <p className="text-gray-100 text-[16px] font-semibold dark:text-gray-30">
            비밀번호 변경
          </p>
          {isDarkMode ? <ArrowRightDark /> : <ArrowRight />}
        </div>
        <Divider />
        {/* <div
          className="py-[16px] flex items-center justify-between cursor-pointer"
          onClick={() => navigate('/mypage/account/phone')}
        >
          <p className="text-gray-100 text-[16px] font-semibold dark:text-gray-30">
            휴대폰번호 변경
          </p>
          {isDarkMode ? <ArrowRightDark /> : <ArrowRight />}
        </div>
        <Divider /> */}
        <Link
          to={
            'https://hissing-friend-bd0.notion.site/1085ad085e3a801ab3add7c9e4f41f4c'
          }
          target="_blank"
        >
          <div className="py-[16px] flex items-center justify-between cursor-pointer">
            <p className="text-gray-100 text-[16px] font-semibold dark:text-gray-30">
              이용약관
            </p>
            {isDarkMode ? <ArrowRightDark /> : <ArrowRight />}
          </div>
        </Link>
        <Divider />
        <Link
          to={
            'https://hissing-friend-bd0.notion.site/1085ad085e3a808e8b9adf6c74d55266'
          }
          target="_blank"
        >
          <div className="py-[16px] flex items-center justify-between cursor-pointer">
            <p className="text-gray-100 text-[16px] font-semibold dark:text-gray-30">
              개인정보처리방침
            </p>
            {isDarkMode ? <ArrowRightDark /> : <ArrowRight />}
          </div>
        </Link>
      </div>
      <div className="flex gap-[6px] text-gray-90 text-[14px] absolute bottom-[140px] left-[50%] translate-x-[-50%] dark:text-gray-40">
        <p className="cursor-pointer" onClick={toggleLogoutDrawer}>
          로그아웃
        </p>
        |
        <p
          className="cursor-pointer"
          onClick={() => navigate('/mypage/account/signout')}
        >
          회원탈퇴
        </p>
      </div>
      {isOpenLogoutDrawer && (
        <MypageLogoutDrawer
          onClose={toggleLogoutDrawer}
          onClick={onClickLogout}
        />
      )}
    </>
  );
};

export default AccountManagePage;
