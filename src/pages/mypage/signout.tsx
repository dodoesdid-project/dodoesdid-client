import { getUser } from '@lib/api/user';
import useInput from '@lib/hooks/useInput';

import Button from '@components/common/Button';
import Input from '@components/common/Input';
import TopBar from '@components/common/TopBar';

import { useQuery } from '@tanstack/react-query';

import { User } from '../../types/user';
import { Radio, RadioChangeEvent } from 'antd';
import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOutPage = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState<string>('');
  const [text, onChangeText] = useInput('');

  const { data: user } = useQuery<AxiosResponse<User>>({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const onChange = (e: RadioChangeEvent) => {
    setReason(e.target.value);
  };

  const handleSubmit = () => {
    const messageContent = reason === '직접입력' ? text : `${reason}`;
    navigate(`/mypage/account/signout-agree`, { state: messageContent });
  };

  return (
    <div>
      <TopBar title="회원탈퇴" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <p className="text-gray-100 text-[20px] font-semibold mb-[16px] dark:text-gray-30">
          {user?.data.name}님,
          <br />
          탈퇴하시는 이유가 궁금해요!
        </p>
        <p className="text-gray-70 text-[14px] mb-[24px] dark:text-gray-60">
          그동안 두더지 서비스를 이용해주셔서 감사해요.
          <br />
          {user?.data.name}님이 두더지를 사용하시면서 느꼈던 점을
          <br />
          공유해주시면 {user?.data.name}님의 소중한 의견 바탕으로
          <br />더 나은 두더지가 될게요.
        </p>
        <Radio.Group
          onChange={onChange}
          value={reason}
          className="flex flex-col gap-[24px] mb-[40px]"
        >
          <Radio
            value={'자주 사용하지 않아요'}
            className="text-gray-100 font-semibold dark:text-gray-30"
          >
            자주 사용하지 않아요
          </Radio>
          <Radio
            value={'사용 방법이 어렵고 불편해요'}
            className="text-gray-100 font-semibold dark:text-gray-30"
          >
            사용 방법이 어렵고 불편해요
          </Radio>
          <Radio
            value={'다짐 작성과 인증과정이 불편해요'}
            className="text-gray-100 font-semibold dark:text-gray-30"
          >
            다짐 작성과 인증과정이 불편해요
          </Radio>
          <Radio
            value={'개인정보가 걱정돼요'}
            className="text-gray-100 font-semibold dark:text-gray-30"
          >
            개인정보가 걱정돼요
          </Radio>
          <Radio
            value={'직접입력'}
            className="text-gray-100 font-semibold dark:text-gray-30"
          >
            직접입력
          </Radio>
        </Radio.Group>
        {reason === '직접입력' && (
          <Input
            value={text}
            onChange={onChangeText}
            placeholder="서비스 이용 중 아쉬운 점에 대해 이야기 해주세요."
          />
        )}
        <Button
          disabled={reason === '직접입력' && text === ''}
          buttonType={
            reason === '직접입력' && text === ''
              ? 'disabled-semibold'
              : 'fill-semibold'
          }
          name="다음"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '50px',
            transform: 'translateX(-50%)',
          }}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SignOutPage;
