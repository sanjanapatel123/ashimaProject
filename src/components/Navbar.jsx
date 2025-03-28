

// import  { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="fixed z-50 w-full px-0 sm:px-4 md:px-6 lg:px-8">
//       <div className="bg-white shadow-md max-w-[1410px] mx-auto h-[80px] flex items-center justify-between px-4 md:px-6">
//         {/* Left: Logo */}
//         <Link to="/">
//           <div className="font-[400] text-[50px] text-black tracking-[0.5%] leading-[55px] font-impact  ">
//             AI SKILLS
//           </div>
//         </Link>

//         {/* Center: Menu Items */}
//         <nav className="hidden md:flex space-x-10 font-medium text-[16px] text-[#1e1e1e]">
//           <Link
//             to="/allcourses"
//             className="font-roboto font-[500] text-[18px] leading-[20px]"
//           >
//             Courses
//           </Link>
//           <a
//             href="#"
//             className="font-roboto font-[500] text-[18px] leading-[20px]"
//           >
//             Business
//           </a>
        
//           <Link
//             to="/digital"
//             className="font-roboto font-[500] text-[18px] leading-[20px]"
//           >
//             Digital Products
//           </Link>
//           <a
//             href="#"
//             className="font-roboto font-[500] text-[18px] leading-[20px]"
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
//             className="block py-2 text-black hover:text-teal-500"
//           >
//             Courses
//           </Link>
//           <a href="#" className="block py-2 text-black hover:text-teal-500">
//             Business
//           </a>

//           <Link to="/digitalproducts">Digital Products</Link>
//           <a href="#" className="block py-2 text-black hover:text-teal-500">
//             Newsletter
//           </a>
//           <div className="mt-4 space-y-2">
//             <button to={'/login'} className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#1e1e1e]">
//              Login
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

// export default Navbar;





import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full px-0 sm:px-4 md:px-6 lg:px-8">
      <div className="bg-white shadow-md max-w-[1410px] mx-auto h-[80px] flex items-center justify-between px-4 md:px-6">
        {/* Left: Logo */}
        <Link to="/">
          <div className="font-[400] text-[50px] text-[#000000] tracking-[0.5%] leading-[55px] font-impact  ">
            AI SKILLS
          </div>
        </Link>

        {/* Center: Menu Items */}
        <nav className="hidden md:flex space-x-10 font-medium text-[16px] text-[#1e1e1e]">
          <Link
            to="/allcourses"
            className="font-roboto font-[500] text-[18px] leading-[20px] text-[#000000]"
          >
            Courses
          </Link>
          <a
            href="#"
            className="font-roboto font-[500] text-[18px] leading-[20px] text-[#000000]"
          >
            Business
          </a>

          <Link
            to="/digital"
            className="font-roboto font-[500] text-[18px] leading-[20px] text-[#000000]"
          >
            Digital Products
          </Link>
          <a
            href="#"
            className="font-roboto font-[500] text-[18px] leading-[20px] text-[#000000]"
          >
            Newsletter
          </a>
        </nav>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to={"/login"}
            className="p-[10px] w-[150px] h-[45px] text-center  text-white text-[18px] bg-[#1e1e1e] rounded-[16px] font-[500] font-roboto "
          >
            Login
          </Link>
          <Link className="p-[10px] w-[150px] h-[45px] text-center text-white text-[18px] bg-[#047670] rounded-[16px] font-[500] font-roboto ">
            Instructor
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black"
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
        <motion.div
          className="md:hidden bg-white rounded-b-md shadow-md max-w-[1364px] mx-auto p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/AllCourses"
            className="block py-2 text-black hover:text-teal-500"
          >
            Courses
          </Link>
          <a href="#" className="block py-2 text-black hover:text-teal-500">
            Business
          </a>

          <Link to="/digitalproducts">Digital Products</Link>
          <a href="#" className="block py-2 text-black hover:text-teal-500">
            Newsletter
          </a>
          {/* <div className="mt-4 space-y-2">
            <Link
              to="/login"
              className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#047670]"
            >
              Login
            </Link>

            <Link className="w-full px-4 py-2 border text-white rounded-lg border-white bg-[#047670]">
              Instructor
            </Link>
          </div> */}
          <div className="mt-4 space-y-2">
            <Link
              to="/login"
              className="w-full block text-center px-4 py-2 border text-white rounded-lg border-white bg-[#047670]"
            >
              Login
            </Link>

            <Link className="w-full block text-center px-4 py-2 border text-white rounded-lg border-white bg-[#047670]">
              Instructor
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
