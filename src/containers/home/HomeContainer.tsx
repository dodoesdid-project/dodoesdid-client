import {
  createDazimImageUpload,
  createDazimTitle,
  getDazims,
} from '@lib/api/dazims';
import { getGroups } from '@lib/api/groups';
import { getUser } from '@lib/api/user';
import useInput from '@lib/hooks/useInput';
import useToggle from '@lib/hooks/useToggle';

import TopBar from '@components/common/TopBar';
import HomeDazimTitleDrawer from '@components/contents/home/HomeDazimTitleDrawer';
import HomeDazimUploadDrawer from '@components/contents/home/HomeDazimUploadDrawer';
import HomeTimer from '@components/contents/home/HomeTimer';
import NoProfileGuide from '@components/contents/home/NoProfileGuide';

import { ReactComponent as ArrowLeft } from '@assets/images/common/arrow-left-gray.svg';
import { ReactComponent as ArrowRight } from '@assets/images/common/arrow-right-gray.svg';
import { ReactComponent as Notice } from '@assets/images/home/notice.svg';

import HomeGroupContainer from '@/containers/home/HomeGroupContainer';
import { useMutation, useQuery } from '@tanstack/react-query';

import { Dazims } from '../../types/dazims';
import { Group, Groups } from '../../types/groups';
import { User } from '../../types/user';
import HomeDazimContainer from './HomeDazimContainer';
import { message } from 'antd';
import { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeContainer = () => {
  const [groupId, setGroupId] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const today = dayjs(new Date()).format('YYYY-MM-DD');
  const [searchDate, setSearchDate] = useState<string>(today);
  const [notice, setNotice] = useState<string | null>(null);
  const [titleInput, onChangeTitleInput] = useInput('');
  const navigate = useNavigate();

  const [isOpenTitleDrawer, toggleTitleDrawer] = useToggle();
  const [isOpenUploadDrawer, toggleUploadDrawer] = useToggle();

  const { data: user } = useQuery<AxiosResponse<User>>({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const { data: groups } = useQuery<AxiosResponse<Groups>>({
    queryKey: ['groups'],
    queryFn: getGroups,
  });

  const { data: dazims, refetch: refetchDazims } = useQuery<
    AxiosResponse<Dazims>
  >({
    queryKey: ['dazims', groupId, searchDate],
    queryFn: () => getDazims(groupId, searchDate),
    enabled: !!groupId,
  });

  const createDazimTitleMutation = useMutation({
    mutationFn: createDazimTitle,
    onSuccess: () => {
      toggleTitleDrawer();
      refetchDazims();
    },
    onError: (error: AxiosResponse) => {
      if (error.status === 409) {
        return message.error('오늘 다짐을 등록하셨습니다.');
      }
      message.error(error?.data);
    },
  });

  const createDazimImageUploadMutation = useMutation({
    mutationFn: createDazimImageUpload,
    onSuccess: () => {
      toggleUploadDrawer();
      refetchDazims();
      setSelectedFile(null);
    },
    onError: (error: AxiosResponse) => {
      if (error.status === 409) {
        return message.error('오늘 다짐을 등록하셨습니다.');
      }
      message.error(error?.data);
      console.log(error);
    },
  });

  const onClickGroup = (group: Group) => {
    setGroupId(group.id);
    setNotice(group.notice);
  };

  const onClickDazim = () => {
    if (!dazims?.data) return null;
    if (searchDate < today) {
      return message.error('오늘의 다짐을 작성해주세요!');
    }
    if (dazims.data.users[0].dazim?.isSuccess) {
      return message.error('오늘 다짐을 등록하셨습니다.');
    }
    if (!dazims.data.users[0].dazim) {
      return toggleTitleDrawer();
    }
    if (!dazims.data.users[0].dazim.photo) {
      return toggleUploadDrawer();
    }
  };

  const onClickTitleButton = () => {
    createDazimTitleMutation.mutate({ groupId: groupId, content: titleInput });
  };

  const onChangeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
    }
  };

  const prev = () => {
    const newDate = dayjs(searchDate).subtract(1, 'day').format('YYYY-MM-DD');
    setSearchDate(newDate);
  };

  const next = () => {
    const newDate = dayjs(searchDate).add(1, 'day').format('YYYY-MM-DD');
    setSearchDate(newDate);
  };

  useEffect(() => {
    if (groups) {
      setGroupId(groups?.data[0]?.id);
      setNotice(groups?.data[0]?.notice);
    }
  }, [groups]);

  useEffect(() => {
    if (selectedFile && dazims?.data) {
      const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

      if (selectedFile.size > MAX_FILE_SIZE) {
        message.error('10MB이하의 사진을 올려주세요.');
        return;
      }

      if (dazims.data.users[0].dazim !== null)
        return createDazimImageUploadMutation.mutate({
          photo: selectedFile as File,
          dazimId: dazims.data.users[0].dazim.id,
        });
    }
  }, [selectedFile]);

  return (
    <>
      <div>
        <TopBar title="홈" darkButton />
        {!user?.data.profile ? (
          <NoProfileGuide />
        ) : (
          <>
            {/* 그룹 */}
            {groups && (
              <HomeGroupContainer
                groups={groups.data}
                onClickGroup={onClickGroup}
              />
            )}
            {/* 공지사항 */}
            <div className="px-[16px] py-[12px] bg-[#E2F8FF] mb-[12px] flex items-center gap-[12px] dark:bg-[#1e3060]">
              <Notice />
              <p className="text-primary text-[12px] font-semibold flex-grow">
                {notice ? notice : '그룹 공지사항을 입력해보세요.'}
              </p>
              <button
                className="border-solid border-[1px] border-primary text-[12px] text-primary px-[8px] py-[4px] font-semibold rounded-[8px]"
                onClick={() => navigate(`/mypage/group/info?id=${groupId}`)}
              >
                그룹설정
              </button>
            </div>
            <div className="px-[16px]">
              {/* 시간 */}
              <div className="mb-[8px] h-[30px] relative">
                <ArrowLeft className="cursor-pointer" onClick={prev} />
                <p className="text-gray-90 text-[20px] font-semibold absolute top-0 left-[50%] translate-x-[-50%] dark:text-gray-40">
                  {dayjs(searchDate).format('M월 D일')}
                </p>
                {searchDate < today && (
                  <ArrowRight
                    className="cursor-pointer absolute right-0 top-0"
                    onClick={next}
                  />
                )}
              </div>
              {/* 타이머 */}
              <HomeTimer />
              {/* 다짐 */}
              {groups && dazims && (
                <HomeDazimContainer
                  groups={groups.data}
                  user={user.data}
                  dazims={dazims.data}
                  isTooltip={
                    dazims.data.users[0].isMe &&
                    searchDate === today &&
                    dazims.data.myDazimCount === 0
                  }
                  isPlus={searchDate === today}
                  onClickDazim={onClickDazim}
                />
              )}
            </div>
          </>
        )}
      </div>
      {isOpenTitleDrawer && (
        <HomeDazimTitleDrawer
          value={titleInput}
          isOpen={isOpenTitleDrawer}
          onChange={onChangeTitleInput}
          onClick={onClickTitleButton}
          onClose={toggleTitleDrawer}
        />
      )}
      {isOpenUploadDrawer && (
        <HomeDazimUploadDrawer
          onChange={onChangeUpload}
          onClose={toggleUploadDrawer}
        />
      )}
    </>
  );
};

export default HomeContainer;
