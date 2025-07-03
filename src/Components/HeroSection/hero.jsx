import React, { useMemo } from 'react'
import ContactBtn from './ContactBtn'
import Hassam from '/logo.svg'
import arrow from '../../assets/svgs/turn-right-arrow-white.svg';
import Arrowdark from '../../assets/svgs/turn-right-arrow.svg';
function hero() {
  
  const images = useMemo(()=>(
    {arrow,Arrowdark,Hassam}
  ),[]);
  return (
    <section className=" flex items-center justify-center flex-col  py-10 sm:py-30 ">
        <p  className="maintext">
       <span className="welcome">Welcome to my </span> <br/> 
        <span className="portfolio">Portfolio!</span>
      </p>
      <div className="container">
        <div className="w-32 h-32 sm:w-64 sm:h-64 ">
            <img src={images.Hassam} alt='hassam kiani' className="rounded-2xl" loading="lazy"></img>
        </div>
        <div className="w-64  sm:w-84 sm:h-64">
           <p className="text-center sm:text-justify text-dark-alternate dark:text-alternate text-xs sm:text-base">I am Muhammad Hassam Kiani, a Software Engineering student at Foundation University, Rawalpindi. With over three years of experience as a thumbnail designer. Currently, I am on a journey to enhance my skills and become a full-stack developer, Insha Allah.</p>
            <div className="flex items-center justify-center pt-5 flex-row gap-2">
                <img src={images.arrow} alt='arrow right' className="w-8 h-8 sm:w-10 sm:h-10 hidden dark:block" loading="lazy"></img>
                <img src={images.Arrowdark} alt='arrow right'  className=" w-8 h-8 sm:w-10 sm:h-10 block dark:hidden" loading="lazy"></img>
                <ContactBtn />
             </div>
      </div>
      </div>
      </section>
  )
}

export default hero;