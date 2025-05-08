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
    <div className="flex flex-col sm:flex-row  bg-white shadow-md rounded-lg p-4 gap-4 border">
      
      {/* Section 1: Doctor Image */}
      <div className="flex-shrink-0 sm:w-1/4 flex justify-center">
        <img
          src={imageUrl || 'https://via.placeholder.com/100'}
          alt={name}
          className="w-24 h-24  object-cover"
        />
      </div>

      {/* Section 2: Doctor Details */}
      <div className="flex-1 sm:w-2/4 space-y-1 text-center sm:text-left">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-900">{specialization}</p>
        <p className="text-sm text-green-600 font-medium">{experience} years {qualifications.join(', ')}</p>
        <p className="text-sm text-gray-900 font-medium">{address}</p>
        <p className="text-sm text-gray-900 font-medium">{hospital}</p>
      </div>


      {/* Section 3: Fees & Action */}
      <div className="sm:w-1/4 flex flex-col items-center gap-4">
        {/* Online Consultation */}
        {availability?.online && (
          <div className="text-center">
            <p className="text-sm text-gray-800 font-semibold mb-1">
              ₹{consultationFees?.online ?? 'N/A'}
            </p>
            <button className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded-md flex flex-col items-center">
              <span>Consult Online</span>
              {availability.timings && (
                <span className="text-xs">{availability.timings}</span>
              )}
            </button>
          </div>
        )}

        {/* Offline Consultation */}
        {availability?.offline && (
          <div className="text-center">
            <p className="text-sm text-gray-800 font-semibold mb-1">
              ₹{consultationFees?.offline ?? 'N/A'}
            </p>
            <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md">
              Visit Doctor
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
