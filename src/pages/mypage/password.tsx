import { updatePassword, verifyPassword } from '@lib/api/user';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);

  const {
    control,
    formState: { isValid },
    getValues,
    handleSubmit,
    reset,
  } = useForm({ mode: 'onChange' });

  const verifyPasswordMutation = useMutation({
    mutationFn: verifyPassword,
    onSuccess: () => {
      setVerify(true);
      reset();
      message.success('검증성공');
    },
    onError: (error: AxiosError) => {
      if (error.status === 401) {
        return message.error('잘못된 비밀번호입니다.');
      }
    },
  });

  const updatePasswordMutation = useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      reset();
      navigate('/mypage/account');
      message.success('비밀번호가 변경되었습니다.');
    },
    onError: (error: AxiosError) => {
      message.error(error.status);
      if (error.status === 404) {
        return message.error('존재하지 않는 유저입니다.');
      }
    },
  });

  const onClickVerifySubmit = (data: FieldValues) => {
    verifyPasswordMutation.mutate(data.password);
  };

  const onClickPasswordResetSubmit = (data: FieldValues) => {
    updatePasswordMutation.mutate(data.password);
  };

  return (
    <div>
      <TopBar title="비밀번호 변경" onClickBack={() => navigate(-1)} />
      {!verify ? (
        <div className="px-[16px]">
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message: '8자리 이상, 영문 대소문자/숫자/특수문자 사용 가능',
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                name="password"
                type="password"
                value={field.value || ''}
                onChange={(e) => field.onChange(e.target.value)}
                label="현재 비밀번호를 입력해주세요"
                placeholder="8자리 이상, 영문 대소문자/숫자/특수문자 사용 가능"
                errorMessage={
                  fieldState.error ? fieldState.error.message : undefined
                }
              />
            )}
          />
          <Button
            disabled={!isValid}
            buttonType={isValid ? `fill-semibold` : `disabled-semibold`}
            name="다음"
            style={{ marginTop: '160px' }}
            onClick={handleSubmit(onClickVerifySubmit)}
          />
        </div>
      ) : (
        <div className="px-[16px] mt-[10px]">
          <div className="mb-[42px]">
            <Controller
              name="password"
              control={control}
              rules={{
                required: true,
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                  message: '8자리 이상, 영문 대소문자/숫자/특수문자 사용 가능',
                },
              }}
              render={({ field, fieldState }) => (
                <Input
                  name="password"
                  type="password"
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                  label="새로운 비밀번호를 입력해주세요"
                  placeholder="8자리 이상, 영문 대소문자/숫자/특수문자 사용 가능"
                  errorMessage={
                    fieldState.error ? fieldState.error.message : undefined
                  }
                />
              )}
            />
          </div>
          <div className="mb-[42px]">
            <Controller
              name="passwordCheck"
              control={control}
              rules={{
                required: true,
                validate: {
                  matchPassword: (value) => {
                    const { password } = getValues();
                    return password === value || '비밀번호가 일치하지 않습니다';
                  },
                },
              }}
              render={({ field, fieldState }) => (
                <Input
                  name="passwordCheck"
                  type="password"
                  value={field.value || ''}
                  onChange={(e) => field.onChange(e.target.value)}
                  label="비밀번호를 한 번 더 입력해주세요"
                  placeholder="비밀번호를 한 번 더 입력해주세요"
                  errorMessage={
                    fieldState.error ? fieldState.error.message : undefined
                  }
                />
              )}
            />
          </div>
          <Button
            disabled={!isValid}
            buttonType={isValid ? `fill-semibold` : `disabled-semibold`}
            name="다음"
            onClick={handleSubmit(onClickPasswordResetSubmit)}
          />
        </div>
      )}
    </div>
  );
};

export default ChangePasswordPage;
