import React from 'react';
import civic from '../assets/civic.png';
import flipkart from '../assets/flipkart.png';
import memetic from '../assets/memetic.png';

const projectData = [
  {
    title: 'Memtic',
    type: 'Individual Project',
    description:
      'Memetic is a modern meme creation and sharing web app built with React, Vite, Firebase, and Konva.js. It allows users to create custom memes using an interactive canvas editor, upload them to a public feed, like and comment on memes, and authenticate securely with Firebase.',
    image: memetic,
    code: 'https://github.com/Imanasmeman/memetic',
    live_link: 'https://memeticsite.netlify.app/',
  },
  {
    title: 'CivicRoutes',
    type: 'Group Project',
    description:
      'A browser-based CivicRoutes is a modern civic issue reporting platform built with ReactJS, allowing users to report local problems in their area. It connects citizens with authorities and promotes community engagement and problem resolution.',
    image: civic,
    code: 'https://github.com/Sneha-Nahak/Civic_Route_Website',
    live_link: 'https://civicroute.netlify.app/',
  },
  {
    title: 'Flipkart Clone',
    type: 'Individual Project',
    description:
      'A fully responsive Flipkart Clone built using HTML, CSS, and JavaScript. This project replicates core functionalities like product listing, user authentication, and search/sort features. Data is fetched from a Firebase Realtime Database. The project is developed using VS Code, version-controlled with GitHub, and deployed on Netlify.',
    image: flipkart,
    code: 'https://github.com/Imanasmeman/CodeMaster/tree/master',
    live_link: 'https://dashing-croissant-95ea94.netlify.app/',
  },
];

const Projects = () => (
  <section
    id="projects"
    className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24"
    aria-label="Projects Section"
  >
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100 font-serif relative inline-block">
      Projects
      <span className="block h-1 w-20 bg-indigo-600 rounded-full mx-auto mt-2"></span>
    </h2>

    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectData.map((project, index) => (
        <article
          key={index}
          tabIndex={0}
          aria-labelledby={`project-title-${index}`}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500 animate-fadeInUp"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="w-full h-48 object-cover rounded-t-lg shadow-sm transition-transform duration-300 hover:scale-105"
          />
          <div className="p-6 flex flex-col flex-grow">
            <h3
              id={`project-title-${index}`}
              className="text-2xl font-semibold text-indigo-600 mb-3 font-serif"
            >
              {project.title}
            </h3>
            <p className="italic text-gray-600 dark:text-gray-400 mb-4">{project.type}</p>
            <p className="text-gray-700 dark:text-gray-300 flex-grow leading-relaxed font-serif">
              {project.description}
            </p>

            {/* Neatly aligned buttons */}
            <div className="mt-6 flex gap-4">
              <a
                href={project.live_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live version of ${project.title}`}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300 text-center font-semibold whitespace-nowrap"
              >
                View Live →
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View code repository of ${project.title}`}
                className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors duration-300 text-center font-semibold whitespace-nowrap"
              >
                View Code →
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
