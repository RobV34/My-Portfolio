import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <section className="education-section">
  <h2>Education & Credentials</h2>

  <div className="education-entry">
    <h3>Full Stack Development Program</h3>
    <p>Keyin College, St. John's NL - Expected Graduation 2024</p>
  </div>

  <div className="education-entry">
    <h3>Microcredentials & Certifications</h3>
    <ul>
      <li>AWS Certifications (3) - 1 of 3 completed</li>
      <li>CTT Cyber Security Technician Credential - Date of Completion: Feb 18/24</li>
      <li>Technical Sales Credential - Date of Completion: Feb 18/24</li>
      <li>Artificial Intelligence Microcredential - Date of Completion: Dec 21/23</li>
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