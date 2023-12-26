import React, { useState } from "react";
import Icon from "../../images/suitcase.png";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [active, setActive] = useState("ALL");
  const sections = ["ALL", "WEBAPPS", "DASHBOARDS", "LANDINGPAGE"];

  return (
    <AnimatedSection Icon={Icon} sectionName={"Portfolio"}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center pt-10">
          <div className="flex rounded-xl gap-2 border border-gray-300 border-dotted overflow-hidden">
            {/* Use map to generate buttons dynamically */}
            {sections.map((section,index) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                
            
                key={index}
                className={`${active === section ? "bg-sky-400" : ""}  p-3 rounded-lg hover`}
                onClick={() => setActive(section)}
              >
                {section}
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h1>hii</h1>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Portfolio;
