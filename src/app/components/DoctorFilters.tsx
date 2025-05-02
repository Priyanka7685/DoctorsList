'use client';
import React, { useState, useEffect } from 'react';

type FilterGroupProps = {
  title: string;
  options: string[];
  selected: string[];
  onOptionToggle: (option: string) => void;
};

const FilterGroup: React.FC<FilterGroupProps> = ({ title, options, selected, onOptionToggle }) => {
  const [showAll, setShowAll] = useState(false);

  const displayOptions = showAll ? options : options.slice(0, 3);

  return (
    <div className="sticky top-0 z-50 space-y-1">
      <div className="flex justify-between items-center ">
        {/* Title on the left */}
        <h3 className="font-semibold text-black">{title}</h3>
      </div>

      {/* Display filter options */}
      {displayOptions.map(option => (
        <label key={option} className="block text-gray-700">
          <input
            type="checkbox"
            className="mr-2"
            checked={selected.includes(option)}
            onChange={() => onOptionToggle(option)}
          />
          {option}
        </label>
      ))}

      {/* Show more / Show less toggle */}
      {options.length > 3 && (
        <button
          className="mt-1 text-blue-600 text-sm"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

const DoctorFilters: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);

  // Set default selected options
  useEffect(() => {
    setSelected(['Hospital Visit', 'Online Consult']); // These options will be selected by default
  }, []);

  const toggleOption = (option: string) => {
    if (option === '') {
      setSelected([]); // Clear all selected options
    } else {
      setSelected(prev =>
        prev.includes(option)
          ? prev.filter(item => item !== option)
          : [...prev, option]
      );
    }
  };

  const clearAll = () => setSelected([]); // To clear all selections when "Clear All" is clicked

  return (
    <aside className="sticky top-0 z-10  w-full max-w-xs p-4 bg-white space-y-6 shadow rounded-lg h-[calc(100vh-80px)] overflow-y-auto">
        {/* Clear All button positioned above "Show doctors near me" */}
        <div className="flex justify-end mb-4">
        <button
          className="text-blue-600 text-sm"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
      {/* Selected options above "Show doctors near me" */}
      {selected.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {selected.map((option, index) => (
              <button
                key={index}
                className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full"
                onClick={() => toggleOption(option)}
              >
                {option} <span className="ml-2 text-sm">x</span>
              </button>
            ))}
          </div>
        </div>
      )}

    
<hr className="my-2 border-gray-200 w-full" />

      {/* Show doctors near me button */}
      <button className="w-full px-4 py-2 text-blue-800 border-2 border-blue-500 rounded-md mb-4">
        Show doctors near me
      </button>

      {/* Filter groups */}
      <FilterGroup
        title="Mode of Consult"
        options={['Hospital Visit', 'Online Consult']}
        selected={selected}
        onOptionToggle={toggleOption}
      />
      <FilterGroup
        title="Experience (Years)"
        options={['0-5', '6-10', '11-16', '16+']}
        selected={selected}
        onOptionToggle={toggleOption}
      />
      <FilterGroup
        title="Fees (In Rupees)"
        options={['100-500', '500 - 1000', '1000+']}
        selected={selected}
        onOptionToggle={toggleOption}
      />
      <FilterGroup
        title="Languages"
        options={['English', 'Hindi', 'Telugu', 'Punjabi', 'Bengali', 'Marathi', 'Urdu', 'Gujarati', 'Tamil', 'Kannada', 'Oriya', 'Persian', 'Assamese']}
        selected={selected}
        onOptionToggle={toggleOption}
      />
      <FilterGroup
        title="Facility"
        options={['Apollo Hospital', 'Other Clinics']}
        selected={selected}
        onOptionToggle={toggleOption}
      />
    </aside>
  );
};

export default DoctorFilters;
