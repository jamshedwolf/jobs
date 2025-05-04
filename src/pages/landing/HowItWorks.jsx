import React from 'react';
import { User, FileText, Search, Phone } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: <User size={36} />,
      title: "Register & Login",
      description: [
        "Create an account with your email or Google",
        "Sign in to get started"
      ]
    },
    {
      number: 2,
      icon: <FileText size={36} />,
      title: "Post a Job Ad",
      description: [
        "Publish job details,",
        "including job title,",
        "location, and",
        "requirements"
      ]
    },
    {
      number: 3,
      icon: <Search size={36} />,
      title: "Search Job Listings",
      description: [
        "Browse available jobs",
        "or search with specific",
        "criteria",
        "and location"
      ]
    },
    {
      number: 4,
      icon: <Phone size={36} />,
      title: "Contact & Recruitment",
      description: [
        "Connect with",
        "employers",
        "or applicants and",
        "complete the hiring",
        "process"
      ]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#d1dce1] py-20 md:py-28 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How Merokam Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process makes it easy to find work or hire workers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="bg-white rounded-xl shadow-md p-8 relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 rounded-full bg-[#7B91B7] flex items-center justify-center text-white text-lg font-medium shadow-sm">
                  {step.number}
                </div>
              </div>
              <div className="flex flex-col items-center pt-6">
                <div className="mb-6 text-gray-600">
                  {step.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-base text-center leading-relaxed">
                  {step.description.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;