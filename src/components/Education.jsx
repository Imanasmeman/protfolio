import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="max-w-5xl mx-auto px-6 py-20 scroll-mt-24 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md"
      aria-label="Education Section"
    >
      <h2 className="text-4xl font-serif font-bold mb-10 text-center text-gray-900 dark:text-gray-100 relative inline-block">
        Education
        {/* Classic underline */}
        <span className="block h-1 w-28 bg-indigo-800 dark:bg-indigo-400 rounded-full mx-auto mt-3"></span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Education Card */}
        <article
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 font-serif transition-transform duration-300 hover:scale-[1.03] animate-fadeInUp"
          tabIndex={0}
          aria-labelledby="edu-bca"
          style={{ animationDelay: "0.15s" }}
        >
          <h3
            id="edu-bca"
            className="text-2xl font-semibold mb-3 text-indigo-600"
          >
            BCA
          </h3>

          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Rai University
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Ahmedabad, Gujarat
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            2021 to 2024
          </p>
        </article>
      </div>
    </section>
  );
};

export default Education;
