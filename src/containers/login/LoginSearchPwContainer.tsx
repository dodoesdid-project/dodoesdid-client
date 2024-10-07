/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  emailAuthResetPassword,
  emailCodeVerifyPassword,
  userPasswordReset,
} from '@lib/api/user';
import useToggle from '@lib/hooks/useToggle';

import TopBar from '@components/common/TopBar';
import LoginSearchPw from '@components/contents/login/LoginSearchPw';
import LoginSearchPwDrawer from '@components/contents/login/LoginSearchPwDrawer';
import LoginSearchPwReset from '@components/contents/login/LoginSearchPwReset';
import LoginSearchPwSuccessDrawer from '@components/contents/login/LoginSearchPwSuccessDrawer';

import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const LoginSearchPwContainer = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isOpenSearchPwDrawer, toggleSearchPwDrawer] = useToggle();
  const [isOpenSuccess, toggleSuccess] = useToggle();

  const {
    control,
    formState: { isValid },
    getValues,
  } = useForm({ mode: 'onChange' });

  const emailAuthResetPasswordMutation = useMutation({
    mutationFn: emailAuthResetPassword,
    onSuccess: () => {
      toggleSearchPwDrawer();
    },
    onError: (err: AxiosError) => {
      const errorMessage = err.response?.data;
      console.log(errorMessage);
    },
  });

  const emailAuthVerifyPasswordMutation = useMutation({
    mutationFn: emailCodeVerifyPassword,
    onSuccess: () => {
      message.success('비밀번호를 재설정 해주세요.');
      setCurrent(1);
    },
    onError: (err: AxiosError) => {
      if (err.status === 404) {
        message.error('인증되지 않은 코드입니다.');
      }
    },
  });

  const passwordResetMutation = useMutation({
    mutationFn: userPasswordReset,
    onSuccess: () => {
      toggleSuccess();
    },
    onError: (err: AxiosError) => {
      const errorMessage = err.response?.data;
      console.log(errorMessage);
    },
  });

  const onClickEmailAuth = () => {
    const { email } = getValues();
    emailAuthResetPasswordMutation.mutate({ email: email });
  };

  const onClickPwReset = () => {
    const { password } = getValues();
    passwordResetMutation.mutate({
      password: password,
    });
  };

  // code가 있으면, code를 인증하고 성공하면, 비밀번호재설정페이지로이동
  const location = useLocation();
  const urlCode = location.search.split('=')[1];
  useEffect(() => {
    if (urlCode) {
      emailAuthVerifyPasswordMutation.mutate({ code: urlCode });
    } else {
      setCurrent(0);
    }
  }, []);

  const steps = [
    {
      id: 1,
      content: (
        <LoginSearchPw
          control={control}
          isValid={isValid}
          onClick={onClickEmailAuth}
        />
      ),
    },
    {
      id: 2,
      content: (
        <LoginSearchPwReset
          control={control}
          getValues={getValues}
          isValid={isValid}
          onClick={onClickPwReset}
        />
      ),
    },
  ];

  return (
    <>
      <div className="pt-[44px] h-lvh relative">
        {current === 0 ? (
          <TopBar title="비밀번호 찾기" onClickBack={() => navigate(-1)} />
        ) : (
          <TopBar title="비밀번호 찾기" />
        )}
        {steps[current].content}
      </div>
      {isOpenSearchPwDrawer && (
        <LoginSearchPwDrawer
          email={getValues('email')}
          onClose={toggleSearchPwDrawer}
        />
      )}
      {isOpenSuccess && <LoginSearchPwSuccessDrawer onClose={toggleSuccess} />}
    </>
  );
};

export default LoginSearchPwContainer;
