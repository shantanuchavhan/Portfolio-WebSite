import React from "react";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block w-60 shadow-lg">
        <SideBar />
      </div>
      <div className="w-full ">
        <div className="text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
