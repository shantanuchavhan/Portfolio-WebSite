import React, { useEffect,useState } from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import { useSideBarContext } from "../../context/SideBarProvider";
import bg from "../../images/pexels-pixabay-326333.jpg";
import settings from "../../images/settings.png"
import { useSettingsContext } from "../../context/SettingsProvider";

const AnimatedSection = ({ Icon, sectionName, children }) => {
  const {setColor}=useSettingsContext()
  const [showSettings,setShowSettings]=useState(false)
  const { setIsOpen } = useSideBarContext();
  const spinTransition = {
    loop: Infinity,
    ease: "easeIn",
    duration: 10
    
  };
  useEffect(() => {
    setIsOpen((old) => false);
  }, [setIsOpen]);
  return (
    <div className="p-4 md:p-6 lg:p-8 text-white  min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
          <div className="absolute top-60 right-0 ">
          <div className="h-10 w-10 bg-white p-3 rounded-t" >
    <motion.img
      animate={{ rotate: 360, scale: [1,2,1,2,1,2] }}
      transition={spinTransition}
     onClick={()=>setShowSettings((old)=>!old)} src={settings} alt="" ></motion.img>
  </div>
            <div className={`bg-white ${showSettings ? "block":"hidden"} text-black h-32 p-2  flex flex-col gap-1 z-100`}>
                <h2>choose color</h2>
                <div className="flex gap-3">
                  <div className="bg-green-400 h-4 w-4" onClick={()=>setColor("bg-green-400")}></div>
                  <div className="bg-yellow-400 h-4 w-4" onClick={()=>setColor("bg-yellow-400")}></div>
                  <div className="bg-red-400 h-4 w-4" onClick={()=>setColor("bg-red-400")}></div>
                  <div className="bg-blue-400 h-4 w-4" onClick={()=>setColor("bg-blue-400")}></div>
                </div>
                <div>
                  <h4>choose language</h4>
                </div>
            </div>
          <div>

          </div>
        </div>
        <Header Icon={Icon} sectonName={sectionName} />
        {children}
      </motion.div>
      <div className="fixed inset-0 bg-black z-[-1] opacity-75 h-screen w-screen"></div>
      <div className="fixed top-0 bottom-0 opacity-75 left-0 z-[-10]">
            <img className="object-cover left-0 z-[-10] h-screen w-screen" src={bg} alt="" />
          </div>
    </div>
  );
};

export default AnimatedSection;
