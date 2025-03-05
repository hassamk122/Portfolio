import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SmoothScroll from './Components/SmoothScroll.jsx';
import Posters from './Pages/Posters.jsx';
const Header = lazy(() => import('./Components/Header/Header.jsx'));
const Sidebar = lazy(() => import('./Components/Sidebar/Sidebar.jsx'));
const Footer = lazy(() => import('./Components/Footer/Footer.jsx'));
const Home = lazy(() => import('./Pages/Home.jsx'));
const Notfound = lazy(() => import('./Pages/Notfound.jsx'));
const Project = lazy(() => import('./Pages/Projects.jsx'));
const ScrollHandler = lazy(() => import('./Components/ScrollHandler.jsx'));
const Thumbnails = lazy(()=>import('./Pages/Thumbnails.jsx'));

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
