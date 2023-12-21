import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="nav-container">
      <header className="nav-header">
        <h1>Rob's Portfolio</h1>
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/education">Education</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
          
        </nav>
      </header>
    </div>
  );
}

export default Header;



