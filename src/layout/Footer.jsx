import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#007299] text-white py-8 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">GoMedGo Care</h2>
          <p className="text-sm text-gray-200">
            Bringing trusted healthcare services to your doorstep with qualified
            professionals and reliable support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-100">
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/services")}
            >
              Services
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/about")}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-white"
              onClick={() => navigate("/contact")}
            >
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-medium mb-2">Contact Us</h3>
          <p className="text-sm text-gray-100">Email: support@gomedgo.com</p>
          <p className="text-sm text-gray-100">Phone: +91-0000000000</p>
          <p className="text-sm text-gray-100">Address: Noida, India</p>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} GoMedGo Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
