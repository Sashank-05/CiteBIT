const BranchSelector = ({ selectedBranch, setSelectedBranch, branches }) => (
  <div className="flex-none">
    <label className="block text-gray-300 mb-2">Branch</label>
    <select
      value={selectedBranch}
      onChange={(e) => setSelectedBranch(e.target.value)}
      className="bg-gray-700 text-white py-1 px-2 rounded shadow hover:bg-gray-600 transition"
    >
      <option value="" disabled>Select Branch</option>
      {branches.map((branch) => (
        <option key={branch} value={branch}>
          {branch}
        </option>
      ))}
    </select>
  </div>
);

export default BranchSelector;
