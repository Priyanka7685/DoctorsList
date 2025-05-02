import React from 'react';

const DoctorCard = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white shadow-md rounded-lg p-4 gap-4 border">
      
      {/* Section 1: Doctor Image */}
      <div className="flex-shrink-0">
        <img
          src="https://via.placeholder.com/100"
          alt="Doctor"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      {/* Section 2: Doctor Details */}
      <div className="flex-1 space-y-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-gray-900">Dr. Priya Kapoor</h2>
        <p className="text-sm text-gray-600">General Physician</p>
        <p className="text-sm text-gray-700">15 years MBBS, MD - Internal Medicine</p>
        <p className="text-sm text-green-600 font-medium">address</p>
        <p className="text-sm text-green-600 font-medium">Hospital, address</p>
      </div>

      {/* Section 3: Fees & Action */}
      <div className="text-center sm:text-right space-y-2 pt-5">
        <p className="text-sm text-gray-800 font-semibold">₹500 </p>
        <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md">
          Consult Online
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
