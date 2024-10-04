import React from 'react';

type Props = {
  imagePath: string;
  name: string;
  onclick: () => void;
};

const HomeGroup = ({ imagePath, name, onclick }: Props) => {
  return (
    <div className="w-[72px] cursor-pointer" onClick={onclick}>
      <div className="w-[72px] h-[72px] rounded-full overflow-hidden flex justify-center items-center border-[1px] border-solid border-[#ddd] dark:border-[#444]">
        <img
          src={imagePath}
          alt="그룹이미지"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <p className="text-gray-100 text-[11px] text-center dark:text-gray-30">
        {name}
      </p>
    </div>
  );
};

export default HomeGroup;