import React from "react";
import Icon from "../../images/suitcase.png"
import Header from "../../components/Header/Header";
const Portfolio = () => {
  return (
    <div >
      <Header Icon={Icon} sectonName={"Portfolio"}/>
      <div className="fixed inset-0 bg-black z-[-1] opacity-75 h-full w-screen"></div>
    </div>
  );
};

export default Portfolio;
