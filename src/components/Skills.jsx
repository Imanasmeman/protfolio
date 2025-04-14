import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';
import {
  SiRedux,
  SiMongodb,
  SiExpress,
  SiNetlify,
  
  
} from 'react-icons/si';

import './Skills.css';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'GitHub', icon: <FaGithub /> },
 
  
  
];

const Skills = () => {
  return (
    <section className="skills-section section" id="skills">
      <h2 className="skills-title">Technical Skills & Tools</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
