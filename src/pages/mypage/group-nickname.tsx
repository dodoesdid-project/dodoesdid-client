import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChangeGroupNicknamePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="그룹 닉네임 변경" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <p className="text-gray-100 font-semibold text-[16px] mb-[16px] dark:text-gray-30">
          그룹 닉네임
        </p>
        <Input />
        <Button
          buttonType="disabled-semibold"
          name="완료"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '120px',
          }}
        />
      </div>
    </div>
  );
};

export default ChangeGroupNicknamePage;
