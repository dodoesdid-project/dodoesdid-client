import React from 'react';

const HomeGroup = () => {
  return (
    <div className="w-[72px] cursor-pointer">
      <div className="w-[72px] h-[72px] rounded-full overflow-hidden flex">
        <img src=" http://via.placeholder.com/640x480" alt="그룹이미지" />
      </div>
      <p className="text-gray-100 text-[11px] text-center dark:text-gray-30">
        다이어트하기
      </p>
    </div>
  );
};

export default HomeGroup;
