import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { useMediaQuery } from "react-responsive";

const options = {
  damping: 0.07,
};

const SmoothScroll = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  useEffect(() => {
    if (!isDesktop) return; 

    const scrollbarContainer = document.querySelector("#my-scrollbar");
    if (!scrollbarContainer) return;

    const scrollbar = Scrollbar.init(scrollbarContainer, options);

    return () => {
      if (scrollbar) scrollbar.destroy();
    };
  }, [isDesktop]);

  return null;
};

export default SmoothScroll;
