import { getUser, profile } from '@lib/api/user';
import useIsDarkMode from '@lib/hooks/useIsDarkMode';
import showToast from '@lib/utils/toast';

import TopBar from '@components/common/TopBar';

import { ReactComponent as BackDarkIcon } from '@assets/images/common/arrow-left-white.svg';
import { ReactComponent as BackIcon } from '@assets/images/common/arrow-left.svg';
import { ReactComponent as CameraIcon } from '@assets/images/common/camera-white.svg';

import { useMutation, useQuery } from '@tanstack/react-query';

import { User } from '../../types/user';
import { message } from 'antd';
import { AxiosResponse } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChangeProfilePage = () => {
  const navigate = useNavigate();
  const isDarkMode = useIsDarkMode();
  const { data: user, refetch: refetchUser } = useQuery<AxiosResponse<User>>({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const updatePropfileMutation = useMutation({
    mutationFn: profile,
    onSuccess: () => {
      refetchUser();
      showToast('변경이 완료되었어요.');
    },
    onError: (error: AxiosResponse) => {
      if (error.status === 409) {
        return message.error('중복된 사진입니다.');
      }
      message.error(error?.data);
    },
  });

  const onChangeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

      if (file.size > MAX_FILE_SIZE) {
        message.error('10MB이하의 사진을 올려주세요.');
        return;
      }
      updatePropfileMutation.mutate({
        thumbnail: file as File,
        nickname: user?.data.profile?.nickName as string,
      });
    }
  };

  return (
    <div>
      <TopBar title="프로필 편집" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        {/* 유저이미지  */}
        <label
          htmlFor="photo"
          className="w-[120px] h-[120px] rounded-full flex justify-center items-center cursor-pointer mb-[45px] mx-auto relative border-[1px] border-solid border-[#ddd] dark:border-[#444]"
        >
          <div className="w-[32px] h-[32px] rounded-full bg-[rgba(0,0,0,.7)] absolute bottom-[10px] right-0 flex justify-center items-center">
            <CameraIcon />
          </div>
          <img
            src={user?.data.profile?.thumbnail}
            alt="이미지"
            className="rounded-full w-[100%] h-[100%] object-cover"
          />
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept=".png, .jpeg, .jpg"
          onChange={onChangeUpload}
          hidden
        />
        {/* 유저정보 */}
        <div className="mb-[16px]">
          <p className="text-gray-100 text-[16px] font-semibold mb-[8px] dark:text-gray-30">
            닉네임
          </p>
          <div
            onClick={() => navigate('/mypage/profile/nickname')}
            className="bg-gray-30 rounded-[8px] flex justify-between p-[16px] cursor-pointer dark:bg-[#2a2a2a]"
          >
            <p className="text-gray-100 dark:text-gray-30">
              {user?.data.profile?.nickName}
            </p>
            {isDarkMode ? (
              <BackDarkIcon className="rotate-180" />
            ) : (
              <BackIcon className="rotate-180" />
            )}
          </div>
        </div>
        <div className="mb-[16px]">
          <p className="text-gray-100 text-[16px] font-semibold mb-[8px] dark:text-gray-30 ">
            이메일
          </p>
          <div
            onClick={() => showToast('이메일은 변경이 불가능해요.')}
            className="bg-gray-30 rounded-[8px] flex justify-between p-[16px] cursor-pointer dark:bg-[#2a2a2a]"
          >
            <p className="text-gray-100 dark:text-gray-30">
              {user?.data.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfilePage;
