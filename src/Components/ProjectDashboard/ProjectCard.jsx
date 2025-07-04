import { FolderGit2 } from "lucide-react";

function ProjectCard({ title, bgPic, logo, gitLink ,visit,technologies}) {
      
  return (
    <div
      className="
    font-quicksand font-bold flex 
    flex-col p-1 sm:p-2 md:w-100 md:h-120 pb-6
      cursor-pointer 
       bg-zinc-100/3 rounded-2xl border border-zinc-200 dark:bg-zinc-900/15 dark:backdrop-blur-md dark:border
        dark:dark:border-zinc-100/5 dark:border-b-zinc-200/30 dark:rounded-xl dark:shadow-xl"
    >
      <div className="flex items-center justify-center w-54 h-36 sm:w-74 sm:h-54 m-4">
       <a href={visit} target="_blank"> <img src={bgPic} className="rounded-xl" loading="lazy"></img></a>
      </div>
      <div className="flex items-center justify-between  px-5 mt-3  flex-row  py-2 gap-4 ">
        <div className="flex items-center justify-center gap-1 ">
          <img src={logo} className="w-8 h-8 " loading="lazy"></img>
        <h2 className="font-bold text-zinc-800 dark:text-zinc-100 ">{title}</h2>
          
        </div>

        <div className="flex items-center justify-center flex-row gap-2">
      
          <a href={gitLink} target="_blank" className="p-1 bg-transparent dark:bg-zinc-700 hover:bg-zinc-500 rounded-lg text-zinc-700 dark:text-zinc-300"><FolderGit2/></a>
        </div>

    </div>
          <div className="pl-7 pt-3 mr-7">
          <h3 className="font-normal dark:text-zinc-100 text-zinc-800">Built using:</h3>
          <div className="flex items-center flex-wrap gap-1">
            {
              technologies.map((tech)=>{
                return    <h3 className="font-normal text-sm  flex dark:text-zinc-400 border border-zinc-400  dark:border-zinc-100/3   mt-2 px-3 py-1 rounded-2xl">{tech}</h3>
              })
            }
          </div>
        
        </div>
    </div>
  );
}

export default ProjectCard;
