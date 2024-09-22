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

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

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
  } = useForm({ mode: 'onChange' });

  const onClickSubmit = () => {
    console.log(getValues());
  };
  const { email } = getValues();

  const onClickEmailAuth = () => {
    toggleEmailDrawer();
    toggleEmailNumberDrawer();
    console.log(email);
  };

  // 인증번호드로우테스트중
  const [authNumber, setAuthNumber] = useState<number | unknown>();
  const onChangeAuthNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthNumber(e.target.value);
    console.log(authNumber);
  };

  // 데이터
  const steps = [
    {
      id: 1,
      content: (
        <EmailStep
          control={control}
          isValid={isValid}
          onClick={toggleEmailDrawer}
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
    <div className="flex flex-col gap-4 pt-[44px]">
      <TopBar title="회원가입" onClickBack={current === 0 ? undefined : prev} />
      {steps[current].content}

      {/* step 1-2*/}
      {/* <button onClick={toggleEmailDrawer}>EmailDrawer</button> */}
      {/* <button onClick={toggleEmailNumberDrawer}>EmailNumber</button> */}
      {/* <button onClick={toggleSuccessDrawer}>SuccessDrawer</button> */}
      {isOpenEmailDrawer && (
        <EmailDrawer onClose={toggleEmailDrawer} onClick={onClickEmailAuth} />
      )}
      {isOpenEmailNumberDrawer && (
        <EmailNumberDrawer
          authNumber={authNumber}
          isOpen={isOpenEmailNumberDrawer}
          onClose={toggleEmailNumberDrawer}
          onChange={onChangeAuthNumber}
          onClick={() => {
            next();
            toggleEmailNumberDrawer();
          }}
        />
      )}
      {isOpenSuccessDrawer && <SuccessDrawer onClose={toggleSuccessDrawer} />}
    </div>
  );
};

export default JoinContainer;
