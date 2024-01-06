import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
import { useSideBarContext } from "../../context/SideBarProvider";
import { useSettingsContext } from "../../context/SettingsProvider";
import { motion } from "framer-motion";
import style from "./style.module.css";
import settings from "../../images/settings.png";
import SettingsSection from "../SettingsSection/SettingsSection";

const HomeLayout = () => {
  const { isOpen, setIsOpen } = useSideBarContext();
  const { color, setColor } = useSettingsContext();
  const [showSettings, setShowSettings] = useState(false);
  const spinTransition = {
    loop: Infinity,
    ease: "easeIn",
    duration: 20,
  };

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
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 2 }}
        className={`lg:hidden fixed top-0 left-0 px-4 py-2 z-20 ${color} opacity-50 border border-b w-screen ${
          isOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
      >
        <div className="line h-1 w-6 bg-white my-1"></div>
        <div className="line h-1 w-6 bg-gray-700 my-1"></div>
        <div className="line h-1 w-6 bg-gray-700 my-1"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 3 }}
        className="fixed top-60 right-0 z-30 "
      >
        <div className="h-10 w-10 bg-white p-3 rounded-t">
          <motion.img
            animate={{ rotate: 360, scale: [1, 2, 1, 2, 1, 2] }}
            transition={spinTransition}
            onClick={() => setShowSettings((old) => !old)}
            src={settings}
            alt=""
          ></motion.img>
        </div>
        {showSettings ? <SettingsSection setColor={setColor} /> : ""}

        <div></div>
      </motion.div>
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
