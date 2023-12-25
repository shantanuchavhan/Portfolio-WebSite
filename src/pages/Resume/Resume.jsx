import React from "react";
import Icon from "../../images/cv.png"
import Header from "../../components/Header/Header";
const Resume = () => {
  return <div >
    <Header Icon={Icon} sectonName={"Resume"}/>
    <div className="fixed inset-0 bg-black z-[-1] opacity-75 h-full w-screen"></div>
  </div>
};

export default Resume;
