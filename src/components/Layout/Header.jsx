import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false); // To control Courses dropdown visibility

  const trendingCourses = [
    "AI & ML",
    "DEVOPS",
    "NO CODE",
    "CYBERSECURITY & TESTING",
    "DATA SCIENCE AND ENGINERRING",
    "DESIGN AND DEVLOPMENT",
    "FOUNDER CONNECT ",
    "GAMING & NETWORK",
    "PRODUCT",
    "BUSSINESS AND LEADERSHIP",
    "MARKETING & SALES",
  ];
  return (
    <header className="fixed z-50 w-full">
      <div className="bg-[#ffffff] shadow-md w-full mx-auto h-[80px] px-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/">
          <div className="font-normal text-[50px] text-[#000000] tracking-[0.5%] leading-[55px] font-impact">
            AI SKILLS
          </div>
        </Link>

        {/* Search Bar & Cart Icon (Visible on lg and above) */}
        {/* Search + Menu + Cart */}
        <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          {/* Search Box */}
          <div className="flex items-center border border-gray-300 rounded-full px-4 w-[300px] h-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.5z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full outline-none text-[16px] font-roboto"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="flex-nowrap whitespace-nowrap flex items-center gap-8 font-medium text-[16px] text-[#1e1e1e]">
            <div className="relative inline-block">
              <button
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000] flex items-center"
              >
                Courses
                <RiArrowDropDownLine className="w-[28px] h-[28px]" />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute left-0 w-[260px] bg-white shadow-md rounded-md mt-2 z-50 max-h-[300px] overflow-y-auto">
                  {trendingCourses.map((course, idx) => (
                    <Link
                      key={idx}
                      to="/courses" // ✅ Make sure this matches the route
                      className="block px-4 py-2 font-roboto font-medium text-[16px] text-black hover:bg-[#f0f0f0]"
                      onClick={() => setCoursesDropdownOpen(false)} // Close dropdown on click
                    >
                      {course}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/Business"
              className="font-roboto font-medium text-[18px] text-[#000000]"
            >
              Business
            </Link>
            <Link
              to="/digital"
              className="font-roboto  font-medium text-[18px] text-[#000000]"
            >
              Digital Products
            </Link>
            <Link
              to={"/blog"}
              className="font-roboto font-medium text-[18px] text-[#000000]"
            >
              Newsletter
            </Link>
          </nav>

          {/* Cart Icon */}
          <div>
            <AiOutlineShoppingCart className="h-7 w-7 text-[#047670]" />
          </div>
        </div>

        {/* Right: Auth Buttons (Visible on medium and larger screens) */}
        <div className="hidden md:flex items-center space-x-2">
          <Link
            to={"/login"}
            className="p-[10px] w-[90px] h-[50px] text-center text-[#047670] hover:bg-[#047670] hover:text-white text-[18px] rounded-[16px] font-medium font-roboto border-[1.5px] border-[#047670]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="p-[10px] w-[90px] h-[50px] text-center text-[#ffffff] text-[18px] bg-[#047670] rounded-[12px] font-medium font-roboto"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center space-x-4">
          {" "}
          {/* Added space between toggle and courses */}
          {/* Courses Button with Image */}
          <div className="relative">
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)} // Toggle dropdown visibility
              className="font-roboto text-[18px] text-[#000000] flex items-center"
            >
              {/* "Courses" Text First */}
              Courses
              {/* Dropdown Icon After "Courses" Text */}
              <RiArrowDropDownLine className="w-[28px] h-[28px]" />
            </button>

            {/* Dropdown for Courses */}
            {coursesDropdownOpen && (
              <div className="absolute left-0 w-[260px] bg-white shadow-md rounded-md mt-2 z-50 max-h-[300px] overflow-y-auto">
                {trendingCourses.map((course, idx) => (
                  <Link
                    key={idx}
                    to="/courses" // ✅ Make sure this matches the route
                    className="block px-4 py-2 font-roboto font-medium text-[16px] text-black hover:bg-[#f0f0f0]"
                    onClick={() => setCoursesDropdownOpen(false)} // Close dropdown on click
                  >
                    {course}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Hamburger Menu Toggle */}
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

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden">
        {" "}
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#ffffff] rounded-b-md shadow-md max-w-[1364px] mx-auto p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Mobile Links */}
            <a
              href="#"
              className="font-roboto px-4 py-2  block font-medium text-[18px] text-[#000000]"
            >
              Business
            </a>
            <Link
              to={"/digital"}
              className="font-roboto px-4 py-2  block font-medium text-[18px] text-[#000000]"
            >
              Digital Product
            </Link>
            <Link
              to={"/blog"}
              className="font-roboto px-4 py-2  block font-medium text-[18px] text-[#000000]"
            >
              Newsletter
            </Link>

            {/* Mobile Auth Buttons */}
            <div className="mt-4 space-y-2">
              <Link
                to="/login"
                className="w-full text-center font-medium px-4 py-2 block border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="w-full block text-center font-medium px-4 py-2 border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
