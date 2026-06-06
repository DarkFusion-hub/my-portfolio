import React, { useState, useEffect } from 'react';
import PortfolioHero from './PortfolioHero';
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import EducationCerts from './EducationCerts';
import ExperienceSection from './ExperienceActivities';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { 
      root: null, 
      rootMargin: "-20% 0px -70% 0px", 
      threshold: 0 
    });

    const sections = ['hero', 'skills', 'projects', 'education', 'experience'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navClass = (id) => `hover:text-orange-500 transition-colors pb-1 ${activeSection === id ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-400'}`;

  return (
    <div className="bg-black min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-900 py-5 px-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-orange-500 font-bold tracking-widest text-xl cursor-pointer" onClick={() => scrollToSection('hero')}>AR.</div>
          
          <div className="hidden md:flex space-x-6 text-xs tracking-widest uppercase font-semibold">
            <button onClick={() => scrollToSection('hero')} className={navClass('hero')}>Home</button>
            <button onClick={() => scrollToSection('skills')} className={navClass('skills')}>Skills</button>
            <button onClick={() => scrollToSection('projects')} className={navClass('projects')}>Projects</button>
            <button onClick={() => scrollToSection('education')} className={navClass('education')}>Background</button>
            <button onClick={() => scrollToSection('experience')} className={navClass('experience')}>Experience & Activities</button>
          </div>
        </div>
      </nav>

      <div id="hero" className="pt-20"><PortfolioHero /></div>
      <div id="skills"><TechnicalSkills /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><EducationCerts /></div>
      <div id="experience"><ExperienceSection /></div>
    </div>
  )
}

export default App;