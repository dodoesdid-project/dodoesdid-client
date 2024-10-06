import { login } from '@lib/api/user';
import useDarkMode from '@lib/hooks/useDarkMode';

import Button from '@components/common/Button';
// import CheckBox from '@components/common/CheckBox';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import { ReactComponent as LogoDark } from '@assets/images/common/logo-mix-dark.svg';
import { ReactComponent as Logo } from '@assets/images/common/logo-mix.svg';

import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import { AxiosError } from 'axios';
import React from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const LoginEmailContainer = () => {
  const isDarkMode = useDarkMode();
  const navigate = useNavigate();
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate('/');
    },
    onError: (error: AxiosError) => {
      console.log(error);
      if (error.status === 403) {
        return message.error('이미 탈퇴한 회원입니다.');
      }
      if (error.status === 401) {
        return message.error('이메일과 비밀번호를 확인해주세요.');
      }
    },
  });

  const onClickLogin = (data: FieldValues) => {
    loginMutation.mutate({ email: data.email, password: data.password });
  };

  return (
    <div className="pt-[44px] flex flex-col h-lvh justify-between">
      <div>
        <TopBar title="로그인" backLink="/login" />
        <div className="px-[16px]">
          {isDarkMode ? <LogoDark /> : <Logo />}
          <p className="py-[22px] text-[20px] font-semibold text-gray-100 dark:text-white">
            시작해볼까요?
          </p>
          <p className="text-gray-90 text-[16px] mb-[36px] dark:text-white">
            회원 서비스 이용을 위해 로그인 해주세요.
          </p>
          <div className="flex flex-col gap-[16px] mb-[24px]">
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value:
                    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                  message: '올바른 형식이아닙니다',
                },
              }}
              render={({ field, fieldState }) => (
                <Input
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="이메일을 입력하세요"
                  errorMessage={
                    fieldState.error ? fieldState.error.message : undefined
                  }
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                  message:
                    '영문 대소문자/숫자/특수문자 중 2가지 이상 조합 8~20자',
                },
              }}
              render={({ field, fieldState }) => (
                <Input
                  name="password"
                  type="password"
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                  errorMessage={
                    fieldState.error ? fieldState.error.message : undefined
                  }
                />
              )}
            />
            {/* <CheckBox label="자동 로그인" /> */}
          </div>
          <div className="flex gap-[8px] justify-center text-gray-90 text-[14px] dark:text-white">
            <Link to={'/login-email/search/id'}>아이디 찾기</Link> |{' '}
            {/* <Link to={'/login-email/search/pw'}>비밀번호 찾기</Link> */}
            <div
              className="cursor-pointer"
              onClick={() => message.warning('서비스 준비중입니다.')}
            >
              비밀번호 찾기
            </div>
          </div>
        </div>
      </div>
      <Button
        disabled={isValid ? false : true}
        buttonType={isValid ? 'fill-semibold' : 'disabled-semibold'}
        onClick={handleSubmit(onClickLogin)}
        name="로그인"
        style={{ alignSelf: 'center', marginBottom: '50px' }}
      />
    </div>
  );
};

export default LoginEmailContainer;
