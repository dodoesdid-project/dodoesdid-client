import React from 'react';

type Props = {
  onClose: () => void;
};

const HomeToastPopup = ({ onClose }: Props) => {
  return (
    <div
      onClick={onClose}
      className="bg-[rgba(152,152,152,.95)] cursor-pointer rounded-[8px] text-white font-semibold text-[16px] h-[68px] flex justify-center items-center absolute bottom-[30px] z-10 w-[calc(100%-32px)] desktop:w-[343px]"
    >
      그룹을 먼저 등록하세요.
    </div>
  );
};

export default HomeToastPopup;
