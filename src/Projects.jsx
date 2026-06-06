import React, { useState } from 'react';

const Projects = () => {
  // This "state" controls whether the popup is open, and which project to show
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: "Event Hall & Room Booking Platform",
      date: "FYP - Jan 2026",
      shortDescription: "Developed a comprehensive digital solution for venues across Perak, successfully transforming manual reservation workflows into a streamlined, automated system.",
      tags: ["Software Development", "System Architecture", "Workflow Automation"],
      hasDetails: true, // Tells the card to be clickable
      longDescription: "For my Final Year Project, I engineered a full-stack booking system designed to eliminate scheduling conflicts and automate venue management. The platform features real-time availability tracking, automated confirmation workflows, and a comprehensive administrative dashboard for facility managers.",
      images: ["fyp-1.jpg.jpeg", "fyp-2.jpg.jpeg","fyp-3.jpg.jpeg", "fyp-4.jpg.jpeg", "fyp-5.jpg.jpeg", "fyp-6.jpg.jpeg"] // Placeholder image names
    },
    {
      title: "Meeting Room Booking Platform",
      date: "April 2025",
      shortDescription: "Corporate booking system developed during professional internship to manage internal meeting room reservations efficiently.",
      tags: ["System Administration", "IT Operations"],
      hasDetails: true, // Tells the card to be clickable
      longDescription: "Developed and deployed during my internship to optimize internal corporate workflows. This system allows staff to seamlessly book meeting rooms, check real-time availability, and manage physical resources directly through the company intranet, significantly reducing administrative overhead.",
      images: ["intern-2.jpg.png", "intern-1.jpg.png"] // Placeholder image names
    },
    {
      title: "Email Disclaimer Project",
      date: "July 2025",
      shortDescription: "Implemented a company-wide email disclaimer system during professional internship at Qi Services.",
      tags: ["Network Infrastructure", "Security"],
      hasDetails: false
    },
    {
      title: "Technopreneurship Team Project",
      date: "2024",
      shortDescription: "Collaborative project focusing on IT business strategy, market analysis, and technology commercialization.",
      tags: ["Corporate Management", "Strategy", "Teamwork"],
      hasDetails: false
    },
    {
      title: "OOP Application Development",
      date: "Jan 2023",
      shortDescription: "Object-Oriented Programming project focused on building modular, scalable application architecture.",
      tags: ["Java", "OOP", "Software Design"],
      hasDetails: false
    },
    {
      title: "Web Development Project",
      date: "Jan 2023",
      shortDescription: "Early academic project establishing core fundamentals in front-end and back-end web technologies.",
      tags: ["HTML", "PHP", "Web Dev"],
      hasDetails: false
    }
  ];

  return (
    <div className="bg-black text-white font-sans py-20 px-10 border-t border-gray-900 relative">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
            FEATURED PROJECTS
          </h2>
          <div className="text-orange-500 text-5xl font-bold opacity-20">04</div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              onClick={() => project.hasDetails ? setSelectedProject(project) : null}
              className={`flex flex-col p-8 border border-gray-800 bg-gray-900 rounded-xl transition-all duration-300 group ${project.hasDetails ? 'cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,165,0,0.15)] hover:border-orange-500' : 'opacity-80'}`}
            >
              
              <div className="flex justify-between items-start mb-4">
                <div className="text-orange-500 text-xs tracking-widest uppercase font-semibold">
                  {project.date}
                </div>
                {/* Only show the 'Click/Expand' icon if the project has details */}
                {project.hasDetails && (
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                )}
              </div>

              <h3 className={`text-xl font-bold mb-3 text-gray-100 transition-colors ${project.hasDetails ? 'group-hover:text-white' : ''}`}>
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] tracking-wider uppercase px-2 py-1 bg-black border border-gray-800 text-gray-500 rounded">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Popup Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          
          {/* Modal Container - stops clicks from closing the background */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border border-orange-500 rounded-xl p-8 shadow-[0_0_50px_rgba(255,165,0,0.2)]" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-black border border-gray-700 hover:border-orange-500 rounded-full p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Modal Content */}
            <div className="text-orange-500 text-xs tracking-widest uppercase font-semibold mb-2">{selectedProject.date}</div>
            <h3 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h3>
            
            <p className="text-gray-300 leading-relaxed mb-8 border-l-2 border-orange-500 pl-4">
              {selectedProject.longDescription}
            </p>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedProject.images.map((imgSrc, idx) => (
                <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-gray-800 bg-black flex items-center justify-center">
                  <img 
                    src={imgSrc} 
                    alt={`${selectedProject.title} screenshot ${idx + 1}`}
                    className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                    // If the image fails to load, show a nice fallback box
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center text-gray-600 text-xs uppercase tracking-widest text-center p-4">
                    [ Image Missing: Add {imgSrc} to public folder ]
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;