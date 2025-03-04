import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
  damping: 0.07,
};

const SmoothScroll = () => {
  useEffect(() => {
    const scrollbarContainer = document.querySelector("#my-scrollbar");

   
    if (!scrollbarContainer) return;

    const scrollbar = Scrollbar.init(scrollbarContainer, options);

    
    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, []);

  return null; 
};

export default SmoothScroll;
