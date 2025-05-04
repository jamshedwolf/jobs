import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Location = () => {
  return (
    <>
      {/* Location Search Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Search for a job near you
            </h2>
            <p className="text-gray-600">
              With one tap, the platform detects your location and shows you jobs nearby
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-[#7B91B7]/10 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-[#7B91B7]" />
            </div>
          </div>

          <p className="text-center text-gray-700 max-w-lg mx-auto">
            Finding work near you has never been easier. Our location-based search helps you discover opportunities in
            your area, saving you time and effort.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#7B91B7] py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to find agricultural work?
          </h2>
          <p className="text-[#E8EDF7] mb-8">
            Connect with agricultural businesses and find opportunities that match your skills
          </p>

          <button className="bg-white text-[#7B91B7] hover:bg-blue-50 transition-colors duration-200 rounded-lg px-6 py-3 font-medium inline-flex items-center hover:scale-105">
            Register now for free
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Location;