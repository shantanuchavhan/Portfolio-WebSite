import React from "react";
import Icon from "../../images/cv.png";

import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";

const Resume = () => {
  return <AnimatedSection Icon={Icon} sectionName={"resume"}>
    <div>
      <div>
        <h1>Education :- </h1>
      <div>
        <h1>Bachler of Electronic Engineering</h1>
        <h2>From:2019 to 2022</h2>
        <h2>Score:7.6 CGPA</h2>
      </div>
      <div>
        <h1>Diploma in Electronic Engineering</h1>
        <h2>From:2016 to 2019</h2>
        <h2>Score:71.71 % </h2>
      </div>
      <div>
        <h1>SSC</h1>
        <h2>From:2015 to 2016</h2>
        <h2>Score:82.80 % </h2>
      </div>
      </div>
    </div>
  </AnimatedSection>;
};

export default Resume;
