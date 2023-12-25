import React from "react";
import Icon from "../../images/email.png"
import Header from "../../components/Header/Header";
const Contact = () => {
  return (
    <div >
      <Header Icon={Icon} sectonName={"Contact"}/>
      <div className="fixed inset-0 bg-black z-[-1] opacity-75 h-full w-screen"></div>
    </div>
  );
};

export default Contact;
