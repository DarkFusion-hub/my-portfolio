import React from 'react';
import PortfolioHero from './PortfolioHero';
import TechnicalSkills from './TechnicalSkills';
import Projects from './Projects';
import EducationCerts from './EducationCerts';
import ExperienceSection from './ExperienceActivities'; // We are reusing the file, just imported normally

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black min-h-screen">
      
      {/* Sticky Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-900 py-5 px-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-orange-500 font-bold tracking-widest text-xl cursor-pointer" onClick={() => scrollToSection('hero')}>AR.</div>
          
          <div className="hidden md:flex space-x-6 text-xs tracking-widest uppercase text-gray-400 font-semibold">
            <button onClick={() => scrollToSection('hero')} className="hover:text-orange-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-orange-500 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-orange-500 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('education')} className="hover:text-orange-500 transition-colors">Background</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-orange-500 transition-colors">Experience & Activities</button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <div id="hero" className="pt-20"><PortfolioHero /></div>
      <div id="skills"><TechnicalSkills /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><EducationCerts /></div>
      <div id="experience"><ExperienceSection /></div>

    </div>
  )
}

export default App;