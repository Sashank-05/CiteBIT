import React, { useState } from 'react';
import { jsonData } from '../../data/data';
import BranchSelector from './BranchSelector';
import SemesterSelector from './SemesterSelector';

const JsonNavigator = () => {
  const [currentData, setCurrentData] = useState(jsonData.Branches);
  const [path, setPath] = useState(['Branches']);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');

  // Navigate back in the path
  const handleBack = () => {
    if (path.length > 1) {
      let newPath = path.slice(0, path.length - 1);
      if (newPath.length === 2 && Object.keys(jsonData.Branches[newPath[1]]).length === 1) {
        newPath = ['Branches'];
      }
      setPath(newPath);
      navigateTo(newPath);
    }
  };

  // Navigate to a new path
  const navigateTo = (newPath) => {
    let data = jsonData;
    newPath.forEach((key) => {
      data = data[key];
    });
    setCurrentData(data);
  };

  // Check if the data is a leaf node
  const isLeafNode = (data) => {
    return typeof data !== 'object' || Array.isArray(data);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (selectedBranch && selectedSemester) {
      const newPath = ['Branches', selectedBranch, 'Semesters', selectedSemester];
      setPath(newPath);
      navigateTo(newPath);
    }
  };

  // Render the content based on the current path
  const renderContent = () => {
    if (path.length === 1) {
      return (
        <div className="overflow-y-auto overflow-x-hidden flex-grow p-4 hide-scrollbar">
          {Object.keys(currentData).map((key) => (
            <button
              key={key}
              onClick={() => {
                const newPath = [...path, key];
                setPath(newPath);
                navigateTo(newPath);
              }}
              className="border-2 border-gray-700 text-lg text-gray-300 rounded-lg p-4 transition transform hover:bg-gray-700 hover:text-white hover:scale-105 focus:outline-none w-full text-left mb-4"
            >
              {key}
            </button>
          ))}
        </div>
      );
    } else if (path.length === 2 && Object.keys(currentData).length === 1) {
      const singleKey = Object.keys(currentData)[0];
      const newPath = [...path, singleKey];
      setPath(newPath);
      navigateTo(newPath);
    } else if (path.length === 4) {
      return (
        <div className="flex gap-4 w-full h-full">
          <div className="w-1/4 bg-gray-700 p-4 rounded-lg">
            {Object.keys(currentData).map((key) => (
              <div key={key} className="mb-2">
                <button
                  onClick={() => {
                    if (isLeafNode(currentData[key])) {
                      alert(JSON.stringify(currentData[key], null, 2));
                    } else {
                      const newPath = [...path, key];
                      setPath(newPath);
                      navigateTo(newPath);
                    }
                  }}
                  className="text-left w-full text-lg text-gray-300 rounded-lg p-2 transition transform hover:bg-gray-600 hover:text-white focus:outline-none"
                >
                  {key}
                </button>
              </div>
            ))}
          </div>
          <div className="w-3/4 bg-gray-800 p-4 rounded-lg">
            {Object.keys(currentData).map((key) => (
              <div key={key} className="mb-2">
                <button
                  onClick={() => {
                    if (isLeafNode(currentData[key])) {
                      alert(JSON.stringify(currentData[key], null, 2));
                    } else {
                      const newPath = [...path, key];
                      setPath(newPath);
                      navigateTo(newPath);
                    }
                  }}
                  className="text-left w-full text-lg text-gray-300 rounded-lg p-2 transition transform hover:bg-gray-600 hover:text-white focus:outline-none"
                >
                  {key}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="overflow-y-auto overflow-x-hidden flex-grow p-4 hide-scrollbar">
          {Object.keys(currentData).map((key) => (
            <button
              key={key}
              onClick={() => {
                if (isLeafNode(currentData[key])) {
                  alert(JSON.stringify(currentData[key], null, 2));
                } else {
                  const newPath = [...path, key];
                  setPath(newPath);
                  navigateTo(newPath);
                }
              }}
              className="border-2 border-gray-700 text-lg text-gray-300 rounded-lg p-4 transition transform hover:bg-gray-700 hover:text-white hover:scale-105 focus:outline-none w-full text-left mb-4"
            >
              {key}
            </button>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={`bg-gray-800 p-6 rounded-2xl shadow-lg ${path.length < 4 ? 'w-1/2 h-3/4 flex flex-col' : 'w-full h-full flex flex-col'}`}>
      <div className="flex flex-col mb-4 gap-4 w-full">
        <div className="flex gap-4">
          <BranchSelector
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
            branches={Object.keys(jsonData.Branches)}
          />
          <SemesterSelector
            selectedSemester={selectedSemester}
            setSelectedSemester={setSelectedSemester}
            semesters={selectedBranch ? Object.keys(jsonData.Branches[selectedBranch].Semesters) : []}
            disabled={!selectedBranch}
          />
          <div className="flex-none flex items-end">
            <button
              onClick={handleSubmit}
              className={`bg-blue-500 text-white py-1 px-2 rounded shadow transition ${!selectedBranch || !selectedSemester ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-400'}`}
              disabled={!selectedBranch || !selectedSemester}
            >
              Submit
            </button>
          </div>
        </div>
        {path.length > 1 && (
          <button
            onClick={handleBack}
            className="bg-gray-700 text-white py-2 px-4 rounded shadow hover:bg-gray-600 transition self-start"
          >
            Back
          </button>
        )}
      </div>
      <div className="flex flex-col gap-4 w-full flex-grow overflow-hidden">
        {renderContent()}
      </div>
    </div>
  );
};

export default JsonNavigator;
