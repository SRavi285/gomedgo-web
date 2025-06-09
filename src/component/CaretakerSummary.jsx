import React from "react";

const CaretakerSummary = ({
  caretaker,
  logo,
  name,
  mobile,
  startDate,
  endDate,
  selectedOption,
  setSelectedOption,
  onPayNow,
}) => {
  const totalAmount = 56450;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6">
      <div className="flex items-center mb-4">
        <img
          src={logo}
          alt="Caretaker"
          className="w-14 h-14 rounded-full mr-3 object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">{caretaker}</h2>
          <p className="text-sm text-gray-600">24 X 7 Long Term Care</p>
          <p className="text-xs text-gray-500">
            From: {startDate} To: {endDate}
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-3">
        📍 ACE CITY, 508, Ace City Noida Extension…
      </p>

      <div className="flex justify-between mb-1 text-sm">
        <span className="text-gray-700">Name</span>
        <span className="font-semibold">{name}</span>
      </div>
      <div className="flex justify-between mb-3 text-sm">
        <span className="text-gray-700">Phone</span>
        <span className="font-semibold">{mobile}</span>
      </div>

      <div className="border-t pt-2 mt-2 text-sm">
        <div className="flex justify-between mb-1">
          <span>Service Amount</span>
          <span>₹61000</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Registration Fee</span>
          <span>₹2000</span>
        </div>
        <div className="flex justify-between mb-1 text-red-500">
          <span>Extra Discount</span>
          <span>- ₹6000</span>
        </div>
        <div className="flex justify-between mb-1 text-red-500">
          <span>1% Discount</span>
          <span>- ₹550</span>
        </div>
        <div className="flex justify-between mt-3 pt-2 border-t font-semibold">
          <span>Total Amount</span>
          <span className="text-lg">₹{totalAmount}</span>
        </div>
      </div>

      {/* Payment Options */}
      <button
        onClick={() => setSelectedOption("full")}
        className={`w-full border rounded-xl px-4 py-3 text-left text-sm mb-3 ${
          selectedOption === "full"
            ? "border-[#007299] bg-green-50"
            : "border-gray-300"
        }`}
      >
        ⭕ Pay full amount ₹{totalAmount}{" "}
        <span className="text-red-500">1% discount</span>
      </button>
      <button
        onClick={() => setSelectedOption("partial")}
        className={`w-full border rounded-xl px-4 py-3 text-left text-sm mb-3 ${
          selectedOption === "partial"
            ? "border-[#007299] bg-green-50"
            : "border-gray-300"
        }`}
      >
        ⭕ Pay ₹2000 Now and Remaining Later
      </button>

      {/* Footer Payment Bar */}
      <div className="flex justify-between items-center mt-20">
        <div className="font-bold text-lg text-black leading-tight">
          ₹{totalAmount}
          <div className="text-xs text-gray-500 font-normal">Total Amount</div>
        </div>
        <button
          onClick={onPayNow}
          className="bg-[#007299] hover:bg-[#007299] text-white px-6 py-3 rounded-full text-base font-semibold"
        >
          Proceed to pay
        </button>
      </div>
    </div>
  );
};

export default CaretakerSummary;
