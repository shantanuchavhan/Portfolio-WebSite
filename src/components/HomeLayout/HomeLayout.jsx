import React, {useState,useEffect} from "react";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

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
  }, []);

  return (
    <div className="flex">
      <div
      className={`lg:hidden fixed top-5 left-5 z-20 ${isOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <div className="line h-1 w-6 bg-white my-1"></div>
      <div className="line h-1 w-6 bg-gray-700 my-1"></div>
      <div className="line h-1 w-6 bg-gray-700 my-1"></div>
    </div>
      <div className={`${isOpen ? "block fixed top-0" : "hidden  w-1/6" }  lg:block w-60 z-10 overflow-hidden   shadow-lg`}>
        <SideBar />
      </div>
      <div className="w-full z-1" >
  <div className="text-white" style={{ overflow: 'scroll' }}>
  {isOpen && (<div className="fixed inset-0 bg-black z-[-1] opacity-75 h-full"></div>)}
    <Outlet />
  </div>
</div>

    </div>
  );
};

export default HomeLayout;
