import { getUser, updateUserNickname } from '@lib/api/user';
import showToast from '@lib/utils/toast';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import { useMutation, useQuery } from '@tanstack/react-query';

import { User } from '../../types/user';
import { message } from 'antd';
import { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangeNicknamePage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('');
  const { data: user } = useQuery<AxiosResponse<User>>({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const updateNicknameMutation = useMutation({
    mutationFn: updateUserNickname,
    onSuccess: () => {
      navigate('/mypage/profile');
      showToast('변경이 완료되었어요.');
    },
    onError: (error: AxiosError) => {
      if (value === user?.data.profile?.nickName) {
        return message.error('기존 닉네임과 동일합니다.');
      }
      if (error.status === 400) {
        return message.error('잘못된 닉네임입니다.');
      }
    },
  });

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickSubmit = () => {
    updateNicknameMutation.mutate(value);
  };

  useEffect(() => {
    if (user) return setValue(user.data.profile?.nickName as string);
  }, [user]);

  return (
    <div>
      <TopBar title="닉네임 변경" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <p className="text-gray-100 font-semibold mb-[16px] dark:text-gray-30">
          닉네임
        </p>
        <Input value={value} onChange={onChangeValue} />
        <Button
          disabled={value.length === 0}
          buttonType={value.length > 0 ? `fill-semibold` : `disabled-semibold`}
          name="완료"
          style={{
            position: 'absolute',
            bottom: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          onClick={onClickSubmit}
        />
      </div>
    </div>
  );
};

export default ChangeNicknamePage;
