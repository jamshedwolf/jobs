import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);
  const searchButtonRef = useRef(null);

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both search input and search button
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="border-b border-gray-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {!showSearch ? (
              <>
                <Link
                  to="/"
                  className="text-[#353740] hover:text-[#353740] px-3 py-2 font-medium"
                >
                  Home
                </Link>
                <button
                  ref={searchButtonRef}
                  onClick={() => setShowSearch(true)}
                  className="text-[#353740] hover:text-[#353740] px-3 py-2 font-medium flex items-center"
                >
                  Search Jobs
                  <Search className="ml-1 h-4 w-4" />
                </button>
              </>
            ) : (
              <div className="w-full max-w-md">
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search for jobs..."
                    className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                  <button
                    onClick={() => setShowSearch(false)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right items */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center border rounded-full px-2 py-1">
              <Globe className="h-4 w-4" />
              <span className="ml-1 text-sm font-medium">EN</span>
            </div>
            <Link to="./login">
             <button className="bg-[#7B91B7] hover:bg-[#7B91B7]/90 w-full text-white p-4 rounded-md text-sm font-medium transition-colors duration-200">
                Login / Register
              </button>
             
             </Link>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center space-x-4">
            {showSearch ? (
              <div className="relative w-full">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for jobs..."
                  className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setShowSearch(true)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Search className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-500 p-2 hover:text-gray-700"
                >
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <button
              onClick={() => {
                setShowSearch(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md flex items-center"
            >
              Search Jobs
              <Search className="ml-2 h-4 w-4" />
            </button>
            <div className="flex flex-col lg:flex-row gap-2 items-center justify-between px-3 py-2">
              <div className="flex items-center bg-[#ECECEC] rounded-lg w-full p-4">
                <Globe className="h-4 w-4 text-black" />
                <span className="ml-1 text-sm font-medium">EN</span>
              </div>
             <Link to="./login">
             <button className="bg-[#7B91B7] hover:bg-[#7B91B7]/90 w-full text-white p-4 rounded-md text-sm font-medium transition-colors duration-200">
                Login / Register
              </button>
             
             </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}