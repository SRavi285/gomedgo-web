import React from "react";

const CareDateSelector = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onContinue,
}) => {
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = () => {
    if (!startDate || !endDate) {
      alert("Please select both start and end dates.");
      return;
    }
    if (new Date(endDate) < new Date(startDate)) {
      alert("End date must be after start date.");
      return;
    }
    onContinue({ startDate, endDate }); // pass data to parent
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-10">
      <h2 className="text-lg font-semibold mb-4">
        When do you want to start your care?
      </h2>

      <div className="mb-4">
        <label className="text-sm font-semibold block mb-2">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full border-2 border-[#007299] rounded-md px-4 py-2 text-sm focus:outline-none"
          min={today}
        />
      </div>

      <div className="mb-6">
        <label className="text-sm font-semibold block mb-2">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full border-2 border-[#007299] rounded-md px-4 py-2 text-sm focus:outline-none"
          min={startDate || today}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-[#007299] text-white font-semibold py-2 px-4 rounded"
      >
        Continue
      </button>
    </div>
  );
};

export default CareDateSelector;
