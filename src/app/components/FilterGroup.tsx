'use client';
import React, { useState } from 'react';

type FilterGroupProps = {
  title: string;
  options: string[];
  selected: string[];
  onOptionToggle: (option: string) => void;
};

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  options,
  selected,
  onOptionToggle,
}) => {
  const [showAll, setShowAll] = useState(false);
  const displayOptions = showAll ? options : options.slice(0, 3);

  return (
    <div className="space-y-1">
      <h4 className="font-semibold text-black">{title}</h4>

      {displayOptions.map(option => (
        <label
          key={option}
          className="flex items-center text-gray-700 text-sm cursor-pointer"
        >
          <input
            type="checkbox"
            className="mr-2 accent-blue-600"
            checked={selected.includes(option)}
            onChange={() => onOptionToggle(option)}
          />
          {option}
        </label>
      ))}

      {options.length > 3 && (
        <button
          className="mt-1 text-blue-600 text-xs"
          onClick={() => setShowAll(prev => !prev)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default FilterGroup;
