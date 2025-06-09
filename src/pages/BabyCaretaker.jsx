import { useState } from "react";
import CaretakerSummary from "../component/CaretakerSummary";
import logo from "../assets/icons/work.png";
import LocationForm from "../component/LocationForm";
import PreferenceSelector from "../component/PreferenceSelector";
import CareDateSelector from "../component/CareDateSelector";
import PlanSelector from "../component/PlanSelector";

const plans = [
  {
    title: "24 X 7 Long Term Care",
    price: "₹1335/day",
    originalPrice: "₹1500",
    desc: [
      {
        desc: "Around-the-clock Care for Over 30 days",
      },
      {
        desc: "Diaper Changes, Bottle Feeding.",
      },
      {
        desc: "Bathing, Dressing, and Grooming Baby.",
      },
      {
        desc: "Engaging Appropriate Activities and Playtime.",
      },
      {
        desc: "Maintaining Appropriate Activities and Playtime.",
      },
      {
        desc: "Laundry and Light Housekeeping.",
      },
      {
        desc: "Breastfeeding Support, Lactation Assistance.",
      },
      {
        desc: "Care for Babies with Colic or Other Needs.",
      },
    ],
  },
];

const genderOptions = [
  { id: 1, gender: "Male" },
  { id: 2, gender: "Female" },
  { id: 3, gender: "Any" },
];

const languageOptions = [
  { id: 1, language: "Hindi" },
  { id: 2, language: "English" },
  { id: 3, language: "Kannada" },
  { id: 4, language: "Tamil" },
  { id: 5, language: "Telugu" },
];

export default function BabyCaretaker() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectGender, setSelectedGender] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [agree, setAgree] = useState(false);
  const [selectedOption, setSelectedOption] = useState("full");

  const handleContinue = ({ startDate, endDate }) => {
    console.log("Dates received in parent:", startDate, endDate);
    // You can now proceed to next step or submit the form
  };

  const handleUseLocation = () => {
    alert("Using current location...");
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
    // You can now proceed to the next step or trigger payment, etc.
  };

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : prev.length < 2
        ? [...prev, lang]
        : prev
    );
  };

  const handleSubmitPreferences = () => {
    const newErrors = {};
    if (!selectGender) newErrors.gender = "Please select a gender.";
    if (selectedLanguages.length === 0)
      newErrors.languages = "Select at least one language.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully ✅");
      // Continue form logic here...
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 md:px-10">
      <div className="text-xl font-bold text-[#007299] mb-2">
        Baby Caretaker
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Find the best care
      </h2>

      {/* Plans */}
      <PlanSelector
        plans={plans}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        type={selectedPlan === 1 ? 1 : 1} // switch between default & custom desc
      />

      {/* Dates */}
      <CareDateSelector
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        onContinue={handleContinue}
      />

      {/* Gender & Language */}
      <div className="p-4 bg-gray-50 rounded-lg mb-10">
        <PreferenceSelector
          genderData={genderOptions}
          selectGender={selectGender}
          setSelectedGender={setSelectedGender}
          langData={languageOptions}
          selectedLanguages={selectedLanguages}
          toggleLanguage={toggleLanguage}
        />

        {/* Validation Messages */}
        {errors.gender && (
          <p className="text-red-500 text-sm mb-2">{errors.gender}</p>
        )}
        {errors.languages && (
          <p className="text-red-500 text-sm mb-4">{errors.languages}</p>
        )}

        <button
          onClick={handleSubmitPreferences}
          className="w-full bg-[#007299] text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>

      {/* Location & Details */}
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

      {/* Summary & Payment */}
      <CaretakerSummary
        logo={logo}
        caretaker="Baby Caretaker"
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
