import Navigation from '@components/common/base/Navigation';

import React from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <main className="bg-white mx-auto my-0 w-full h-full min-h-lvh pb-[90px] border-x-[0.5px] border-solid border-gray-40 desktop:w-[375px] dark:bg-black">
      <Outlet />
      <Navigation />
    </main>
  );
};

export default DefaultLayout;
