import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    // Add search functionality here
    console.log('Search jobs clicked');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration functionality here
    console.log('Register clicked');
  };

  return (
    <section className="bg-gray-50 py-16 md:h-screen flex items-center justify-center md:py-24 w-full">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Find Agricultural Jobs &<br />
          Workers
        </h1>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Merokam is a platform that connects agricultural businesses with workers. 
          We make it easier to search for jobs and post ads with fast results.
        </p>

        {/* Search Bar with precise shadow and background effect */}
        <div className="relative mb-6">
          <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-[0_6px_20px_rgba(0,0,0,0.08)] flex flex-col md:flex-row overflow-hidden">
            <div className="flex items-center flex-1 gap-2 px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
            <div className="p-2  rounded-full bg-gray-50">
              <Search className="  text-gray-400  flex-shrink-0" />
              </div>
            <div className="p-2 w-full rounded-full bg-gray-50">
            <input
                type="text"
                placeholder="Job keywords"
                className="w-full outline-none text-gray-700 bg-transparent"
                aria-label="Job keywords"
              />
              </div>
             
             
            </div>

            <div className="flex items-center gap-2 flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="p-2  rounded-full bg-gray-50">
              <MapPin className="  text-gray-400  flex-shrink-0" />
              </div>
              <div className="p-2 w-full rounded-full bg-gray-50">
              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none text-gray-700 bg-transparent"
                aria-label="Location"
              />
              </div>
              
            </div>

           <Link to="jobs" >
           <button 
              type="submit"
              className="bg-[#7B91B7] h-full  hover:bg-[#7B91B7]/90 text-white px-6 py-3 font-medium transition-colors duration-200 md:w-auto w-full"
            >
              Search Jobs
            </button>
           </Link>
          </form>
        </div>

        <button 
          onClick={handleRegister}
          className="bg-[#7B91B7] hover:bg-[#7B91B7]/90 text-white rounded-lg px-8 py-3 font-medium transition-colors duration-200 mb-4 shadow-md"
        >
          Register to post a job
        </button>

        <p className="text-gray-500 text-sm">Free and easy to use</p>
      </div>
    </section>
  );
};

export default Hero;