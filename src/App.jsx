import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Skills from "./components/Skills";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";

// ScrollToSection reads the current route and scrolls smoothly to the matching section id
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Get section id from path or default to "hero"
    const section = location.pathname === "/" ? "hero" : location.pathname.slice(1);

    // Scroll to element if exists
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
      {/* Navbar and theme toggle */}
      <Navbar />
      <ThemeToggle />
      <ScrollToSection />

      <main className="main-content pt-20">
        {/* All your page sections */}
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
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

// Routes setup - use a wildcard (*) redirecting to "/" as a catch-all
// All routes render the same <AppContent />
const App = () => (
  <Router>
    <Routes>
      <Route path="/*" element={<AppContent />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;
