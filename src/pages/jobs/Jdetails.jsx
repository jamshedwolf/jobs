import React from "react"
import { jobs } from "./Jobs"
import { useParams, Link } from "react-router-dom"
import {
    ArrowLeft, Calendar, Clock, Facebook, HardHat, FileText, MapPin,
    User, Grid, Twitter, Linkedin, Search
} from "lucide-react"
import Footer from "../../components/Footer"

export default function Jdetails() {
    const { id } = useParams()
    const job = jobs.find(j => j.id.toString() === id)

    if (!job) {
        return (
            <div className="max-w-7xl mx-auto p-5">
                <p className="text-red-500">Job not found.</p>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto p-5  text-gray-800 font-sans">
            <div className="flex items-center gap-2 mb-5 text-sm cursor-pointer text-gray-700 hover:text-[#6c85b5] transition-colors">
                <ArrowLeft size={16} />
                <Link to="/jobs">
                    <span>Back to job listings</span>
                </Link>
            </div>

            <div className="bg-[#6c85b5] text-white rounded-lg p-8 text-center mb-5 flex flex-col items-center gap-2">
                <div className="mb-2">
                    <HardHat size={48} />
                </div>
                <h1 className="text-2xl font-semibold">{job.title}</h1>
                <div className="flex items-center gap-2 text-sm">
                    <Calendar size={16} />
                    <span>Posted: {job.postedDate}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
                {/* Job Summary - Now 1 column span */}
                

                {/* Job Details - Now 2 column span */}
                <div className="bg-white rounded-lg shadow lg:col-span-2">
                    <div className="bg-gray-800 text-white flex items-center gap-2 p-4 font-semibold">
                        <FileText size={16} />
                        <span>Job Details</span>
                    </div>
                    <div className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
                            <div className="bg-purple-100 p-4 font-medium rounded">Description</div>
                            <div className="p-4 text-sm leading-relaxed">
                                <p>{job.description}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
                            <div className="bg-purple-100 p-4 font-medium mt-2 rounded">Location</div>
                            <div className="p-4 text-sm flex items-center gap-2">
                                <MapPin size={16} className="text-gray-500" />
                                <span>{job.location}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 items-start">
                            <div className="bg-purple-100 p-4 font-medium mt-2 rounded">Dates</div>
                            <div className="p-4 text-sm space-y-2">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-gray-500" />
                                    <span>Posted: {job.postedDate}</span>
                                </div>
                                <div className="ml-6 text-sm">End Date: {job.endDate || "None"}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow lg:col-span-1">
                    <div className="bg-[#6c85b5] text-white p-4 font-semibold">Job Summary</div>
                    <div className="p-5 space-y-4">
                        <div className="flex items-start gap-3">
                            <User size={16} className="mt-0.5 text-gray-500" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-600">Employer</span>
                                <span className="text-sm font-medium">{job.employer}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin size={16} className="mt-0.5 text-gray-500" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-600">Region</span>
                                <span className="text-sm font-medium">{job.region}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Grid size={16} className="mt-0.5 text-gray-500" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-600">Category</span>
                                <span className="text-sm font-medium">{job.category}</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Clock size={16} className="mt-0.5 text-gray-500" />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-600">Posted on</span>
                                <span className="text-sm font-medium">{job.postedDate}</span>
                            </div>
                        </div>
                        <button className="bg-[#6c85b5] hover:bg-[#5a729c] text-white w-full py-2 rounded font-medium mt-4 transition-colors">
                            Apply for this job
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
                    <h3 className="text-xl font-semibold mb-2 text-center">Share this opportunity</h3>
                    <p className="text-sm mb-4 text-center text-gray-600">Help others discover this job opportunity</p>
                    <div className="flex justify-center gap-4 mb-4">
                        <button className="p-2 rounded-full border border-gray-300  hover:bg-gray-100 transition-colors">
                            <Facebook size={20} color="#4267B2" />
                        </button>
                        <button className="p-2 rounded-full  border border-gray-300 hover:bg-gray-100 transition-colors">
                            <Twitter size={20} color="#1DA1F2" />
                        </button>
                        <button className="p-2 rounded-full  border border-gray-300 hover:bg-gray-100 transition-colors">
                            <Linkedin size={20} color="#0077B5" />
                        </button>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-sm text-gray-700">
                        <Search size={16} />
                        <span className="uppercase">Discover more opportunities</span>
                    </div>
                </div>

                <div className="bg-white rounded-lg flex items-center justify-center shadow p-6">
                     <div className="p-4 bg-gray-50 rounded-lg ">  
                        
                         <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                    <p className="text-sm mb-4 text-gray-600">Contact our support team for assistance with your application.</p>
                    <button className="">
                        Contact Support
                    </button></div>


                 
                </div>
            </div>

            <Footer />
        </div>
    )
}