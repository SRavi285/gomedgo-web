import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


const MultiDatePicker = ({ selectedDates, onSelectDates, label = "Pick Dates" }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [tempDates, setTempDates] = useState(new Set(Object.keys(selectedDates)));

  const handleDateClick = (date) => {
    const dateStr = date.toISOString().split("T")[0];
    const newDates = new Set(tempDates);

    if (newDates.has(dateStr)) {
      newDates.delete(dateStr);
    } else {
      newDates.add(dateStr);
    }

    setTempDates(newDates);
  };

  const handleDone = () => {
    const marked = {};
    tempDates.forEach((d) => {
      marked[d] = true;
    });
    onSelectDates(marked);
    setModalVisible(false);
  };

  const getDisplayText = () => {
    const keys = Object.keys(selectedDates);
    if (keys.length === 0) return label;

    return keys
      .map((d) => {
        const dateObj = new Date(d);
        const month = dateObj.toLocaleString("default", { month: "short" });
        return `${dateObj.getDate()} ${month}`;
      })
      .join(", ");
  };

  return (
    <>
      <button
        onClick={() => setModalVisible(true)}
        className="w-full text-left px-4 py-3 border border-[#007299] rounded-lg mt-6 mb-8"
      >
        {getDisplayText()}
      </button>

      {modalVisible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <Calendar
              onClickDay={handleDateClick}
              tileClassName={({ date }) => {
                const dateStr = date.toISOString().split("T")[0];
                return tempDates.has(dateStr) ? "bg-[#007299] text-white rounded-md" : "";
              }}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleDone}
                className="bg-[#007299] text-white px-4 py-2 rounded-md"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiDatePicker;
