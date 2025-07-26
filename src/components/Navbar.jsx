import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleResumeDownload = () => {
    const resumeUrl = '/resume.pdf';  // Assuming resume is in public folder
    window.open(resumeUrl, '_blank');

    // Start file download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const activeClassName = "text-indigo-600 font-semibold border-b-2 border-indigo-600";

  return (
    <>
      {/* Navbar wrapper */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Left side nav links & resume button */}
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300 px-3 py-2 ${
                        isActive ? activeClassName : ''
                      }`
                    }
                    onClick={closeMenu}
                    end={item.path === "/"} 
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Resume Button (hidden on small screens) */}
            <button
              onClick={handleResumeDownload}
              className="hidden md:inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              aria-label="Download Resume"
            >
              Resume
            </button>
          </div>

          {/* Right side: Your first name as home link */}
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 whitespace-nowrap"
            aria-label="Home"
          >
            Anasbabu
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            aria-label={`${isOpen ? 'Close' : 'Open'} menu`}
            aria-expanded={isOpen}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div
          className="md:hidden fixed top-16 left-0 right-0 bg-gray-100 dark:bg-gray-800 shadow-md flex flex-col space-y-4 px-6 py-6 z-40"
          role="menu"
          aria-label="Mobile menu"
        >
          {/* Your name on mobile top right */}
          <div className="flex justify-end">
            <Link
              to="/"
              className="text-xl font-bold text-indigo-600 hover:text-indigo-700 whitespace-nowrap"
              aria-label="Home"
              onClick={closeMenu}
            >
              Anasbabu
            </Link>
          </div>

          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-gray-700 dark:text-gray-200 text-lg hover:text-indigo-600 transition-colors duration-300 ${
                  isActive ? activeClassName : ''
                }`
              }
              onClick={closeMenu}
              end={item.path === "/"}
              role="menuitem"
            >
              {item.name}
            </NavLink>
          ))}

          <button
            onClick={() => {
              handleResumeDownload();
              closeMenu();
            }}
            className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            aria-label="Download Resume"
          >
            Resume
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
