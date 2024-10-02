import React from 'react';

type Props = {
  imagePath: string;
  name: string;
};

const HomeGroup = ({ imagePath, name }: Props) => {
  return (
    <div className="w-[72px] cursor-pointer">
      <div
        className="w-[72px] h-[72px] rounded-full overflow-hidden flex justify-center items-center"
        style={{ border: '1px solid #ddd' }}
      >
        <img src={imagePath} alt="그룹이미지" />
      </div>
      <p className="text-gray-100 text-[11px] text-center dark:text-gray-30">
        {name}
      </p>
    </div>
  );
};

export default HomeGroup;
