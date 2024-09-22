import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

type NameStepProps = {
  control: Control<FieldValues, unknown>;
  isValid: boolean;
  onClick: () => void;
};

const NameStep = ({ control, isValid, onClick }: NameStepProps) => {
  return (
    <div className="px-[16px] flex flex-col gap-[156px]">
      <Controller
        name="name"
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[가-힣a-zA-Z0-9]{2,16}$/,
            message: '공백을 제외한 영어, 숫자, 한글 2자 ~ 12자',
          },
        }}
        render={({ field, fieldState }) => (
          <Input
            type="text"
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value)}
            label="이름을 입력해주세요"
            placeholder="ex)김다짐"
            errorMessage={
              fieldState.error ? fieldState.error.message : undefined
            }
          />
        )}
      />
      <Button
        disabled={isValid ? false : true}
        buttonType={isValid ? `fill-semibold` : `disabled-semibold`}
        name="다음"
        onClick={onClick}
      />
    </div>
  );
};

export default NameStep;
