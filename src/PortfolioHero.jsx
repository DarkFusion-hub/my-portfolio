import React from 'react';

const PortfolioHero = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex items-center p-10">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Column: Text & Info */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 border border-green-500 text-green-500 text-xs tracking-widest uppercase rounded">
            Open to Work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
            ASHWIEN RHAAJJ
          </h1>
          
          <p className="text-xl tracking-widest uppercase text-gray-400">
            Information Technology <span className="text-orange-500">|</span> Big Data Analytics
          </p>
          
          {/* Skill Pills */}
          <div className="flex flex-wrap gap-3 text-xs tracking-wider">
            {['PYTHON', 'JAVA', 'SQL', 'SYSTEM ADMIN', 'NETWORKING', "JAVA SCRIPT", "C++"].map((skill) => (
              <span key={skill} className="px-3 py-1 border border-gray-700 text-gray-300 rounded hover:border-orange-500 transition-colors cursor-pointer">
                {skill}
              </span>
            ))}
          </div>

          {/* About Me Section */}
          <div className="mt-6 p-6 border border-gray-800 bg-gray-900 rounded-lg">
             <h3 className="text-sm tracking-widest uppercase text-orange-500 mb-3">Who I Am</h3>
             <p className="text-gray-400 text-sm leading-relaxed">
               As an Information Technology graduate specializing in Big Data Analytics and Corporate Management, I blend strong technical capabilities in Python, Java, and SQL with hands-on expertise in system administration and network infrastructure. I thrive on translating complex technical challenges into practical, scalable digital solutions—such as engineering a comprehensive Event Hall Booking Platform that successfully modernized manual workflows. I am eager to leverage my analytical problem-solving skills and cross-platform proficiency in an entry-level IT Support, Networking, or Software Development role to drive operational excellence.
             </p>
          </div>
          
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="mt-8 px-8 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 tracking-widest uppercase text-sm"
          >
            View Projects
          </button>
        </div>

        {/* Right Column: Avatar/Video Placeholder */}
        <div className="relative h-[32rem] w-full rounded-xl border border-gray-800 bg-gray-900 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(255,165,0,0.1)] group">
          
          <img 
            src="/profile.jpg.jpeg" // Make sure this path points to your full portrait file in the public folder
            alt="Portrait" 
            className="object-cover object-center w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};

export default PortfolioHero;