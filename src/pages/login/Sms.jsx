// Sms.jsx
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaPhoneAlt } from "react-icons/fa";
import flogo from "../../assets/logo.svg"

const Sms = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm text-center">
        <div className="flex flex-col items-center mb-6">
          {/* Placeholder for the logo */}
          <div className="mb-2">
            <img
              src={flogo}
              alt="Merokam Logo"
              className="h-12 mx-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold">Login</h2>
        </div>

        <div className="text-left">
          <label className="text-gray-700 font-medium text-sm mb-1 block">
            Mobile Phone
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FaPhoneAlt />
            </span>
            <input
              type="tel"
              placeholder="e.g. 6912345678"
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
        </div>

        <button className="bg-[#7B91B7]  hover:bg-[#7B91B7]/90 text-white py-2 rounded-md w-full mt-4">
          Send SMS
        </button>

        <div className="my-4 border-t border-gray-200"></div>

        <button className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition">
          <FcGoogle className="text-xl mr-2" />
          Login via Google
        </button>

        <p className="text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-gray-500 hover:underline">
            Register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Sms;
