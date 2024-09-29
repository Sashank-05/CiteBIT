import React from 'react';
import { useMediaQuery } from 'react-responsive';

const BranchSelector = ({ selectedBranch, setSelectedBranch, branches }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });


  return (
    <div
      className={`flex-none ${
        isTabletOrMobile ? 'p-4' : isDesktopOrLaptop ? 'p-4' : isBigScreen ? 'p-4' : 'p-4'
      }`}
    >
      <label className="block text-gray-300 mb-2">Branch</label>
      <select
        value={selectedBranch}
        onChange={(e) => setSelectedBranch(e.target.value)}
        className={`bg-gray-700 text-white py-1 px-2 rounded shadow hover:bg-gray-600 transition ${
          isTabletOrMobile ? 'w-full' : 'w-auto'
        }`}
      >
        <option value=" " disabled>
          Select Branch
        </option>
        {branches.map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
    </div>
  );
};


export default BranchSelector;