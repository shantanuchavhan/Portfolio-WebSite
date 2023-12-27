import React from "react";
import Icon from "../../images/profile.png";

import AnimatedSection from "../../components/AnimatedSection/AnimatedSection";
const AbouteMe = () => {
  return (
    <AnimatedSection Icon={Icon} sectionName={"Aboute Me"}>
      <div className="flex-col gap-4 lg:flex  justify-between gap-10 pt-6   h-5/6 ">
        <div className=" lg:w-3/5  text-start pl-3">
          <h1 className="text-lg ">Full stack Web Developer </h1>
          <div>
            <div className="pt-2">
              <p className="text-gray-500 text-[18px]">
                Greetings! I'm a skilled Full Stack Web Developer specializing
                in{" "}
                <span className="text-gray-300">
                  React, Express.js, Next js, Tailwind, Css, MongoDB, Sql,
                  Node.js.
                </span>{" "}
                With a passion for crafting seamless digital experiences, I
                excel in
                <span className="text-gray-400">
                  {" "}
                  replicating intricate designs and optimizing solutions{" "}
                </span>
                . My focus is on creating pixel-perfect,{" "}
                <span className="text-gray-400">
                  All device responsive interfaces
                </span>
                . Embracing a{" "}
                <span className="text-gray-400">
                  {" "}
                  component-based and systematic approach{" "}
                </span>
                , I ensure designs are not just faithfully replicated but also
                optimized for efficiency. Let's collaborate to turn your digital
                vision into a dynamic reality!
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:w-2/5 text-start pl-3 ">
          <h1 className="text-lg">Personal information</h1>
          <div className="pt-2">
            <div className="flex gap-2">
              <h1>Name:</h1>
              <h3 className="text-gray-400">Shantanu chavhan</h3>
            </div>
            <div className="flex gap-2">
              <h1>Age:</h1>
              <h3 className="text-gray-400">23 Years</h3>
            </div>
            <div className="flex gap-2">
              <h1>Residence:</h1>
              <h3 className="text-gray-400">Mumbai,Maharastra</h3>
            </div>
            <div className="flex gap-2">
              <h1>Address:</h1>
              <h3 className="text-gray-400">
                Mahavir Paradise phase-3, forest Naka, Ambernath
              </h3>
            </div>
            <div className="flex gap-2">
              <h1>Email:</h1>
              <h3 className="text-gray-400">Shantanuchavhan002@gmail.com</h3>
            </div>
            <div className="flex gap-2">
              <h1>Phone:</h1>
              <h3 className="text-gray-400">+91 9011793540</h3>
            </div>
            <div className="flex gap-2">
              <h1>Freelance:</h1>
              <h3 className="text-gray-400">Available</h3>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AbouteMe;
