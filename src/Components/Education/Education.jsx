import React from 'react'
import {GraduationCap} from 'lucide-react'
function Education() {
  return (
    <div id='education' className=" flex items-center justify-center flex-col  py-5 sm:py-15">
        <h3 className="font-Excalifont flex items-center justify-center gap-2 pt-5 sm:pt-10 text-3xl sm:text-6xl text-teal-400 dark:drop-shadow-[0px_10px_80px_rgba(0,213,190,0.9)]">
            <GraduationCap className='w-10 h-10 sm:w-20 sm:h-20' />Education
        </h3>
        <table className='mt-5'>
        <tbody>    
            <EducationRow timePeriod='August, 2020 - May, 2022' degreeName='ICS - Intermediate of Computer Science' description='I did my ICS from Govt Gordon Graduate College Rawalpindi.' />
            <EducationRow timePeriod='Oct, 2023 - Present' degreeName='BSSE - Bachelors of Software Engineering' description='I currently doing BSSE from Foundation University, Rawalpindi.' />
        </tbody>
     </table>
        </div>
  )
}
const EducationRow = ({timePeriod,degreeName,description})=>{
    return(
        <tr className='font-quicksand'>
         <td className=' text-center p-2 sm:p-3 '>
            <small className=' text-justify font-semibold text-zinc-800 dark:text-zinc-300 text-[9px] sm:text-sm  pt-2'>{timePeriod}</small><br/>
        </td>
         <td className='  text-xs sm:text-base text-left p-3 sm:p-6 sm:w-82  border-l-2 dark:border-l-zinc-800 border-l-zinc-300'>
                 <h2 className='font-bold text-left text-zinc-700 dark:text-zinc-300'>
                     {degreeName}</h2>
                     <p className='text-zinc-800 dark:text-zinc-400 text-xs sm:text-sm pt-2'>{description}</p>
        </td>
    </tr>
    )
}
export default Education