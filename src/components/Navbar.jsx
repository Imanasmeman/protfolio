import React, { useState, useEffect } from 'react';
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
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const activeClassName = "text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400";

  // Prevent scroll on mobile when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 shadow-md z-50 h-16">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Left: Nav links + Resume */}
          <div className="flex items-center space-x-8">
            <ul className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 px-3 py-2 ${
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

            {/* Resume Button (hidden on mobile) */}
            <button
              onClick={handleResumeDownload}
              className="hidden md:inline-block px-4 py-2 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors duration-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              aria-label="Download Resume"
            >
              Resume
            </button>
          </div>

          {/* Brand Name */}
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-500 whitespace-nowrap"
            aria-label="Home"
          >
            Anasbabu
          </Link>

          {/* Hamburger */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed left-0 right-0 top-16 w-full bg-gray-100 dark:bg-gray-800 shadow-md flex flex-col space-y-4 px-6 py-6 z-40"
          role="menu"
          aria-label="Mobile menu"
        >
          <div className="flex justify-end">
            <Link
              to="/"
              className="text-xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-500 whitespace-nowrap"
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
                `text-gray-700 dark:text-gray-200 text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 ${
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
            className="mt-2 px-4 py-2 bg-indigo-600 dark:bg-indigo-400 text-white dark:text-gray-900 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-colors duration-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            aria-label="Download Resume"
          >
            Resume
          </button>
        </div>
      )}

      {/* Spacer for mobile to offset the fixed navbar */}
      <div className="h-16 md:hidden"></div>
    </>
  );
};

export default Navbar;
