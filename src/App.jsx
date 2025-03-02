import Header from './Components/Header/Header.jsx'
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import ScrollHandler from './Pages/ScrollHandler.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home.jsx';
import {Router,Link, Route,Routes } from 'react-router-dom';
import Notfound from './Pages/Notfound.jsx';
import Project from './Pages/Projects.jsx';
function App() {

  return (
    <div className="flex" >
          <main className='ml-16 w-screen    dark:bg-zinc-900 bg-white'>
      <Header/>
          <ScrollHandler/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="*" element={<Notfound />} />
          </Routes>
     
      <Footer/>
      </main>
      <Sidebar/>
     
    </div>
  )
}

export default App;
