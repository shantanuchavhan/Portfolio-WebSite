import React, { useState } from "react";
import Icon from "../../images/suitcase.png";
import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";

const Portfolio = () => {
  const [active, setActive] = useState("ALL");
  const sections = ["ALL", "WEBAPPS", "DASHBOARDS", "LANDINGPAGE"];

  return (
    <AnimatedSection Icon={Icon} sectionName={"Portfolio"}>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-center pt-10">
          <div className="flex rounded-xl gap-2 border border-gray-300 border-dotted">
            {/* Use map to generate buttons dynamically */}
            {sections.map((section,index) => (
              <h2
                key={index}
                className={`${active === section ? "bg-blue-400" : ""}  p-3 rounded-lg`}
                onClick={() => setActive(section)}
              >
                {section}
              </h2>
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
