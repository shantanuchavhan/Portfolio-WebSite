import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import AbouteMe from "./pages/AbouteMe/AbouteMe";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import bg from "./images/pexels-pixabay-326333.jpg";
import HomeLayout from "./components/HomeLayout/HomeLayout";

function App() {
  return (
    <div className="App w-screen relative   h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="about-me" element={<AbouteMe />} />
            <Route path="resume" element={<Resume />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <div className="fixed top-0 opacity-75  left-0 z-[-10]">
        <img className="object-cover h-screen w-screen" src={bg} alt="" />
      </div>
      <div className=" bg-black z-[-1] opacity-30 h-full min-h-screen bg-cover bg-center w-screen fixed inset-0 "></div>
    </div>
  );
}

export default App;
