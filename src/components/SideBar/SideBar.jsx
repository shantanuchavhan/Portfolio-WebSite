import React from "react";
import { useState } from "react";

import { useLocation, Link } from "react-router-dom";
import portfolioUrls from "./PortfolioSectionsNames";

import active from "../../images/active.png";
import ProfileImage from "../../images/profileImage2.png";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const lastWord = currentPath.split("/").filter(Boolean).pop();
  const [activeSection, setActiveSection] = useState(lastWord || "");
  return (
    <div className="flex flex-col z-[10] items-center justify-center shadow-right text-gray-500 fixed w-48 border-r border-red-100 ">
      <div className=" w-full text-center  relative">
        <img src={ProfileImage} alt="" className="h-60 w-60 object-cover" />
        <div className="text-lg text-white bg-blue-400 w-full h-10 absolute bottom-0 text-center opacity-60"></div>
        <div>
          <h1 className=" absolute bottom-3 left-10 text-white">Shantanu</h1>
        </div>
      </div>
      
      <div className="flex flex-col  w-full h-screen bg-opacity-20 backdrop-filter backdrop-blur-md   ">
        {portfolioUrls.map((menuItem, index) => (
          <div className="border-b border-[#202226] text-[#717172] ">
            <Link
              to={`/${menuItem.route}`}
              key={index}
              onClick={() => {
                setActiveSection((old) => menuItem.route);
              }}
            >
              <div className="flex gap-2 items-center justify-start px-8 mb-1  relative w-full py-3 ">
                {activeSection === menuItem.route && (
                  <div className="h-3 w-3 absolute left-3">
                    <img src={active} alt="" />
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <img className="h-4 w-4" src={menuItem.icon} alt="" />
                  <h5 className="text-sm">{menuItem.label}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
