import React from 'react';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Software & Data Engineering",
      skills: [
        "Python", "Java", "SQL", "PHP", "HTML", 
        "Big Data Analytics", "Data Visualization", 
        "Database Management", "Software & Web Development", 
        "Virtual Scripting", "Data Analysis", "C++", "Java Script"
      ]
    },
    {
      title: "Infrastructure & IT Operations",
      skills: [
        "System Administration", "Network Infrastructure & Security", 
        "IT Support", "Hardware Troubleshooting", 
        "IT Troubleshooting"
      ]
    },
    {
      title: "Corporate Strategy & Professional",
      skills: [
        "Corporate Management & Strategy", "IT Project Coordination", 
        "Technical Documentation", "Microsoft Office & Excel Dashboards", 
        "Project Communication", "Problem-Solving & Analytical Thinking", 
        "Quick Learner"
      ]
    }
  ];

  const stats = [
    { number: "30+", label: "Professional Certifications" },
    { number: "7+", label: "Academic & Real-World Projects" },
    { number: "100%", label: "Manual to Digital Workflow Conversion" },
    { number: "2026", label: "Graduation Year (UTP)" }
  ];

  return (
    <div className="bg-black text-white font-sans py-20 px-10 border-t border-gray-900">
      <div className="max-w-6xl mx-auto w-full space-y-20">
        
        {/* Technical Skills Section */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              TECHNICAL SKILLS
            </h2>
            <div className="text-orange-500 text-5xl font-bold opacity-20">02</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="p-6 border border-gray-800 bg-gray-900 rounded-xl hover:border-orange-500 transition-colors duration-300 group">
                <h3 className="text-orange-500 text-sm tracking-widest uppercase mb-4 group-hover:text-white transition-colors">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-black border border-gray-800 text-gray-400 text-xs tracking-wider rounded group-hover:border-gray-600 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* By The Numbers Section */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              BY THE NUMBERS
            </h2>
            <div className="text-orange-500 text-5xl font-bold opacity-20">03</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-8 border border-gray-800 bg-gray-900 rounded-xl hover:shadow-[0_0_30px_rgba(255,165,0,0.1)] transition-all duration-300">
                <span className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</span>
                <span className="text-orange-500 text-xs tracking-widest uppercase text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechnicalSkills;