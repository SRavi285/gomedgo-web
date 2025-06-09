import { useState } from "react";
import CaretakerSummary from "../component/CaretakerSummary";
import logo from "../assets/icons/healthcare-and-medical.png";
import LocationForm from "../component/LocationForm";
import PreferenceSelector from "../component/PreferenceSelector";
import CareDateSelector from "../component/CareDateSelector";
import PlanSelector from "../component/PlanSelector";

const plans = [
  {
    id: 1,
    title: "Gold",
    price: "₹3500/day",
    desc: [
      { desc: "1:1 care for ICU to Ward transition." },
      {
        desc: "Hospital nurses provide round-the-clock 24 hours care in these shifts.",
      },
      {
        desc: "Nurses hand over to the next shift, just like in a mini hospital setup.",
      },
      {
        desc: "These nurses handle various procedures daily in hospitals and bring that expertise to your home.",
      },
    ],
  },
  {
    id: 2,
    title: "Silver",
    price: "₹2500/day",
    desc: [
      { desc: "24-hour care from a trained home nurse." },
      {
        desc: "They serve as both attendants and nurses, handling diaper changes and medical tasks like dressings, injections, and feeding.",
      },
      {
        desc: "These nurses regularly monitor patients and promptly report any changes, ensuring proactive and timely care.",
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

export default function AtHomeNurse() {
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
      <div className="text-xl font-bold text-[#007299] mb-2">At Home Nurse</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Select Your Plan
      </h2>

      {/* Plans */}
      <PlanSelector
        plans={plans}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        type={selectedPlan === 1 ? 1 : 1}
        styleMap={{
          1: { titleColor: "text-yellow-500", priceColor: "text-yellow-500" }, // Gold
          2: { titleColor: "text-gray-400", priceColor: "text-gray-400" }, // Silver
        }}
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
        caretaker="At Home Nurse"
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
