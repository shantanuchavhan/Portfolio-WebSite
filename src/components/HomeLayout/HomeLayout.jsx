import React, { useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { useSideBarContext } from "../../context/SideBarProvider";

import style from "./style.module.css";

const HomeLayout = () => {
  const { isOpen, setIsOpen } = useSideBarContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);

  return (
    <div className="flex">
      <div
        className={`lg:hidden fixed top-0 left-0 px-4 py-2 z-20 bg-sky-300 border border-b w-screen ${
          isOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
      >
        <div className="line h-1 w-6 bg-white my-1"></div>
        <div className="line h-1 w-6 bg-gray-700 my-1"></div>
        <div className="line h-1 w-6 bg-gray-700 my-1"></div>
      </div>
      <div
        className={`${
          isOpen ? "block " : "hidden  w-1/6"
        }  lg:block w-50 z-10 overflow-scroll scrollbar-none overflow-x-hidden fixed top-0 left-0  bottom-0  ${
          style.hideScrollbar
        }  shadow-lg`}
      >
        <SideBar setIsOpen={setIsOpen} />
      </div>
      <div className="w-full z-9 lg:ml-56 min-h-screen">
        <div className="text-white">
          {isOpen && (
            <div className="fixed inset-0 bg-black z-8 opacity-75  min-h-screen"></div>
          )}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
