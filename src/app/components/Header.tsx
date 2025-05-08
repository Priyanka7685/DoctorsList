"use client";
import React, { useEffect, useState } from "react";
import { Search, MapPin, User, Menu } from "lucide-react";

function Header() {
  const [search, setSearch] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow bg-white px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://i.tracxn.com/logo/company/download_1590122969225.png"
            alt="Logo"
            className="h-10 w-auto"
          />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-6 w-6 text-black" />
          </button>
        </div>

        {/* Location & Search Bar */}
        <div className="hidden md:flex items-center space-x-6 flex-grow ml-8">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-black" />
            <div className="leading-tight">
              <p className="text-xs text-gray-500">Select Location</p>
              <div className="flex items-center font-semibold text-sm text-black">
                <span>Select Address</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {isClient && (
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-black" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Doctors, Specialities, Conditions etc"
                className="w-full rounded-md border border-gray-300 bg-gray-100 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-600"
              />
            </div>
          )}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center space-x-2 text-green-800 hover:text-gray-700 px-4 py-2 border rounded-md">
            <span>Login</span>
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Bottom Nav Links */}
      <div className="hidden md:flex justify-center space-x-6 mt-2">
        {[
          "Buy medicines",
          "Find Doctors",
          "Lab Tests",
          "Circle Membership",
          "Health Records",
          "Diabetes Reversal",
          "Buy insurance",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-blue-600"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4">
          <div className="flex flex-col space-y-2">
            {[
              "Buy medicines",
              "Find Doctors",
              "Lab Tests",
              "Circle Membership",
              "Health Records",
              "Diabetes Reversal",
              "Buy insurance",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold text-gray-700 hover:text-blue-600"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="flex items-center space-x-2 text-green-800 hover:text-gray-700 px-4 py-2 border rounded-md w-full justify-center">
            <span>Login</span>
            <User className="h-5 w-5" />
          </button>

          {isClient && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-black" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 bg-gray-100 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-600"
              />
            </div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
