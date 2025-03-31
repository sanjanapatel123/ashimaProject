// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs"; // Search icon from react-icons

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-screen-xl h-[80px] mx-auto p-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="font-bold text-2xl text-black">AI SKILLS</div>

//         {/* Mobile View (Small devices) */}
//         <div className="md:hidden flex items-center space-x-4">
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
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="        Search for anything"
//               className="p-2 pl-10 pr-3 border border-gray-300 rounded-md"
//             />
//             <BsSearch
//               size={20}
//               className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//             />
//           </div>

//           {/* <input
//             type="text"
//             placeholder="Search for anything"
//             className="p-2 border border-gray-300 rounded-md"
//           /> */}
//           {/* <button className="text-gray-500">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M10 18l6-6m0 0l-6-6m6 6H4"
//               />
//             </svg>
//           </button> */}

//           {/* Menu Items */}
//           <a href="#" className="text-black hover:text-green-500">
//             Courses
//           </a>
//           <a href="#" className="text-black hover:text-green-500">
//             Business
//           </a>
//           <a href="#" className="text-black hover:text-green-500">
//             Digital Product
//           </a>
//           <a href="#" className="text-black hover:text-green-500">
//             Newsletter
//           </a>

//           {/* Cart & Auth Buttons */}
//           <div className="flex items-center space-x-4">
//             <a href="#" className="text-gray-700">
//               {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3 3h18l1 12H4L3 3z"
//                 />
//               </svg> */}

//               <AiOutlineShoppingCart size={24} />
//             </a>
//             <button className="text-teal-500 px-4 py-2 rounded-md border border-teal-500">
//               Login
//             </button>
//             <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (for small devices) */}
//       {isMobileMenuOpen && (
//         // <div className="md:hidden bg-white p-4">
//         //   <a href="#" className="block py-2">
//         //     Courses
//         //   </a>
//         //   <a href="#" className="block py-2">
//         //     Business
//         //   </a>
//         //   <a href="#" className="block py-2">
//         //     Digital Product
//         //   </a>
//         //   <a href="#" className="block py-2">
//         //     Newsletter
//         //   </a>
//         //   <div className="mt-4 flex space-x-4">
//         //     <button className="text-teal-500 px-4 py-2 rounded-md border border-teal-500">
//         //       Login
//         //     </button>
//         //     <button className="bg-teal-500 text-white px-4 py-2 rounded-md">
//         //       Sign Up
//         //     </button>
//         //   </div>
//         // </div>

//         <motion.div
//           className="md:hidden bg-white text-black p-4"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <a href="#" className="block py-2">
//             Courses
//           </a>
//           <a href="#" className="block py-2">
//             Business
//           </a>
//           <a href="#" className="block py-2">
//             Digital Product
//           </a>
//           <a href="#" className="block py-2">
//             Newsletter
//           </a>
//           <div className="mt-4 space-y-2">
//             <button className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#1e1e1e]">
//               Signup
//             </button>
//             <button className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#047670]">
//               Login
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dropdown from "../assets/Dropdownimg.png";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false); // To control Courses dropdown visibility

  return (
    <header className="fixed z-50 w-full px-0 sm:px-4 md:px-6 lg:px-8">
      <div className="bg-[#ffffff] shadow-md max-w-[1410px] mx-auto h-[80px] flex items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <Link to="/">
          <div className="font-normal text-[50px] text-[#000000] tracking-[0.5%] leading-[55px] font-impact">
            AI SKILLS
          </div>
        </Link>

        {/* Center: Menu Items (Visible on medium and larger screens) */}
        <nav className="hidden md:flex space-x-10 font-medium text-[16px] text-[#1e1e1e]">
          <div className="relative">
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)} // Toggle dropdown visibility on click
              className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000] flex items-center"
            >
              Courses
              {/* Dropdown Image for Courses (Optional) */}
              <RiArrowDropDownLine className="w-[28px] h-[28px]" />
            </button>

            {/* Dropdown for Courses (Visible when clicked) */}
            {coursesDropdownOpen && (
              <div className="absolute left-0 w-[200px] bg-[#ffffff] shadow-md rounded-md mt-2">
                <Link
                  to="/allcourses"
                  className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                >
                  All Courses
                </Link>
                <Link
                  to="/SomeOtherCourse"
                  className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                >
                  Some Other Course
                </Link>
                <Link
                  to="/MoreCourses"
                  className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                >
                  More Courses
                </Link>
              </div>
            )}
          </div>

          <a
            href="#"
            className="font-roboto font-medium text-[18px]  text-[#000000]"
          >
            Business
          </a>
          <Link
            to="/digital"
            className="font-roboto font-medium text-[18px]  text-[#000000]"
          >
            Digital Products
          </Link>
          <a
            href="#"
            className="font-roboto font-medium text-[18px]  text-[#000000]"
          >
            News letter
          </a>
        </nav>

        {/* Right: Auth Buttons (Visible on medium and larger screens) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to={"/login"}
            className="p-[10px] w-[150px] h-[45px] text-center text-[#ffffff] text-[18px] bg-[#1e1e1e] rounded-[16px] font-medium font-roboto"
          >
            Login
          </Link>
          <Link className="p-[10px] w-[150px] h-[45px] text-center text-[#ffffff] text-[18px] bg-[#047670] rounded-[16px] font-medium font-roboto">
            Instructor
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
              <div className="absolute left-0 w-[200px] bg-[#ffffff] shadow-md rounded-md mt-2">
                <Link
                  to="/AllCourses"
                  className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                >
                  All Courses
                </Link>
                <Link
                  to="/SomeOtherCourse"
                  className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                >
                  Some Other Course
                </Link>
                <Link
                  to="/MoreCourses"
                  className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
                >
                  More Courses
                </Link>
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
        {/* This is mobile-only content */}
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
              className="font-roboto block font-medium text-[18px] text-[#000000]"
            >
              Business
            </a>
            <a
              href="#"
              className="font-roboto block font-medium text-[18px] text-[#000000]"
            >
              Newsletter
            </a>

            {/* Mobile Auth Buttons */}
            <div className="mt-4 space-y-2">
              <Link
                to="/login"
                className="w-full text-center font-medium px-4 py-2 block border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]"
              >
                Login
              </Link>
              <Link className="w-full block text-center font-medium px-4 py-2 border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]">
                Instructor
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
