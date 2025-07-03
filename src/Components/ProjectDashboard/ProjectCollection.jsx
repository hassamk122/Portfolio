
import { memo, useMemo } from 'react';

import ProjectCard from './ProjectCard.jsx';


const projects = [
  { title: 'YT Thumbnail Downloader',
    logo: '/Project-pics/Fleet.svg',
    bgPic: '/Project-pics/YTD.webp',
    gitLink: 'https://github.com/hassamk122/Youtube-thumbnail-Downloader',
    visit: 'https://ytd-pakistan.vercel.app/',
  },
  { title: 'Tic Tac Toe',
    logo: '/logo.svg',
    bgPic: '/Project-pics/tic tac toe.png',
    gitLink: 'https://github.com/hassamk122/Tic-Tac-Toe',
    visit: 'https://tic-tac-toe-hassam.vercel.app/',
  },

];

const ProjectCollection = () => {
  const renderedProjects = useMemo(
    () =>
      projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          bgPic={project.bgPic}
          logo={project.logo}
          gitLink={project.gitLink}
         visit={project.visit}
        />
      )),
    []
  );

  return (
    <section className="flex items-center justify-center flex-col gap-10 flex-wrap">
      <div className='flex flex-col  md:flex-row gap-10 flex-wrap'>
        {renderedProjects}
      </div>
   
      <small className="font-Excalifont text-zinc-400 dark:text-zinc-700 text-center text-[10px] sm:text-sm">
        *Note: These are personal projects showcasing creativity, technical skills, and a commitment to continuous learning.
      </small>
    </section>
  );
};

export default memo(ProjectCollection);
