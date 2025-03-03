// import { FaLinkedin, FaInstagram } from "react-icons/fa";
// import { IoCloseCircleOutline } from "react-icons/io5";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Left Section - Brand & Newsletter */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold">AiSkills</h2>
//           <p className="text-sm">
//             Join our community
//             <br />
//             and start learning today
//           </p>
//           <div className="bg-white rounded-full overflow-hidden">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 text-black outline-none"
//             />
//           </div>
//         </div>

//         {/* Middle Section - Products */}
//         <div className="space-y-2">
//           <h3 className="font-semibold">Products</h3>
//           <ul className="space-y-1 text-sm">
//             <li>Courses</li>
//             <li>Digital Products</li>
//             <li>Newsletter</li>
//             <li>Help</li>
//           </ul>
//         </div>

//         {/* Middle Section - Business */}
//         <div className="space-y-2">
//           <h3 className="font-semibold">Business</h3>
//           <ul className="space-y-1 text-sm">
//             <li>About us</li>
//             <li>Careers</li>
//             <li>Instructors</li>
//           </ul>
//         </div>

//         {/* Right Section - Legal & Social */}
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <h3 className="font-semibold">Legal</h3>
//             <ul className="space-y-1 text-sm">
//               <li>Privacy & Terms</li>
//               <li>Cookies Policy</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold">Connect</h3>
//             <div className="flex space-x-4 mt-2">
//               <a href="#" className="text-white">
//                 <FaLinkedin size={24} />
//               </a>
//               <a href="#" className="text-white">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="#" className="text-white">
//                 <IoCloseCircleOutline size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Optional Bottom Section */}
//       <div className="text-center text-xs text-white mt-8">
//         <p>✅ Resize on mobile | ☐ Include navigation menu</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section - Brand & Newsletter */}
        <div className="space-y-5">
          <h2 className="text-3xl font-extrabold tracking-wide">AiSkills</h2>
          <p className="text-sm leading-relaxed">
            Join our community
            <br />
            and start learning today
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 pl-5 pr-20 rounded-full text-black outline-none"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section - Products */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold uppercase tracking-wider">
            Products
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-300 cursor-pointer">Courses</li>
            <li className="hover:text-green-300 cursor-pointer">
              Digital Products
            </li>
            <li className="hover:text-green-300 cursor-pointer">Newsletter</li>
            <li className="hover:text-green-300 cursor-pointer">Help</li>
          </ul>
        </div>

        {/* Middle Section - Business */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold uppercase tracking-wider">
            Business
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-300 cursor-pointer">About us</li>
            <li className="hover:text-green-300 cursor-pointer">Careers</li>
            <li className="hover:text-green-300 cursor-pointer">Instructors</li>
          </ul>
        </div>

        {/* Right Section - Legal & Social */}
        <div className="space-y-5">
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2 text-sm mt-3">
              <li className="hover:text-green-300 cursor-pointer">
                Privacy & Terms
              </li>
              <li className="hover:text-green-300 cursor-pointer">
                Cookies Policy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-white hover:text-green-300 transition"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-300 transition"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="#"
                className="text-white hover:text-green-300 transition"
              >
                <IoCloseCircleOutline size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Bottom Section */}
      <div className="text-center text-xs text-white mt-12 border-t border-green-700 pt-4">
        <p>✅ Resize on mobile | ☐ Include navigation menu</p>
      </div>
    </footer>
  );
};

export default Footer;
