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