import React, { useState, useEffect } from "react";
import Icon from "../../images/suitcase.png";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
import { motion } from "framer-motion";
import style from "./style.module.css";
import { useSettingsContext } from "../../context/SettingsProvider";
import ReactLoading from "react-loading";
import img from "../../images/error.jpg"
import { useTranslation } from 'react-i18next';
const Portfolio = () => {
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState([]);
  const {color}=useSettingsContext()
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(false)
  const { t } = useTranslation();

  useEffect(() => {
    // Fetch projects based on the selected section
    const fetchProjects = async () => {
      setLoading((old)=>true)
      try {
          if(active==="all"){
            const response = await fetch(`https://myportfolio-t7n4.onrender.com/projects/`)
            getResponse(response)
          }else{
            const response = await fetch(`https://myportfolio-t7n4.onrender.com/projects/${active.toLowerCase()}/`)
            getResponse(response)
          }
          async function getResponse(response){
            if (response.ok) {
              const data = await response.json();
              setProjects(data);
              setLoading((old)=>false)
          } else {
              setError(true)
              console.error("Failed to fetch projects");
          }
          }
      } catch (error) {
          console.error("Error fetching projects", error);
      }
  };

    fetchProjects();
  }, [active]);

  const sections = ["all","webapps", "dashboards", "landingpage"];

  return (
    <AnimatedSection Icon={Icon} sectionName={"portfolio"}>
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
                {t(section).toUpperCase()}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 px:10 lg:px-20">
          <motion.div 
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="">
            <h3>Total Projects:-{projects.length}</h3>
          </motion.div>
          {/* Display projects */}
          <div>
             {
            !loading ? (
              <motion.ul 
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut", }}
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
            ):error ?(
              <div className="flex items-center justify-center h-full pt-6">
                <h5>Oops something wrong!!</h5>
                <img className="h-20 w-20" src={ img} alt="" />
              
              </div>
              
            ):(
              <div className='flex items-center justify-center h-full pt-6'>
                <div className='flex   gap-3'>
                <ReactLoading type="spokes" color="#0000FF" height={100} width={50} />
              </div>
              </div>
            )
          }
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Portfolio;
