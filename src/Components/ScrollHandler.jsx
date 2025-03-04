import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollbar = Scrollbar.get(document.querySelector("#my-scrollbar"));

    if (location.hash && scrollbar) {
      const element = document.querySelector(location.hash);
      if (element) {
        const offset = element.getBoundingClientRect().top + scrollbar.scrollTop;
        scrollbar.scrollTo(0, offset, 800); 
      }
    } else if (scrollbar) {
      scrollbar.scrollTo(0, 0, 800); 
    }
  }, [location]);

  return null;
};

export default ScrollHandler;
