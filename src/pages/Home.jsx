import { useNavigate } from "react-router-dom";
import { IonIcon } from "react-ion-icon";
import ECareTaker from "./ECareTaker";

import manIcon from "../assets/icons/man.png";
import workIcon from "../assets/icons/work.png";
import healthcareIcon from "../assets/icons/healthcare-and-medical.png";
import vaccineIcon from "../assets/icons/vaccine.png";
import bathing from "../assets/icons/bathing.png";
import medicalIcon from "../assets/icons/medical.png";
import devicesIcon from "../assets/icons/medical-devices.png";
import assistantIcon from "../assets/icons/assistant.png";
import labIcon from "../assets/icons/lab.png";

import aiIcon from "../assets/images/icon.png";
import nursesGroupImage from "../assets/images/nurces-group-image.png";

const services = [
  {
    id: "1",
    name: "Expert Caretaker",
    icon: manIcon,
    path: "/ECareTaker",
  },
  {
    id: "2",
    name: "Baby Caretaker",
    icon: workIcon,
    path: "/BabyCaretaker",
  },
  {
    id: "3",
    name: "At Home Nurse",
    icon: healthcareIcon,
    path: "/AtHomeNurse",
  },
  {
    id: "4",
    name: "Injections & Infusions",
    icon: vaccineIcon,
    path: "/InjectionInfusions",
  },
  {
    id: "5",
    name: "Elderly Bath Hygiene",
    icon: bathing,
    path: "/ElderlyBathHygiene",
  },
  {
    id: "6",
    name: "Dressing",
    icon: medicalIcon,
    path: "/Dressing",
  },
  {
    id: "7",
    name: "Medical Equipments",
    icon: devicesIcon,
    unimplemented: true,
  },
  {
    id: "8",
    name: "Physiotherapy",
    icon: assistantIcon,
    path: "/Physiotherapy",
  },
  {
    id: "9",
    name: "Lab Test",
    icon: labIcon,
    unimplemented: true,
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.unimplemented) {
      alert("This feature is not yet implemented.");
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="bg-[#007299] rounded-b-[70px] pt-10 pb-12 px-6">
        <p className="text-lg text-white">Greater Noida</p>

        <div
          onClick={() => alert("Join Provider")}
          className="bg-[#F4FEFF] rounded-2xl p-6 mt-4 cursor-pointer"
        >
          <p className="text-xl font-bold text-[#007299]">
            Join as a Care Provider →
          </p>
          <p className="text-base text-[#007299] mt-1">
            For Nurses, Caretakers, and Physios
          </p>
        </div>

        <div className="flex items-center bg-white p-4 rounded-2xl shadow-md mt-6">
          <img src={aiIcon} alt="AI Icon" className="w-12 h-12 mr-4" />
          <div className="flex-1">
            <div className="bg-[#007299] rounded-2xl p-3 text-white mb-2 max-w-md">
              Hi! I am AI GoMedGO. How can I help you?
            </div>
            <button
              onClick={() => alert("Chat with Alia")}
              className="flex items-center border border-[#007299] text-[#007299] rounded-xl px-4 py-2"
            >
              Tap To chat
              <IonIcon name="chatbubble-ellipses-outline" className="ml-2" />
            </button>
          </div>
          <img src={nursesGroupImage} alt="Doctor" className="w-20 h-24 ml-4" />
        </div>
      </div>

      <div className="mt-10 px-6">
        <h2 className="text-2xl font-bold mb-6 text-[#007299]">
          Service Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {services.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="bg-[#F4FEFF] p-4 rounded-full mb-2">
                <img src={item.icon} alt={item.name} className="w-10 h-10" />
              </div>
              <p className="text-center text-sm font-medium text-[#007299]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-[#007299]">
          Professionals
        </h2>
        <div className="bg-gradient-to-br from-[#007299] to-[#F4FEFF] rounded-2xl p-6 flex flex-col md:flex-row items-center">
          <div className="flex-1 md:pr-6">
            <h3 className="text-white text-2xl font-bold mb-4">
              At Home Nursing Care
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-white">
                <IonIcon name="checkmark-circle" className="mr-2" />
                Expert Medical Equipment Management
              </li>
              <li className="flex items-center text-white">
                <IonIcon name="checkmark-circle" className="mr-2" />
                Support for bedridden patients
              </li>
              <li className="flex items-center text-white">
                <IonIcon name="checkmark-circle" className="mr-2" />
                Timely Medication & Injection Delivery
              </li>
            </ul>
            <button
              onClick={() => alert("Book Nurses")}
              className="bg-white text-[#007299] font-bold rounded-xl px-4 py-2 mt-4 flex items-center"
            >
              Book Nurses
              <IonIcon name="arrow-forward" className="ml-2 text-[#007299]" />
            </button>
          </div>
          <img
            src={nursesGroupImage}
            alt="Nurses Group"
            className="w-32 h-32 md:w-40 md:h-40 mt-6 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
