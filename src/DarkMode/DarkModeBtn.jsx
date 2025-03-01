
import { useState, useEffect } from "react";
import { Moon,Sun } from "lucide-react";
import {motion,AnimatePresence} from 'motion/react';

function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button
      onClick={ToggleTheme}
      className='nav-icon'
    >
      <AnimatePresence mode="wait">
        {theme === "dark" ? (
          <motion.div     
          key="sun"
          initial={{ opacity: 0,  rotate: 90 }}
          animate={{ opacity: 1,  rotate: 1 }}
          exit={{ opacity: 0, rotate: -90 }}
          transition={{ duration: 0.3 }}
        >
          <Moon  />
        </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1,  rotate: 1 }}
            exit={{ opacity: 0,  rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <Sun  />
          </motion.div>
          
        )}
      </AnimatePresence>
    </button>
  );
}

export default ToggleTheme;
