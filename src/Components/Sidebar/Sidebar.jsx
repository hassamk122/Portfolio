import { Folder, Github, Home, Images,Instagram,Linkedin,User ,Sparkles,Wand, GraduationCap, Download } from 'lucide-react'
import DarkModeBtn from '../../DarkMode/DarkModeBtn.jsx';
import resume from '../../assets/Hassam Kiani-Resume.pdf'
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <nav className='sidebar'>
        <ul className='flex items-center flex-col'>
            <li className='nav-item'><Link to='/' ><SideBarIcon icon={<Home  className='nav-icon'/>} text='Home' /></Link></li>
            <Divider/>
           <li className='nav-item'><Link href='/#skills'><SideBarIcon icon={<Sparkles   className='nav-icon'/>} text='Skills'/></Link></li>
            <li className='nav-item'><Link href='/#experience'><SideBarIcon icon={<Wand   className='nav-icon'/>} text="Experience" /></Link></li>
            <li className='nav-item'><Link href='/#education'><SideBarIcon icon={<GraduationCap   className='nav-icon'/>} text='Education'/></Link></li>
            <li className='nav-item'><Link to='/projects' ><SideBarIcon icon={<Folder   className='nav-icon'/>} text="Projects" /></Link></li>
            <li className='nav-item'><Link to='/thumbnails' ><SideBarIcon icon={<Images   className='nav-icon'/>} text='Thumbnails'/></Link></li>
        </ul>
        
        <ul className=' flex items-center flex-col'>
            <li className='nav-item '><DarkModeBtn  /></li>
            <li className='nav-item'><a href={resume} download='Muhammad Hassam Resume.pdf'><SideBarIcon icon={<Download  className='nav-icon ' />} text='Resume' /></a></li>
        </ul>
    </nav>
  )
}
const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className='group nav-container'>
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100 group-hover:flex group-hover:flex-row group-hover:items-center whitespace-nowrap'>
        {text}
      </span>
    </div>
  );
const Divider = () => <hr className="sidebar-hr" />;
export default Sidebar;