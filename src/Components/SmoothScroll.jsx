import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { useMediaQuery } from "react-responsive";

const options = {
  damping: 0.07,
};

const SmoothScroll = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    const scrollbarContainer = document.querySelector("#my-scrollbar");
    if (!scrollbarContainer) return;

    if (isDesktop) {
     
      const scrollbar = Scrollbar.init(scrollbarContainer, options);
      return () => scrollbar.destroy();
    } else {
      
      Scrollbar.destroy(scrollbarContainer);
    }
  }, [isDesktop]);

  return null;
};

export default SmoothScroll;
