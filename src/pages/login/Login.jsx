import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaGoogle } from 'react-icons/fa';
import flogo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'worker',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="flex justify-center py-20 bg-gray-50 items-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-6">
          <img src={flogo} alt="Logo" className="mx-auto h-40 w-40" />
          <h2 className="text-2xl font-semibold mt-2">Register</h2>
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1">First Name</label>
          <div className="flex bg-[#E2E8F0]/80 items-center  rounded px-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              className="w-full p-2 outline-none"
            />
          </div>
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Last Name</label>
          <div className="flex bg-[#E2E8F0]/80   items-center  rounded px-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full p-2 outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email Address</label>
          <div className="flex   items-center bg-[#E2E8F0]/80  rounded px-2">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 outline-none"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Mobile Phone</label>
          <div className="flex bg-[#E2E8F0]/80  items-center  rounded px-2">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="e.g. 6912345678"
              value={form.phone}
              onChange={handleChange}
              className="w-full   p-2 outline-none"
            />
          </div>
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm mb-1">I am a:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="role"
                value="worker"
                checked={form.role === 'worker'}
                onChange={handleChange}
              />
              Worker
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="role"
                value="employer"
                checked={form.role === 'employer'}
                onChange={handleChange}
              />
              Employer
            </label>
          </div>
        </div>

        {/* Terms */}
        <div className="mb-4">
          <label className="flex flex-wrap items-center text-sm  gap-2">
            <input
              type="checkbox"
              name="agreed"
              checked={form.agreed}
              onChange={handleChange}
            />
            I agree to the <a href="#" className="underline text-gray-500">terms and conditions</a> and <a href="#" className="underline text-gray-500">privacy policy</a>
          </label>
        </div>

        {/* Create Account Button */}
        <Link to="/sms" >
        <button
          disabled={!form.agreed}
          className={`w-full py-2 rounded text-white font-semibold ${
            form.agreed ? 'bg-[#7B91B7]  hover:bg-[#7B91B7]/90' : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Create Account
        </button>
        </Link>

        {/* OR Divider */}
        <div className="my-4 text-center text-gray-500 text-sm">or</div>

        {/* Google Auth */}
        <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
                 <FcGoogle className="text-xl mr-2" />
                 Login via Google
               </button>

        {/* Login link */}
        <div className="text-center text-sm mt-6">
          Already have an account?{' '}
          <a href="#" className="text-gray-500 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
