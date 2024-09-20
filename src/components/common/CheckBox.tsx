import React, { InputHTMLAttributes } from 'react';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CheckBox = ({ label, ...props }: CheckBoxProps) => {
  return (
    <label className="flex items-center gap-[4px]">
      <input
        type="checkbox"
        className="w-[18px] h-[18px] cursor-pointer appearance-none rounded-[4px] bg-[url('../../assets/images/common/check-white.svg')] bg-[length:88%_95%] bg-no-repeat bg-center bg-gray-60 checked:bg-primary"
        {...props}
      />
      {label && (
        <p className="text-gray-100 text-[16px] font-semibold cursor-pointer dark:text-white">
          {label}
        </p>
      )}
    </label>
  );
};

export default CheckBox;
