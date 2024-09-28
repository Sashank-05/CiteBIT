import React from 'react';

const SemesterSelector = ({ selectedSemester, setSelectedSemester, semesters, disabled }) => (
  <div className="flex-none">
    <label className="block text-gray-300 mb-2">Semester</label>
    <select
      value={selectedSemester}
      onChange={(e) => setSelectedSemester(e.target.value)}
      className="bg-gray-700 text-white py-1 px-2 rounded shadow hover:bg-gray-600 transition"
      disabled={disabled}
    >
      <option value="" disabled>Select Semester</option>
      {semesters.map((semester) => (
        <option key={semester} value={semester}>
          {semester}
        </option>
      ))}
    </select>
  </div>
);

export default SemesterSelector;
