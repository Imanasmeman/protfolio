import React from 'react';
import './About.css';
import profilePic from '../assets/Pass-Photo.jpg'; // Replace with your actual image path

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-grid">
        <div className="about-image">
          <img src={profilePic} alt="Your Name" />
        </div>
        <div className="about-description">
          <p>
            Hi, I'm <strong>Anasbabu Meman</strong> I'm an aspiring Full Stack Developer who enjoys crafting beautiful and functional web experiences. Currently pursuing Full Stack Development at Masai School as my secondary education after graduating with a BCA degree. I'm passionate about building responsive, user-friendly applications and bringing creative ideas to life through code.
          </p>
          <p>
          When I’m not writing code, I’m usually sharpening my problem-solving skills—whether that’s through exploring new technologies or finding creative solutions to real-world challenges. I enjoy thinking critically, designing with purpose, and building things that make a difference. For me, tech is not just about logic—it’s about innovation and impact.
           </p>
        </div>
      </div>
    </section>
  );
};

export default About;
