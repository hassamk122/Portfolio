import { Folders } from "lucide-react";
import ProjectCollection from "../ProjectDashboard/ProjectCollection";

function ProjectHeroSection() {
  return (
    <div className=" flex items-center justify-center flex-col  py-15 ">
       <h3 className=" flex items-center font-Excalifont justify-center gap-2 pt-5 sm:pt-10 text-3xl sm:text-5xl
         text-teal-400 dark:drop-shadow-[0px_10px_80px_rgba(0,213,190,0.9)] ">
            <Folders className='sm:w-12 sm:h-12 h-8 w-8 ' />Projects
      </h3>
      <div className="px-4 pt-15 pb-10  flex items-center justify-center flex-row flex-wrap">
        <ProjectCollection/>
      </div>
      </div>
  )
}

export default ProjectHeroSection;