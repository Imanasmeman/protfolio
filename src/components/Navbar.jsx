import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
    const resumeUrl = './resume.pdf';
    window.open(resumeUrl, '_blank');

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-desktop">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className="nav-link"
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          <li>
            <button onClick={handleResumeDownload} className="resume-btn">
              Resume
            </button>
          </li>
        </ul>

        <button onClick={toggleMenu} className="hamburger">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="nav-link"
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              handleResumeDownload();
              closeMenu();
            }}
            className="resume-btn"
          >
            Resume
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
