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

      if (!Scrollbar.get(scrollbarContainer)) {
        Scrollbar.init(scrollbarContainer, options);
      }
    } else {

      const scrollbar = Scrollbar.get(scrollbarContainer);
      if (scrollbar) {
        scrollbar.destroy();
      }


      scrollbarContainer.style.overflow = "auto";
      scrollbarContainer.style.height = "100%";
      scrollbarContainer.style.webkitOverflowScrolling = "touch"; 
    }

    return () => {
     
      const scrollbar = Scrollbar.get(scrollbarContainer);
      if (scrollbar) scrollbar.destroy();
    };
  }, [isDesktop]);

  return null;
};

export default SmoothScroll;
