import React, { useState } from "react";
import { Link } from "react-router-dom";
import vector from "../../assets/Vector.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="w-full z-50  h-[80px] mx-auto px-4 flex items-center justify-between shadow-sm bg-white">
        {/* Left: Logo */}
        <div className="font-[Impact] font-normal text-[50px] leading-[55px] tracking-[0.005em] text-[#000000] whitespace-nowrap">
          AI SKILLS
        </div>

        {/* Center: Courses Dropdown for Mobile */}
        <div className="md:hidden flex items-center gap-6 ml-16">
          <div className="relative">
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              className="font-roboto text-[18px] text-[#000000] flex items-center"
            >
              Courses
              <RiArrowDropDownLine className="w-[28px] h-[28px]" />
            </button>

            {coursesDropdownOpen && (
              <div className="absolute left-0 w-[200px] bg-[#ffffff] shadow-md rounded-md mt-2">
                <Link
                  to="/AllCourses"
                  className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                >
                  All Courses
                </Link>
                <Link
                  to="/SomeOtherCourse"
                  className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                >
                  Some Other Course
                </Link>
                <Link
                  to="/MoreCourses"
                  className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                >
                  More Courses
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Center: Menu and Cart */}
        <div className="hidden md:flex items-center gap-6 ml-16">
          <div className="flex items-center border border-[#1E1E1ECC] rounded-full px-4 py-2 w-[315px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#E1E1E1]"
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

          <div className="flex items-center gap-6 font-roboto">
            <Link to="/Allcourses">
              <span className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]">
                Courses
              </span>
            </Link>
            <Link to="/business">
              <span className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]">
                Business
              </span>
            </Link>
            <Link to="/digital">
              <span className="font-roboto font-medium text-[16px] leading-[20px] text-[#000000]">
                Digital Product
              </span>
            </Link>
            <Link to="/newsletter">
              <span className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000] cursor-pointer text-[#1E1E1E]">
                Newsletter
              </span>
            </Link>
          </div>
        </div>

        {/* Cart Icon */}
        <div className="cursor-pointer ml-8 hidden md:block">
          <img src={vector} />
        </div>

        {/* Login Button */}
        <div className="hidden md:flex items-center gap-2 text-[#047670] font-medium ml-12">
          <Link to="/login">
            <button className="w-[90px] h-[50px] rounded-[16px] border-[1.5px] border-[#047670] text-[#047670] font-roboto font-medium">
              Login
            </button>
          </Link>

          <Link to="/signin">
            <button className="w-[90px] h-[50px] rounded-[16px] border-[1.5px] border-[#047670] text-[#047670] font-roboto font-medium">
              Sign Un
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center ml-auto">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] rounded-b-md shadow-md max-w-[1364px] mx-auto p-4">
          <a
            href="#"
            className="font-roboto block font-medium text-[18px] text-[#000000]"
          >
            Business
          </a>
          <a
            href="#"
            className="font-roboto block font-medium text-[18px] text-[#000000]"
          >
            Newsletter
          </a>

          {/* Mobile Auth Buttons */}
          <div className="mt-4 space-y-2">
            <Link
              to="/login"
              className="w-full text-center font-medium px-4 py-2 block border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]"
            >
              Login
            </Link>
            <Link className="w-full block text-center font-medium px-4 py-2 border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]">
              Instructor
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
