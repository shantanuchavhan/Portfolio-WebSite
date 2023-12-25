import React from "react";
import Icon from "../../images/cv.png"
import Header from "../../components/Header/Header";
import { motion } from "framer-motion";
const Resume = () => {
  return <div className="p-8 ">
    <motion.div
    initial={{ opacity: 0, x: 0}}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 3, ease: "easeInOut" }} >
      <Header Icon={Icon} sectonName={"Resume"}/>
    </motion.div>
    
    <div className="fixed inset-0 bg-black z-[-1] opacity-75 h-full w-screen"></div>
  </div>
};

export default Resume;
