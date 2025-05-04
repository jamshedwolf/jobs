import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export const jobs = [
    {
      id: 1,
      title: 'Worker harvesting aromatic plants in Heraklion, Crete',
      location: 'Heraklion, Greece',
      region: 'Heraklion',
      date: '13/04/2025 - 31/05/2025',
      description: 'Help with harvesting aromatic plants across multiple farms in Heraklion, including lavender, rosemary, and thyme.',
      address: 'Rural Fields, Heraklion, Crete, Greece',
      postedDate: '13/04/2025',
      endDate: '31/05/2025',
      employer: 'Crete Herbs Co.',
      regionFull: 'Crete',
      category: 'Agricultural',
    },
    {
      id: 2,
      title: 'LAND WORKERS (THRINSING AND HARVESTING FACTORY PEACHES)',
      location: 'Ampelonas, Greece',
      region: 'Larissa',
      date: '20/05/2025 - 10/09/2025',
      description: 'Work in a peach processing facility, including thinning, sorting, and harvesting peaches during the summer season.',
      address: 'Peach Processing Unit, Ampelonas, Greece',
      postedDate: '20/05/2025',
      endDate: '10/09/2025',
      employer: 'Thessaly Fruit Exporters',
      regionFull: 'Thessaly',
      category: 'Factory Work',
    },
    {
      id: 3,
      title: 'Land laborer with knowledge of tractor operation',
      location: 'Domokos, Greece',
      region: 'Phthiotis',
      date: '29/03/2025 - None',
      description: 'Assist with land maintenance and crop cultivation; must know how to operate a tractor.',
      address: 'Farmland Area, Domokos, Phthiotis, Greece',
      postedDate: '29/03/2025',
      endDate: 'None',
      employer: 'Domokos Agro Farm',
      regionFull: 'Central Greece',
      category: 'Agricultural Machinery',
    },
    {
      id: 4,
      title: 'Worker wanted',
      location: 'Veria, Greece',
      region: 'Imathia',
      date: '26/03/2025 - 31/05/2025',
      description: 'General farm work including planting, watering, and greenhouse assistance.',
      address: 'Agro Greenhouses, Veria, Greece',
      postedDate: '26/03/2025',
      endDate: '31/05/2025',
      employer: 'Imathia Agro Services',
      regionFull: 'Central Macedonia',
      category: 'General Labor',
    },
    {
      id: 5,
      title: 'Property maintenance',
      location: 'Paleochori, Greece',
      region: 'Ilia',
      date: '26/03/2025 - None',
      description: 'Maintenance of estate including olive trees, small vineyard, and surrounding grounds.',
      address: 'Private Estate, Paleochori, Ilia, Greece',
      postedDate: '26/03/2025',
      endDate: 'None',
      employer: 'Ilia Property Group',
      regionFull: 'Western Greece',
      category: 'Property Maintenance',
    },
  ]

