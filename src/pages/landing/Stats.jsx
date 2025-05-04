import React from 'react';
import { Users, Briefcase, FileText } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Users className="w-7 h-7 text-white" />,
      value: "41",
      label: "Registered Users"
    },
    {
      icon: <Briefcase className="w-7 h-7 text-white" />,
      value: "4",
      label: "Job Advertisements"
    },
    {
      icon: <FileText className="w-7 h-7 text-white" />,
      value: "2",
      label: "Applications"
    }
  ];

  return (
    <section className="bg-[#353740] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Platform Statistics
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 lg:gap-24 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center transition-transform hover:scale-105"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-5 shadow-lg">
                {stat.icon}
              </div>
              <span className="text-5xl font-bold text-white mb-2">{stat.value}</span>
              <span className="text-gray-100 text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;