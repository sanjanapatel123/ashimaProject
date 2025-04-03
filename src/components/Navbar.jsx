
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

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
    <header className="fixed z-50 w-full px-0 sm:px-4 md:px-6 lg:px-8">
      <div className="bg-[#ffffff] shadow-md max-w-[1410px] mx-auto h-[80px] flex items-center justify-between px-4 md:px-6">
        <Link to="/">
          <div className="font-normal text-[50px] text-[#000000] tracking-[0.5%] leading-[55px] font-impact">
            AI SKILLS
          </div>
        </Link>

        <nav className="hidden md:flex space-x-10 font-medium text-[16px] text-[#1e1e1e]">
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
          <a
            href="#"
            className="font-roboto font-medium text-[18px] text-[#000000]"
          >
            Business
          </a>
          <Link
            to="/digital"
            className="font-roboto font-medium text-[18px] text-[#000000]"
          >
            Digital Products
          </Link>
          <a
            href="/blog"
            className="font-roboto font-medium text-[18px] text-[#000000]"
          >
            Newsletter
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to={"/login"}
            className="p-[10px] w-[150px] h-[45px] text-center text-[#ffffff] text-[18px] bg-[#1e1e1e] rounded-[16px] font-medium font-roboto"
          >
            Login
          </Link>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              className="font-roboto text-[18px] text-[#000000] flex items-center"
            >
              Courses
              <RiArrowDropDownLine className="w-[28px] h-[28px]" />
            </button>
            {coursesDropdownOpen && (
              <div className="absolute left-0 w-[260px] bg-[#ffffff] shadow-md rounded-md mt-2 z-50 max-h-[300px] overflow-y-auto">
                {trendingCourses.map((course, idx) => (
                  <Link
                    key={idx}
                    to="/courses"
                    className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                  >
                    {course}
                  </Link>
                ))}
              </div>
            )}
          </div>
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

      {/* <div className="md:hidden">
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#ffffff] rounded-b-md shadow-md max-w-[1364px] mx-auto p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#"
              className="font-roboto px-4 py-2 block font-medium text-[18px] text-[#000000]"
            >
              Business
            </a>
            <Link
              to={"/digital"}
              className="font-roboto px-4 py-2 block font-medium text-[18px] text-[#000000]"
            >
              Digital Product
            </Link>
            <Link
              to={'/blog'}
              className="font-roboto px-4 py-2 block font-medium text-[18px] text-[#000000]"
            >
              Newsletter
            </Link>
            <div className="mt-4 space-y-2">
              <Link
                to="/login"
                className="w-full text-center font-medium px-4 py-2 block border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </div> */}
      <div className="md:hidden">
        {isMobileMenuOpen && (
          <motion.div
            className="bg-white rounded-b-md shadow-md max-w-[1364px] mx-auto p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a
              href="#"
              className="font-roboto px-4 py-2 block font-medium text-[18px] text-[#000000]"
            >
              Business
            </a>

            <Link
              to="/digital"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-roboto px-4 py-2 block font-medium text-[18px] text-[#000000]"
            >
              Digital Product
            </Link>

            <Link
              to="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-roboto px-4 py-2 block font-medium text-[18px] text-[#000000]"
            >
              Newsletter
            </Link>

            {/* Courses Dropdown */}
            <div className="relative inline-block mt-2 px-4">
              <button
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000] flex items-center w-full"
              >
                Courses
                <RiArrowDropDownLine className="w-[28px] h-[28px]" />
              </button>

              {coursesDropdownOpen && (
                <div className="w-full bg-white shadow-md rounded-md mt-2 z-50 max-h-[300px] overflow-y-auto border border-gray-200">
                  {trendingCourses.map((course, idx) => (
                    <Link
                      key={idx}
                      to="/courses"
                      onClick={() => {
                        setCoursesDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block px-4 py-2 font-roboto font-medium text-[16px] text-black hover:bg-[#f0f0f0]"
                    >
                      {course}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Login Button */}
            <div className="mt-4 space-y-2">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center font-medium px-4 py-2 block border text-white rounded-lg border-white bg-[#047670]"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
