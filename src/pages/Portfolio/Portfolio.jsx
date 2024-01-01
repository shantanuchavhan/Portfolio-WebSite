import React, { useState, useEffect } from "react";
import Icon from "../../images/suitcase.png";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import { motion } from "framer-motion";
import style from "./style.module.css";
import { useSettingsContext } from "../../context/SettingsProvider";

const Portfolio = () => {
  const [active, setActive] = useState("ALL");
  const [projects, setProjects] = useState([]);
  const {color}=useSettingsContext()

  useEffect(() => {
    // Fetch projects based on the selected section
    const fetchProjects = async () => {
      try {
        const response = await fetch(`https://myportfolio-t7n4.onrender.com/projects/`);
        if (response.ok) {
          const data = await response.json();
          console.log(data,"data")
          setProjects(data);
        } else {
          console.error("Failed to fetch projects");
        }
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, [active]);

  const sections = ["ALL", "WEBAPPS", "DASHBOARDS", "LANDINGPAGE"];

  return (
    <AnimatedSection Icon={Icon} sectionName={"Portfolio"}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center pt-10">
          <div className={`flex rounded-xl gap-2 border border-gray-300  border-dotted overflow-hidden  overflow-x-scroll ${style.scroll}`}>
            {/* Use map to generate buttons dynamically */}
            {sections.map((section, index) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                key={index}
                className={`${
                  active === section ? color : ""
                } cursor-pointer  p-3 rounded-lg hover`}
                onClick={() => setActive(section)}
              >
                {section}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
         initial={{ opacity: 0, x: -1000 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 2, ease: "easeInOut",delay:1 }}
         className="flex flex-col gap-6 px:10 lg:px-20">
          <motion.div 
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut",delay:1 }}
          className="">
            <h3>{projects.length}</h3>
          </motion.div>
          {/* Display projects */}
          <motion.ul 
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut",delay:1 }}
          className="flex flex-col gap-6" >
            {projects.map((project) => (
              <li className=" lg:flex lg:items-start lg:gap-6"  key={project.id}>
                <div className="lg:w-50">
                <img src={`https://res.cloudinary.com/ddw1upvx3/${project.images}`} alt="" />
                </div>
                <div >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                </div>
                
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Portfolio;
