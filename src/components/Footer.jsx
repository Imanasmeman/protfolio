import React from "react";
import "./Footer.css"; // Optional: Add your styling here

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", padding: "1rem"}}>
      © {new Date().getFullYear()} Anasbabu Portfolio Website. All rights reserved.
    </footer>
  );
};

export default Footer;