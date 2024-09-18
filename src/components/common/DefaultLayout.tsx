import Navigation from '@components/common/Navigation';

import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <main className="bg-white mx-auto my-0 w-full h-full min-h-lvh pb-[90px] desktop:w-[375px]">
      <Outlet />
      <Navigation />
    </main>
  );
};

export default DefaultLayout;
