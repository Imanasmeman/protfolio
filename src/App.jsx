import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import {experienceData} from "./assets/experienceData";


// ScrollToSection handles smooth scrolling with offset for fixed navbar
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const navbarHeight = 64; // must match your Navbar height (h-16 = 64px)
    const sectionId = location.pathname === "/" ? "hero" : location.pathname.slice(1);

    const el = document.getElementById(sectionId);
    if (el) {
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

  return null;
};

const AppContent = () => {
  return (
    <div
      className="app-container min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Navbar */}
      <Navbar />

      <ScrollToSection />

      <main className="main-content pt-20">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="Experience"><Experience exp={experienceData} /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

const App = () => (
  <div
  className="app-container min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden"
  style={{ scrollBehavior: 'smooth' }}
>
  {<Router>
    <Routes>
      {/* Single route handling all paths */}
      <Route path="/*" element={<AppContent />} />
    </Routes>
  </Router>}
</div>

 
);

export default App;


 
