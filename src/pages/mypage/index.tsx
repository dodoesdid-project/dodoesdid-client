import Button from '@components/common/Button';
import Divider from '@components/common/Divider';
import TopBar from '@components/common/TopBar';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopBar title="마이페이지" />
      <div className="px-[16px]">
        <div className="flex gap-[16px] items-center mb-[16px]">
          <img
            src="http://via.placeholder.com/640x480"
            alt="임시유저이미지"
            className="w-[88px] aspect-square rounded-full"
          />
          <div>
            <p className="text-black text-[20px] font-semibold mb-[12px] dark:text-gray-30">
              닉네임
            </p>
            <p
              onClick={() => navigate('/mypage/account')}
              className="text-gray-70 text-[16px] font-semibold cursor-pointer dark:text-gray-60"
            >
              계정관리
            </p>
          </div>
        </div>
        <Button
          buttonType="tinted-semibold"
          name="프로필 편집"
          style={{ marginBottom: '16px' }}
          onClick={() => navigate('/mypage/profile')}
        />
        <p
          className="py-[16px] text-gray-100 text-[16px] font-semibold cursor-pointer dark:text-gray-30"
          onClick={() => navigate('/mypage/group')}
        >
          그룹 관리
        </p>
        <Divider />
        <p className="py-[16px] text-gray-100 text-[16px] font-semibold cursor-pointer dark:text-gray-30">
          내 활동
        </p>
      </div>
    </>
  );
};

export default Mypage;
