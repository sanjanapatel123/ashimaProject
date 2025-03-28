import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="h-[80px] mx-auto px-4 flex items-center shadow-sm">
        {/* Left: Logo */}
        <div className="font-[Impact] font-normal text-[50px] leading-[55px] tracking-[0.005em] text-[#000000] whitespace-nowrap">
          AI SKILLS
        </div>

        {/* Center: Search + Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-[325px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#E1E1E1]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 18.5a7.5 7.5 0 005.65-1.85z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for anything"
              className="ml-3 outline-none border-none text-sm w-full placeholder:text-[#1E1E1E1CC]"
            />
          </div>

          {/* Menu Items */}
          <div className="flex items-center gap-6 font-roboto whitespace-nowrap text-[18px]">
            <Link to="/Allcourses">
              <span className="cursor-pointer text-[#1E1E1E]">Courses</span>
            </Link>
            <Link to="/business">
              <span className="cursor-pointer text-[#1E1E1E]">Business</span>
            </Link>
            <Link to="/digital">
              <span className="cursor-pointer text-[#1E1E1E]">Digital Product</span>
            </Link>
            <Link to="/newsletter">
              <span className="cursor-pointer text-[#1E1E1E] mr-2">Newsletter</span>
            </Link>
          </div>
        </div>

        {/* Right: Cart + Auth */}
        <div className="hidden md:flex items-center gap-4 text-[#047670] font-medium">
       
         
          {/* Login Button */}
          <Link to="/login">
            <button className="px-5 py-2 rounded-[16px] border border-[#047670] text-[#047670]">
              Login
            </button>
          </Link>

          {/* Sign Up Button */}
          <Link to="/signup">
            <button className="px-5 py-2 rounded-[16px] bg-[#047670] text-white font-semibold">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#000000]"
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

    
      
    </>
  );
};

export default Header;
