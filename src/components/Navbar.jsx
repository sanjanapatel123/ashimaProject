import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black min-h-[70px] fixed w-full top-0 z-50  shadow-md ">
      <div className="container mx-auto flex justify-between  items-center px-4 sm:px-2 md:px-2 h-full py-4">
        {/* Left side: AiSkills + Menu Links combined */}
        <div className="flex items-center space-x-4 h-full">
          <h1 className="text-[55px] leading-[55px] tracking-[0.5%] font-[400] text-black font-impact mr-12">
            AiSkills
          </h1>

          {/* Desktop Menu - close to AiSkills */}

          <ul className="hidden md:flex space-x-6 items-center font-roboto">
            <li className="flex items-center cursor-pointer font-[500] text-[18px] text-[#1e1e1e] leading-[20px] tracking-[0%]">
              Courses
            </li>
            <li className="flex items-center cursor-pointer font-[500] text-[18px] text-[#1e1e1e] leading-[20px] tracking-[0%]">
              Business
            </li>
            <li className="flex items-center cursor-pointer font-[500] text-[18px] text-[#1e1e1e] leading-[20px] tracking-[0%]">
              Digital Product
            </li>
            <li className="flex items-center cursor-pointer font-[500] text-[18px] text-[#1e1e1e] leading-[20px] tracking-[0%]">
              Newsletter
            </li>
          </ul>
        </div>

        {/* Right side: Instructor & Login buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="p-[10px] w-[150px] h-[45px] text-white rounded-[16px] bg-[#1E1E1E]">
            Login
          </button>
          <button className="p-[10px] w-[150px] h-[45px] text-white rounded-[16px] bg-[#047670]">
            Instructor
          </button>
        </div>

        {/* Mobile Menu Section (Untouched) */}
        <div className="flex items-center md:hidden">
          <button className="flex items-center px-4 py-2 text-white rounded-[16px] font-semibold text-lg mr-4 bg-[#047670]">
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

// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="text-black min-h-[70px] fixed lg:rounded-sm w-full top-0 z-50 bg-white shadow-md lg:w-[calc(100%-4rem)] lg:mx-8">
//       <div className="container mx-auto flex justify-between  items-center px-4 sm:px-2 md:px-2 h-full py-4">
//         {/* Left side: AiSkills + Menu Links combined */}
//         <div className="flex items-center space-x-4 h-full">
//           <h1 className="text-[55px] leading-[55px] tracking-[0.5%] font-[400] text-black font-impact mr-12">
//             AiSkills
//           </h1>

//           {/* Desktop Menu - close to AiSkills */}

//           <ul className="hidden md:flex space-x-6 items-center font-roboto">
//             <li className="flex items-center cursor-pointer font-[500] text-[18px] text-[#1e1e1e] leading-[20px] tracking-[0%]">
//               Courses
//             </li>
//             <li className="flex items-center cursor-pointer font-[500] text-[18px] text-[#1e1e1e] leading-[20px] tracking-[0%]">
//               Business
//             </li>
//             <li className="flex items-center cursor-pointer font-[500] text-[18px] text-[#1e1e1e] leading-[20px] tracking-[0%]">
//               Digital Product
//             </li>
//             <li className="flex items-center cursor-pointer font-[500] text-[18px] text-[#1e1e1e] leading-[20px] tracking-[0%]">
//               Newsletter
//             </li>
//           </ul>
//         </div>

//         {/* Right side: Instructor & Login buttons */}
//         <div className="hidden md:flex space-x-4">
//           <button className="p-[10px] w-[150px] h-[45px] text-white rounded-[16px] bg-[#1E1E1E]">
//             Login
//           </button>
//           <button className="p-[10px] w-[150px] h-[45px] text-white rounded-[16px] bg-[#047670]">
//             Instructor
//           </button>
//         </div>

//         {/* Mobile Menu Section (Untouched) */}
//         <div className="flex items-center md:hidden">
//           <button className="flex items-center px-4 py-2 text-white rounded-[16px] font-semibold text-lg mr-4 bg-[#047670]">
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
//           className="md:hidden p-4 bg-white"
//         >
//           <ul className="space-y-4">
//             <li className="cursor-pointer">Business</li>
//             <li className="cursor-pointer">Digital Product</li>
//             <li className="cursor-pointer">Newsletter</li>
//           </ul>
//           <div className="mt-4 space-y-2">
//             <button className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#1e1e1e]">
//               Instructor
//             </button>
//             <button className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#047670]">
//               Login
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// }

// import React from "react";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Menu, X, ChevronDown } from "lucide-react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <header className="bg-white p-4 shadow-md">
//       <div className="flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-3xl font-bold">AI SKILLS</h1>

//         {/* Search bar (Only visible on lg screens) */}
//         <div className="hidden lg:flex items-center border border-gray-300 rounded-full p-2 w-1/3">
//           <input
//             type="text"
//             className="w-full p-2 outline-none text-sm"
//             placeholder="Search for anything"
//           />
//           {/* <button className="p-2 text-gray-600">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-5 h-5"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
//               />
//             </svg>
//           </button> */}
//         </div>

//         {/* Navigation Links (Hidden on small screens) */}
//         <nav className="hidden lg:flex space-x-4 text-sm font-medium">
//           <a href="#courses" className="text-gray-700 hover:text-teal-600">
//             Courses
//           </a>
//           <a href="#business" className="text-gray-700 hover:text-teal-600">
//             Business
//           </a>
//           <a href="#digital" className="text-gray-700 hover:text-teal-600">
//             Digital Product
//           </a>
//           <a href="#newsletter" className="text-gray-700 hover:text-teal-600">
//             Newsletter
//           </a>
//         </nav>

//         {/* Mobile Menu & Auth buttons */}
//         <div className="flex items-center space-x-4">
//           {/* Mobile Menu Icon (Only visible on small screens) */}
//           {/* <button className="lg:hidden text-gray-700 hover:text-teal-600">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button> */}
//           <button className="bg-teal-500 text-white py-2 px-4 rounded-md text-sm">
//             Login
//           </button>
//           <button className="bg-teal-500 text-white py-2 px-4 rounded-md text-sm">
//             Sign Up
//           </button>

//           <div className="flex items-center md:hidden">
//             {/* Hamburger Menu Icon */}
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {/* Auth buttons */}

//           {/* Mobile Menu Dropdown (Untouched) */}
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="md:hidden p-4 bg-white"
//             >
//               <ul className="space-y-4">
//                 <li className="cursor-pointer">Business</li>
//                 <li className="cursor-pointer">Digital Product</li>
//                 <li className="cursor-pointer">Newsletter</li>
//               </ul>
//               <div className="mt-4 space-y-2">
//                 <button className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#1e1e1e]">
//                   Instructor
//                 </button>
//                 <button className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#047670]">
//                   Login
//                 </button>
//               </div>
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
