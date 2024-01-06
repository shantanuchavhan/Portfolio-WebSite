import React, { useState } from "react";

import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import portfolioUrls from "./PortfolioSectionsNames";

import ProfileImage from "../../images/profilepic.png";
import githubIcon from "../../images/github-logo.png";
import linkdinIcon from "../../images/linkedin.png";
import hackerrankIcon from "../../images/hackerrank_icon.png";
import youtubeIcon from "../../images/youtube.png";
import twitterIcon from "../../images/twitter.png";
import { useSettingsContext } from "../../context/SettingsProvider";

import { motion } from "framer-motion";

const socialMediaIcons = [
  {
    link: "https://github.com/shantanuchavhan",
    icon: githubIcon,
    size: "h-4 w-4",
  },
  {
    link: "https://www.linkedin.com/in/shantanu-chavhan-2b89b3164/",
    icon: linkdinIcon,
    size: "h-4 w-4",
  },
  {
    link: "https://www.youtube.com/channel/UCUKhXtdccE76cl97ZAzPIgA",
    icon: youtubeIcon,
    size: "h-5 w-5",
  },
  {
    link: "https://twitter.com/6557Chavhan/",
    icon: twitterIcon,
    size: "h-5 w-5",
  },
  {
    link: "https://www.hackerrank.com/dashboard",
    icon: hackerrankIcon,
    size: "h-5 w-5",
  },
];

const SideBar = () => {
  const { t } = useTranslation();
  const { color } = useSettingsContext();
  const location = useLocation();
  const currentPath = location.pathname;
  const lastWord = currentPath.split("/").filter(Boolean).pop();
  const [activeSection, setActiveSection] = useState(lastWord || "");

  const handleLinkClick = (menuItem) => {
    setActiveSection(menuItem.route);
    // setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 3, ease: "easeInOut" }}
      className="flex flex-col min-h-screen   bg-opacity-20 backdrop-filter backdrop-blur-md    items-center justify-between shadow-right text-gray-500 border-r-1 border-color-wheat"
    >
      <div>
        <div className="text-center relative">
          <img
            src={ProfileImage}
            alt=""
            className="h-60 mt-10 lg:mt-0 w-60 object-cover"
          />
          <div
            className={`hidden lg:block   bg-${color}  w-screen h-10 absolute bottom-0 flex items-center justify-center opacity-75`}
          >
            <h1 className="absolute bottom-3 pl-16 text-lg  text-white">
              Shantanu{" "}
            </h1>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col w-full  ">
          {portfolioUrls.map((menuItem) => (
            <Link
              to={`/${menuItem.route}`}
              key={menuItem.route}
              onClick={() => handleLinkClick(menuItem)}
            >
              <div className="border-b border-[#202226] text-[#717172]">
                <div className="flex gap-2 items-center justify-start px-8 mb-1 relative w-full py-3">
                  {activeSection === menuItem.route && (
                    <div
                      className={`h-3 w-3 absolute left-3 bg-${color} h3 w-3 rounded-full`}
                    ></div>
                  )}
                  <div className="flex items-center gap-2">
                    <img className="h-4 w-4" src={menuItem.icon} alt="" />
                    <h5 className="text-sm">
                      {t(menuItem.label).toUpperCase()}
                    </h5>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Social Media Icons */}
      </div>
      <div className="flex gap-3 items-center px-8 py-4">
        {socialMediaIcons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="opacity-75 hover:scale-110 hover:opacity-100"
          >
            <img
              alt={`Icon for ${item.label}`}
              className={`filter filter-grayscale ${item.size} opacity-50 h-4 w-5`}
              src={item.icon}
            />
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default SideBar;
