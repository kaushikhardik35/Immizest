import React, { useState } from "react";
import Dropdown_StudyAbroad from "./Dropdown_StudyAbroad";
import Dropdown_IELTS from "./Dropdown_IELTS";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex bg-[#f7f7f7]  sticky-top sticky top-0 z-[999] md:flex-row flex-col justify-between p-1 shadow-md">
      <div className="flex justify-between items-start">
        <img
          className="logo h-[50px] md:h-[70px] z-[1]"
          src="/transparent_logo.jpeg"
          alt="Logo"
        />
        <div className="sm:flex md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#4754a4]  focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Toggle button for smaller screens */}

      {/* Links container */}
      <div
        className={`flex-col md:flex md:last:items-center md:flex-row text-[#4754a4] m-0 p-0 ${
          isMenuOpen ? "flex" : "hidden"
        } md:flex transition-transform duration-300`}
      >
        <div className="flex otherlinks space-x-4 mr-10">Home</div>

        <Dropdown_StudyAbroad />
        <Dropdown_IELTS />

        <div className="flex otherlinks space-x-4 mr-10">IELTS</div>
        <div className="flex otherlinks space-x-4 mr-10">BLOG</div>
        <div className="flex otherlinks space-x-4 mr-10">Latest Updates</div>
        <div className="flex otherlinks space-x-4 mr-10">Contact Us</div>
      </div>
    </div>
  );
};

export default Navbar;
