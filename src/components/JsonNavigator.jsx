import React, { useState } from 'react';

const jsonData = {
  Branches: {
    "Computer Science Engineering": {
      Semesters: {
        1: {
          Subjects: {
            "OS": {
              "Module Wise Notes": {
                "Module 1": ["Note 1", "Note 2", "Note 3"],
                "Module 2": ["Note 1", "Note 2", "Note 3"],
                "Module 3": ["Note 1", "Note 2", "Note 3"],
                "Module 4": ["Note 1", "Note 2", "Note 3"],
                "Module 5": ["Note 1", "Note 2", "Note 3"],
              },
              "Books": ["Book 1", "Book 2", "Book 3"],
              "Previous Year Papers": ["2019", "2020", "2021"],
              "Syllabus": ["Syllabus"],
            },
            "DSA": {
              "Module Wise Notes": {
                "Module 1": ["Note 1", "Note 2", "Note 3"],
                "Module 2": ["Note 1", "Note 2", "Note 3"],
                "Module 3": ["Note 1", "Note 2", "Note 3"],
                "Module 4": ["Note 1", "Note 2", "Note 3"],
                "Module 5": ["Note 1", "Note 2", "Note 3"],
              },
              "Books": ["Book 1", "Book 2", "Book 3"],
              "Previous Year Papers": ["2019", "2020", "2021"],
              "Syllabus": ["Syllabus"],
            }
          }
        },
        2: {
          Subjects: {
            "OS": {
              "Module Wise Notes": {
                "Module 1": ["Note 1", "Note 2", "Note 3"],
                "Module 2": ["Note 1", "Note 2", "Note 3"],
                "Module 3": ["Note 1", "Note 2", "Note 3"],
                "Module 4": ["Note 1", "Note 2", "Note 3"],
                "Module 5": ["Note 1", "Note 2", "Note 3"],
              },
              "Books": ["Book 1", "Book 2", "Book 3"],
              "Previous Year Papers": ["2019", "2020", "2021"],
              "Syllabus": ["Syllabus"],
            },
            "DSA": {
              "Module Wise Notes": {
                "Module 1": ["Note 1", "Note 2", "Note 3"],
                "Module 2": ["Note 1", "Note 2", "Note 3"],
                "Module 3": ["Note 1", "Note 2", "Note 3"],
                "Module 4": ["Note 1", "Note 2", "Note 3"],
                "Module 5": ["Note 1", "Note 2", "Note 3"],
              },
              "Books": ["Book 1", "Book 2", "Book 3"],
              "Previous Year Papers": ["2019", "2020", "2021"],
              "Syllabus": ["Syllabus"],
            }
          }
        },
      },
    },
    "CSE (DS)": {
      Semesters: {
        1: {
          Subjects: {
            "OS": {
              "Module Wise Notes": {
                "Module 1": ["Note 1", "Note 2", "Note 3"],
                "Module 2": ["Note 1", "Note 2", "Note 3"],
                "Module 3": ["Note 1", "Note 2", "Note 3"],
                "Module 4": ["Note 1", "Note 2", "Note 3"],
                "Module 5": ["Note 1", "Note 2", "Note 3"],
              },
              "Books": ["Book 1", "Book 2", "Book 3"],
              "Previous Year Papers": ["2019", "2020", "2021"],
              "Syllabus": ["Syllabus"],
            },
            "DSA": {
              "Module Wise Notes": {
                "Module 1": ["Note 1", "Note 2", "Note 3"],
                "Module 2": ["Note 1", "Note 2", "Note 3"],
                "Module 3": ["Note 1", "Note 2", "Note 3"],
                "Module 4": ["Note 1", "Note 2", "Note 3"],
                "Module 5": ["Note 1", "Note 2", "Note 3"],
              },
              "Books": ["Book 1", "Book 2", "Book 3"],
              "Previous Year Papers": ["2019", "2020", "2021"],
              "Syllabus": ["Syllabus"],
            }
          }
        },
        2: {
          Subjects: {
            "OS": {
              "Module Wise Notes": {
                "Module 1": ["Note 1", "Note 2", "Note 3"],
                "Module 2": ["Note 1", "Note 2", "Note 3"],
                "Module 3": ["Note 1", "Note 2", "Note 3"],
                "Module 4": ["Note 1", "Note 2", "Note 3"],
                "Module 5": ["Note 1", "Note 2", "Note 3"],
              },
              "Books": ["Book 1", "Book 2", "Book 3"],
              "Previous Year Papers": ["2019", "2020", "2021"],
              "Syllabus": ["Syllabus"],
            },
            "DSA": {
              "Module Wise Notes": {
                "Module 1": ["Note 1", "Note 2", "Note 3"],
                "Module 2": ["Note 1", "Note 2", "Note 3"],
                "Module 3": ["Note 1", "Note 2", "Note 3"],
                "Module 4": ["Note 1", "Note 2", "Note 3"],
                "Module 5": ["Note 1", "Note 2", "Note 3"],
              },
              "Books": ["Book 1", "Book 2", "Book 3"],
              "Previous Year Papers": ["2019", "2020", "2021"],
              "Syllabus": ["Syllabus"],
            }
          }
        },
      },
    },
  },
};

