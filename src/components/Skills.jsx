import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
  SiTypescript,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-red-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Redux', icon: <SiRedux className="text-purple-600" /> },
  { name: 'NodeJS', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'ExpressJS', icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-gray-100" /> },
];

const Skills = () => {
  // Using intersection observer to detect visibility of the section
  const { ref, inView } = useInView({
    // Trigger as soon as any part is visible
    threshold: 0.1,
    // Trigger every time element comes in view (not only the first)
    triggerOnce: false,
  });

  // State toggling to trigger re-render/re-application of animation styles
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      // Toggle the state to trigger animation restart
      setPlayAnimation(false);
      setTimeout(() => setPlayAnimation(true), 10); // Slight delay to reset animation
    }
  }, [inView]);

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <section
        ref={ref}
        id="skills"
        aria-label="Technical Skills Section"
        className="max-w-5xl mx-auto px-6 py-12 scroll-mt-24"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100 font-serif relative inline-block">
          Technical Skills & Tools
          <span className="block h-1 w-20 bg-indigo-600 rounded-full mx-auto mt-2"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              tabIndex={0}
              className={`flex flex-col items-center space-y-3 p-5 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default
                focus:outline-none focus:ring-4 focus:ring-indigo-400`}
              style={{
                // Set opacity 0 if animation not playing to avoid flicker
                opacity: playAnimation ? undefined : 0,

                animation: playAnimation
                  ? `fadeInUp 0.8s ease forwards`
                  : 'none',
                animationDelay: playAnimation ? `${index * 100}ms` : '0ms',
              }}
              aria-label={skill.name}
              role="listitem"
            >
              <div className="text-5xl transition-transform duration-300 hover:scale-110" aria-hidden="true">
                {skill.icon}
              </div>
              <p className="text-lg font-medium text-gray-800 dark:text-gray-200 select-none">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
