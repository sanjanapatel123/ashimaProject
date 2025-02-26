import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white py-4 px-8 shadow">
      {/* Logo / Brand */}
      <div className="text-2xl font-bold text-gray-800">AiSkills</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-600">
        <li className="hover:text-gray-900 cursor-pointer">Courses</li>
        <li className="hover:text-gray-900 cursor-pointer">Business</li>
        <li className="hover:text-gray-900 cursor-pointer">Digital Products</li>
        <li className="hover:text-gray-900 cursor-pointer">Newsletter</li>
        <li className="hover:text-gray-900 cursor-pointer">Instructor</li>
        <li className="hover:text-gray-900 cursor-pointer">Login</li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* Simple Hamburger Icon */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16v2H4V5zm0 12h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 7h16v2H4V7zm0 8h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow md:hidden">
          <li className="hover:text-gray-900 cursor-pointer">Courses</li>
          <li className="hover:text-gray-900 cursor-pointer">Business</li>
          <li className="hover:text-gray-900 cursor-pointer">
            Digital Products
          </li>
          <li className="hover:text-gray-900 cursor-pointer">Newsletter</li>
          <li className="hover:text-gray-900 cursor-pointer">Instructor</li>
          <li className="hover:text-gray-900 cursor-pointer">Login</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
