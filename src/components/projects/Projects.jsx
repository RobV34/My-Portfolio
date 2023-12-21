import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <section className="projects-portfolio">
  <h2>Portfolio Projects</h2>

  <div className="project-entry">
    <h3>Custom Clocks</h3>
    <p>Front end for an e-commerce custom clock shop</p>
    <div className="project-links">
      
      <video width="520" height="340" controls>
        <source src="Images/customclocks.mp4" type="video/mp4" />
        
      </video>
      <a href="https://github.com/RobV34/T2-FINAL-SPRINT" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  </div>

  <div className="project-entry">
    <h3>Pawsitively Brewed</h3>
    <p>A website for a Cat Cafe using React</p>
    <div className="project-links">

    <video width="520" height="340" controls>
        <source src="Images/catcafe.mp4" type="video/mp4" />
        
      </video>
      <a href="https://github.com/RobV34/CatCafe" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      
    </div>
  </div>

  <div className="project-entry">
    <h3>Pawsome Pics</h3>
    <p>A website for dog breed images</p>
    <div className="project-links">

    <video width="520" height="340" controls>
        <source src="Images/dogs.mp4" type="video/mp4" />
        
      </video>
      <a href="https://github.com/RobV34/MyProjects/tree/main/rob_qap3" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      
    </div>
  </div>

  <div className="project-entry">
    <h3>Childrens Instrument Library</h3>
    <p>A website for an instrument library service for chidren</p>
    <div className="project-links">
      
      <video width="520" height="340" controls>
        <source src="Images/music.mp4" type="video/mp4" />
        
      </video>
      <a href="https://github.com/RobV34/MyProjects/tree/main/Website%20-%20Project%205%20June%2025th" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>
  </div>

  {/* Repeat for other projects */}

</section>

    </div>
  );
}

export default Projects;


