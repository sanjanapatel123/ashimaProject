import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black min-h-[70px] fixed lg:rounded-lg w-full top-0 z-50 bg-white shadow-md lg:w-[calc(100%-4rem)] lg:mx-8 ml-1">
      {" "}
      <div className="FF mx-auto flex justify-between items-center py-3">
        {/* Left Side: AI SKILLS + Menu */}{" "}
        <div className="flex items-center">
          {" "}
          <h1 className="text-[50px] leading-[55px] font-[400] text-black font-impact">
            AI SKILLS{" "}
          </h1>
          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center space-x-10 ml-40 items-center font-Roboto Condensed mt-2">
            <Link to="/AllCourses" className="no-underline">
              <li className="cursor-pointer font-[500] text-[18px] text-[#1e1e1e] hover:text-[#00E0C6] transition">
                Courses
              </li>
            </Link>
            <li className="cursor-pointer font-[500] text-[18px] text-[#1e1e1e] hover:text-[#00E0C6] transition">
              Business
            </li>
            <li className="cursor-pointer font-[500] text-[18px] text-[#1e1e1e] hover:text-[#00E0C6] transition">
              Digital Products
            </li>
            <li className="cursor-pointer font-[500] text-[18px] text-[#1e1e1e] hover:text-[#00E0C6] transition">
              Newsletter
            </li>
          </ul>
        </div>
        {/* Right Side: Login & Instructor Buttons */}
        <div className="hidden md:flex space-x-4 mr-2 gap-4">
          {/* <button className="p-3 w-[150px] h-[45px] text-white rounded-[16px] bg-black font-Roboto Condensed text-center flex items-center justify-center">
            Login
          </button> */}
          {/* <Link to="/login">
            <button className="p-3 w-[150px] h-[45px] text-white rounded-[16px] bg-black font-Roboto Condensed text-center flex items-center justify-center">
              Login
            </button>
          </Link> */}
            <Link to="/login" className="no-underline">
        <button className="p-3 w-[150px] h-[45px] text-white rounded-[16px] bg-black font-Roboto Condensed text-center flex items-center justify-center">
          Login
        </button>
      </Link>

          <button className="p-3 w-[150px] h-[45px] text-white rounded-[16px] bg-[#047670] font-Roboto Condensed text-center flex items-center justify-center">
            Instructor
          </button>
        </div>
        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden flex items-center space-x-2">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-black w-6 h-6" />
            ) : (
              <Menu className="text-black w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Dropdown (unchanged) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden p-4 bg-white"
        >
          <ul className="space-y-4">
            <li className="cursor-pointer">Business</li>
            <li className="cursor-pointer">Digital Product</li>
            <li className="cursor-pointer">Newsletter</li>
          </ul>
          <div className="mt-4 space-y-2">
            <button className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#1e1e1e]">
              Instructor
            </button>
            <button className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#047670]">
              Login
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
