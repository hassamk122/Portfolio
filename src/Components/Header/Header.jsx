import { Github, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { FaBehance } from "react-icons/fa";

function Header() {
    const iconStyle = "w-4 h-4 sm:w-5 sm:h-5 dark:text-zinc-500 cursor-pointer hover:scale-110 transition-transform duration-300 delay-75 ease-in-out";

  return (
    <div className="header">
      <ul className="flex items-end justify-end flex-row p-1 pr-20">
      <motion.li
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="social-icon"
        >
         <a href="https://www.linkedin.com/in/hassam-kiani-648459248/" target="_blank"> <Linkedin    className={iconStyle} /></a>
        </motion.li>
        <motion.li

          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2 }}
          className="social-icon"
        >
         <a href="https://github.com/hassamk122" target="_blank"> <Github  className={iconStyle} /></a>
        </motion.li>
        <motion.li
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.8 }}
          className="social-icon"
        >
         <a href="https://www.behance.net/hassamkiani" target="_blank"><FaBehance    className={iconStyle} /></a> 
        </motion.li>
        <motion.li
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
          className="social-icon"
        >
          <a href="https://www.instagram.com/hassamkiani_/?igsh=MXhsYzBvenVzamJ1dg%3D%3D#" target="_blank"><Instagram  className={iconStyle} /></a>
        </motion.li>
      </ul>
    </div>
  );
}

export default Header;
