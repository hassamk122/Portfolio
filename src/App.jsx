import Header from './Components/Header/Header.jsx'
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import ScrollHandler from './Pages/ScrollHandler.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home.jsx';
import {Router,Link, Route,Routes } from 'react-router-dom';
import Notfound from './Pages/Notfound.jsx';
function App() {

  return (
    <div className="flex" >
      <Sidebar/>
      <main className='ml-16 w-screen    dark:bg-zinc-900 bg-white'>
         <Header/>

          <ScrollHandler/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
          </Routes>
     
      <Footer/>
      </main>
    </div>
  )
}

export default App;
