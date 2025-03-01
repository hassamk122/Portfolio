import React from 'react'
import { Wand } from 'lucide-react';
function Experience() {
  return (
    <div id='experience' className=" flex items-center justify-center flex-col  py-5 sm:py-15">
        <h3 className=" flex items-center font-Excalifont justify-center gap-2 pt-5 sm:pt-10 text-3xl sm:text-6xl
         text-teal-400 dark:drop-shadow-[0px_10px_80px_rgba(0,213,190,0.9)] ">
            <Wand className='w-10 h-10 sm:w-20 sm:h-20' />Experience
      </h3>
      <div className='font-quicksand font-bold mt-5 flex  px-2 py-4
      items-center justify-center flex-row flex-wrap sm:gap-y-2 sm:gap-x-20 cursor-pointer mx-3
       bg-zinc-100/3 rounded-2xl border border-zinc-200 dark:bg-zinc-900/15 dark:backdrop-blur-md dark:border
        dark:dark:border-zinc-100/5 dark:border-b-zinc-200/30 dark:rounded-xl dark:shadow-xl'>
            <ExperienceCard timePeriod = '2021 - 2023' expName ='Freelance - Thumbnail design' description='Through my experience, I have developed a keen eye for what works in different niches and consistently deliver high-quality designs that enhance content performance. My skill set includes advanced image manipulation, typography selection, and optimizing thumbnails for different platforms to maximize visibility and impact.' />
            {/* <ExperienceCard timePeriod = '2024 - present' expName ='Web Development' description='Through my experience, I have developed a keen eye for what works in different niches and consistently deliver high-quality designs that enhance content performance. My skill set includes advanced image manipulation, typography selection, and optimizing thumbnails for different platforms to maximize visibility and impact.' />   */}
     </div>
    </div>
  )
}

const ExperienceCard = ({timePeriod, expName , description})=>{
    return(
    <div className='py-3'>
                    <span className='flex items-center  flex-col text-zinc-700 dark:text-zinc-300 pb-2'>
                    <small className='font-light text-left text-[10px] sm:text-sm  '>{timePeriod}</small>
                   <h3 className='text-left text-[12px] sm:text-sm '>   
                {expName}</h3></span>
                <p className='border-l-2 dark:border-l-zinc-800 border-l-zinc-300 text-zinc-800 dark:text-zinc-400 font-normal text-[12px] sm:text-base text-justify px-4 pb-2 sm:w-82  '>{description}</p>
                </div> 
    )
}
export default Experience