/* eslint-disable @typescript-eslint/no-unused-vars */
import useToggle from '@lib/hooks/useToggle';

import TopBar from '@components/common/TopBar';
import LoginSearchPw from '@components/contents/login/LoginSearchPw';
import LoginSearchPwDrawer from '@components/contents/login/LoginSearchPwDrawer';
import LoginSearchPwSetting from '@components/contents/login/LoginSearchPwSetting';
import LoginSearchPwSuccessDrawer from '@components/contents/login/LoginSearchPwSuccessDrawer';

import React from 'react';

const LoginSearchPwContainer = () => {
  const [isOpenSearchPwDrawer, toggleSearchPwDrawer] = useToggle();
  const [isOpenSuccess, toggleSuccess] = useToggle();

  return (
    <div>
      <TopBar title="비밀번호 찾기" backLink="/login-email" />
      {/* step 1 */}
      {/* <LoginSearchPw /> */}
      {/* step 1-2 */}
      {/* <button onClick={toggleSearchPwDrawer}>pw</button> */}
      {/* step 2 */}
      {/* <LoginSearchPwSetting /> */}
      {/* step 2-2 */}
      {/* <button onClick={toggleSuccess}>success</button> */}

      {isOpenSuccess && <LoginSearchPwSuccessDrawer onClose={toggleSuccess} />}
      {isOpenSearchPwDrawer && (
        <LoginSearchPwDrawer onClose={toggleSearchPwDrawer} />
      )}
    </div>
  );
};

export default LoginSearchPwContainer;
