import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import AbouteMe from './pages/AbouteMe/AbouteMe';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import bg from "./images/pexels-pixabay-326333.jpg"
import HomeLayout from './components/HomeLayout/HomeLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AbouteMe />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blogs" element={<Blog/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
     
        
      </Routes>
    </BrowserRouter>
      <div className='absolute top-0 left-0 z-[-10] w-screen  '>
        <img  src={bg} alt="" />
      </div>
      <div className="fixed inset-0 bg-black z-[-1] opacity-30 h-full">
        </div>
        
     
    </div>
  );
}

export default App;
