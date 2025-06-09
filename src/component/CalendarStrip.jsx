import React, { useMemo } from "react";

const CalendarStrip = ({ selectedDate, onDateSelect, numberOfDays = 7 }) => {
  const today = new Date();

  const datesList = useMemo(() => {
    const dates = [];
    for (let i = 0; i < numberOfDays; i++) {
      const dateObj = new Date(today);
      dateObj.setDate(today.getDate() + i);

      dates.push({
        day: dateObj.toLocaleString("en-US", { weekday: "short" }),
        date: dateObj.getDate(),
        fullDate: dateObj.toISOString().split("T")[0],
      });
    }
    return dates;
  }, [numberOfDays]);

  return (
    <div className="flex overflow-x-auto py-3 space-x-3">
      {datesList.map((item) => {
        const isSelected = item.fullDate === selectedDate;
        return (
          <button
            key={item.fullDate}
            onClick={() => onDateSelect(item.fullDate)}
            className={`flex flex-col items-center justify-center min-w-[60px] h-[90px] rounded-xl border font-medium ${
              isSelected
                ? "bg-[#007299] text-white border-[#007299]"
                : "bg-white text-[#007299] border-[#007299]"
            }`}
          >
            <span className="text-sm">{item.day}</span>
            <span className="text-lg font-bold">{item.date}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CalendarStrip;
