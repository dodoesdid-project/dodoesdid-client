import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  UseFormGetValues,
} from 'react-hook-form';

type LoginSearchPwResetProps = {
  control: Control<FieldValues, unknown>;
  getValues: UseFormGetValues<FieldValues>;
  isValid: boolean;
  onClick: () => void;
};

const LoginSearchPwReset = ({
  control,
  isValid,
  getValues,
  onClick,
}: LoginSearchPwResetProps) => {
  return (
    <div className="px-[16px]">
      <div className="flex flex-col gap-[42px]">
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
              message:
                '비밀번호는 영문 대소문자/숫자/특수문자 중 2가지 이상 조합으로 8자 이상으로 만들어주세요.',
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              name="password"
              type="password"
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              label="새 비밀번호"
              placeholder="8자리 이상, 영문 대소문자/숫자/특수문자 사용 가능"
              errorMessage={fieldState?.error?.message}
            />
          )}
        />
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
              label="새 비밀번호 확인"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              errorMessage={fieldState?.error?.message}
            />
          )}
        />
      </div>
      <Button
        disabled={isValid ? false : true}
        buttonType={isValid ? `fill-semibold` : `disabled-semibold`}
        onClick={onClick}
        name="확인"
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  );
};

export default LoginSearchPwReset;
