import React from 'react';
import './Skills.css';

function Skills() {
  const technicalSkills = [
    { name: 'Python', description: 'Interpreted programming language.' },
    { name: 'HTML5', description: 'HTML is the standard markup language for documents designed to be displayed in a web browser.' },
    { name: 'CSS', description: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.' },
    { name: 'JavaScript', description: 'Popular programming language for building websites.' },
    { name: 'React', description: 'Front End JS Library' },
    { name: 'UI/UX', description: 'Figma Design Software' },
    { name: 'AWS Cloud', description: 'Cloud Foundations' },
    { name: 'Cybersecurity', description: 'CTT Microcredential' },
  ];

  const toolsAndPlatforms = [
    { name: 'Git', description: 'Version Control System' },
    { name: 'GitHub', description: 'Version Control System' },
    { name: 'VS Code', description: 'Code Editor' },
    { name: 'PyCharm', description: 'Code Editor' },
    { name: 'Figma', description: 'Design Software' },
    { name: 'Robomaster', description: 'Robotics Software' },
    { name: 'Trello', description: 'Project Management Software' },
  ];

  const softSkills = [
    { name: 'Communication', description: 'Effective communication skills.' },
    { name: 'Project Management', description: 'Efficient project management techniques.' },
    { name: 'Teamwork', description: 'Experience in collaborative teamwork.' },
    { name: 'Business Development', description: 'Strategies for business growth and development.' },
    { name: 'Leadership', description: 'Strong leadership and guidance abilities.' },
    { name: 'Critical Thinking', description: 'Analytical and critical thinking skills.' },
   
  ];

  return (
    <div className="skills-container">
      <h2 className="skill-heading">Technical Skills</h2>
      <ul className="skills-list">
        {technicalSkills.map(skill => (
          <li key={skill.name} className="skill-item">
            <strong>{skill.name}:</strong> {skill.description}
          </li>
        ))}
      </ul>

      <h2 className="skill-heading">Tools and Platforms</h2>
      <ul className="skills-list">
        {toolsAndPlatforms.map(skill => (
          <li key={skill.name} className="skill-item">
            <strong>{skill.name}:</strong> {skill.description}
          </li>
        ))}
      </ul>
      
      <h2 className="skill-heading">Soft Skills</h2>
      <ul className="skills-list">
        {softSkills.map(skill => (
          <li key={skill.name} className="skill-item">
            <strong>{skill.name}:</strong> {skill.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;