const Jobs = () => {
    const [selectedRegions, setSelectedRegions] = useState([]);
    const [appliedRegions, setAppliedRegions] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');

    const handleRegionChange = (region) => {
        setSelectedRegions(prev =>
            prev.includes(region)
                ? prev.filter(r => r !== region)
                : [...prev, region]
        );
    };

    const handleApplyFilters = () => {
        setAppliedRegions([...selectedRegions]);
    };

   
      

    const filteredJobs = jobs.filter(job => {
        const matchesRegion = appliedRegions.length === 0 || appliedRegions.includes(job.region);
        const matchesKeyword = keyword === '' || job.title.toLowerCase().includes(keyword.toLowerCase());
        const matchesLocation = location === '' || job.location.toLowerCase().includes(location.toLowerCase());
        return matchesRegion && matchesKeyword && matchesLocation;
    });

    return (
        <div className="p-4  md:space-x-4 max-w-7xl mx-auto">
            <div className="md:w-1/4 w-full  md:hidden mb-6 md:mb-0">
                    <div className="p-4 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Filters</h2>
                        <div className="mb-4">
                            <h3 className="text-sm font-medium mb-2">Region</h3>
                            {['Larissa', 'Ilia', 'Imathia', 'Phthiotis', 'Heraklion'].map(region => (
                                <div key={region} className="mb-1">
                                    <input
                                        type="checkbox"
                                        id={region}
                                        className="mr-2"
                                        checked={selectedRegions.includes(region)}
                                        onChange={() => handleRegionChange(region)}
                                    />
                                    <label htmlFor={region}>{region}</label>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-sm font-medium mb-2">Classification</h3>
                            <select className="w-full border px-2 py-1 text-sm rounded">
                                <option>Newer</option>
                                <option>Older</option>
                            </select>
                        </div>
                        <button
                            onClick={handleApplyFilters}
                            className="mt-3 bg-[#7B91B7] w-full text-white text-sm px-4 py-2 rounded-md hover:bg-[#5d729d] transition-all"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            <div className="bg-white p-4 rounded-md shadow mb-6 flex flex-col gap-4 md:flex-row  gap-4 ">
                <div className="flex items-center border border-gray-300 rounded-md px-3 p-2 w-full">
                    <FaSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search job title..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="w-full py-2 outline-none text-sm"
                    />
                </div>
                <div className="flex items-center border border-gray-300 p-3 rounded-md px-2 w-full">
                    <FaMapMarkerAlt className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search location..."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full py-2 outline-none text-sm"
                    />
                </div>

                <button className="bg-[#7B91B7] hover:bg-[#7B91B7]/90 px-10 text-white p-4 rounded-md text-sm font-medium transition-colors duration-200">
                Search
              </button>
            </div>
            <div className="p-4 md:flex md:space-x-4">
                {/* Sidebar Filters */}
                <div className="md:w-1/4 w-full hidden md:block mb-6 md:mb-0">
                    <div className="p-4 rounded shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">Filters</h2>
                        <div className="mb-4">
                            <h3 className="text-sm font-medium mb-2">Region</h3>
                            {['Larissa', 'Ilia', 'Imathia', 'Phthiotis', 'Heraklion'].map(region => (
                                <div key={region} className="mb-1">
                                    <input
                                        type="checkbox"
                                        id={region}
                                        className="mr-2"
                                        checked={selectedRegions.includes(region)}
                                        onChange={() => handleRegionChange(region)}
                                    />
                                    <label htmlFor={region}>{region}</label>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-sm font-medium mb-2">Classification</h3>
                            <select className="w-full border px-2 py-1 text-sm rounded">
                                <option>Newer</option>
                                <option>Older</option>
                            </select>
                        </div>
                        <button
                            onClick={handleApplyFilters}
                            className="mt-3 bg-[#7B91B7] w-full text-white text-sm px-4 py-2 rounded-md hover:bg-[#5d729d] transition-all"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:w-3/4 w-full">
                    {/* Search Inputs */}


                    {/* Job Cards */}
                    <div className="grid gap-4 md:grid-cols-2">
                        {filteredJobs.map((job, idx) => (
                            <div key={idx} className="shadow-lg rounded shadow p-4 flex flex-col justify-between">
                                <div>
                                    <p className="text-xs text-gray-500 mb-1">📅 {job.date}</p>
                                    <h3 className="font-semibold text-xl mb-1">{job.title}</h3>
                                    <p className="text-sm text-gray-700">📍 {job.location}</p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">{job.region}</span>
                                        <span className="border border-gray-300 text-xs px-2 py-1 rounded-full">Agricultural</span>
                                    </div>
                                </div>
                              
                              <Link to={`/jobs/${job.id}`}>
                              
                              <button className="mt-4 bg-[#7B91B7] text-white px-4 w-full py-2 rounded hover:bg-[#5d729d]">
                                    Apply
                                </button>
                                
                                </Link>
                              
                            
                            </div>
                        ))}
                    </div>
                </div>
            </div>


      
        </div>
    );
};

export default Jobs;
