import React from 'react';

const EducationCerts = () => {
  const education = [
    {
      period: "2022 - Oct 2026",
      degree: "Bachelor's Degree in Information Technology",
      school: "Universiti Teknologi PETRONAS (UTP)",
      description: "Major: Big Data Analytics and Corporate Management. Current Grade: 2.82."
    },
    {
      period: "2021 - 2022",
      degree: "Foundation in Information Technology",
      school: "Universiti Teknologi PETRONAS (UTP)",
      description: "Core programming, mathematics, and IT fundamentals."
    },
    {
      period: "2019 - 2021",
      degree: "Secondary Education (SPM)",
      school: "SMK Methodist ACS Seremban",
      description: "Sijil Pelajaran Malaysia."
    },
    {
      period: "2016 - 2018",
      degree: "Secondary Education (PT3)",
      school: "SMK Taman Damansara Alif",
      description: "Pentaksiran Tingkatan 3."
    }
  ];

  const allCerts = [
    "Student Mobility at Jaipuria Institute of Management, Jaipur, India",
    "Certificate of Ordinary Level English Language",
    "Malaysian Book of Records for Indian Traditional Instrument",
    "E-Sports Call of Duty",
    "AI & Deep Learning Certificate Course 360 Digi TMG",
    "A Practical Guide to Upskilling Your Organization on AI",
    "Accelerate Your Job Search with AI",
    "AI for Cybersecurity",
    "AI Fundamentals for Non-Data Scientists",
    "Analyze Data to Answer Questions",
    "Ask Questions to Make Data-Driven Decisions",
    "Assets, Threats, and Vulnerabilities",
    "Automate Cybersecurity Tasks with Python",
    "Chat with Your Data: Generative AI-Powered SQL Data Analysis",
    "Connect and Protect: Networks and Network Security",
    "Data Analysis with R Programming",
    "DevOps, DataOps, MLOps",
    "Foundations of Cybersecurity",
    "Foundations: Data, Data, Everywhere",
    "Generative AI Explained",
    "Generative AI for Project Managers",
    "Generative AI: Implications and Opportunities for Business",
    "Get Started with Databricks for Generative AI",
    "Get Started with Databricks for Machine Learning",
    "Google Advanced Data Analytics Professional Certificate",
    "IBM AI Developer Professional Certificate",
    "IBM Data Analyst Professional Certificate",
    "Introduction to AI",
    "Introduction to Artificial Intelligence (AI)",
    "Introduction to Prompt Engineering for Generative AI",
    "Learning Microsoft 365 Copilot for Work",
    "Prepare Data for Exploration",
    "Process Data from Dirty to Clean",
    "Put It to Work: Prepare for Cybersecurity Jobs",
    "Security for Artificial Intelligence Software and Services",
    "Share Data Through the Art of Visualization",
    "Sound the Alarm: Detection and Response",
    "Tools of the Trade: Linux and SQL",
    "Trust and Security with Google Cloud",
    "Trustworthy Generative AI",
    "AI Untuk Rakyat AI Aware",
    "AI Untuk Rakyat AI Appreciate"
  ];

  return (
    <div className="bg-black text-white font-sans py-20 px-10 border-t border-gray-900 pb-32">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
            BACKGROUND
          </h2>
          <div className="text-orange-500 text-5xl font-bold opacity-20">05</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-xl tracking-widest uppercase text-gray-400 mb-6">Education</h3>
            <div className="border-l border-gray-800 pl-6 space-y-10">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-black border-2 border-gray-700 group-hover:border-orange-500 transition-colors duration-300"></div>
                  <div className="text-orange-500 text-xs tracking-widest uppercase mb-2">{edu.period}</div>
                  <h4 className="text-lg font-bold text-gray-100 mb-1">{edu.degree}</h4>
                  <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">{edu.school}</div>
                  <p className="text-sm text-gray-500">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Scrollable Certifications */}
          <div>
            <h3 className="text-xl tracking-widest uppercase text-gray-400 mb-6">Certifications</h3>
            
            {/* Scrollable Container */}
            <div className="grid grid-cols-1 gap-3 max-h-[600px] overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-lg hover:[&::-webkit-scrollbar-thumb]:bg-orange-500">
              {allCerts.map((cert, index) => (
                <div key={index} className="flex items-center p-4 border border-gray-800 bg-gray-900 rounded-lg hover:border-orange-500 transition-colors group cursor-default">
                  <svg className="w-5 h-5 text-gray-600 mr-4 flex-shrink-0 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-sm text-gray-300 tracking-wide">{cert}</span>
                </div>
              ))}
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default EducationCerts;