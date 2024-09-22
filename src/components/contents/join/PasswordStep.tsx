import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  UseFormGetValues,
} from 'react-hook-form';

type PasswordStepProps = {
  getValues: UseFormGetValues<FieldValues>;
  control: Control<FieldValues, unknown>;
  isValid: boolean;
  onClick: () => void;
};

const PasswordStep = ({
  getValues,
  control,
  isValid,
  onClick,
}: PasswordStepProps) => {
  return (
    <div className="px-[16px]">
      <div className="flex flex-col gap-[24px] mb-[30px]">
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
              message:
                '비밀번호는 8자리 이상, 영문 대소문자/숫자/특수문자 중 2가지 이상 조합 8자 이상으로 만들어주세요.',
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              name="password"
              type="password"
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              label="비밀번호를 작성해주세요"
              placeholder="8자리 이상, 영문 대소문자/숫자/특수문자 사용 가능"
              errorMessage={
                fieldState.error ? fieldState.error.message : undefined
              }
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
        disabled={isValid ? false : true}
        buttonType={isValid ? `fill-semibold` : `disabled-semibold`}
        style={{ cursor: 'pointer' }}
        name="다음"
        onClick={onClick}
      />
    </div>
  );
};

export default PasswordStep;
