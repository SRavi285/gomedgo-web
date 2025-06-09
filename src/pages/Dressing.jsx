import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CaretakerSummary from "../component/CaretakerSummary";
import logo from "../assets/icons/vaccine.png";
import LocationForm from "../component/LocationForm";
import CalendarStrip from "../Component/CalendarStrip";
import MultiDatePicker from "../Component/MultiDatePicker";
import TimeSlotSelector from "../Component/TimeSlotSelector";

import sun from "../assets/images/sun.png";
import moon from "../assets/images/moon.png";
import sunset from "../assets/images/sunset.png";

const plans = [
  {
    id: 1,
    title: "Injection & Infusion",
    price: "6000/Service",
    desc: [{ desc: "Delivers fluids or medication directly into a vein." }],
  },
];

const sampleTimeSlots = [
  {
    label: "Morning",
    time: "7:00 AM - 1:00 PM",
    icon: { sun },
    disabled: false,
  },
  {
    label: "Evening",
    time: "1:00 PM - 7:00 PM",
    icon: { sunset },
    disabled: false,
  },
  {
    label: "Night",
    time: "7:00 PM - 7:00 AM",
    icon: { moon },
    disabled: false,
  },
];

export default function Dressing() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);
  const [selectedOption, setSelectedOption] = useState("full");
  const [selectedTab, setSelectedTab] = useState("Single Day");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDates, setSelectedDates] = useState({});
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  const toggleTab = (tab) => {
    setSelectedTab(tab);
    if (tab === "Multiple Days") setSelectedDates({});
  };

  const handleProceed = () => {
    if (selectedTab === "Single Day" && !selectedDate) {
      alert("Please select a date.");
      return;
    }
    if (
      selectedTab === "Multiple Days" &&
      Object.keys(selectedDates).length === 0
    ) {
      alert("Please select at least one date.");
      return;
    }
    if (!selected) {
      alert("Please select a time slot.");
      return;
    }
    navigate("/InjectionAndInfusions/InjectionAndInfusionThird");
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  const handleUseLocation = () => {
    alert("Using current location...");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 md:px-10">
      <div className="text-xl font-bold text-[#007299] mb-6">Dressing</div>

      <div className="mb-6 bg-gray-100 p-5 rounded-xl shadow-md">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Injection & Infusion Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Dressing</h2>
            <p className="text-sm text-gray-500">
              Heal at Home through Professional would dressing at home.
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          Starting from{" "}
          <span className="text-[#007299] font-semibold">₹600 / Service</span>
        </p>
      </div>

      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mt-4 mb-6">
          Select The Type Of Procedure
        </h2>

        <div className="flex bg-gray-200 rounded-full overflow-hidden mb-6">
          {["Single Day", "Multiple Days"].map((tab) => (
            <button
              key={tab}
              onClick={() => toggleTab(tab)}
              className={`flex-1 text-center py-2 font-medium transition ${
                selectedTab === tab
                  ? "bg-[#007299] text-white"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {selectedTab === "Single Day" ? (
          <>
            <h3 className="text-lg font-semibold mb-2">Choose Day & Date</h3>
            <CalendarStrip
              selectedDate={selectedDate}
              onDateSelect={(date) => setSelectedDate(date)}
            />
          </>
        ) : (
          <>
            <h3 className="text-lg font-semibold mb-2">
              Please Pick Your Dates
            </h3>
            <MultiDatePicker
              selectedDates={selectedDates}
              onSelectDates={setSelectedDates}
              label="Select Available Days"
            />
          </>
        )}

        <h3 className="text-base font-medium mt-6 mb-3">Select time slot</h3>
        <TimeSlotSelector
          slots={sampleTimeSlots}
          selectedTime={selected}
          onSelect={setSelected}
        />
      </div>

      <LocationForm
        name={name}
        setName={setName}
        mobile={mobile}
        setMobile={setMobile}
        agree={agree}
        setAgree={setAgree}
        onUseLocation={handleUseLocation}
        onSubmit={handleSubmit}
      />

      <CaretakerSummary
        logo={logo}
        caretaker="Dressing"
        name={name || "submit your name"}
        mobile={mobile || "submit your mobile number"}
        startDate={startDate}
        endDate={endDate}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        onPayNow={() => alert("Pay Now clicked")}
      />
    </div>
  );
}
