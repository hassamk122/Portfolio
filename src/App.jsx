
import { Route, Routes } from 'react-router-dom';

import SmoothScroll from './Components/SmoothScroll.jsx';
import Posters from './Pages/Posters.jsx';
import Header from './Components/Header/Header.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home.jsx';
import Notfound from './Pages/Notfound.jsx';
import Project from './Pages/Projects.jsx';
import ScrollHandler from './Components/ScrollHandler.jsx';
import Thumbnails from './Pages/Thumbnails.jsx';


function App() {
  return (
    <div className="relative flex h-screen">
        <Sidebar />
        <Header />
      <div id="my-scrollbar" className="flex-grow overflow-hidden">
        <SmoothScroll />
        <main className="ml-16 dark:bg-zinc-900 bg-white">  
            <ScrollHandler />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/thumbnails" element={<Thumbnails />} />
              <Route path="/posters" element={<Posters/>} />
              <Route path="*" element={<Notfound />} />
            </Routes>
            <Footer /> 
        </main>
      </div>
    </div>
  );
}

export default App;
