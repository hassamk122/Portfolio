import React, { useMemo } from 'react'

import Marquee from "react-fast-marquee";
import images from './images.jsx'
import { motion } from "motion/react";
motion
function ThumbnailMarquee({speed,from,to}) {
  const displayedImages = images.slice(from, to);  
  return (
    <div className="relative  rounded-lg  ">
  <div className="absolute top-0 left-0 h-full w-15 sm:w-40  bg-gradient-to-r from-zinc-100 dark:from-zinc-900 to-transparent pointer-events-none z-10"></div>
  <div className="absolute top-0 right-0 h-full w-15 sm:w-40 bg-gradient-to-l from-zinc-100 dark:from-zinc-900 to-transparent pointer-events-none z-10"></div>

  <Marquee speed={speed} pauseOnHover={true} className="cursor-pointer">
    {displayedImages.map((image, index) => (
      <img key={index} src={image.img} className="h-16 sm:h-32 mx-2 rounded-lg" />
    ))}
  </Marquee>
</div>

  );
}

export default ThumbnailMarquee;