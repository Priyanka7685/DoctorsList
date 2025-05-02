'use client';
import React, { useState } from 'react';

const FilterGroup = ({ title, options }: { title: string; options: string[] }) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleOption = (option: string) => {
    setSelected(prev =>
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };

  const clearAll = () => setSelected([]);

  const displayOptions = showAll ? options : options.slice(0, 3);

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        {selected.length > 0 && (
          <button className="text-blue-600 text-sm" onClick={clearAll}>
            Clear All
          </button>
        )}
      </div>

      {displayOptions.map(option => (
        <label key={option} className="block text-gray-700">
          <input
            type="checkbox"
            className="mr-2"
            checked={selected.includes(option)}
            onChange={() => toggleOption(option)}
          />
          {option}
        </label>
      ))}

      {options.length > 3 && (
        <button
          className="mt-2 text-blue-600 text-sm"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default FilterGroup;
