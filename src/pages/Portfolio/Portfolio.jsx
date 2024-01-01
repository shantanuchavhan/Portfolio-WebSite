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
        <div>
          <h1>{active}</h1>
          {/* Display projects */}
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <img src={project.images} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Portfolio;
