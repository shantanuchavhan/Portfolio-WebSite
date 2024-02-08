import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useSideBarContext } from "../../context/SideBarProvider";
import { useSettingsContext } from "../../context/SettingsProvider";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import skilla from "../../images/JavaScriptIcon.webp"
import skillb from "../../images/CSSIcon.webp"
import skillc from "../../images/HTMLIcon.webp"
import skilld from "../../images/ReactIcon.webp"
import skille from "../../images/ReduxIcon.webp"
import skillf from "../../images/2285025.png"
import skillg from "../../images/icons8-amazon-aws-24.png"
import skillh from "../../images/icons8-stack-48.png"
import skilli from "../../images/icons8-sql-60.png"
import skillj from "../../images/icons8-git-50.png"

// import airbnb from "../../images/airbnb.png"
import foodeat from "../../images/foodeat.png"
import ecommerseapp from "../../images/ecommerseclothx.png"
import dashboard from "../../images/dashboard.png"
import landingpage from "../../images/landingpage1.png"
import voteapp from "../../images/Votingapp.png"



const Home = () => {
  const { t } = useTranslation();
  const {color}=useSettingsContext()
  const border=`border-${color}`
  const dilogues = [
    t("Heyy"),
    t("I am full Stack Web Developer"),
  ];
  const { isOpen, setIsOpen } = useSideBarContext();

  useEffect(() => {
    setIsOpen((old) => false);
  }, [setIsOpen]);
  console.log(dilogues, "dilogues");
  return (
    <div className="flex flex-col gap-10 items-center z-1 justify-center min-h-screen   relative">
      {isOpen && (
        <div className="fixed inset-0 bg-black z-8 opacity-75 h-screen"></div>
      )}
      <div className="relative  flex flex-col gap-3  h-screen items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 4, ease: "easeIn" }}
        >
          <div className="fixed inset-0 bg-black z-[-1] opacity-50 h-screen h-screen"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100, color: "white" }}
          animate={{ opacity: 1, x: [-100, 0], y: [0], color: "wheat" }}
          transition={{ duration: 1, ease: "easeIn", delay: 1 }}
          className="text-center"
        >
          <h1 className=" text-[43px] text-white bg-transparent">
            {t("Shantanu Chavhan")}
          </h1>
          <motion.div
            initial={{ opacity: 0, x: -100, color: "white" }}
            animate={{ opacity: 1, x: 0, color: "wheat" }}
            transition={{ duration: 1, ease: "easeIn", delay: 2 }}
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(dilogues[0])
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(dilogues[1])
                  .pauseFor(2000)
                  .start();
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, color: "white" }}
          animate={{ opacity: 1, y: 0, color: "white" }}
          transition={{ duration: 2, ease: "easeIn", delay: 3 }}
          className="text-center"
        >
          <h1>{t("Your satisfaction is my satisfaction")}.</h1>
        </motion.div>

        <Link to={"/contact"}>
          <motion.h1
            initial={{ opacity: 0, y: 100, color: "white" }}
            animate={{ opacity: 1, y: 0, color: "white" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 4 }}
            className={`border ${border} p-2`}
          >
            {t("Hire me")}
          </motion.h1>
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 100, color: "white" }}
          animate={{ opacity: 1, y: 0, color: "white" }}
          transition={{ duration: 2, ease: "easeInOut", delay: 5 }}
          onClick={() => setIsOpen(true)}
          className={`lg:hidden border border-${color} p-2`}
        >
          {t("Explore")}
        </motion.h1>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 100, color: "white" }}
          animate={{ opacity: 1, y: 0, color: "white" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 5 }}
          onClick={() => setIsOpen(true)}
          className={`bg-white p-2 text-center rounded-[20px] -mt-44 flex flex-col`}
        >
          <h1 className="text-black text-[24px] italic">Skills</h1>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:flex gap-4 p-4 text-black ">

          <div>
              <img src={skilla} className="h-14 w-14" alt="" />
              <h1>Javascript</h1>
            </div>
            <div>
              <img src={skillb} className="h-14 w-14" alt="" />
              <h1>Html</h1>
            </div>
            <div>
              <img src={skillc} className="h-14 w-14" alt="" />
              <h1>Css</h1>
            </div>
            <div>
              <img src={skilld} className="h-14 w-14" alt="" />
              <h1>React</h1>
            </div>
            <div>
              <img src={skille} className="h-14 w-14" alt="" />
              <h1>Redux</h1>
            </div>
            <div>
              <img src={skillf} className="h-14 w-14" alt="" />
              <h1>Django</h1>
            </div>
         
           
            <div>
              <img src={skillh} className="h-14 w-14" alt="" />
              <h1>Mern</h1>
            </div>
            <div>
              <img src={skilli} className="h-14 w-14" alt="" />
              <h1>Sql</h1>
            </div>
            <div>
              <img src={skillj} className="h-14 w-14" alt="" />
              <h1>Git</h1>
            </div>

            <div>
              <img src={skillg} className="h-14 w-14" alt="" />
              <h1>Aws</h1>
            </div>

            
          </div>

          
        </motion.div>
      <motion.div
          initial={{ opacity: 0, y: 100, color: "white" }}
          animate={{ opacity: 1, y: 0, color: "white" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 6 }}
          onClick={() => setIsOpen(true)}
          className={`p-4  rounded-[20px]`}
        >
          <h1 className="p-3 text-[30px]">Projects</h1>
          <div className="grid  md:grid-cols-2 gap-3 grid-cols-1">
  <a href="https://github.com/shantanuchavhan/airbnbclient.git" target="_blank" rel="noreferrer" className="border border-white p-2 text-red-300">
    <div className="h-[200px] w-[350px] bg-white">
      <img className="h-full w-full object-fit-cover" src="https://res.cloudinary.com/ddw1upvx3/image/upload/v1704445012/dgpbdblxl4obwvffzloa.png" alt="" />
    </div>
  </a>
  
  <a href="https://github.com/shantanuchavhan/foodeat-app.git" target="_blank" rel="noreferrer" className="border border-white p-2 text-red-300">
    <div className="h-[200px] w-[350px] bg-white">
      <img className="h-full w-full object-fit-cover" src={foodeat} alt="" />
    </div>
  </a>
  
  <a href="https://github.com/shantanuchavhan/ecommerce-react.git" target="_blank" rel="noreferrer" className="border border-white p-2 text-red-300">
    <div className="h-[200px] w-[350px] bg-white">
      <img className="h-full w-full object-fit-cover" src={ecommerseapp} alt="" />
    </div>
  </a>
  
  <a href="https://github.com/shantanuchavhan/foodeat-app.git" target="_blank" rel="noreferrer" className="border border-white p-2 text-red-300">
    <div className="h-[200px] w-[350px] bg-white">
      <img className="h-full w-full object-fit-cover" src={dashboard} alt="" />
    </div>
  </a>
  
  <a href="https://github.com/shantanuchavhan/landing_page4.git" target="_blank" rel="noreferrer" className="border border-white p-2 text-red-300">
    <div className="h-[200px] w-[350px] bg-white">
      <img className="h-full w-full object-fit-cover" src={landingpage} alt="" />
    </div>
  </a>
  
  <a href="https://github.com/shantanuchavhan/vote_system_uysing_nodejs_sqlite.git" target="_blank" rel="noreferrer" className="border border-white p-2 text-red-300">
    <div className="h-[200px] w-[350px] bg-white">
      <img className="h-full w-full object-fit-cover" src={voteapp} alt="" />
    </div>
  </a>
