import React from 'react';

type ButtonProps = {
  type:
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
};

const Button: React.FC<ButtonProps> = ({ type, name }) => {
  const getButtonType = (
    type:
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
    switch (type) {
      case 'fill-semibold':
        return 'bg-primary-500 text-white text-[16px] font-semibold rounded-[8px] active:bg-primary-700';
      case 'fill-normal':
        return 'bg-primary-500 text-white text-[14px] font-normal rounded-[8px] active:bg-primary-700';
      case 'fill-round':
        return 'bg-primary-500 text-white text-[14px] font-normal rounded-[999px] active:bg-primary-700';
      case 'tinted-semibold':
        return 'bg-[#e2f8ff] text-primary text-[16px] font-semibold rounded-[8px] active:bg-primary-100';
      case 'tinted-normal':
        return 'bg-[#e2f8ff] text-primary text-[14px] font-normal rounded-[8px] active:bg-primary-100';
      case 'tinted-round':
        return 'bg-[#e2f8ff] text-primary text-[14px] font-normal rounded-[999px] active:bg-primary-100';
      case 'outline-semibold':
        return 'text-primary border-[1px] text-[16px] font-semibold rounded-[8px] border-solid border-primary';
      case 'outline-normal':
        return 'text-primary border-[1px] text-[14px] font-normal rounded-[8px] border-solid border-primary';
      case 'outline-round':
        return 'text-primary border-[1px] text-[14px] font-normal rounded-[999px] border-solid border-primary';
      case 'disabled-semibold':
        return 'bg-gray-60 text-gray-40 text-[16px] font-semibold rounded-[8px] active:bg-gray-70 active:text-gray-60';
      case 'disabled-normal':
        return 'bg-gray-60 text-gray-40 text-[14px] font-normal rounded-[8px] active:bg-gray-70 active:text-gray-60';
      case 'disabled-round':
        return 'bg-gray-60 text-gray-40 text-[14px] font-normal rounded-[999px] active:bg-gray-70 active:text-gray-60';
      default:
        return 'bg-primary-500 text-white text-[16px] font-semibold rounded-[8px] active:bg-primary-700';
    }
  };

  return (
    <button
      className={`w-full px-[16px] py-[12px] flex justify-center items-center max-w-[347px] min-w-[52px] ${getButtonType(type)}`}
    >
      {name}
    </button>
  );
};

export default Button;
