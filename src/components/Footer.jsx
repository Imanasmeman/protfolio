import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center py-4 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm select-none animate-fadeIn"
      aria-label="Footer"
      role="contentinfo"
    >
      © {new Date().getFullYear()} Anasbabu Portfolio Website. All rights reserved.
    </footer>
  );
};

export default Footer;
