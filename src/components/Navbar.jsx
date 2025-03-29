





// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="fixed z-50 w-full px-0 sm:px-4 md:px-6 lg:px-8">
//       <div className="bg-white shadow-md max-w-[1410px] mx-auto h-[80px] flex items-center justify-between px-4 md:px-6">
//         {/* Left: Logo */}
//         <Link to="/">
//           <div className="font-[400] text-[50px] text-[#000000] tracking-[0.5%] leading-[55px] font-impact  ">
//             AI SKILLS
//           </div>
//         </Link>

//         {/* Center: Menu Items */}
//         <nav className="hidden md:flex space-x-10 font-medium text-[16px] text-[#1e1e1e]">
//           <Link
//             to="/allcourses"
//             className="font-roboto font-[500] text-[18px] leading-[20px] text-[#000000]"
//           >
//             Courses
//           </Link>
//           <a
//             href="#"
//             className="font-roboto font-[500] text-[18px] leading-[20px] text-[#000000]"
//           >
//             Business
//           </a>

//           <Link
//             to="/digital"
//             className="font-roboto font-[500] text-[18px] leading-[20px] text-[#000000]"
//           >
//             Digital Products
//           </Link>
//           <a
//             href="#"
//             className="font-roboto font-[500] text-[18px] leading-[20px] text-[#000000]"
//           >
//             Newsletter
//           </a>
//         </nav>

//         {/* Right: Auth Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             to={"/login"}
//             className="p-[10px] w-[150px] h-[45px] text-center  text-white text-[18px] bg-[#1e1e1e] rounded-[16px] font-[500] font-roboto "
//           >
//             Login
//           </Link>
//           <Link className="p-[10px] w-[150px] h-[45px] text-center text-white text-[18px] bg-[#047670] rounded-[16px] font-[500] font-roboto ">
//             Instructor
//           </Link>
//         </div>

//         {/* Mobile Hamburger Button */}
//         <div className="md:hidden flex items-center">
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
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <motion.div
//           className="md:hidden bg-white rounded-b-md shadow-md max-w-[1364px] mx-auto p-4"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <Link
//             to="/AllCourses"
//             className=" block font-roboto font-medium text-[18px]  text-[#000000]"
//           >
//             Courses
//           </Link>
//           <a
//             href="#"
//             className="font-roboto block font-medium text-[18px]  text-[#000000]"
//           >
//             Business
//           </a>

//           <Link
//             to="/AllCourses"
//             className=" block font-roboto font-medium text-[18px]  text-[#000000]"
//           >
//             Courses
//           </Link>
//           <a
//             href="#"
//             className="font-roboto block font-medium text-[18px] bolck  text-[#000000]"
//           >
//             Newsletter
//           </a>

//           <div className="mt-4 space-y-2">
//             <Link
//               to="/login"
//               className="w-full text-center px-4 py-2 block border text-white rounded-lg border-white bg-[#047670]"
//             >
//               Login
//             </Link>

//             <Link className="w-full block text-center px-4 py-2 border text-white rounded-lg border-white bg-[#047670]">
//               Instructor
//             </Link>
//           </div>
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaEllipsisH } from 'react-icons/fa'; // Import Three Dots Icon

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false); // To control Courses dropdown visibility


//   return (
//     <header className="fixed z-50 w-full px-0 sm:px-4 md:px-6 lg:px-8">
//       <div className="bg-[#ffffff] shadow-md max-w-[1410px] mx-auto h-[80px] flex items-center justify-between px-4 md:px-6">
//         {/* Left: Logo */}
//         <Link to="/">
//           <div className="font-normal text-[50px] text-[#000000] tracking-[0.5%] leading-[55px] font-impact  ">
//             AI SKILLS
//           </div>
//         </Link>

//         {/* Center: Menu Items */}
//         <nav className="hidden md:flex space-x-10 font-medium text-[16px] text-[#1e1e1e]">
//           <Link
//             to="/allcourses"
//             className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]"
//           >
//             Courses
//           </Link>
//           <a
//             href="#"
//             className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]"
//           >
//             Business
//           </a>

//           <Link
//             to="/digital"
//             className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]"
//           >
//             Digital Products
//           </Link>
//           <a
//             href="#"
//             className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]"
//           >
//             Newsletter
//           </a>
//         </nav>

//         {/* Right: Auth Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             to={"/login"}
//             className="p-[10px] w-[150px] h-[45px] text-center  text-[#ffffff] text-[18px] bg-[#1e1e1e] rounded-[16px] font-medium font-roboto "
//           >
//             Login
//           </Link>
//           <Link className="p-[10px] w-[150px] h-[45px] text-center text-[#ffffff] text-[18px] bg-[#047670] rounded-[16px] font-medium font-roboto ">
//             Instructor
//           </Link>
//         </div>

//         {/* Mobile Hamburger Button */}
//         <div className="md:hidden flex items-center">
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
//       </div>

//       {/* Mobile Dropdown Menu */}
    
//       {/* Mobile Menu Toggle Button */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Courses Button with Three Dots */}
//         <div className="relative">
//           <button
//             onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)} // Toggle dropdown visibility
//             className="font-roboto text-[18px] text-[#000000] flex items-center"
//           >
            
//             Courses
//           </button>

