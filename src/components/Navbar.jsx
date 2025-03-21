// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="text-black min-h-[70px] fixed w-full top-0 z-50 bg-blue-200 shadow-md ">
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

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black min-h-[70px] fixed lg:rounded-sm w-full top-0 z-50 bg-white shadow-md lg:w-[calc(100%-4rem)] lg:mx-8">
      <div className="container mx-auto flex justify-between  items-center px-4 sm:px-2 md:px-2 h-full py-4">
        {/* Left side: AiSkills + Menu Links combined */}
        <div className="flex items-center space-x-4 h-full">
          <h1 className="text-[55px] leading-[55px] tracking-[0.5%] font-[400] text-[#000000] font-impact mr-12">
            AI SKILLS
          </h1>

          {/* Desktop Menu - close to AiSkills */}

          <ul className="hidden md:flex space-x-6 items-center font-roboto">
            <Link to="/AllCourses" className="no-underline">
              <li className="flex items-center cursor-pointer font-[500] text-[18px] text-[#1e1e1e] leading-[20px] tracking-[0%] hover:text-[#00E0C6] transition">
                Courses
              </li>
            </Link>

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
