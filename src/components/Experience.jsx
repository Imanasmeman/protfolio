function Experience({ exp }) {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>

      {exp.map((item, index) => (
        <div key={index} className="experience">
          <h3>{item.role}</h3>

          <p>
            <strong>{item.company}</strong> · {item.location}
          </p>

          <p className="duration">{item.duration}</p>

          <ul>
            {item.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
