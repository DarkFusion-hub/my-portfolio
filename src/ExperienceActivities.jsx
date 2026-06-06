import React from 'react';

const ExperienceSection = () => {
  const professionalExperience = {
    company: "QI SERVICES (M) SDN. BHD.",
    role: "Intern | IT Operations",
    date: "January 2025 - August 2025",
    bullets: [
      "Contributed to internal IT systems and infrastructure support.",
      "Developed and supported a meeting room booking platform.",
      "Assisted in a company-wide email disclaimer implementation."
    ]
  };

  const additionalExperience = [
    "Student Grab Service: Driver / Operations (2023 - 2026)",
    "'Wildbeans' Coffee Brand: Owner & Operator (2023)",
    "Original Apparel: Brand Partnership (2023)",
    "Lalamove: Delivery & Logistics (2021 - 2023)",
    "Midas Mart Johor: Cashier (2021)",
    "JNT Parcel Dispatch: Dispatch Operations (2021)"
  ];

  const honorsActivities = [
    { title: "Student Mobility Program Jaipur, India", role: "Participant", date: "2025" },
    { title: "Naturefied Community Engagement Project", role: "Head of Department, Logistics", date: "May 2024 - June 2024" },
    { title: "UTP Fleet Smash Badminton Tournament", role: "Participant", date: "2024" },
    { title: "UCRN Sports", role: "Assistant Head of Department, Logistics", date: "2023" },
    { title: "Lingual 2023 Competition", role: "Committee Member, Media", date: "2023" },
    { title: "UCRN 2023", role: "Committee Member, Campaign and Promotion", date: "2023" },
    { title: "ConvoFest 2023", role: "Committee Member, Business and Merchandise", date: "2023" },
    { title: "Sangeeth", role: "Committee Member, Logistics", date: "2023" },
    { title: "Host Member Relation Committee", role: "Member", date: "2023" },
    { title: "UTP Badminton Closed Tournament", role: "Participant", date: "2023" },
    { title: "Tug of War UTP Super Sports", role: "Participant", date: "2023" },
    { title: "Plant-Based Campaign", role: "Participant", date: "2022" },
    { title: "Oh My Code Competition", role: "Participant", date: "May 2022" }
  ];

  return (
    <div className="bg-black text-white font-sans py-20 px-10 border-t border-gray-900">
      <div className="max-w-6xl mx-auto w-full space-y-20">
        
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
              EXPERIENCE & ACTIVITIES
            </h2>
            <div className="text-orange-500 text-5xl font-bold opacity-20">06</div>
          </div>
          
          <div className="p-8 border border-orange-500 bg-gray-900 rounded-xl relative overflow-hidden group">
            <h3 className="text-2xl font-bold text-white mb-1">{professionalExperience.company}</h3>
            <div className="text-orange-500 text-sm tracking-widest uppercase font-semibold mb-2">{professionalExperience.role}</div>
            <div className="text-gray-500 text-xs tracking-wider mb-6">{professionalExperience.date}</div>
            <ul className="space-y-3">
              {professionalExperience.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start text-gray-300 text-sm">
                  <span className="text-orange-500 mr-3 mt-1">▹</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl tracking-widest uppercase text-gray-400 mb-6 border-b border-gray-800 pb-2">Additional Experience</h3>
            <div className="space-y-3">
              {additionalExperience.map((exp, index) => (
                <div key={index} className="p-4 border border-gray-800 bg-black rounded hover:border-gray-600 transition-colors">
                  <span className="text-sm text-gray-300 tracking-wide">{exp}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl tracking-widest uppercase text-gray-400 mb-6 border-b border-gray-800 pb-2">Honors & Activities</h3>
            <div className="grid grid-cols-1 gap-3 max-h-[500px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-thumb]:bg-gray-700 hover:[&::-webkit-scrollbar-thumb]:bg-orange-500">
              {honorsActivities.map((activity, index) => (
                <div key={index} className="p-4 border border-gray-800 bg-gray-900 rounded-lg hover:border-orange-500 transition-colors group">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-bold text-gray-200 group-hover:text-white">{activity.title}</h4>
                    <span className="text-[10px] text-orange-500 tracking-widest uppercase ml-4 flex-shrink-0">{activity.date}</span>
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{activity.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;