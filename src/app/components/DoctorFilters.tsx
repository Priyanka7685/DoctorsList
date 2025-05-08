'use client';
import React, { useState, useEffect } from 'react';
import FilterGroup from './FilterGroup';

type DoctorFiltersProps = {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

const DoctorFilters: React.FC<DoctorFiltersProps> = ({selected, setSelected}) => {
  // const [selected, setSelected] = useState<string[]>([]);

  // useEffect(() => {
  //   setSelected(['Hospital Visit', 'Online Consult']);
  // }, []);

  const toggleOption = (option: string) => {
    const isModeOfConsult = ['Hospital Visit', 'Online Consult'].includes(option);

    setSelected(prev => {
      const alreadySelected = prev.includes(option);

      if (isModeOfConsult) {
        const selectedModes = prev.filter(opt =>
          ['Hospital Visit', 'Online Consult'].includes(opt)
        );
        if (alreadySelected && selectedModes.length === 1) {
          return prev;
        }
      }

      return alreadySelected
        ? prev.filter(item => item !== option)
        : [...prev, option];
    });
  };

  const clearAll = () => {
    setSelected(prev =>
      prev.filter(option => ['Hospital Visit', 'Online Consult'].includes(option))
    );
  };

  const selectedNonConsultOptions = selected.filter(
    option => !['Hospital Visit', 'Online Consult'].includes(option)
  );

  return (
    // <aside className="sticky top-0 z-10 w-full max-w-xs p-4 bg-white space-y-6 shadow rounded-lg h-[calc(100vh-80px)] overflow-y-auto">
    <aside className="hidden md:block sticky top-0 z-10 w-full max-w-xs p-4 bg-white space-y-6 shadow rounded-lg h-[calc(100vh-80px)] overflow-y-auto">

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-black">Filters</h2>
        <button className="text-blue-600 text-sm" onClick={clearAll}>
          Clear All
        </button>
      </div>

      {/* Selected Filter Chips */}
      {selectedNonConsultOptions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedNonConsultOptions.map((option, index) => (
            <button
              key={index}
              className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full"
              onClick={() => toggleOption(option)}
            >
              {option} <span className="ml-1">×</span>
            </button>
          ))}
        </div>
      )}

      <hr className="my-3 border-gray-200 w-full" />

      {/* Action Button */}
      <button className="w-full px-4 py-2 text-blue-800 border-2 border-blue-500 rounded-md">
        Show doctors near me
      </button>

      {/* Filter Sections */}
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
        options={[
          'English', 'Hindi', 'Telugu', 'Punjabi', 'Bengali',
          'Marathi', 'Urdu', 'Gujarati', 'Tamil', 'Kannada',
          'Oriya', 'Persian', 'Assamese',
        ]}
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
