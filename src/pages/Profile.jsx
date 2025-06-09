import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Ravi Sharma");
  const [email, setEmail] = useState("ravi@example.com");
  const [mobile, setMobile] = useState("9876543210");
  const [editMode, setEditMode] = useState(false);

  const handleSave = () => {
    // Save to backend / Firebase here
    alert("Profile updated successfully!");
    setEditMode(false);
  };

  const handleLogout = () => {
    // Add logout logic (Firebase/auth clearing, etc.)
    alert("Logged out.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#007299] mb-6">
          My Profile
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src="https://www.svgrepo.com/show/5121/avatar.svg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-[#007299]"
          />
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              disabled={!editMode}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007299]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="text"
              value={mobile}
              disabled={!editMode}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007299]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              disabled={!editMode}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#007299]"
            />
          </div>

          {editMode ? (
            <button
              onClick={handleSave}
              className="w-full bg-[#007299] text-white py-2 rounded hover:bg-[#005f7a] mt-4"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="w-full bg-[#007299] text-white py-2 rounded hover:bg-[#005f7a] mt-4"
            >
              Edit Profile
            </button>
          )}

          <button
            onClick={handleLogout}
            className="w-full text-red-600 border border-red-400 py-2 rounded mt-2 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
