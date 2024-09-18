import { navigationMenus } from '@lib/data/navigationMenus';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const url = '/' + location.pathname.split('/')[1];

  return (
    <nav className="w-full h-[90px] fixed bottom-0 desktop:w-[375px] shadow-[0_-8px_12px_0_rgba(0,0,0,0.05)] bg-white">
      <div className="w-full h-[56px] flex mt-[4px]">
        {navigationMenus.map((menu) => (
          <Link to={menu.link} key={menu.id} className="w-1/4 relative">
            <div
              className={
                url === menu.link
                  ? 'absolute left-[50%] translate-x-[-50%] w-12 h-full bg-primary rounded-t-[40%] cursor-pointer'
                  : 'absolute left-[50%] translate-x-[-50%] w-12 h-full bg-white rounded-t-[40%] cursor-pointer'
              }
            ></div>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-[8px] cursor-pointer">
              {url === menu.link ? menu.iconActive : menu.icon}
              <h2
                className={
                  url === menu.link
                    ? 'text-[10px] text-white'
                    : 'text-[10px] text-gray-60'
                }
              >
                {menu.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
