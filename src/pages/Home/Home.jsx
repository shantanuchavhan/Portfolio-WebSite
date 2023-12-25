import React from 'react'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen   relative' >
      <div className="relative  flex items-center justify-center ">
       
        <motion.div
          initial={{ opacity: 0, x: 0}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}  
        >
        <div className="fixed inset-0 bg-black z-[-1] opacity-75 h-full">
        </div>
        
        </motion.div>

        <motion.div
      initial={{ opacity: 0, x: -100, color: 'white' }}
      animate={{ opacity: 1, x: 0, color: 'wheat' }}
      transition={{ duration: 1, ease: 'easeIn', delay: 1 }}
    >
      <h1 className=" z-1 text-[43px] bg-transparent">Shantanu chavhan</h1>
      <motion.div 
      initial={{ opacity: 0, y: 100, color: 'white' }}
      animate={{ opacity: 1, y: 0, color: 'white' }}
      transition={{  delay: 2.5 }} >
      <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Heyy")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Thank you for comming")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("I am full Stack Web Developer")
                        .start();
                }}
            />
      </motion.div>
    </motion.div>
       
      </div>
      <div className='fixed z-[-3] top-0 left-0 w-full h-screen '>
        <video autoPlay muted playsInline loop  className='w-full h-full object-cover'>
          <source src="https://res.cloudinary.com/ddw1upvx3/video/upload/v1703412728/pexels-mikhail-nilov-7534239_1080p_ivathm.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
  )
}

export default Home