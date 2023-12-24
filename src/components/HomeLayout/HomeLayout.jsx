import React from 'react';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block w-48 shadow-lg">
        <SideBar />
      </div>
      <div className="flex-grow">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
