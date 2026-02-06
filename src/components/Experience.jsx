import React from "react";

const Experience = ({ exp }) => {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md"
      aria-label="Experience Section"
    >
      {/* Section Heading (UNCHANGED) */}
      <h2 className="text-4xl font-serif font-bold mb-10 text-center text-gray-900 dark:text-gray-100 relative inline-block">
        Experience
        <span className="block h-1 w-28 bg-indigo-800 dark:bg-indigo-400 rounded-full mx-auto mt-3"></span>
      </h2>

      {/* Experience Cards (ALIGNMENT FIXED) */}
      <div className="grid gap-10 md:grid-cols-2 justify-items-center">
        {exp.map((item, index) => (
          <article
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 font-serif transition-transform duration-300 hover:scale-[1.03] animate-fadeInUp w-full max-w-md flex flex-col"
            tabIndex={0}
            aria-labelledby={`exp-${index}`}
            style={{ animationDelay: `${0.15 + index * 0.2}s` }}
          >
            <h3
              id={`exp-${index}`}
              className="text-2xl font-semibold mb-3 text-indigo-600"
            >
              {item.role}
            </h3>

            <p className="font-semibold text-gray-900 dark:text-gray-100">
              {item.company}
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              {item.location}
            </p>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              {item.duration}
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
