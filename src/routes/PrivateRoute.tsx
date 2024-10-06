import { getUser } from '@lib/api/user';

import { useQuery } from '@tanstack/react-query';

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  if (isLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
