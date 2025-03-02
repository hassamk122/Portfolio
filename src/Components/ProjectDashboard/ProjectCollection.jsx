
import ProjectCard from './ProjectCard.jsx';
const laPassion = '/Project-pics/AuraAudit_Logo.webp';
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
    <section className='flex gap-10 flex-wrap'>
    <ProjectCard title ="La Passion" bgPic ={laPassionBg} logo={laPassion} gitLink ="https://github.com/hassamk122/LaPassion" documentId={laPassionId} />
    <ProjectCard title ="Expenso" bgPic ={expensoBg} logo={expenso} gitLink ="https://github.com/hassamk122/Expenso" documentId={expensoId} />
    <ProjectCard title ="YTD" bgPic ={YTDBg} logo={YTD} gitLink ="https://github.com/hassamk122/Youtube-thumbnail-Downloader"  documentId={ytdId}/>
    </section>
  )
}

export default ProjectCollection;