import { Github, Instagram, Linkedin } from "lucide-react";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import { FaBehance } from "react-icons/fa";

function Header() {
    const iconStyle = useMemo( ()=>
        "w-4 h-4 sm:w-5 sm:h-5 dark:text-zinc-500 cursor-pointer hover:scale-110 transition-transform duration-300 delay-75 ease-in-out z-[900]",
    []
    );
    const socialLinks = useMemo(
      () => [
        {
          href: "https://www.linkedin.com/in/hassam-kiani-648459248/",
          Icon: Linkedin,
          duration: 1.5,
        },
        {
          href: "https://github.com/hassamk122",
          Icon: Github,
          duration: 1.2,
        },
        {
          href: "https://www.behance.net/hassamkiani",
          Icon: FaBehance,
          duration: 1.8,
        },
        {
          href: "https://www.instagram.com/hassamkiani_/?igsh=MXhsYzBvenVzamJ1dg%3D%3D#",
          Icon: Instagram,
          duration: 0.9,
        },
      ],
      []
    );
  return (
    <div className="header">
      <ul className="flex items-end justify-end flex-row p-1 pr-20">
      {socialLinks.map(({ href, Icon, duration }, index) => (
          <motion.li
            key={index}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration }}
            className="social-icon"
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon className={iconStyle} />
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
