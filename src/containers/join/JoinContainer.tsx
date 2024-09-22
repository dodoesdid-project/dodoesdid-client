import { createUser, emailAuthCompare, emailAuthSend } from '@lib/api/join';
import useToggle from '@lib/hooks/useToggle';

import TopBar from '@components/common/TopBar';
import AgreeStep from '@components/contents/join/AgreeStep';
import BirthStep from '@components/contents/join/BirthStep';
import EmailDrawer from '@components/contents/join/EmailDrawer';
import EmailNumberDrawer from '@components/contents/join/EmailNumberDrawer';
import EmailStep from '@components/contents/join/EmailStep';
import NameStep from '@components/contents/join/NameStep';
import PasswordStep from '@components/contents/join/PasswordStep';
import PhoneStep from '@components/contents/join/PhoneStep';
import SuccessDrawer from '@components/contents/join/SuccessDrawer';

import { useMutation } from '@tanstack/react-query';

import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const JoinContainer = () => {
  const [current, setCurrent] = useState(0);
  const [isOpenEmailDrawer, toggleEmailDrawer] = useToggle();
  const [isOpenEmailNumberDrawer, toggleEmailNumberDrawer] = useToggle();
  const [isOpenSuccessDrawer, toggleSuccessDrawer] = useToggle();

  const prev = () => {
    setCurrent(current - 1);
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const {
    control,
    formState: { isValid },
    setValue,
    getValues,
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const { email } = getValues();

  const emailSendMutation = useMutation({
    mutationFn: emailAuthSend,
    onSuccess: () => {
      toggleEmailDrawer();
    },
  });

  const emailAuthMutation = useMutation({
    mutationFn: emailAuthCompare,
    onSuccess: () => {
      toggleEmailNumberDrawer();
      next();
    },
  });

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toggleSuccessDrawer();
    },
  });

  const onClickEmail = (data: FieldValues) => {
    emailSendMutation.mutate(data.email);
  };

  const onClickAuth = () => {
    emailAuthMutation.mutate({
      email: email,
      verifyCode: authNumber as string,
    });
  };

  const onClickSubmit = () => {
    const values = getValues();

    const userData: {
      userEmail: string;
      password: string;
      userName: string;
      userBirth: string;
      userPhone: string;
    } = {
      userEmail: values.email,
      password: values.password,
      userName: values.name,
      userBirth: values.date,
      userPhone: values.phone,
    };

    createUserMutation.mutate(userData);
  };

  const [authNumber, setAuthNumber] = useState<string | unknown>();
  const onChangeAuthNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthNumber(e.target.value);
  };

  const steps = [
    {
      id: 1,
      content: (
        <EmailStep
          control={control}
          isValid={isValid}
          onClick={handleSubmit(onClickEmail)}
        />
      ),
    },
    {
      id: 2,
      content: (
        <PasswordStep
          getValues={getValues}
          control={control}
          isValid={isValid}
          onClick={next}
        />
      ),
    },
    {
      id: 3,
      content: <NameStep control={control} isValid={isValid} onClick={next} />,
    },
    {
      id: 4,
      content: <BirthStep control={control} isValid={isValid} onClick={next} />,
    },
    {
      id: 5,
      content: <PhoneStep control={control} isValid={isValid} onClick={next} />,
    },
    {
      id: 6,
      content: (
        <AgreeStep
          control={control}
          setValue={setValue}
          onClick={onClickSubmit}
        />
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-4 pt-[44px]">
        <TopBar
          title="회원가입"
          onClickBack={current === 0 ? undefined : prev}
        />
        {steps[current].content}
      </div>

      {isOpenEmailDrawer && (
        <EmailDrawer
          onClose={toggleEmailDrawer}
          onClick={() => {
            toggleEmailDrawer();
            toggleEmailNumberDrawer();
          }}
        />
      )}
      {isOpenEmailNumberDrawer && (
        <EmailNumberDrawer
          authNumber={authNumber}
          isOpen={isOpenEmailNumberDrawer}
          onClose={toggleEmailNumberDrawer}
          onChange={onChangeAuthNumber}
          onClick={onClickAuth}
        />
      )}
      {isOpenSuccessDrawer && <SuccessDrawer onClose={toggleSuccessDrawer} />}
    </>
  );
};

export default JoinContainer;
