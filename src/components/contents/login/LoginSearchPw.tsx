import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

type LoginSearchPwProps = {
  control: Control<FieldValues, unknown>;
  isValid: boolean;
  onClick: () => void;
};

const LoginSearchPw = ({ control, isValid, onClick }: LoginSearchPwProps) => {
  return (
    <div className="px-[16px]">
      <div className="flex flex-col gap-[18px]">
        <p className="text-[20px] font-semibold text-gray-100 dark:text-white">
          가입 시 사용한 이메일을 입력해주세요.
          <br />
          비밀번호 재설정 메일을 보내드릴게요.
        </p>
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
              type="text"
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="이메일을 입력하세요"
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
        name="확인"
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        onClick={onClick}
      />
    </div>
  );
};

export default LoginSearchPw;
