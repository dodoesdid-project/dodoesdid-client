import { getUser } from '@lib/api/user';

import SplashScreen from '@components/contents/onboarding/SplashScreen';

import { useQuery } from '@tanstack/react-query';

import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const [isSplash, setIsSplash] = useState(false);
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  useEffect(() => {
    const hasVisited = Cookies.get('hasVisited');
    if (hasVisited) return;

    // 처음 방문시, 스플래시화면보이도록설정 + 쿠키심기
    if (!hasVisited) {
      setIsSplash(true);
      Cookies.set('hasVisited', 'true');
    }

    // 창을 닫을 때 쿠키삭제
    const handleBeforeUnload = () => {
      Cookies.remove('hasVisited');
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    // 2초후 스플래시화면 삭제
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isSplash]);

  if (isSplash || isLoading) {
    return <SplashScreen />;
  }

  const isOnboarded = localStorage.getItem('isOnboard');
  if (!isOnboarded) {
    return <Navigate to="/onboarding" />;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
