/* eslint-disable @typescript-eslint/no-unused-vars */
import { emailAuthResetPassword, userPasswordReset } from '@lib/api/user';
import useToggle from '@lib/hooks/useToggle';

import TopBar from '@components/common/TopBar';
import LoginSearchPw from '@components/contents/login/LoginSearchPw';
import LoginSearchPwDrawer from '@components/contents/login/LoginSearchPwDrawer';
import LoginSearchPwReset from '@components/contents/login/LoginSearchPwReset';
import LoginSearchPwSuccessDrawer from '@components/contents/login/LoginSearchPwSuccessDrawer';

import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
      token: token,
      password: password,
    });
  };

  // 토큰이 있으면, 토큰을저장하고 비밀번호재설정페이지로이동
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState('');
  useEffect(() => {
    const tokenFromURL = searchParams.get('token');
    if (tokenFromURL) {
      setToken(tokenFromURL);
      setCurrent(1);
    } else {
      setCurrent(0);
    }
  }, [searchParams]);

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
