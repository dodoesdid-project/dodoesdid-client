import {
  deleteGroup,
  getGroupDetail,
  updateGroupImage,
  updateGroupNotice,
} from '@lib/api/groups';
import { defaultURL } from '@lib/data/defaultURL';
import useIsDarkMode from '@lib/hooks/useIsDarkMode';
import useToggle from '@lib/hooks/useToggle';
import showToast from '@lib/utils/toast';

import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';
import MypageGroupExitDrawer from '@components/contents/mypage/MypageGroupExitDrawer';
import MypageGroupNotifyDrawer from '@components/contents/mypage/MypageGroupNotifyDrawer';

import { ReactComponent as ArrowDark } from '@assets/images/common/arrow-left-white.svg';
import { ReactComponent as Arrow } from '@assets/images/common/arrow-left.svg';
import { ReactComponent as CameraIcon } from '@assets/images/common/camera-white.svg';
import { ReactComponent as ShareDark } from '@assets/images/common/share-white.svg';
import { ReactComponent as Share } from '@assets/images/common/share.svg';

import { useMutation, useQuery } from '@tanstack/react-query';

import { message } from 'antd';
import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MyGroupInfoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const groupId = location.search.split('=')[1];
  const [notice, setNotice] = useState('');
  const isDarkMode = useIsDarkMode();
  const [isOpenNotifyDrawer, toggleNotifyDrawer] = useToggle();
  const [isOpenExitDrawer, toggleExitDrawer] = useToggle();

  const { data: groupDetail, refetch: refetchGroupDetail } = useQuery({
    queryKey: ['groupDetail'],
    queryFn: () => getGroupDetail(groupId),
    enabled: !!groupId,
  });

  const updateGroupImageMutation = useMutation({
    mutationFn: updateGroupImage,
    onSuccess: () => {
      refetchGroupDetail();
      showToast('변경이 완료되었어요.');
    },
    onError: (error: AxiosResponse) => {
      if (error.status === 409) {
        return message.error('중복된 사진입니다.');
      }
      message.error(error?.data);
    },
  });

  const updateGroupNoticeMutaion = useMutation({
    mutationFn: updateGroupNotice,
    onSuccess: () => {
      toggleNotifyDrawer();
      refetchGroupDetail();
      showToast('변경이 완료되었어요.');
    },
    onError: (error: AxiosResponse) => {
      if (error.status === 409) {
        return message.error('중복된 사진입니다.');
      }
      message.error(error?.data);
    },
  });

  const deleteGroupMutation = useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      navigate('/mypage/group');
      showToast('그룹에서 나갔습니다.');
    },
    onError: (error: AxiosResponse) => {
      message.error(error?.data);
    },
  });

  const shareInviteCode = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '초대 코드',
          text: `두더지 그룹에 초대되었습니다. 초대코드: ${groupDetail.inviteCode}`,
          url: `${defaultURL}/home/join-group?code=${groupDetail.inviteCode}`, // 여기에 초대링크 + id ?
        });
        console.log('초대 코드가 성공적으로 공유되었습니다.');
      } catch (error) {
        console.error('공유 중 오류 발생:', error);
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(groupId).then(
      () => {
        message.success('초대코드가 클립보드에 복사되었습니다.');
      },
      (err) => {
        console.error('클립보드에 복사 중 오류 발생:', err);
      },
    );
  };

  const onChangeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

      if (file.size > MAX_FILE_SIZE) {
        message.error('10MB이하의 사진을 올려주세요.');
        return;
      }
      updateGroupImageMutation.mutate({
        thumbnail: file as File,
        id: groupDetail.id,
      });
    }
  };

  const onChangeNotice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotice(e.target.value);
  };

  const onClickNoticeSubmit = () => {
    updateGroupNoticeMutaion.mutate({ id: groupDetail.id, notice });
  };

  const onClickExitSubmit = () => {
    deleteGroupMutation.mutate(groupDetail.id);
  };

  useEffect(() => {
    if (groupDetail) {
      setNotice(groupDetail.notice);
    }
  }, [groupDetail?.notice]);

  if (!groupDetail) return null;

  return (
    <>
      <TopBar title="그룹 편집" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <label
          htmlFor="photo"
          className="w-[120px] h-[120px] rounded-full flex justify-center items-center cursor-pointer mb-[45px] mx-auto relative border-[0.6px] border-solid border-gray-40 dark:border-[#444]"
        >
          <div className="w-[32px] h-[32px] rounded-full bg-[rgba(0,0,0,.7)] absolute bottom-[10px] right-0 flex justify-center items-center ">
            <CameraIcon />
          </div>
          <img
            src={groupDetail.thumbnail}
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
        <div>
          <div className="mb-[16px]">
            <p className="text-gray-100 font-semibold text-[16px] mb-[16px] dark:text-gray-30">
              그룹 닉네임
            </p>
            <div
              className="w-full px-[16px] py-[10px] flex justify-between items-center bg-gray-30 rounded-[8px] cursor-pointer dark:bg-[#2a2a2a]"
              onClick={() =>
                navigate(
                  `/mypage/group/info/nickname?groupId=${groupDetail.id}`,
                )
              }
            >
              <p className="text-gray-100 dark:text-gray-30">
                {groupDetail.name}
              </p>
              {isDarkMode ? (
                <ArrowDark className="rotate-180" />
              ) : (
                <Arrow className="rotate-180" />
              )}
            </div>
          </div>
          <div className="mb-[16px]">
            <p className="text-gray-100 font-semibold text-[16px] mb-[16px] dark:text-gray-30">
              그룹 공지
            </p>
            <div
              className="w-full px-[16px] py-[10px] flex justify-between items-center bg-gray-30 rounded-[8px] cursor-pointer dark:bg-[#2a2a2a]"
              onClick={toggleNotifyDrawer}
            >
              <p className="text-gray-70 dark:text-gray-60">
                {groupDetail.notice
                  ? groupDetail.notice
                  : '그룹의 공지사항을 적어보세요'}
              </p>
              {isDarkMode ? (
                <ArrowDark className="rotate-180" />
              ) : (
                <Arrow className="rotate-180" />
              )}
            </div>
          </div>
          <div className="mb-[48px]">
            <p className="text-gray-100 font-semibold text-[16px] mb-[16px] dark:text-gray-30">
              그룹 초대링크
            </p>
            <div
              className="w-full px-[16px] py-[10px] flex justify-between items-center bg-gray-30 rounded-[8px] cursor-pointer dark:bg-[#2a2a2a]"
              onClick={shareInviteCode}
            >
              <p className="text-gray-100 dark:text-gray-30">URL</p>
              {isDarkMode ? <ShareDark /> : <Share />}
            </div>
          </div>
          <Button
            buttonType="tinted-semibold"
            name="그룹 나가기"
            onClick={toggleExitDrawer}
          />
        </div>
      </div>
      {isOpenNotifyDrawer && (
        <MypageGroupNotifyDrawer
          value={notice}
          isOpen={isOpenNotifyDrawer}
          onClose={toggleNotifyDrawer}
          onClick={onClickNoticeSubmit}
          onChange={onChangeNotice}
        />
      )}
      {isOpenExitDrawer && (
        <MypageGroupExitDrawer
          groupName={groupDetail.name}
          isOpen={isOpenExitDrawer}
          onClose={toggleExitDrawer}
          onClick={onClickExitSubmit}
        />
      )}
    </>
  );
};

export default MyGroupInfoPage;
