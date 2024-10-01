import { ReactComponent as SortIcon } from '@assets/images/common/sort.svg';

import React from 'react';

type MyPageGroupListProps = {
  imgPath: string;
  name: string;
  onClick: () => void;
};

const MyPageGroupList = ({ imgPath, name, onClick }: MyPageGroupListProps) => {
  return (
    <div
      className="flex justify-between items-center bg-[transparent]"
      onClick={onClick}
    >
      <div className="flex gap-[12px] items-center">
        <img
          src={imgPath}
          alt="그룹프로필이미지"
          className="w-[48px] aspect-square rounded-full"
        />
        <p className="text-gray-100 text-[16px] font-semibold dark:text-gray-30">
          {name}
        </p>
      </div>
      <SortIcon />
    </div>
  );
};

export default MyPageGroupList;
