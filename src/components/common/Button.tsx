import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType:
    | 'fill-semibold'
    | 'fill-normal'
    | 'fill-round'
    | 'tinted-semibold'
    | 'tinted-normal'
    | 'tinted-round'
    | 'outline-semibold'
    | 'outline-normal'
    | 'outline-round'
    | 'disabled-semibold'
    | 'disabled-normal'
    | 'disabled-round';
  name: string;
}

const Button = ({ buttonType, name, ...props }: ButtonProps) => {
  const getButtonType = (
    buttonType:
      | 'fill-semibold'
      | 'fill-normal'
      | 'fill-round'
      | 'tinted-semibold'
      | 'tinted-normal'
      | 'tinted-round'
      | 'outline-semibold'
      | 'outline-normal'
      | 'outline-round'
      | 'disabled-semibold'
      | 'disabled-normal'
      | 'disabled-round',
  ) => {
    switch (buttonType) {
      case 'fill-semibold':
        return 'bg-primary-500 text-white text-[16px] font-semibold rounded-[8px] active:bg-primary-700';
      case 'fill-normal':
        return 'bg-primary-500 text-white text-[14px] font-normal rounded-[8px] active:bg-primary-700';
      case 'fill-round':
        return 'bg-primary-500 text-white text-[14px] font-normal rounded-[999px] active:bg-primary-700';
      case 'tinted-semibold':
        return 'bg-[#e2f8ff] text-primary text-[16px] font-semibold rounded-[8px] active:bg-primary-100 dark:bg-[#1e3060] dark:text-primary-400 dark:active:bg-[#142146] dark:test-primary-500';
      case 'tinted-normal':
        return 'bg-[#e2f8ff] text-primary text-[14px] font-normal rounded-[8px] active:bg-primary-100 dark:bg-[#1e3060] dark:text-primary-400 dark:active:bg-[#142146] dark:test-primary-500';
      case 'tinted-round':
        return 'bg-[#e2f8ff] text-primary text-[14px] font-normal rounded-[999px] active:bg-primary-100 dark:bg-[#1e3060] dark:text-primary-400 dark:active:bg-[#142146] dark:test-primary-500';
      case 'outline-semibold':
        return 'text-primary border-[1px] text-[16px] font-semibold rounded-[8px] border-solid border-primary dark:border-primary-200 dark:text-primary-200';
      case 'outline-normal':
        return 'text-primary border-[1px] text-[14px] font-normal rounded-[8px] border-solid border-primary dark:border-primary-200 dark:text-primary-200';
      case 'outline-round':
        return 'text-primary border-[1px] text-[14px] font-normal rounded-[999px] border-solid border-primary dark:border-primary-200 dark:text-primary-200';
      case 'disabled-semibold':
        return 'bg-gray-60 text-gray-40 text-[16px] font-semibold rounded-[8px] active:bg-gray-70 active:text-gray-60 dark:bg-gray-90 dark:text-gray-70 dark:active:bg-[#2a2a2a] dark:active:bg-gray-80';
      case 'disabled-normal':
        return 'bg-gray-60 text-gray-40 text-[14px] font-normal rounded-[8px] active:bg-gray-70 active:text-gray-60 dark:bg-gray-90 dark:text-gray-70 dark:active:bg-[#2a2a2a] dark:active:bg-gray-80';
      case 'disabled-round':
        return 'bg-gray-60 text-gray-40 text-[14px] font-normal rounded-[999px] active:bg-gray-70 active:text-gray-60 dark:bg-gray-90 dark:text-gray-70 dark:active:bg-[#2a2a2a] dark:active:bg-gray-80';
      default:
        return 'bg-primary-500 text-white text-[16px] font-semibold rounded-[8px] active:bg-primary-700';
    }
  };

  return (
    <button
      {...props}
      className={`w-full px-[16px] py-[12px] flex justify-center items-center max-w-[350px] min-w-[55px] ${getButtonType(buttonType)}`}
    >
      {name}
    </button>
  );
};

export default Button;
