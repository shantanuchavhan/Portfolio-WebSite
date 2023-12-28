import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";
import AbouteMe from "./pages/AbouteMe/AbouteMe";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import bg from "./images/pexels-pixabay-326333.jpg";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import { SideBarProvider } from "./context/SideBarProvider";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loading screen after 3 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className={`App w-screen relative h-screen ${isLoading ? 'overflow-hidden' : ''}`}>
      {isLoading ? (
        <Loading /> // Replace with your loading component or message
      ) : (
        <SideBarProvider>
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
          <div className="fixed top-0 bottom-0 opacity-75 left-0 z-[-10]">
            <img className="object-cover left-0 z-[-10] h-screen w-screen" src={bg} alt="" />
          </div>
        </SideBarProvider>
      )}
    </div>
  );
}

export default App;
