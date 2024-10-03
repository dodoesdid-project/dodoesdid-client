import React from 'react';

interface ITabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab = ({ title, isActive, onClick }: ITabProps) => {
  return (
    <div
      className={`cursor-pointer font-semibold px-12 pb-[10px] ${isActive ? 'text-gray-100 border-b-2 border-black' : 'text-gray-70'}`}
      onClick={onClick}
    >
      <span>{title}</span>
    </div>
  );
};

export default Tab;
