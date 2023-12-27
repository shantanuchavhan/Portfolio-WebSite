import React,{useEffect} from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import { useSideBarContext } from "../../context/SideBarProvider";


const AnimatedSection = ({ Icon, sectionName, children }) => {
  const { setIsOpen} = useSideBarContext ();
  useEffect(()=>{
    
      setIsOpen((old)=>false)
      
  },[setIsOpen])
  return (
    <div className="p-4 lg:p-8 text-white  min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <Header Icon={Icon} sectonName={sectionName} />
        {children}
      </motion.div>
      
    </div>
  );
};

export default AnimatedSection;
