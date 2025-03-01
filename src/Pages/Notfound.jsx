
import ballon from '../assets/svgs/balloon-svgrepo-com.svg'
import { motion} from "motion/react";

function Notfound() {
  return (
    <div className=' flex items-center justify-center flex-col text-4xl h-screen text-zinc-800 font-Excalifont text-center py-40 overflow-hidden'>
        <motion.img initial={{x:200}} animate={{x:0}}  transition={{duration:2.4}}
        src={ballon} className='w-40 sm:w-60 p-2' alt='ballon-loading-animation'></motion.img>
        <h1 className='text-6xl sm:text-8xl'>404</h1><small className='text-sm sm:text-base'>The requested resource could not be found!</small></div>
  )
}

export default Notfound