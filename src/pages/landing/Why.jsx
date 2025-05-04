import React from 'react';
import { Check, MapPin, DollarSign, Lock } from 'lucide-react';

const Why = () => {
  const features = [
    {
      icon: <Check className="w-7 h-7 text-[#7B91B7]" />,
      title: "Easy to Use",
      description: "Create an account in just a few minutes, with simple and clear steps"
    },
    {
      icon: <MapPin className="w-7 h-7 text-[#7B91B7]" />,
      title: "Location-based search",
      description: "Find jobs or workers near you, based on your location"
    },
    {
      icon: <DollarSign className="w-7 h-7 text-[#7B91B7]" />,
      title: "Free to use",
      description: "Get started today with no cost or commitment"
    },
    {
      icon: <Lock className="w-7 h-7 text-[#7B91B7]" />,
      title: "Secure & Private",
      description: "Your data is protected and only shared with your explicit consent"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#d1dce1]  to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Merokam
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our platform provides the best experience for agricultural businesses and workers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center text-center 
              transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-t-2 hover:border-[#7B91B7]"
            >
              <div className="w-20 h-20 rounded-full bg-[#7B91B7]/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;