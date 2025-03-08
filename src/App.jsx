
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BacktoTopbtn from './components/BacktoTopbtn';
import Error from './pages/Error';

function App() {
  return (
    <div  >
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/myprojects" element={ <Projects/>} />
        <Route path="/mycontact" element={ <Contact/>} />
        <Route path="*" element={<Error/>} /> {/* Catch-all for 404 */}
      </Routes>
      <BacktoTopbtn></BacktoTopbtn>
     < Footer></Footer> 
    </div>
      
  )
}

export default App
