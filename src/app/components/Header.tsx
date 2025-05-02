"use client"
import React, { useEffect, useState } from 'react'
import {  Search, MapPin, User } from 'lucide-react'


function Header() {
    const [search, setSearch] = useState('');
  const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true)
      }, []);
    
  return (
    <div className="sticky top-0 z-50 shadow bg-white px-6 py-4 ">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div className="flex items-center justify-between "> */}
      <div className="flex items-center space-x-6 flex-grow">
        <div className="flex items-center space-x-2 ">
          <img
            src="https://i.tracxn.com/logo/company/download_1590122969225.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* <div className="flex items-center space-x-6 flex-1 justify-center"> */}
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

        {/* search bar */}
        {/* <div className="w-full md:w-auto flex-1 px-0 md:px-4 max-w-xl mb-4 md:mb-0 ml-0 "> */}
        {isClient && (
          <div className="relative w-[630px] ml-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-black"  />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Doctors, Specialities, Conditions etc"
              className="w-full rounded-md border border-gray-300 bg-gray-100 pl-10 pr-4 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-600 "
              />
              </div>
        )}
          </div>
        

        <div className="flex items-center space-x-4 mr-4 border-1 border-green-800 rounded-md px-4 py-2">
          <button className="flex items-center space-x-2 text-green-800 hover:text-gray-700 ">
            <span>Login</span>
            <User className="h-5 w-5 border-2  rounded-full" />
          </button>
        </div>
      </div>

      <hr className="my-2 border-gray-200 w-full" />

      <div className="mt-2 flex justify-center space-x-6">
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 mr-12">
          Buy medicines
        </a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 mr-12">
          Find Doctors
        </a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 mr-12">
          Lab Tests
        </a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 mr-12">
          Circle Membership
        </a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 mr-12">
          Health Records
        </a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 mr-12">
          Diabetes Reversal
        </a>
        <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-600 mr-12">
          Buy insurance
        </a>
      </div>
    </div>

  )
}

export default Header