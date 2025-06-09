// PlanSelector.jsx

const PlanSelector = ({
  plans,
  selectedPlan,
  setSelectedPlan,
  type = 0,
  styleMap = {},
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {plans.map((plan, index) => {
        const styles = styleMap[plan.id] || {};
        const titleColor = styles.titleColor || "text-gray-800";
        const priceColor = styles.priceColor || "text-[#007299]";

        return (
          <div
            key={index}
            className={`relative rounded-xl border p-5 shadow-sm transition-all ${
              selectedPlan === index
                ? "border-[#007299] bg-blue-50"
                : "border-violet-200 bg-violet-50 hover:border-violet-300"
            }`}
          >
            {plan.isBestValue && (
              <div className="absolute -top-3 right-4 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                Best Value
              </div>
            )}

            <div className="flex justify-between items-start mb-4 flex-wrap">
              <div className={`text-base font-semibold ${titleColor}`}>
                {plan.title}
              </div>
              <div className="text-right flex gap-2 items-center">
                {plan.originalPrice && (
                  <div className="line-through text-gray-400 text-sm">
                    {plan.originalPrice}
                  </div>
                )}
                <div className={`text-lg font-bold ${priceColor}`}>
                  {plan.price}
                </div>
              </div>
            </div>

            <ul className="mb-4 space-y-2 text-sm text-gray-700">
              {type === 0 ? (
                <>
                  <li>
                    {plan.title.includes("Daytime")
                      ? `Daytime Care from ${plan.duration}`
                      : `All-Day, All-Night • ${plan.duration}`}
                  </li>
                  <li>Expert Feeding Assistance, Hygiene Support.</li>
                  <li>Timely Medicine and Diaper Changes.</li>
                </>
              ) : (
                plan.desc?.map((item, descIndex) => (
                  <li key={descIndex}>{item.desc}</li>
                ))
              )}
            </ul>

            <button
              onClick={() => setSelectedPlan(index)}
              className={`w-full text-white text-sm font-semibold py-2 rounded-md transition ${
                selectedPlan === index
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-[#007299] hover:bg-[#006080]"
              }`}
            >
              {selectedPlan === index ? "Selected" : "Select Your Plan"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PlanSelector;
