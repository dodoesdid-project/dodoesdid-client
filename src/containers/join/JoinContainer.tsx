import {
  createUser,
  emailAuthCompare,
  emailAuthSend,
  emailDuplicate,
  phoneDuplicate,
} from '@lib/api/user';
import useToggle from '@lib/hooks/useToggle';

import TopBar from '@components/common/TopBar';
import AgreeStep from '@components/contents/join/AgreeStep';
import BirthStep from '@components/contents/join/BirthStep';
import EmailDrawer from '@components/contents/join/EmailDrawer';
import EmailDuplicateDrawer from '@components/contents/join/EmailDuplicateDrawer';
import EmailNumberDrawer from '@components/contents/join/EmailNumberDrawer';
import EmailStep from '@components/contents/join/EmailStep';
import NameStep from '@components/contents/join/NameStep';
import PasswordStep from '@components/contents/join/PasswordStep';
import PhoneDuplicateDrawer from '@components/contents/join/PhoneDuplicateDrawer';
import PhoneStep from '@components/contents/join/PhoneStep';
import SuccessDrawer from '@components/contents/join/SuccessDrawer';

import { useMutation } from '@tanstack/react-query';

import { message } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const JoinContainer = () => {
  const [current, setCurrent] = useState(0);
  const [isOkEmail, setIsOkEmail] = useState<boolean>(false);
  const [isOpenEmailDrawer, toggleEmailDrawer] = useToggle();
  const [isOpenEmailNumberDrawer, toggleEmailNumberDrawer] = useToggle();
  const [isOpenEmailDuplicateDrawer, toggleEmailDuplicateDrawer] = useToggle();
  const [isOpenPhoneDuplicateDrawer, togglePhoneDuplicateDrawer] = useToggle();
  const [isOpenSuccessDrawer, toggleSuccessDrawer] = useToggle();

  const prev = () => {
    setCurrent((prev) => --prev);
  };
  const next = () => {
    setCurrent((prev) => ++prev);
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
    mutationKey: ['email-send'],
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

  const emailDuplicateMutation = useMutation({
    mutationFn: emailDuplicate,
    onSuccess: () => {
      setIsOkEmail(true);
    },
    onError: () => {
      toggleEmailDuplicateDrawer();
    },
  });

  const phoneDuplicateMutation = useMutation({
    mutationFn: phoneDuplicate,
    onSuccess: () => {
      next();
    },
    onError: () => {
      togglePhoneDuplicateDrawer();
    },
  });

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toggleSuccessDrawer();
    },
  });

  const onClickEmail = (data: FieldValues) => {
    message.success('메일을 전송중입니다.');
    emailSendMutation.mutate(data.email);
  };

  const onClickAuth = () => {
    emailAuthMutation.mutate({
      email: email,
      code: authNumber as string,
    });
  };

  const onClickEmailDuplicate = () => {
    const values = getValues();
    emailDuplicateMutation.mutate({ email: values.email });
  };

  const onClickPhoneDuplicate = () => {
    const values = getValues();
    phoneDuplicateMutation.mutate({ phone: values.phone });
  };

  const onClickSubmit = () => {
    const values = getValues();

    const userData: {
      email: string;
      password: string;
      name: string;
      birth: string;
      phone: string;
    } = {
      email: values.email,
      password: values.password,
      name: values.name,
      birth: dayjs(values.date).format('YYYY-MM-DD'),
      phone: values.phone,
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
          isOkEmail={isOkEmail}
          onClickDuplicate={onClickEmailDuplicate}
          onClickEmailSend={handleSubmit(onClickEmail)}
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
      content: (
        <PhoneStep
          control={control}
          isValid={isValid}
          onClick={onClickPhoneDuplicate}
        />
      ),
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

  useEffect(() => {
    // console.log(isOkEmail);
  }, [isOkEmail]);

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
      {isOpenEmailDuplicateDrawer && (
        <EmailDuplicateDrawer onClose={toggleEmailDuplicateDrawer} />
      )}
      {isOpenPhoneDuplicateDrawer && (
        <PhoneDuplicateDrawer onClose={togglePhoneDuplicateDrawer} />
      )}
      {isOpenSuccessDrawer && <SuccessDrawer onClose={toggleSuccessDrawer} />}
    </>
  );
};

export default JoinContainer;
