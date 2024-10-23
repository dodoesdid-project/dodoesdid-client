import { getGroupDetail } from '@lib/api/groups';
import { defaultURL } from '@lib/data/defaultURL';

import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';

import { useQuery } from '@tanstack/react-query';

import { message } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SuccessGroupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const groupId = location.search.split('=')[1];

  const { data: groupDetail } = useQuery({
    queryKey: ['groupDetail'],
    queryFn: () => getGroupDetail(groupId),
    enabled: !!groupId,
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

  return (
    <div>
      <TopBar title="" onClickBack={() => navigate(-1)} />
      <p className="text-gray-100 font-semibold text-[16px] text-center mb-[44px] dark:text-gray-30">
        그룹이 생성되었어요
        <br />
        친구들에게 그룹을 공유하고 초대해보세요
      </p>
      <div className="w-[146px] aspect-square rounded-full overflow-hidden flex justify-center items-center mx-[auto] mb-[16px] border-solid border-[1px] border-gray-50">
        <img src={groupDetail?.thumbnail} alt="그룹이미지" />
      </div>
      <p className="text-primary text-[32px] text-center font-bold">
        {groupDetail?.name}
      </p>
      <p
        className="cursor-pointer text-center text-primary underline text-[14px] absolute bottom-[120px] left-[50%] translate-x-[-50%]"
        onClick={() => navigate('/')}
      >
        두더지 시작하기
      </p>
      <Button
        buttonType={'fill-semibold'}
        name="그룹 공유하기"
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
        onClick={shareInviteCode}
      />
    </div>
  );
};

export default SuccessGroupPage;
