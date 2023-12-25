import React from 'react'
import AboutmeIcon from "../../images/profile.png"

import { motion } from 'framer-motion'
const AbouteMe = () => {
  return (
    <div className='relative flex flex-col h-screen  text-white '>
      <motion.div
        initial={{ opacity: 0, x: 0}}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}  
      
      >
      <div className='p-8'>
      <div className='flex justify-between items-end pl-3 h-1/6 border-b border-dotted border-[#f8fee9] p-4'>
        <h1 className='text-4xl m-2'>About me</h1>
        <div>
            <img className=' h-8 w-8 m-2 ' src={AboutmeIcon} alt="" />
        </div>
      </div>
      <div className='flex justify-between pt-6   h-5/6 '>
        <div className=' w-3/5  text-start pl-3'>
            <h1 className='text-lg '>Full stack Web Developer </h1>
            <div>

              <p>
              <h1>HTML/CSS:</h1>

Fundamental languages for structuring and styling web content.
<h1>JavaScript:</h1>

The programming language used for both frontend and backend development.
<h1>React::</h1>

A JavaScript library for building user interfaces.
Enables the creation of reusable UI components, providing a dynamic and efficient user experience.
<h1>Node.js:</h1>

A JavaScript runtime that allows developers to run server-side JavaScript.
Used to build scalable and high-performance server-side applications.
<h1>Express.js:</h1>

A server-side framework for building web applications and APIs using Node.js.
Simplifies the process of building robust web applications.
<h1>MongoDB:</h1>

A NoSQL database that is commonly used in MERN stack development.
Stores data in flexible, JSON-like documents.
<h1>Database Design:</h1>

Designing database schemas and optimizing queries for efficient data retrieval.
<h1>RESTful API Design:</h1>

Creating APIs that follow the principles of Representational State Transfer (REST).
<h1>Backend Development:</h1>

Building server-side applications and APIs using Node.js and Express.js.
Integrating with databases like MongoDB for data storage.
<h1>Frontend Development:</h1>

Proficiency in building responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.
<h1>Security Best Practices:</h1>

Implementing security measures to protect against common web vulnerabilities.
<h1>Testing:</h1>

Writing and executing tests for both frontend and backend code to ensure reliability.
<h1>Continuous Integration/Continuous Deployment (CI/CD):</h1>

Automating the process of testing and deploying code changes.
<h1>Version Control (e.g., Git):</h1>

Essential for tracking changes in code, collaborating with other developers, and managing project versions.
<h1>Package Managers (e.g., npm):</h1>

Used for managing project dependencies and scripts.
<h1>Build Tools (e.g., Webpack):</h1>

Helps automate the process of building and bundling frontend code.
<h1>Deployment and Hosting:</h1>

Knowledge of deploying applications to servers or cloud platforms.
Familiarity with platforms like Heroku, AWS, or others.
              </p>
                
            </div>
        </div>
        <div className=' w-2/5 text-start pl-3 '>
            <h1 className='text-lg'>Personal information</h1>
            <div>
            </div>
        </div>
      </div>
      </div>
      

      </motion.div>
      <div className="fixed inset-0 bg-black z-[-1] opacity-75 h-full w-screen">
        </div>

      
    </div>
  )
}

export default AbouteMe