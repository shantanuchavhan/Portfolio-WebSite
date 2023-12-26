import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";

const AnimatedSection = ({ Icon, sectionName, children }) => {
  return (
    <div className=" p-8 text-white min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <Header Icon={Icon} sectonName={sectionName} />
        {children}
      </motion.div>
      <div className="fixed inset-0 bg-black z-[-1] opacity-75 h-full w-screen"></div>
    </div>
  );
};

export default AnimatedSection;
