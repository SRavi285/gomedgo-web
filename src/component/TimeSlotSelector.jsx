import React from "react";

const TimeSlotSelector = ({ slots = [], selectedTime, onSelect }) => {
  return (
    <div className="space-y-3 mt-4">
      {slots.map((slot, index) => {
        const isSelected = selectedTime === slot.time;
        const isDisabled = slot.disabled;

        return (
          <button
            key={index}
            onClick={() => !isDisabled && onSelect(slot.time)}
            disabled={isDisabled}
            className={`w-full flex items-center p-3 rounded-xl border transition 
              ${
                isDisabled
                  ? "border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed"
                  : isSelected
                  ? "bg-[#007299] text-white border-[#007299]"
                  : "border-[#007299] text-gray-800 hover:bg-[#e0f7fa]"
              }`}
          >
            {slot.icon && (
              <img
                src={slot.icon}
                alt={slot.label}
                className="w-6 h-6 mr-3 object-contain"
              />
            )}
            <span className="text-sm sm:text-base">
              {slot.label} - ({slot.time})
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default TimeSlotSelector;
