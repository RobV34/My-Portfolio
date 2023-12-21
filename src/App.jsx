import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'; 
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About'; 
import Skills from './components/skills/Skills'; 
import Education from './components/education/Education';
import Experience from './components/experience/Experience'; 
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



