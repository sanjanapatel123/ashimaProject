// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs"; // Search icon from react-icons
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className=" h-[80px] mx-auto p-4 flex items-center">
//         {/* Logo */}
//         {/* <div className="font-imapct text-[50px] text-[#000000] leading-[#55px]">AI SKILLS</div> */}
//         <div className="font-[Impact] font-normal text-[50px] leading-[55px] tracking-[0.005em] text-[#000000]">
//           AI SKILLS
//         </div>

//         {/* Mobile View (Small devices) */}
//         <div className="md:hidden flex items-center rounder-full space-x-4">
//           {/* Hamburger Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="text-black"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Desktop Menu (Medium and larger devices) */}
//         <div className="hidden md:flex items-center space-x-8">
//           {/* Search Bar */}

//           <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-full max-w-md ml-32">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-gray-500"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 18.5a7.5 7.5 0 005.65-1.85z"
//               />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search for anything"
//               className="ml-3 outline-none border-none text-sm w-full placeholder:text-gray-500"
//             />
//           </div>

//           {/* Menu Items */}

//           {/* Cart & Auth Buttons */}
//           <div className="flex items-center gap-10 text-[15px] font-medium text-[#1E1E1E]">
//             <span className="cursor-pointer">Courses</span>
//             <span className="cursor-pointer">Business</span>
//             <span className="cursor-pointer">Digital Product</span>
//             <span className="cursor-pointer">Newsletter</span>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 text-[#047670] font-medium">
//           {/* Cart Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00-.207.707V18a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-.207-.707L17 13M7 13h10M9 21h.01M15 21h.01"
//             />
//           </svg>

//           {/* Login Button */}
//           <button className="px-5 py-2 rounded-md border border-[#047670] text-[#047670]">
//             Login
//           </button>

//           {/* Sign Up Button */}
//           <button className="px-5 py-2 rounded-md bg-[#047670] text-white font-semibold">
//             Sign Up
//           </button>
//         </div>
//       </div>

    
//     </header>
//   );
// };

// export default Header;




// import React from 'react';
//   import { Link } from "react-router-dom";
//   import React, { useState } from "react";


// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="h-[80px] mx-auto px-4 flex items-center shadow-sm justify-between">
//       {/* Left: Logo */}
//       <div className="font-[Impact] font-normal text-[50px] leading-[55px] tracking-[0.005em] text-[#000000] whitespace-nowrap">
//         AI SKILLS
//       </div>

//       {/* Center: Search + Menu */}
//       <div className="hidden md:flex items-center gap-6">
//         {/* Search Bar */}
//         <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-[280px]">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 text-[#E1E1E1]"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 18.5a7.5 7.5 0 005.65-1.85z"
//             />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search for anything"
//             className="ml-3 outline-none border-none text-sm w-full placeholder:text-[#1E1E1E1CC]"
//           />
//         </div>
//         {/* Menu Items */}

//         <div className="flex items-center gap-6  font-roboto text-[#1E1E1E] whitespace-nowrap text-[18px]">
//           <Link to="/Allcourses">
//             <span className="cursor-pointer">Courses</span>
//           </Link>
//           <Link to="/business">
//             <span className="cursor-pointer">Business</span>
//           </Link>
//           <Link to="/digital">
//             <span className="cursor-pointer">Digital Product</span>
//           </Link>
//           <Link to="/newsletter">
//             <span className="cursor-pointer">Newsletter</span>
//           </Link>
//         </div>
//       </div>

//       {/* Right: Cart + Auth */}
//       <div className="hidden md:flex items-center gap-4 text-[#047670] font-medium">
//         {/* Cart Icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-6 h-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00-.207.707V18a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-.207-.707L17 13M7 13h10M9 21h.01M15 21h.01"
//           />
//         </svg>

//         {/* Login Button */}
//         <Link to="/login">
//           <button className="px-5 py-2 rounded-[16px] border border-[#047670] text-[#047670]">
//             Login
//           </button>
//         </Link>

//         <Link to="/signup">
//           <button className="px-5 py-2 rounded-[16px] bg-[#047670] text-white font-semibold">
//             Sign Up
//           </button>
//         </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="text-black"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             strokeWidth="2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-md">
//           {/* Search */}
//           <div className="flex items-center border border-gray-400 rounded-full px-4 py-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-[#E1E1E1]"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011 18.5a7.5 7.5 0 005.65-1.85z"
//               />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search for anything"
//               className="ml-3 outline-none border-none text-sm w-full placeholder:text-[#1E1E1E1CC]"
//             />
//           </div>

//           {/* Links */}
//           <div className="flex flex-col gap-3 font-roboto text-[#1E1E1E] text-[18px]">
//             <Link to="/Allcourses" onClick={() => setIsMobileMenuOpen(false)}>
//               Courses
//             </Link>
//             <Link to="/business" onClick={() => setIsMobileMenuOpen(false)}>
//               Business
//             </Link>
//             <Link to="/digital" onClick={() => setIsMobileMenuOpen(false)}>
//               Digital Product
//             </Link>
//             <Link to="/newsletter" onClick={() => setIsMobileMenuOpen(false)}>
//               Newsletter
//             </Link>
//             <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
//               Login
//             </Link>
//             <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
//               Sign Up
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Header






import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="h-[80px]/fixed mx-auto px-4 flex items-center shadow-sm justify-between">
        {/* Left: Logo */}
        <div className="font-[Impact] font-normal text-[50px] leading-[55px] tracking-[0.005em] text-[#000000] whitespace-nowrap">
          AI SKILLS
        </div>

        {/* Center: Search + Menu */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-[280px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#E1E1E1]"
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

          {/* Menu Items */}
          <div className="flex items-center gap-6 font-roboto text-[#000000] whitespace-nowrap text-[18px]">
            <Link to="/Allcourses">
              <span className="cursor-pointer">Courses</span>
            </Link>
            <Link to="/business">
              <span className="cursor-pointer">Business</span>
            </Link>
            <Link to="/digital">
              <span className="cursor-pointer">Digital Product</span>
            </Link>
            <Link to="/newsletter">
              <span className="cursor-pointer">Newsletter</span>
            </Link>
          </div>
        </div>

        {/* Right: Cart + Auth */}
        <div className="hidden md:flex items-center gap-4 text-[#047670] font-medium">
          {/* Cart Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 2.293a1 1 0 00-.207.707V18a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-.207-.707L17 13M7 13h10M9 21h.01M15 21h.01"
            />
          </svg>

          {/* Login Button */}
          <Link to="/login">
            <button className="px-5 py-2 rounded-[16px] border border-[#047670] text-[#047670]">
              Login
            </button>
          </Link>

          {/* Sign Up Button */}
          <Link to="/signup">
            <button className="px-5 py-2 rounded-[16px] bg-[#047670] text-white font-semibold">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
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
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 space-y-4 shadow-md">
          {/* Search */}
          <div className="flex items-center border border-gray-400 rounded-full px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#E1E1E1]"
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

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 font-roboto text-[#000000] text-[18px]">
            <Link to="/Allcourses" onClick={() => setIsMobileMenuOpen(false)}>
              Courses
            </Link>
            <Link to="/business" onClick={() => setIsMobileMenuOpen(false)}>
              Business
            </Link>
            <Link to="/digital" onClick={() => setIsMobileMenuOpen(false)}>
              Digital Product
            </Link>
            <Link to="/newsletter" onClick={() => setIsMobileMenuOpen(false)}>
              Newsletter
            </Link>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              Login
            </Link>
            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
