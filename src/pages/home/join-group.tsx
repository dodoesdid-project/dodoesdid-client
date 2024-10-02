import { enterGroup } from '@lib/api/groups';
import useInput from '@lib/hooks/useInput';

import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';

import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import { AxiosError } from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const JoinGroupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const groupId = location.search.split('=')[1];
  const [inviteCode, onChangeInviteCode] = useInput(groupId);

  const enterGroupMutation = useMutation({
    mutationFn: enterGroup,
    onSuccess: () => {
      navigate('/');
    },
    onError: (error: AxiosError) => {
      console.log(error?.response);
      const statusCode = error?.response?.status;
      if (statusCode === 409) {
        return message.error('이미 존재하는 유저입니다.');
      }
      if (statusCode === 404) {
        return message.error('그룹을 찾을 수 없습니다.');
      }
    },
  });

  const onClickSubmit = () => {
    enterGroupMutation.mutate(inviteCode);
  };

  return (
    <div>
      <TopBar title="" onClickBack={() => navigate(-1)} />
      <p className="mt-[123px] text-gray-100 font-semibold test-[16px] mb-[30px] text-center dark:text-gray-30 ">
        초대 받은 링크 코드를 입력해주세요.
      </p>
      <div className="px-[16px]">
        <textarea
          autoFocus
          className="w-full h-[150px] overflow-hidden mb-[50px] focus:outline-none text-center text-[32px] text-gray-70 font-bold bg-[transparent] dark:text-gray-60 dark:focus:ring-white"
          value={inviteCode}
          onChange={onChangeInviteCode}
        />
        <Button
          disabled={inviteCode === ''}
          buttonType="fill-semibold"
          name="그룹 입장하기"
          onClick={onClickSubmit}
        />
      </div>
    </div>
  );
};

export default JoinGroupPage;