//           {/* Dropdown for Courses */}
//           {coursesDropdownOpen && (
//             <div className="absolute left-0 w-full bg-[#ffffff] shadow-md rounded-md mt-2">
//               <Link
//                 to="/AllCourses"
//                 className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
//               >
//                 All Courses
//               </Link>
//               <Link
//                 to="/SomeOtherCourse"
//                 className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
//               >
//                 Some Other Course
//               </Link>
//               <Link
//                 to="/MoreCourses"
//                 className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
//               >
//                 More Courses
//               </Link>
//             </div>
//           )}
//         </div>

//         {/* Toggle Button */}
     
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <motion.div
//           className="md:hidden bg-[#ffffff] rounded-b-md shadow-md max-w-[1364px] mx-auto p-4"
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {/* Other Links */}
//           <a
//             href="#"
//             className="font-roboto block font-medium text-[18px] text-[#000000]"
//           >
//             Business
//           </a>

//           <a
//             href="#"
//             className="font-roboto block font-medium text-[18px] text-[#000000]"
//           >
//             Newsletter
//           </a>

//           {/* Login and Instructor buttons */}
//           <div className="mt-4 space-y-2">
//             <Link
//               to="/login"
//               className="w-full text-center font-medium px-4 py-2 block border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]"
//             >
//               Login
//             </Link>

//             <Link className="w-full block text-center font-medium px-4 py-2 border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]">
//               Instructor
//             </Link>
//           </div>
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default Navbar;






// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaEllipsisH } from "react-icons/fa"; // Import Three Dots Icon
// import dropdowm from "../assets/Dropdowmimg.png"

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false); // To control Courses dropdown visibility

//   return (
//     <header className="fixed z-50 w-full px-0 sm:px-4 md:px-6 lg:px-8">
//       <div className="bg-[#ffffff] shadow-md max-w-[1410px] mx-auto h-[80px] flex items-center justify-between px-4 md:px-6">
//         {/* Left: Logo */}
//         <Link to="/">
//           <div className="font-normal text-[50px] text-[#000000] tracking-[0.5%] leading-[55px] font-impact">
//             AI SKILLS
//           </div>
//         </Link>

//         {/* Center: Menu Items (Visible on medium and larger screens) */}
//         <nav className="hidden md:flex space-x-10 font-medium text-[16px] text-[#1e1e1e]">
//           <Link
//             to="/allcourses"
//             className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]"
//           >
//             Courses
//           </Link>
//           <a
//             href="#"
//             className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]"
//           >
//             Business
//           </a>
//           <Link
//             to="/digital"
//             className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]"
//           >
//             Digital Products
//           </Link>
//           <a
//             href="#"
//             className="font-roboto font-medium text-[18px] leading-[20px] text-[#000000]"
//           >
//             Newsletter
//           </a>
//         </nav>

//         {/* Right: Auth Buttons (Visible on medium and larger screens) */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             to={"/login"}
//             className="p-[10px] w-[150px] h-[45px] text-center text-[#ffffff] text-[18px] bg-[#1e1e1e] rounded-[16px] font-medium font-roboto"
//           >
//             Login
//           </Link>
//           <Link className="p-[10px] w-[150px] h-[45px] text-center text-[#ffffff] text-[18px] bg-[#047670] rounded-[16px] font-medium font-roboto">
//             Instructor
//           </Link>
//         </div>

//         {/* Mobile Hamburger Button */}
//         <div className="md:hidden flex items-center space-x-4">
//           {" "}
//           {/* Added space between toggle and courses */}
//           {/* Courses Button with Three Dots */}
//           <div className="relative">
//             <button
//               onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)} // Toggle dropdown visibility
//               className="font-roboto text-[18px] text-[#000000] flex items-center"
//             >
//               <FaEllipsisH className="mr-2 text-[18px]" />
//               Courses
//             </button>

//             {/* Dropdown for Courses */}
//             {coursesDropdownOpen && (
//               <div className="absolute left-0 w-[200px] bg-[#ffffff] shadow-md rounded-md mt-2">
//                 <Link
//                   to="/AllCourses"
//                   className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
//                 >
//                   All Courses
//                 </Link>
//                 <Link
//                   to="/SomeOtherCourse"
//                   className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
//                 >
//                   Some Other Course
//                 </Link>
//                 <Link
//                   to="/MoreCourses"
//                   className="block px-4 py-2 font-roboto font-medium text-[16px] text-[#000000] hover:bg-[#f0f0f0]"
//                 >
//                   More Courses
//                 </Link>
//               </div>
//             )}
//           </div>
//           {/* Hamburger Toggle */}
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
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div className="md:hidden">
//         {" "}
//         {/* This is mobile-only content */}
//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <motion.div
//             className="md:hidden bg-[#ffffff] rounded-b-md shadow-md max-w-[1364px] mx-auto p-4"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             {/* Mobile Links */}
//             <a
//               href="#"
//               className="font-roboto block font-medium text-[18px] text-[#000000]"
//             >
//               Business
//             </a>
//             <a
//               href="#"
//               className="font-roboto block font-medium text-[18px] text-[#000000]"
//             >
//               Newsletter
//             </a>

//             {/* Mobile Auth Buttons */}
//             <div className="mt-4 space-y-2">
//               <Link
//                 to="/login"
//                 className="w-full text-center font-medium px-4 py-2 block border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]"
//               >
//                 Login
//               </Link>
//               <Link className="w-full block text-center font-medium px-4 py-2 border text-[#ffffff] rounded-lg border-[#ffffff] bg-[#047670]">
//                 Instructor
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;


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