const JsonNavigator = () => {
  const [currentData, setCurrentData] = useState(jsonData.Branches);
  const [path, setPath] = useState(['Branches']);
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [expandedNodes, setExpandedNodes] = useState({});

  const handleBack = () => {
    if (path.length > 1) {
      let newPath = path.slice(0, path.length - 1);
      if (newPath.length === 6) {
        newPath = newPath.slice(0, 5); // Go back to showing subjects in shrink view
      }
      if (newPath.length === 2 && Object.keys(jsonData.Branches[newPath[1]]).length === 1) {
        newPath = ['Branches'];
      }
      setPath(newPath);
      navigateTo(newPath);
    }
  };

  const navigateTo = (newPath) => {
    let data = jsonData;
    newPath.forEach((key) => {
      data = data[key];
    });
    setCurrentData(data);
    console.log('Navigated to:', newPath);
  };

  const isLeafNode = (data) => {
    return typeof data !== 'object' || Array.isArray(data);
  };

  const handleSubmit = () => {
    if (selectedBranch && selectedSemester && selectedSubject) {
      const newPath = ['Branches', selectedBranch, 'Semesters', selectedSemester, 'Subjects', selectedSubject];
      setPath(newPath);
      navigateTo(newPath);
    }
  };

  const toggleNode = (node) => {
    setExpandedNodes((prev) => ({
      ...prev,
      [node]: !prev[node],
    }));
  };

  const renderContent = () => {
    console.log('Rendering content for path:', path);
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
    } else if (path.length === 2) {
      return (
        <div className="overflow-y-auto overflow-x-hidden flex-grow p-4 hide-scrollbar">
          {Object.keys(currentData.Semesters).map((key) => (
            <button
              key={key}
              onClick={() => {
                const newPath = [...path, 'Semesters', key];
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
    } else if (path.length === 4) {
      return (
        <div className="overflow-y-auto overflow-x-hidden flex-grow p-4 hide-scrollbar">
          {Object.keys(currentData.Subjects).map((key) => (
            <button
              key={key}
              onClick={() => {
                const newPath = [...path, 'Subjects', key];
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
    } else if (path.length === 6) {
      return (
        <div className="flex gap-4 w-full h-full overflow-hidden">
          <div className="w-1/4 bg-gray-700 p-4 rounded-lg h-full overflow-y-auto">
            <div className="h-full overflow-y-auto">
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
          <div className="w-3/4 bg-gray-800 p-4 rounded-lg h-full overflow-hidden">
            <h2 className="text-2xl text-gray-300 mb-4">Details</h2>
            <div className="h-full overflow-y-auto grid grid-cols-3 gap-4">
              {Object.keys(currentData).map((key) => (
                <div key={key} className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-lg text-gray-300 mb-2">{key}</h3>
                  {Array.isArray(currentData[key]) ? (
                    currentData[key].map((item, index) => (
                      <div key={index} className="mb-2">
                        <p className="text-gray-300">{item}</p>
                        <button className="text-blue-500 hover:underline">View in browser</button>
                        <button className="text-blue-500 hover:underline ml-2">Download</button>
                      </div>
                    ))
                  ) : (
                    <button
                      onClick={() => {
                        const newPath = [...path, key];
                        setPath(newPath);
                        navigateTo(newPath);
                      }}
                      className="text-blue-500 hover:underline"
                    >
                      Open
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={`bg-gray-800 p-6 rounded-2xl shadow-lg ${path.length === 6 ? 'w-full h-full flex flex-col overflow-hidden' : 'w-1/2 h-3/4 flex flex-col'}`}>
      <div className="flex flex-col mb-4 gap-4 w-full">
        <div className="flex gap-4">
          <div className="flex-none">
            <label className="block text-gray-300 mb-2">Branch</label>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="bg-gray-700 text-white py-1 px-2 rounded shadow hover:bg-gray-600 transition"
            >
              <option value="" disabled>Select Branch</option>
              {Object.keys(jsonData.Branches).map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-none">
            <label className="block text-gray-300 mb-2">Semester</label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="bg-gray-700 text-white py-1 px-2 rounded shadow hover:bg-gray-600 transition"
              disabled={!selectedBranch}
            >
              <option value="" disabled>Select Semester</option>
              {selectedBranch &&
                Object.keys(jsonData.Branches[selectedBranch].Semesters).map((semester) => (
                  <option key={semester} value={semester}>
                    {semester}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex-none">
            <label className="block text-gray-300 mb-2">Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="bg-gray-700 text-white py-1 px-2 rounded shadow hover:bg-gray-600 transition"
              disabled={!selectedSemester}
            >
              <option value="" disabled>Select Subject</option>
              {selectedSemester &&
                Object.keys(jsonData.Branches[selectedBranch].Semesters[selectedSemester].Subjects).map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex-none flex items-end">
            <button
              onClick={handleSubmit}
              className={`bg-blue-500 text-white py-1 px-2 rounded shadow transition ${!selectedBranch || !selectedSemester || !selectedSubject ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-400'}`}
              disabled={!selectedBranch || !selectedSemester || !selectedSubject}
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
