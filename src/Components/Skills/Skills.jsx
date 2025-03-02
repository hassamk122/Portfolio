import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
function Skills() {
    const icons = [
        { hover:'hover:scale-110', key:'java', color : 'text-zinc-600 dark:text-[#F7F7F7]', text : 'Java' , iconName :FaJava},
        { hover:'hover:rotate-45', key:'react', color : 'text-[#5ED3F3]', text : 'React' , iconName :FaReact},
        { hover:'hover:scale-110', key:'tailwindcss', color : 'text-[#00BCFF]', text : 'TailwindCSS' , iconName :RiTailwindCssFill},
        { hover:'hover:scale-110', key:'js', color : 'text-[#FFD600]', text : 'JavaScript' , iconName :FaJs},
        { hover:'hover:scale-110', key:'html', color : 'text-[#FF6D00]', text : 'HTML' , iconName :FaHtml5},
        { hover:'hover:scale-110', key:'css', color : 'text-[#662F9A]', text : 'CSS' , iconName :FaCss3Alt},
        { hover:'hover:scale-110', key:'photoshop', color : 'text-[#1F96F7]', text : 'Photoshop' , iconName :SiAdobephotoshop}
    ]

  return (
    <div id="skills" className=" flex items-center justify-center flex-col  py-5">
      <h3 className=" flex items-center font-Excalifont justify-center gap-2 pt-5 sm:pt-10 text-3xl sm:text-6xl text-teal-400 dark:drop-shadow-[0px_10px_80px_rgba(0,213,190,0.9)]">
        <Sparkles
          className="w-10 h-10 sm:w-20 sm:h-20"
        />
        Skills
      </h3>
      <p className="font-quicksand font-normal pt-10 px-4 text-center text-xs sm:text-sm text-zinc-800 dark:text-zinc-100">
        I have experience working with the following technologies/tools:
      </p>
      <div className="font-quicksand font-bold mt-5 flex 

      items-center justify-center flex-row flex-wrap sm:gap-2 cursor-pointer mx-3
       bg-zinc-100/3 rounded-2xl border border-zinc-200 dark:bg-zinc-900/15 dark:backdrop-blur-md dark:border
        dark:dark:border-zinc-100/5 dark:border-b-zinc-200/30 dark:rounded-xl dark:shadow-xl">     
        {icons.map(({hover,key,color,text,iconName})=>(
            <IconCard key ={key} color ={color} text={text} iconName={iconName} hover={hover}/>
        )
        )}
        </div>
      </div>
  );
}

const IconCard = ({color, text, iconName:Icon , hover})=>{
    return (
    <div className={`flex items-center justify-center flex-col ${color}  p-2`}>
    <Icon
     className={`w-10 h-10  md:h-18 md:w-18 p-2 focus:outline-none ${hover} duration-200  transition-all ease-linear`} />
   <h3 className="text-xs sm:text-base font-normal">{text}</h3>
   </div>
    )
}
export default Skills;
