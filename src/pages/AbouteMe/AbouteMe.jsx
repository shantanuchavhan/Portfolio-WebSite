import React from 'react'
import AboutmeIcon from "../../images/profile.png"
import bg from "../../images/pexels-pixabay-326333.jpg"
import { motion } from 'framer-motion'
const AbouteMe = () => {
  return (
    <div className='relative flex flex-col h-screen p-8  text-white '>
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
      <div className='absolute top-0 left-0 z-[-1] w-screen '>
        <img  src={bg} alt="" />
      </div>
    </div>
  )
}

export default AbouteMe