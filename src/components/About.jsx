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
        Hi, I'm{' '}
        <strong className="font-semibold text-indigo-600">Anasbabu Meman</strong>.
        I'm an aspiring Full Stack Developer who enjoys crafting beautiful and functional web experiences. Currently pursuing Full Stack Development at Masai School as my secondary education after graduating with a BCA degree. I'm passionate about building responsive, user-friendly applications and bringing creative ideas to life through code.
      </p>
      <p>
        When I’m not writing code, I’m usually sharpening my problem-solving skills—whether that’s through exploring new technologies or finding creative solutions to real-world challenges. I enjoy thinking critically, designing with purpose, and building things that make a difference. For me, tech is not just about logic—it’s about innovation and impact.
      </p>
    </div>
  </section>
);

export default About;
