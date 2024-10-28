import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <section className="education-section">
  <h2>Education & Credentials</h2>

  <div className="education-entry">
    <h3>Software Development</h3>
    <p>Pass with Distinction August 2024</p>
    <p>Keyin College, St. John's, NL</p>
  </div>

  <div className="education-entry">
    <h3>Microcredentials & Certifications</h3>
    <ul>
      <li>Google Agile Project Management</li>
      <li>AWS Cloud Foundations</li>
      <li>AWS Cloud Developer</li>
      <li>AWS Cloud Arcitect</li>
      <li>Dev-Ops and Software Design</li>
      <li>Front-End Software Developer</li>
      <li>Back-End Software Developer</li>
      <li>Software Foundations</li>
      <li>Generative AI</li>
    </ul>
  </div>

  <div className="education-entry">
    <h3>Business School Coursework</h3>
    <p>Memorial University, 4 years of study</p>
    <p>Completed coursework towards a Business Degree</p>
  </div>

</section>

    </div>
  );
}

export default Education;


// Compare this snippet from portfolio/src/components/skills/Skills.jsx: