import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiGlobe } from "react-icons/fi";
import { BsChevronDown, BsSearch } from "react-icons/bs";

const Nav_DigitalProduct = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="h-[80px] max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="font-[Impact] text-[55px] tracking-wide text-[#000000] whitespace-nowrap">
            AI SKILLS
          </div>

          {/* Center section (Browse + Search) */}
          <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
            {/* Browse */}
            <div className="flex items-center text-[#047670] font-bold text-sm cursor-pointer">
              BROWSE <BsChevronDown className="ml-1 text-xs" />
            </div>
            

            {/* Search Bar */}
            <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-full max-w-md">
              <BsSearch className="text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search For Classes"
                className="ml-3 outline-none border-none text-sm w-full placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Right Icons and Buttons */}
          <div className="hidden lg:flex items-center gap-4 text-[#047670]">
            <FiGlobe className="text-xl cursor-pointer" />
            <span className="font-medium text-[15px]">SHOP</span>
            <AiOutlineShoppingCart className="text-2xl cursor-pointer" />

            <Link to="/signup">
              <button className="px-5 py-2 rounded-md bg-[#047670] text-white font-semibold">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Section */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-6 shadow-md space-y-4">
          <div className="flex items-center gap-2 text-[#047670] font-bold text-sm cursor-pointer">
            BROWSE <BsChevronDown className="ml-1 text-xs" />
          </div>

          <div className="flex items-center border border-gray-400 rounded-full px-4 py-2">
            <BsSearch className="text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search For Classes"
              className="ml-3 outline-none border-none text-sm w-full placeholder:text-gray-500"
            />
          </div>

          <div className="flex items-center gap-4 text-[#047670] text-sm">
            <FiGlobe className="text-xl" />
            <span className="font-medium">SHOP</span>
            <AiOutlineShoppingCart className="text-xl" />
          </div>

          <Link to="/signup">
            <button className="w-full py-2 rounded-md bg-[#047670] text-white font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Nav_DigitalProduct;
