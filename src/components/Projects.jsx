import React from 'react';
import './Projects.css';
import civic from '../assets/civic.png'
import flipkart from '../assets/flipkart.png'
import memetic from '../assets/memetic.png'

const projectData = [
  {
    title: 'Memtic',
    type: 'Individual Project',
    description:'Memetic is a modern meme creation and sharing web app built with React, Vite, Firebase, and Konva.js. It allows users to create custom memes using an interactive canvas editor, upload them to a public feed, like and comment on memes, and authenticate securely with Firebase.',
    image: memetic,
    code: 'https://github.com/Imanasmeman/memetic',
    live_link: 'https://memeticsite.netlify.app/'
  },
  {
    title: 'CivicRoutes',
    type: 'Group Project',
    description: 'A browser-basedCivicRoutes is a modern civic issue reporting platform built with ReactJS, allowing users to report local problems in their area. It connects citizens with authorities and promotes community engagement and problem resolution. platform to track on the performace and productivity level of employees.',
    image: civic,
    code:'https://github.com/Sneha-Nahak/Civic_Route_Website',
    live_link: 'https://civicroute.netlify.app/',

  },
  {
    title: 'Flipkart Clone',
    type: 'Individual Project',
    description: 'A fully responsive Flipkart Clone built using HTML, CSS, and JavaScript. This project replicates core functionalities like product listing, user authentication, and search/sort features. Data is fetched from a Firebase Realtime Database. The project is developed using VS Code, version-controlled with GitHub, and deployed on Netlify.',
    image: flipkart,
    code:'https://github.com/Imanasmeman/CodeMaster/tree/master',
    live_link: 'https://dashing-croissant-95ea94.netlify.app/'
  },
];


const Projects = () => (
  <section className="projects-section" id="projects">
    <h2 className="section-title">Projects</h2>
    <div className="projects-container">
      {projectData.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
          <h3>{project.title}</h3>
           <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{project.type}</p>
            <p>{project.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>

            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Live →
            </a>
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-code">
              View Code →
            </a>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;