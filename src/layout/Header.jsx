import React, { useState } from "react";
import logo from "../assets/images/icon.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(true); 

  const handleAuthAction = () => {
    if (isLogged) {
      setIsLogged(false);
      alert("Logged out");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="bg-white shadow-md px-6 py-2 flex items-center justify-between">
      {/* Logo & Title */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Healthcare Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-xl font-semibold text-[#007299]">
          GoMedGo Care
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <button
          onClick={() => navigate("/services")}
          className="hover:text-[#007299]"
        >
          Services
        </button>
        <button
          onClick={() => navigate("/about")}
          className="hover:text-[#007299]"
        >
          About
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="hover:text-[#007299]"
        >
          Contact
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="hover:text-[#007299]"
        >
          Profile
        </button>
      </nav>

      {/* Login / Logout Button */}
      <button
        onClick={handleAuthAction}
        className="bg-[#007299] text-white px-4 py-2 rounded-md text-sm hover:bg-[#005f7a]"
      >
        {isLogged ? "Log Out" : "Login"}
      </button>
    </header>
  );
};

export default Header;
