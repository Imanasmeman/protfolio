function Experience({ exp }) {
  return (
    <section className="w-full py-10">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold mb-8 border-b-2 border-gray-200 pb-2">
        Experience
      </h2>

      {/* Experience Items */}
      <div className="space-y-8">
        {exp.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.role}
              </h3>
              <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                {item.duration}
              </span>
            </div>

            <p className="text-gray-700 mt-1">
              <span className="font-medium">{item.company}</span> ·{" "}
              {item.location}
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
