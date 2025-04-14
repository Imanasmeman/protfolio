import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="education-title">Education</h2>
      <div className="education-grid">
       
       <div className="education-card">
          <h3>BCA</h3>
          <p><strong>Rai University</strong></p>
          <p>Ahmedabad,Gujarat</p>
          <p>2021 to 2024</p>
        </div>

        <div className="education-card">
          <h3>Full Stack Development</h3>
          <p><strong>Masai School</strong></p>
          <p>Bengaluru, Karnataka</p>
          <p>Octomber-2024 to Present</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
