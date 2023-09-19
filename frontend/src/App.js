import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Application from "./pages/Application"
import Founder from "./pages/Founder"
import Library from "./pages/Library"
import Tutors from "./pages/Tutors"
import About from "./pages/About"
import Nav from "./components/Nav"
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className='h-auto overflow-hidden'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/apply' element={<Application />} />
          <Route path='/founder' element={<Founder />} />
          <Route path='/e-library' element={<Library />} />
          <Route path='/tutors' element={<Tutors />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
