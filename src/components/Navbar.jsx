import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-red-300 min-h-[70px] flex items-center px-4 sm:px-2 md:px-2 fixed w-full top-0 z-50 bg-[#002726]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AiSkills</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="flex items-center px-4 py-2 border border-white rounded-lg font-semibold cursor-pointer hover:bg-green-700">
            Courses <ChevronDown size={16} className="ml-2" />
          </li>
          <li className=" flex items-center cursor-pointer">Business</li>
          <li className="flex items-center cursor-pointer">Digital Product</li>
          <li className=" flex items-center cursor-pointer">Newsletter</li>
        </ul>

        {/* Right side buttons */}
        <div className="hidden md:flex space-x-4 text-white">
          <button className="px-4 py-2 border border-white rounded-lg hover:bg-green-800">
            Instructor
          </button>
          <button className="px-4 py-2 border border-white hover:bg-green-800 rounded-lg">Login</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          {/* "Courses" Styled Like "Learn" Button in Image */}
          <button className="flex items-center px-4 py-2 border border-white rounded-lg  font-semibold text-lg mr-4 bg-[#002726] hover:bg-green-800">
            Courses
            <ChevronDown size={16} className="ml-2" />
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden p-4 mt-2 rounded-lg bg-[#002726] "
        >
          <ul className="space-y-4 text-white">
            <li className=" cursor-pointer">Business</li>
            <li className=" cursor-pointer">Digital Product</li>
            <li className=" cursor-pointe">Newsletter</li>
          </ul>
          <div className="mt-4 space-y-2">
            <button className="w-full px-4 py-2 border rounded-lg border-white hover:bg-green-700 text-white">
              Instructor
            </button>
            <button className="w-full px-4 py-2 border hover:bg-green-700 rounded-lg border-white text-white">
              Login
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
