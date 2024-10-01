import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChangeNicknamePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="닉네임 변경" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <p className="text-gray-100 font-semibold mb-[16px] dark:text-gray-30">
          닉네임
        </p>
        <Input />
        <Button
          disabled
          buttonType={`fill-semibold`}
          name="완료"
          style={{
            position: 'absolute',
            bottom: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>
    </div>
  );
};

export default ChangeNicknamePage;
