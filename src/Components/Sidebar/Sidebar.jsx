import { Folder, Github, Home, Image,Instagram,Linkedin,User ,Sparkles,Wand, GraduationCap, Download  ,BookImage} from 'lucide-react'
import DarkModeBtn from '../../DarkMode/DarkModeBtn.jsx';
import resume from '../../assets/Hassam Kiani-Resume.pdf'
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
function Sidebar() {
  return (
    <nav className='sidebar'>
        <ul className='flex items-center flex-col'>
            <li className='nav-item'><Link to='/' ><SideBarIcon icon={<Home  className='nav-icon'/>} text='Home' /></Link></li>
            <Divider/>
           <li className='nav-item hidden md:flex'><Link to='/#skills'><SideBarIcon icon={<Sparkles   className='nav-icon'/>} text='Skills'/></Link></li>
            <li className='nav-item hidden md:flex'><Link to='/#experience'><SideBarIcon icon={<Wand   className='nav-icon'/>} text="Experience" /></Link></li>
            <li className='nav-item hidden md:flex'><Link to='/#education'><SideBarIcon icon={<GraduationCap   className='nav-icon'/>} text='Education'/></Link></li>
            <li className='nav-item'><Link to='/projects' ><SideBarIcon icon={<Folder   className='nav-icon'/>} text="Projects" /></Link></li>
            <li className='nav-item'><Link to='/thumbnails' ><SideBarIcon icon={<Image   className='nav-icon'/>} text='Thumbnails'/></Link></li>
            <li className='nav-item'><Link to='/posters' ><SideBarIcon icon={<BookImage   className='nav-icon'/>} text='Posters'/></Link></li>
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