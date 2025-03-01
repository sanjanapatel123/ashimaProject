import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-black bg-white p-3 sm:p-2 md:p-2 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AiSkills</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="flex items-center px-4 py-2 border border-black rounded-lg font-semibold cursor-pointer">
            Courses <ChevronDown size={16} className="ml-2" />
          </li>
          <li className=" flex items-center cursor-pointer">Business</li>
          <li className="flex items-center cursor-pointer">Digital Product</li>
          <li className=" flex items-center cursor-pointer">Newsletter</li>
        </ul>

        {/* Right side buttons */}
        <div className="hidden md:flex space-x-4 text-white">
          <button className="px-4 py-2  border-black rounded-lg bg-green-600 hover:bg-green-800">
            Instructor
          </button>
          <button className="px-4 py-2  border-black rounded-lg bg-green-600 hover:bg-green-800">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          {/* "Courses" Styled Like "Learn" Button in Image */}
          <button className="flex items-center px-4 py-2 border border-black rounded-lg  font-semibold text-lg mr-4">
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
          className="md:hidden p-4 mt-2 rounded-lg"
        >
          <ul className="space-y-4">
            <li className="hover:text-gray-950 text-gray-900 cursor-pointer">
              Business
            </li>
            <li className="hover:text-gray-950 text-gray-900 cursor-pointer">
              Digital Product
            </li>
            <li className="hover:text-gray-950 text-gray-900 cursor-pointe">
              Newsletter
            </li>
          </ul>
          <div className="mt-4 space-y-2">
            <button className="w-full px-4 py-2 border rounded-lg hover:bg-green-800 bg-green-600 text-white">
              Instructor
            </button>
            <button className="w-full px-4 py-2  rounded-lg hover:bg-green-800 bg-green-600 text-white">
              Login
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
