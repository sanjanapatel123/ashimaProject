// import { FaLinkedin, FaInstagram } from "react-icons/fa";
// import { IoCloseCircleOutline } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <footer className="bg-[#002726] text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Flex container for all sections */}
//         <div className="flex flex-wrap md:flex-nowrap justify-between gap-24 text-center ">
//           {/* Brand & Newsletter Section */}
//           <div className="flex-1 space-y-5 min-w-[300px]">
//             <h2 className="text-3xl font-extrabold tracking-wide text-white text-center">
//               AiSkills
//             </h2>
//             <p className="text-base leading-relaxed text-gray-300 text-center">
//               Join our community
//               <br />
//               and start learning today.
//             </p>

//             {/* Centering the input & button */}
//             <div className="w-full flex justify-center">
//               <div className="relative w-full max-w-lg flex items-center">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full py-3 pl-5 pr-32 rounded-full text-black outline-none placeholder:text-xl text-base shadow-md"
//                 />
//                 <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Products Section */}
//           <div className="flex-1 space-y-4 min-w-[180px]">
//             <h3 className="text-lg font-semibold uppercase tracking-wider text-green-400">
//               Products
//             </h3>
//             <ul className="space-y-2 text-sm">
//               <li className="hover:text-green-300 cursor-pointer">Courses</li>
//               <li className="hover:text-green-300 cursor-pointer">
//                 Digital Products
//               </li>
//               <li className="hover:text-green-300 cursor-pointer">
//                 Newsletter
//               </li>
//               <li className="hover:text-green-300 cursor-pointer">Help</li>
//             </ul>
//           </div>

//           {/* Business Section */}
//           <div className="flex-1 space-y-4 min-w-[180px]">
//             <h3 className="text-lg font-semibold uppercase tracking-wider text-green-400">
//               Business
//             </h3>
//             <ul className="space-y-2 text-sm">
//               <li className="hover:text-green-300 cursor-pointer">About us</li>
//               <li className="hover:text-green-300 cursor-pointer">Careers</li>
//               <li className="hover:text-green-300 cursor-pointer">
//                 Instructors
//               </li>
//             </ul>
//           </div>

//           {/* Legal Section */}
//           <div className="flex-1 space-y-4 min-w-[180px]">
//             <h3 className="text-lg font-semibold uppercase tracking-wider text-green-400">
//               Legal
//             </h3>
//             <ul className="space-y-2 text-sm">
//               <li className="hover:text-green-300 cursor-pointer">
//                 Privacy & Terms
//               </li>
//               <li className="hover:text-green-300 cursor-pointer">
//                 Cookies Policy
//               </li>
//             </ul>
//           </div>

//           {/* Connect Section */}
//           <div className="flex-1 space-y-4 min-w-[180px]">
//             <h3 className="text-lg font-semibold uppercase tracking-wider text-green-400">
//               Connect
//             </h3>
//             <div className="flex justify-center md:justify-start space-x-4">
//               <a
//                 href="#"
//                 className="text-white hover:text-green-300 transition"
//               >
//                 <FaLinkedin size={28} />
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-green-300 transition"
//               >
//                 <FaInstagram size={28} />
//               </a>
//               <a
//                 href="#"
//                 className="text-white hover:text-green-300 transition"
//               >
//                 <IoCloseCircleOutline size={28} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="text-center text-xs text-white mt-12 border-t border-green-700 pt-4">
//         <p>© 2025 AiSkills. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#002726] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container with equal spacing */}
        <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-x-16 gap-y-16 text-center md:text-left">
          {/* Brand & Newsletter Section */}
          <div className="flex-1 space-y-6 min-w-[300px] max-w-[350px] text-lg">
            <h2 className="text-3xl font-extrabold tracking-wide text-white text-center">
              AiSkills
            </h2>
            <p className="text-base leading-relaxed text-gray-300 text-center">
              Join our community
              <br />
              and start learning today.
            </p>

            {/* Centering the input & button */}
            <div className="w-full flex justify-center">
              <div className="relative w-full max-w-lg flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full py-4 pl-5 pr-32 rounded-full text-black outline-none placeholder:text-xl text-base shadow-md"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-600 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1 space-y-4 min-w-[180px] max-w-[250px]">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-green-400">
              Products
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-green-300 cursor-pointer">Courses</li>
              <li className="hover:text-green-300 cursor-pointer">
                Digital Products
              </li>
              <li className="hover:text-green-300 cursor-pointer">
                Newsletter
              </li>
              <li className="hover:text-green-300 cursor-pointer">Help</li>
            </ul>
          </div>

          {/* Business Section */}
          <div className="flex-1 space-y-4 min-w-[180px] max-w-[250px]">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-green-400">
              Business
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-green-300 cursor-pointer">About us</li>
              <li className="hover:text-green-300 cursor-pointer">Careers</li>
              <li className="hover:text-green-300 cursor-pointer">
                Instructors
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex-1 space-y-4 min-w-[180px] max-w-[250px]">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-green-400">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-green-300 cursor-pointer">
                Privacy & Terms
              </li>
              <li className="hover:text-green-300 cursor-pointer">
                Cookies Policy
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="flex-1 space-y-4 min-w-[180px] max-w-[250px]">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-green-400">
              Connect
            </h3>
            <div className="flex justify-center md:justify-start space-x-5">
              <a
                href="#"
                className="text-white hover:text-green-300 transition"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-300 transition"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-300 transition"
              >
                <IoCloseCircleOutline size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs text-white mt-12 border-t border-green-700 pt-4">
        <p>© 2025 AiSkills. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

