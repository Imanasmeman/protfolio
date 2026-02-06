import React from 'react';

const About = () => (
  <section
    id="about"
    tabIndex={-1}
    className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24"
    aria-label="About Me Section"
  >
    <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-900 dark:text-gray-100 relative inline-block">
      About Me
      {/* Decorative underline */}
      <span className="block h-1 w-24 bg-indigo-600 rounded-full mx-auto mt-2"></span>
    </h2>
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
  <p>
    Hi, I'm{" "}
    <strong className="font-semibold text-indigo-600">Anasbabu Meman</strong>, a
    Full Stack Developer with hands-on experience building production-ready MERN
    stack applications. I hold a BCA degree and have completed practical Full
    Stack Development training from Masai School, where I worked on real-world
    projects and modern web technologies.
  </p>

  <p>
    Alongside development, I also mentor students in Problem Solving,
    Programming, and the MERN stack, helping them break down complex concepts
    into practical, easy-to-understand solutions. I enjoy building responsive,
    user-focused applications and continuously improving my skills to create
    scalable, impactful digital products.
  </p>
</div>

  </section>
);

export default About;
