
import ProjectCard from './ProjectCard.jsx';
const laPassion = '/Project-pics/AuraAudit_Logo.svg';
const laPassionBg = '/Project-pics/la passion.webp';
const expenso = '/Project-pics/Expenso.svg';
const expensoBg = '/Project-pics/expenso-cover.webp';
const YTD = '/Project-pics/Fleet.svg';
const YTDBg = '/Project-pics/YTD.webp';


const laPassionId = import.meta.env.VITE_DOCUMENT_ID_LAPASSION;
const expensoId = import.meta.env.VITE_DOCUMENT_ID_EXPENSO;
const ytdId = import.meta.env.VITE_DOCUMENT_ID_YTD;
function ProjectCollection(){
  return (
    <section className='flex items-center justify-center flex-row  gap-10 flex-wrap'>
    <ProjectCard title ="La Passion" bgPic ={laPassionBg} logo={laPassion} gitLink ="https://github.com/hassamk122/LaPassion" documentId={laPassionId}
    visit='https://la-passion.vercel.app/'/>
    <ProjectCard title ="Expenso" bgPic ={expensoBg} logo={expenso} gitLink ="https://github.com/hassamk122/Expenso" documentId={expensoId}
    visit="https://expenso-pakistan.vercel.app/" />
    <ProjectCard title ="YTD" bgPic ={YTDBg} logo={YTD} gitLink ="https://github.com/hassamk122/Youtube-thumbnail-Downloader"  documentId={ytdId}
    visit="https://ytd-pakistan.vercel.app/"/>
    <small className="font-Excalifont text-zinc-400 dark:text-zinc-700 text-center text-[10px] sm:text-sm">*Note: These are personal projects showcasing creativity, technical skills, and a commitment to continuous learning.</small>
    </section>
  )
}

export default ProjectCollection;