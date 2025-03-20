// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="text-black min-h-[70px] fixed w-full top-0 z-50 bg-white">
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-2 md:px-2 h-full py-4">
//         {/* Left side: AiSkills + Menu Links combined */}
//         <div className="flex items-center space-x-4 h-full">
//           <h1 className="text-5xl font-bold text-black">AiSkills</h1>

//           {/* Desktop Menu - close to AiSkills */}

//           <ul className="hidden md:flex space-x-6 items-center ">
//             <li className="flex items-center px-4 py-2 border border-white rounded-lg font-semibold cursor-pointer hover:bg-green-700 ml-8 text-black">
//               Courses <ChevronDown size={16} className="ml-2" />
//             </li>
//             <li className="flex items-center cursor-pointer">Business</li>
//             <li className="flex items-center cursor-pointer">
//               Digital Product
//             </li>
//             <li className="flex items-center cursor-pointer">Newsletter</li>
//           </ul>
//         </div>

//         {/* Right side: Instructor & Login buttons */}
//         <div className="hidden md:flex space-x-4">
//           <button className="px-4 py-2 border border-white rounded-lg hover:bg-green-800">
//             Instructor
//           </button>
//           <button className="px-4 py-2 border border-white rounded-lg hover:bg-green-800">
//             Login
//           </button>
//         </div>

//         {/* Mobile Menu Section (Untouched) */}
//         <div className="flex items-center md:hidden">
//           <button className="flex items-center px-4 py-2 border border-white rounded-lg font-semibold text-lg mr-4 bg-[#002726] hover:bg-green-800">
//             Courses
//             <ChevronDown size={16} className="ml-2" />
//           </button>

//           {/* Hamburger Menu Icon */}
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown (Untouched) */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden p-4 bg-[#002726]"
//         >
//           <ul className="space-y-4">
//             <li className="cursor-pointer">Business</li>
//             <li className="cursor-pointer">Digital Product</li>
//             <li className="cursor-pointer">Newsletter</li>
//           </ul>
//           <div className="mt-4 space-y-2">
//             <button className="w-full px-4 py-2 border rounded-lg border-white hover:bg-green-700">
//               Instructor
//             </button>
//             <button className="w-full px-4 py-2 border rounded-lg border-white hover:bg-green-700">
//               Login
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// }





// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi"; // Mobile menu icons

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white w-full p-4 rounded-xl flex justify-between items-center max-w-8xl mx-auto shadow-md">
//       {/* Left Side - Logo */}
//       <div className="text-black font-bold text-5xl">
//         AI <span className="font-extrabold">SKILLS</span>
//       </div>

//       {/* Mobile Menu Toggle (Hidden on Desktop) */}
//       <div className="md:hidden">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? (
//             <FiX className="text-3xl text-black" />
//           ) : (
//             <FiMenu className="text-3xl text-black" />
//           )}
//         </button>
//       </div>

//       {/* Center - Navigation Links */}
//       <div
//         className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white shadow-md md:shadow-none md:flex justify-center items-center space-x-8 md:space-x-16 text-black text-lg font-medium p-4 md:p-0 ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <a href="#" className="hover:text-gray-600 py-2 md:py-0">
//           Courses
//         </a>
//         <a href="#" className="hover:text-gray-600 py-2 md:py-0">
//           Business
//         </a>
//         <a href="#" className="hover:text-gray-600 py-2 md:py-0">
//           Digital Product
//         </a>
//         <a href="#" className="hover:text-gray-600 py-2 md:py-0">
//           Newsletter
//         </a>
//       </div>

//       {/* Right Side - Buttons */}
//       <div className="hidden md:flex space-x-6">
//         <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800">
//           Login
//         </button>
//         <button className="bg-teal-700 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-800">
//           Instructor
//         </button>
//       </div>
//     </nav>
//   );
// }






import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Mobile menu icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full p-4 rounded-xl flex justify-between items-center max-w-8xl mx-auto shadow-md">
      {/* Left Side - Logo */}
      <div className="text-black font-bold text-5xl">
        AI <span className="font-extrabold">SKILLS</span>
      </div>

      {/* Mobile Menu Toggle (Hidden on Desktop) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX className="text-3xl text-black" />
          ) : (
            <FiMenu className="text-3xl text-black" />
          )}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out p-6 md:hidden flex flex-col space-y-4 text-lg font-medium z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="self-end text-3xl text-black mb-4"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>
        <a
          href="#"
          className="hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Courses
        </a>
        <a
          href="#"
          className="hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Business
        </a>
        <a
          href="#"
          className="hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Digital Product
        </a>
        <a
          href="#"
          className="hover:text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          Newsletter
        </a>
      </div>

      {/* Center - Navigation Links (Desktop Only) */}
      <div className="hidden md:flex md:space-x-16 text-black text-lg font-medium">
        <a href="#" className="hover:text-gray-600">
          Courses
        </a>
        <a href="#" className="hover:text-gray-600">
          Business
        </a>
        <a href="#" className="hover:text-gray-600">
          Digital Product
        </a>
        <a href="#" className="hover:text-gray-600">
          Newsletter
        </a>
      </div>

      {/* Right Side - Buttons */}
      <div className="hidden md:flex space-x-6">
        <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800">
          Login
        </button>
        <button className="bg-teal-700 text-white px-8 py-3 rounded-full font-medium hover:bg-teal-800">
          Instructor
        </button>
      </div>
    </nav>
  );
}






