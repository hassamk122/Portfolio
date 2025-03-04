import React from 'react'
import { memo } from "react";
import { motion } from "motion/react";
const ContactBtn = ()=> {
  return (
    <motion.a
      whileHover={{scale:1.1}}
      whileTap={{scale:0.95}}
      href='https://www.linkedin.com/in/hassam-kiani-648459248/' target='_blank'
        className="flex items-center justify-center  text-zinc-100  bg-teal-400  
      py-2 sm:py-2 px-3 rounded-full dark:drop-shadow-[0px_2px_40px_rgba(0,213,190,0.3)] drop-shadow-[0px_2px_10px_rgba(0,0,0,0.2)] cursor-pointer text-xs sm:text-base">
        Contact Me
      </motion.a>
  )
}

export default memo(ContactBtn);