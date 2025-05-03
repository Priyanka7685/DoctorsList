import React from 'react';

type DoctorProp = {
  name: string;
  imageUrl: string;
  specialization: string;
  qualifications: string[];
  experience: number;
  hospital: string;
  consultationFees: {
    online?: number;
    offline?: number;
  };
  address: string;
  availability: {
    online?: boolean;
    offline?: boolean;
    timings?: string
  }
}

const DoctorCard: React.FC<DoctorProp> = ({
    name,
    imageUrl,
    specialization,
    qualifications,
    experience,
    hospital,
    consultationFees,
    address,
    availability
}) => {
  
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white shadow-md rounded-lg p-4 gap-4 border">
      
      {/* Section 1: Doctor Image */}
      <div className="flex-shrink-0">
        <img
          src={imageUrl || 'https://via.placeholder.com/100'}
          alt={name}
          className="w-24 h-24  object-cover"
        />
      </div>

      {/* Section 2: Doctor Details */}
      <div className="flex-1 space-y-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-900">{specialization}</p>
        <p className="text-sm text-green-600 font-medium">{experience} years {qualifications.join(', ')}</p>
        <p className="text-sm text-gray-900 font-medium">{address}</p>
        <p className="text-sm text-gray-900 font-medium">{hospital}</p>
      </div>


      {/* Section 3: Fees & Action */}
      <div className="text-center sm:text-center space-y-2 pt-15 ">
  {/* Online Consultation */}
  {availability?.online && (
    <div>
      <p className="text-sm text-gray-800 font-semibold mb-1">
        ₹{consultationFees?.online ?? 'N/A'}
      </p>
      <button className=" px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md">
        Consult Online

        <p>{availability.timings}</p>
      </button>
    </div>
  )}
</div>
<div className="text-center sm:text-center space-y-2 pt-15">

  {/* Offline Consultation */}
  {availability?.offline && (
    <div>
      <p className="text-sm text-gray-800 font-semibold mb-1">
        ₹{consultationFees?.offline ?? 'N/A'}
      </p>
      <button className=" px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md">
        Visit Doctor
      </button>
    </div>
  )}
</div>
    </div>
  );
};

export default DoctorCard;
