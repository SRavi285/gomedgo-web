import React from "react";

const PreferenceSelector = ({
  genderData,
  selectGender,
  setSelectedGender,
  langData,
  selectedLanguages,
  toggleLanguage,
  careSpecialist = "Elderly Care Specialist",
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-10">
      <h2 className="text-lg font-semibold mb-4">
        Help us find the best Caretaker
      </h2>

      {/* Gender Preference */}
      <div className="mb-4">
        <p className="text-sm font-semibold mb-2">Gender Preference</p>
        <div className="flex gap-3 flex-wrap">
          {genderData.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedGender(item.gender)}
              className={`border-2 rounded-md px-4 py-2 text-sm ${
                selectGender === item.gender
                  ? "bg-[#007299] text-white border-[#007299]"
                  : "border-[#007299] text-black"
              }`}
            >
              {item.gender}
            </button>
          ))}
        </div>
      </div>

      {/* Language Preferences */}
      <div className="mb-4">
        <p className="text-sm font-semibold mb-2">
          Language Preferences (Max 2)
        </p>
        <div className="flex gap-3 flex-wrap">
          {langData.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleLanguage(item.language)}
              className={`border-2 rounded-md px-4 py-2 text-sm ${
                selectedLanguages.includes(item.language)
                  ? "bg-[#007299] text-white border-[#007299]"
                  : "border-[#007299] text-black"
              }`}
            >
              {item.language}
            </button>
          ))}
        </div>
      </div>

      {/* Care Specialist */}
      <div>
        <p className="text-sm font-semibold mb-2">Care Specialist</p>
        <button
          type="button"
          disabled
          className="bg-[#007299] rounded-full px-6 py-2 text-sm font-medium text-white cursor-default"
        >
          {careSpecialist}
        </button>
      </div>
    </div>
  );
};

export default PreferenceSelector;
