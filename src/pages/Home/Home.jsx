import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useSideBarContext } from "../../context/SideBarProvider";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const dilogues=[t("Heyy"),t("Thank you for comming"),t("I am full Stack Web Developer")]
  const { isOpen, setIsOpen } = useSideBarContext();
  
  useEffect(() => {
    setIsOpen((old) => false);
  }, [setIsOpen]);
  console.log(dilogues,"dilogues")
  return (
    <div className="flex items-center z-1 justify-center h-screen   relative">
      {isOpen && (
        <div className="fixed inset-0 bg-black z-8 opacity-75  min-h-screen"></div>
      )}
      <div className="relative  flex flex-col gap-3  items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 6, ease: "easeIn" }}
        >
          <div className="fixed inset-0 bg-black z-[-1] opacity-50 h-screen h-screen"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100, color: "white" }}
          animate={{ opacity: 1, x: [-100,0], y:[0], color: "wheat" }}
          transition={{ duration: 1, ease: "easeIn", delay: 1 }}
          className="text-center"
        >
          <h1 className=" text-[43px] text-white bg-transparent">{t(
            "Shantanu Chavhan"
          )}</h1>
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
                  .deleteAll()
                  .typeString(dilogues[2])
                  .start();
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 100, color: "white" }}
           animate={{ opacity: 1, y: 0, color: "white" }}
           transition={{duration:2,ease: "easeIn", delay: 5}}
           className="text-center"
        >
          <h1>Your satisfaction is my satisfaction.</h1>
        </motion.div>
       
        <Link to={"/contact"}>
        <motion.h1
          initial={{ opacity: 0, y: 100, color: "white" }}
          animate={{ opacity: 1, y: 0, color: "white" }}
          transition={{duration:2,ease: "easeInOut", delay: 6}}
          className="border border-blue-300 p-2 w-full"

          >
            Hire me.</motion.h1>
        </Link>
        <motion.h1
          initial={{ opacity: 0, y: 100, color: "white" }}
          animate={{ opacity: 1, y: 0, color: "white" }}
          transition={{duration:2,ease: "easeInOut", delay: 7}}
          onClick={()=>setIsOpen(true)} className="lg:hidden border border-blue-300 p-2 w-full"
          
          >Explore.</motion.h1>

      </div>
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
