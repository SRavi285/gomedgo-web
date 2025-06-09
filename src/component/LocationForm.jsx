import React, { useState } from "react";

const LocationForm = ({
  name,
  setName,
  mobile,
  setMobile,
  agree,
  setAgree,
  onUseLocation,
  onSubmit
}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!agree) newErrors.agree = "You must accept the terms and conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(); // Call parent-provided handler
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg mb-10">
      <p className="mb-2 text-base font-medium">Select a location</p>

      <div className="flex items-center border border-[#007299] rounded px-3 py-2 mb-4">
        <input
          type="text"
          placeholder="Search for area, street name..."
          className="flex-1 outline-none text-sm"
        />
      </div>

      <button
        type="button"
        onClick={onUseLocation}
        className="text-[#007299] mb-4"
      >
        📍 Use my current location
      </button>

      <label className="block font-semibold mb-1">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full border-2 border-[#007299] rounded px-3 py-2 mb-1"
      />
      {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

      <label className="block font-semibold mb-1">Mobile Number</label>
      <div className="flex items-center border-2 border-[#007299] rounded px-3 py-2 mb-1">
        <span className="text-gray-600 mr-2">+91</span>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="9999999999"
          className="flex-1 outline-none"
        />
      </div>
      {errors.mobile && <p className="text-red-500 text-sm mb-2">{errors.mobile}</p>}

      <div className="flex items-center mb-4 text-sm">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
          className="mr-2"
        />
        <span>I agree to</span>
        <a href="#" className="text-[#007299] underline ml-1">
          Terms and Conditions
        </a>
      </div>
      {errors.agree && <p className="text-red-500 text-sm mb-2">{errors.agree}</p>}

      <button
        type="submit"
        className="w-full bg-[#007299] text-white font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default LocationForm;
