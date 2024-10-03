import { getGroupDetail, updateGroupName } from '@lib/api/groups';
import showToast from '@lib/utils/toast';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import { useMutation, useQuery } from '@tanstack/react-query';

import { message } from 'antd';
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ChangeGroupNicknamePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const groupId = location.search.split('=')[1];
  const [value, setValue] = useState<string>('');

  const { data: groupDetail } = useQuery({
    queryKey: ['groupDetail'],
    queryFn: () => getGroupDetail(groupId),
    enabled: !!groupId,
  });

  const updateGroupNameMutation = useMutation({
    mutationFn: updateGroupName,
    onSuccess: () => {
      navigate(-1);
      showToast('변경이 완료되었어요.');
    },
    onError: (error: AxiosError) => {
      if (value === groupDetail.name) {
        return message.error('기존 이름과 동일합니다.');
      }
      if (error.status === 400) {
        return message.error('잘못된 이름입니다.');
      }
    },
  });

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickSubmit = () => {
    updateGroupNameMutation.mutate({ id: groupId, name: value });
  };

  useEffect(() => {
    if (groupDetail) return setValue(groupDetail.name);
  }, [groupDetail]);

  return (
    <div>
      <TopBar title="그룹 닉네임 변경" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <p className="text-gray-100 font-semibold text-[16px] mb-[16px] dark:text-gray-30">
          그룹 닉네임
        </p>
        <Input value={value} onChange={onChangeValue} />
        <Button
          disabled={value.length === 0}
          buttonType={value.length > 0 ? `fill-semibold` : `disabled-semibold`}
          name="완료"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '120px',
          }}
          onClick={onClickSubmit}
        />
      </div>
    </div>
  );
};

export default ChangeGroupNicknamePage;
