import { userIdFind } from '@lib/api/user';

import TopBar from '@components/common/TopBar';
import LoginSearchId from '@components/contents/login/LoginSearchId';
import LoginSearchIdFail from '@components/contents/login/LoginSearchIdFail';
import LoginSearchIdSuccess from '@components/contents/login/LoginSearchIdSuccess';

import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginSearchIdContainer = () => {
  const [current, setCurrent] = useState<number>(0);
  const [returnEmail, setReturnEmail] = useState<string>('');
  const {
    control,
    formState: { isValid },
    getValues,
  } = useForm({ mode: 'onChange' });

  const findIdMutation = useMutation({
    mutationFn: userIdFind,
    onSuccess: (response) => {
      setReturnEmail(response?.data.email);
      setCurrent(1);
    },
    onError: (err: AxiosError) => {
      const errorMessage = err.response?.data;
      console.log(errorMessage);
      setCurrent(2);
    },
  });

  const onClickSearchId = () => {
    const { phone } = getValues();
    findIdMutation.mutate({ phone: phone });
  };

  const pages = [
    {
      id: 1,
      content: (
        <LoginSearchId
          control={control}
          isValid={isValid}
          onClick={onClickSearchId}
        />
      ),
    },
    { id: 2, content: <LoginSearchIdSuccess email={returnEmail} /> },
    { id: 3, content: <LoginSearchIdFail /> },
  ];

  const navigate = useNavigate();
  return (
    <div className="pt-[44px] h-lvh relative">
      <TopBar
        title="아이디찾기"
        onClickBack={() =>
          current === 0 ? navigate('/login-email') : setCurrent(0)
        }
      />
      {pages[current].content}
    </div>
  );
};

export default LoginSearchIdContainer;
