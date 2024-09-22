import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

type PhoneStepProps = {
  control: Control<FieldValues, unknown>;
  isValid: boolean;
  onClick: () => void;
};

const PhoneStep = ({ control, isValid, onClick }: PhoneStepProps) => {
  return (
    <div className="px-[16px] flex flex-col gap-[156px]">
      <Controller
        name="phone"
        control={control}
        rules={{
          required: true,
          pattern: {
            value:
              /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
            message: '형식이 올바르지 않아요. 다시 확인해주세요.',
          },
        }}
        render={({ field, fieldState }) => (
          <Input
            type="number"
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value)}
            label="휴대폰 번호를 입력해주세요"
            placeholder="‘-’없이 숫자만 입력해주세요"
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

export default PhoneStep;
