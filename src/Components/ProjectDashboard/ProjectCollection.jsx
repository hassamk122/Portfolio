
import { memo, Suspense, lazy, useMemo } from 'react';

const ProjectCard = lazy(() => import('./ProjectCard.jsx'));


const projects = [
  {
    id: import.meta.env.VITE_DOCUMENT_ID_LAPASSION,
    title: 'La Passion',
    logo: '/Project-pics/AuraAudit_Logo.svg',
    bgPic: '/Project-pics/la passion.webp',
    gitLink: 'https://github.com/hassamk122/LaPassion',
    visit: 'https://la-passion.vercel.app/',
  },
  {
    id: import.meta.env.VITE_DOCUMENT_ID_EXPENSO,
    title: 'Expenso',
    logo: '/Project-pics/Expenso.svg',
    bgPic: '/Project-pics/expenso-cover.webp',
    gitLink: 'https://github.com/hassamk122/Expenso',
    visit: 'https://expenso-pakistan.vercel.app/',
  },
  {
    id: import.meta.env.VITE_DOCUMENT_ID_YTD,
    title: 'YTD',
    logo: '/Project-pics/Fleet.svg',
    bgPic: '/Project-pics/YTD.webp',
    gitLink: 'https://github.com/hassamk122/Youtube-thumbnail-Downloader',
    visit: 'https://ytd-pakistan.vercel.app/',
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
          documentId={project.id}
          visit={project.visit}
        />
      )),
    []
  );

  return (
    <section className="flex items-center justify-center flex-row gap-10 flex-wrap">
      <Suspense fallback={<div>Loading...</div>}>{renderedProjects}</Suspense>

      <small className="font-Excalifont text-zinc-400 dark:text-zinc-700 text-center text-[10px] sm:text-sm">
        *Note: These are personal projects showcasing creativity, technical skills, and a commitment to continuous learning.
      </small>
    </section>
  );
};

export default memo(ProjectCollection);
