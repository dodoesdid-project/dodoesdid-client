import Button from '@components/common/Button';
import Input from '@components/common/Input';

import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

type BirthStepProps = {
  control: Control<FieldValues, unknown>;
  isValid: boolean;
  onClick: () => void;
};

const BirthStep = ({ control, isValid, onClick }: BirthStepProps) => {
  return (
    <div className="px-[16px] flex flex-col gap-[156px]">
      <Controller
        name="date"
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
            message: '형식이 올바르지 않아요. 다시 확인해주세요.',
          },
        }}
        render={({ field, fieldState }) => (
          <Input
            type="text"
            value={field.value || ''}
            onChange={(e) => field.onChange(e.target.value)}
            label="생년월일을 입력해주세요"
            placeholder="yyyy-mm-dd"
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

export default BirthStep;
