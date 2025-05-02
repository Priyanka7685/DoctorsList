"use client";
import React from "react";
import DoctorFilters from "../components/DoctorFilters";
import DoctorCard from "../components/DoctorCard";
import { ChevronRight } from "lucide-react";

const DoctorPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
      
      {/* LEFT: Filters */}
      <div className="w-full lg:w-1/4">
        <div className="sticky top-20 bg-white z-10">
          <DoctorFilters />
        </div>
      </div>

      {/* RIGHT: Main content */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
  
  {/* Left: Breadcrumb + Heading + Doctor Cards */}
  <div className="w-full lg:w-2/3 space-y-6">
    
    {/* Breadcrumb + Title */}
    <div className="space-y-2 border-b pb-4">
      <div className="flex items-center text-sm text-gray-600 space-x-1">
        <span className="hover:underline cursor-pointer">Home</span>
        <ChevronRight className="w-4 h-4" />
        <span className="hover:underline cursor-pointer">Doctors</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-800 font-medium">General Physicians</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
          Consult General Physicians Online – Internal Medicine Specialists
        </h1>
        <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md">
          Availability
        </button>
      </div>

      <p className="text-sm text-gray-600">(761 doctors)</p>
    </div>

    {/* Doctor Cards */}
    <DoctorCard />
  </div>

  {/* Right: Sticky Help Card */}
  <div className="w-full lg:w-1/3">
    <div className="sticky top-20">
      <div className="rounded-xl shadow-lg p-4 bg-blue-900 space-y-3">
        <img
          src="https://media.istockphoto.com/id/638647058/photo/we-offer-our-patients-premium-healthcare-here.jpg?s=612x612&w=0&k=20&c=pek5ehwgsZNPemeEh4bObQ1U5DRPEs0WHleosG-daa8="
          alt="Help"
          className="w-full h-40 object-cover rounded-md"
        />
        <p className="text-sm text-white">
          Need help consulting the right doctor?
        </p>
        <p className="text-white">Call +5769712551 to book instantly</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default DoctorPage;
