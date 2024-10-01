import TopBar from '@components/common/TopBar';

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePhonePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar title="휴대폰번호 변경" onClickBack={() => navigate(-1)} />
    </div>
  );
};

export default ChangePhonePage;
