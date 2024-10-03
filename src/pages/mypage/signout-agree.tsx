import { deleteUser } from '@lib/api/user';
import useIsDarkMode from '@lib/hooks/useIsDarkMode';
import useToggle from '@lib/hooks/useToggle';
import showToast from '@lib/utils/toast';

import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';
import MyPageSignOutDrawer from '@components/contents/mypage/MyPageSignOutDrawer';

import DodosedidImageDark from '@assets/images/home/dodoesdid-disabled-dark.png';
import DodosedidImage from '@assets/images/home/dodoesdid-disabled.png';

import { useMutation } from '@tanstack/react-query';

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignOutAgreePage = () => {
  const navigate = useNavigate();
  const isDarkMode = useIsDarkMode();
  const [isOpenSignOutDrawer, toggleSignOutDrawer] = useToggle();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { state } = useLocation();

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      navigate('/login');
      showToast('탈퇴가 완료되었습니다.');
    },
    onError: () => {},
  });

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const onClickSignOutSubmit = () => {
    deleteUserMutation.mutate(state);
  };

  return (
    <>
      <TopBar title="회원탈퇴" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <p className="text-gray-100 text-[20px] font-semibold mb-[16px] dark:text-gray-30">
          탈퇴하기
        </p>
        <p className="text-gray-70 text-[14px] dark:text-gray-60 mb-[72px]">
          옐님의 소중한 다짐들이 모두 사라져요.
          <br />
          그동안 친구들과 함께 작성하고 인증했던 다짐들을 다시 볼 수 없어요.
        </p>
        <div className="flex gap-[9px] mb-[133px]">
          <input
            type="checkbox"
            id="agree"
            className="w-[18px] h-[18px] cursor-pointer appearance-none rounded-[4px] bg-[url('../../assets/images/common/check-white.svg')] bg-[length:88%_95%] bg-no-repeat bg-center bg-gray-60 checked:bg-primary"
            checked={isChecked}
            onChange={onChangeCheckbox}
          />
          <label
            htmlFor="agree"
            className="text-gray-100 text-[14px] cursor-pointer dark:text-gray-30"
          >
            위 주의사항을 모두 확인하였으며, 탈퇴에 동의합니다.
          </label>
        </div>
        <img
          src={isDarkMode ? DodosedidImageDark : DodosedidImage}
          alt="두더지"
        />
        <Button
          disabled={!isChecked}
          buttonType={isChecked ? 'fill-semibold' : 'disabled-semibold'}
          name="탈퇴하기"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '50px',
            transform: 'translateX(-50%)',
          }}
          onClick={toggleSignOutDrawer}
        />
      </div>
      {isOpenSignOutDrawer && (
        <MyPageSignOutDrawer
          onClose={toggleSignOutDrawer}
          onClick={onClickSignOutSubmit}
        />
      )}
    </>
  );
};

export default SignOutAgreePage;
