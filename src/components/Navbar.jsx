import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white min-h-[70px] fixed w-full top-0 z-50 bg-[#002726]">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-2 md:px-2 h-full py-4">
        {/* Left side: AiSkills + Menu Links combined */}
        <div className="flex items-center space-x-4 h-full">
          <h1 className="text-3xl font-bold">AiSkills</h1>

          {/* Desktop Menu - close to AiSkills */}

          <ul className="hidden md:flex space-x-6 items-center">
            <li className="flex items-center px-4 py-2 border border-white rounded-lg font-semibold cursor-pointer hover:bg-green-700 ml-8">
              Courses <ChevronDown size={16} className="ml-2" />
            </li>
            <li className="flex items-center cursor-pointer">Business</li>
            <li className="flex items-center cursor-pointer">
              Digital Product
            </li>
            <li className="flex items-center cursor-pointer">Newsletter</li>
          </ul>
        </div>

        {/* Right side: Instructor & Login buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border border-white rounded-lg hover:bg-green-800">
            Instructor
          </button>
          <button className="px-4 py-2 border border-white rounded-lg hover:bg-green-800">
            Login
          </button>
        </div>

        {/* Mobile Menu Section (Untouched) */}
        <div className="flex items-center md:hidden">
          <button className="flex items-center px-4 py-2 border border-white rounded-lg font-semibold text-lg mr-4 bg-[#002726] hover:bg-green-800">
            Courses
            <ChevronDown size={16} className="ml-2" />
          </button>

          {/* Hamburger Menu Icon */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Untouched) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden p-4 bg-[#002726]"
        >
          <ul className="space-y-4">
            <li className="cursor-pointer">Business</li>
            <li className="cursor-pointer">Digital Product</li>
            <li className="cursor-pointer">Newsletter</li>
          </ul>
          <div className="mt-4 space-y-2">
            <button className="w-full px-4 py-2 border rounded-lg border-white hover:bg-green-700">
              Instructor
            </button>
            <button className="w-full px-4 py-2 border rounded-lg border-white hover:bg-green-700">
              Login
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