</div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100, color: "white" }}
          animate={{ opacity: 1, y: 0, color: "white" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 7 }}
          onClick={() => setIsOpen(true)}
          className={`p-4  rounded-[20px] `}
        >
          <h1 className="p-3 text-[30px]">Services</h1>
          <div className="grid md:grid-cols-3 gap-3 grid-cols-2 font-dancing-script  ">
                <div className="h-[100px] w-[130px] md:h-[100px] w-[200px] bg-white rounded-[20px] flex items-center justify-center">
                  <h1 className="text-black text-[26px] font-bold">Web Apps</h1>
                </div>
                <div className="h-[100px] w-[130px] md:h-[100px] w-[200px] bg-white rounded-[20px] flex items-center justify-center">
                  <h1 className="text-black text-[26px] font-bold">Dashboards</h1>
                </div>
                <div className="h-[100px] w-[130px] md:h-[100px] w-[200px] bg-white rounded-[20px] flex items-center justify-center">
                  <h1 className="text-black text-[26px] font-bold">Landing Pages</h1>
                </div>
                <div className="h-[100px] w-[130px] md:h-[100px] w-[200px] bg-white rounded-[20px] flex items-center justify-center">
                  <h1 className="text-black text-[26px] font-bold">Responsive Ui</h1>
                </div>
                <div className="h-[100px] w-[130px] md:h-[100px] w-[200px] bg-white rounded-[20px] flex items-center justify-center">
                  <h1 className="text-black text-[26px] font-bold">Deployement</h1>
                </div>
                <div className="h-[100px] w-[130px] md:h-[100px] w-[200px] bg-white rounded-[20px] flex items-center justify-center">
                  <h1 className="text-black text-[26px] font-bold">Cloud Services</h1>
                </div>
              
          </div>
        </motion.div>
        <Link to={"/contact"}>
          <motion.h1
            initial={{ opacity: 0, y: 100, color: "white" }}
            animate={{ opacity: 1, y: 0, color: "white" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 6 }}
            className={`border ${border} p-2 mb-10 px-10 rounded-[20px]`}
          >
            {t("Hire me")}
          </motion.h1>
        </Link>
     
      <div className="fixed z-[-3] top-0 left-0 w-full h-screen ">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/ddw1upvx3/video/upload/v1703412728/pexels-mikhail-nilov-7534239_1080p_ivathm.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;
