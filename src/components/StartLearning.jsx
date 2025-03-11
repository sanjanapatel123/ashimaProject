
// import React, { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// const StartLearning = () => {
//   const [signupHovered, setSignupHovered] = useState(false);
//   const [getStartedHovered, setGetStartedHovered] = useState(false);

//   return (
//     <div className="bg-[#fff] py-16">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         {/* Main heading */}
//         <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
//           Start Learning Now
//         </h2>
//         <p className="text-lg sm:text-xl mb-8">
//           Join the unique vibrant community
//         </p>

//         {/* Call to action button with motion */}
//         <div className="flex justify-center">
//           <motion.button
//             className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border text-white hover:bg-green-800 bg-[#004726] transition duration-300 ease-in-out"
//             onMouseEnter={() => setSignupHovered(true)}
//             onMouseLeave={() => setSignupHovered(false)}
//             initial={{ scale: 1 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="font-medium text-lg">Signup</span>
//             <motion.span
//               initial={{ x: 10, opacity: 0 }}
//               animate={{
//                 x: signupHovered ? 0 : 10,
//                 opacity: signupHovered ? 1 : 0,
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               <FaArrowRight />
//             </motion.span>
//           </motion.button>
//         </div>

//         {/* App Store and Google Play download section */}
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-12">
//           {/* Card with description */}
//           <div className="bg-[#002726] rounded-lg p-6 sm:p-8 text-center w-full max-w-md">
//             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
//               Start your journey
//             </h2>
//             <p className="text-white mb-6 sm:mb-8">
//               Join the unique vibrant community
//             </p>

//             {/* Get Started button with its own motion and hover */}
//             <div className="mt-6 flex justify-center">
//               <motion.button
//                 className="flex items-center justify-center gap-2 px-5 py-2 rounded-full border bg-white text-black hover:bg-gray-100 font-semibold transition duration-300 mb-5"
//                 onMouseEnter={() => setGetStartedHovered(true)}
//                 onMouseLeave={() => setGetStartedHovered(false)}
//                 initial={{ scale: 1 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span>Get Started!</span>
//                 <motion.span
//                   initial={{ x: 10, opacity: 0 }}
//                   animate={{
//                     x: getStartedHovered ? 0 : 10,
//                     opacity: getStartedHovered ? 1 : 0,
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <FaArrowRight />
//                 </motion.span>
//               </motion.button>
//             </div>
//           </div>

//           {/* App Store and Google Play icons */}
//           <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center">
//             {/* Google Play Button */}
//             <button className="flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 className="h-16 w-16 sm:h-20 sm:w-20"
//               >
//                 <path
//                   fill="#4285F4"
//                   d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
//                 />
//                 <path
//                   fill="#34A853"
//                   d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
//                 />
//                 <path
//                   fill="#FBBC05"
//                   d="M425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
//                 />
//                 <path
//                   fill="#EA4335"
//                   d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
//                 />
//               </svg>
//             </button>

//             {/* Apple App Store Button */}
//             <button className="flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 448 512"
//                 className="h-16 w-16 sm:h-20 sm:w-20"
//               >
//                 <path
//                   fill="#007AFF"
//                   d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6-5.5-21.8-2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StartLearning;

import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b  text-black py-16">
      <div className="max-w-4xl mx-auto text-center px-4">

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Start Learning Now
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Join the unique vibrant community
        </p>

        {/* Signup Button */}
        <button className="bg-white text-teal-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition">
          Signup
        </button>

        {/* Start Journey Card */}
        <div className="mt-10 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">Start your journey</h2>
          <p className="text-gray-500 mb-4">Join the unique vibrant community</p>
          <button className="bg-white text-teal-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition">
            Get Started!
          </button>
        </div>

        {/* App Store & Play Store Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 border border-white/50 rounded-lg py-2 px-4 cursor-pointer hover:bg-white hover:text-teal-700 transition">
            <FaGooglePlay className="text-xl" />
            <span className="text-sm font-semibold">Google Play</span>
          </div>

          <div className="flex items-center gap-2 border border-white/50 rounded-lg py-2 px-4 cursor-pointer hover:bg-white hover:text-teal-700 transition">
            <FaApple className="text-xl" />
            <span className="text-sm font-semibold">App Store</span>
          </div>
        </div>
      </div>
    </div>
  );
}
