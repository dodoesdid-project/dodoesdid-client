import Button from '@components/common/Button';
import CheckBox from '@components/common/CheckBox';

import React from 'react';
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form';
import { Link } from 'react-router-dom';

type AgreeStepProps = {
  control: Control<FieldValues, unknown>;
  setValue: UseFormSetValue<FieldValues>;
  onClick: () => void;
};

const AgreeStep = ({ control, setValue, onClick }: AgreeStepProps) => {
  const agreeAll = useWatch({ control, name: 'agreeAll' });
  const agreeAge = useWatch({ control, name: 'agreeAge' });
  const agreeService = useWatch({ control, name: 'agreeService' });
  const agreePrivacy = useWatch({ control, name: 'agreePrivacy' });

  const handleAgreeAllChange = (checked: boolean) => {
    setValue('agreeAge', checked);
    setValue('agreeService', checked);
    setValue('agreePrivacy', checked);
  };

  return (
    <div className="px-[16px]">
      <p className="text-gray-100 text-[20px] font-semibold py-[10px] dark:text-gray-30">
        서비스 이용약관
      </p>
      <div className="bg-gray-30 rounded-[8px] p-[16px] mb-[20px] dark:bg-gray-100 dark:text-white">
        <Controller
          name="agreeAll"
          control={control}
          render={({ field }) => (
            <CheckBox
              label="전체 동의"
              defaultChecked={false}
              checked={field.value}
              onChange={(e) => {
                field.onChange(e.target.checked);
                handleAgreeAllChange(e.target.checked);
              }}
            />
          )}
        />
      </div>
      <div className="flex flex-col px-[16px] gap-[16px] mb-[30px]">
        <div className="rounded-[8px] mb-[8px]">
          <Controller
            name="agreeAge"
            control={control}
            render={({ field }) => (
              <CheckBox
                label="만 14세 이상이에요 (필수)"
                defaultChecked={false}
                checked={field.value}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  setValue(
                    'agreeAll',
                    e.target.checked && agreeService && agreePrivacy,
                  );
                }}
              />
            )}
          />
        </div>
        <div className="rounded-[8px] flex justify-between items-center">
          <Controller
            name="agreeService"
            control={control}
            render={({ field }) => (
              <CheckBox
                label="서비스 이용약관에 동의 (필수)"
                defaultChecked={false}
                checked={field.value}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  setValue(
                    'agreeAll',
                    e.target.checked && agreeAge && agreePrivacy,
                  );
                }}
              />
            )}
          />
          <Link
            to={`https://hissing-friend-bd0.notion.site/1085ad085e3a801ab3add7c9e4f41f4c`}
          >
            <Button
              buttonType="outline-round"
              name="보기"
              style={{ width: '28px', padding: '8px 6px', fontSize: '12px' }}
            />
          </Link>
        </div>
        <div className="rdounded-[8px] flex justify-between items-center">
          <Controller
            name="agreePrivacy"
            control={control}
            render={({ field }) => {
              return (
                <CheckBox
                  label="개인정보 수집 및 이용에 동의 (필수)"
                  defaultChecked={false}
                  checked={field.value}
                  onChange={(e) => {
                    field.onChange(e.target.checked);
                    setValue(
                      'agreeAll',
                      e.target.checked && agreeAge && agreeService,
                    );
                  }}
                />
              );
            }}
          />
          <Link
            to={`https://hissing-friend-bd0.notion.site/1085ad085e3a808e8b9adf6c74d55266`}
          >
            <Button
              buttonType="outline-round"
              name="보기"
              style={{ width: '28px', padding: '8px 6px', fontSize: '12px' }}
            />
          </Link>
        </div>
      </div>
      <Button
        disabled={agreeAll ? false : true}
        buttonType={agreeAll ? `fill-semibold` : `disabled-semibold`}
        name="완료"
        onClick={onClick}
      />
    </div>
  );
};

export default AgreeStep;
