import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  successMessage?: string;
}

const Input = ({
  label,
  errorMessage,
  successMessage,
  ...props
}: InputProps) => {
  return (
    <div>
      {label && (
        <p className="text-gray-100 text-[20px] font-semibold mb-[18px] dark:text-white">
          {label}
        </p>
      )}
      <input
        className="bg-gray-30 px-[16px] h-[52px] w-full flex items-center rounded-[8px] text-gray-100 text-[16px] focus:outline-none placeholder:text-gray-60 placeholder:text-[14px] dark:text-gray-30 dark:bg-gray-100"
        {...props}
      />
      {errorMessage && (
        <p className="text-[#ff0000] ml-[16px] mt-[8px] text-[11px] ">
          *{errorMessage}
        </p>
      )}
      {successMessage && (
        <p className="text-primary ml-[16px] mt-[8px] text-[11px] ">
          *{successMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
