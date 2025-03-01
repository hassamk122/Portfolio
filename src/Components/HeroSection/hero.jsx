import React from 'react'
import ContactBtn from './ContactBtn'
import Hassam from '../../assets/hassam.png'
import arrow from '../../assets/svgs/turn-right-arrow-white.svg';
import Arrowdark from '../../assets/svgs/turn-right-arrow.svg';
function hero() {
  return (
    <div className=" flex items-center justify-center flex-col  py-10 sm:py-30 ">
        <p  className="maintext">
       <span className="welcome">Welcome to my </span> <br/> 
        <span className="portfolio">Portfolio!</span>
      </p>
      <div className="container">
        <div className="w-32 h-32 sm:w-64 sm:h-64 ">
            <img src={Hassam} className="rounded-2xl" loading="lazy"></img>
        </div>
        <div className="w-64  sm:w-84 sm:h-64">
           <p className="text-center sm:text-justify text-dark-alternate dark:text-alternate text-xs sm:text-base">I am Muhammad Hassam Kiani, a Software Engineering student at Foundation University, Rawalpindi. With over three years of experience as a thumbnail designer. Currently, I am on a journey to enhance my skills and become a full-stack developer, Insha Allah.</p>
            <div className="flex items-center justify-center pt-5 flex-row gap-2">
                <img src={arrow}  className="w-8 h-8 sm:w-10 sm:h-10 hidden dark:block" loading="lazy"></img>
                <img src={Arrowdark}  className=" w-8 h-8 sm:w-10 sm:h-10 block dark:hidden" loading="lazy"></img>
                <ContactBtn />
             </div>
      </div>
      </div>
      </div>
  )
}

export default hero