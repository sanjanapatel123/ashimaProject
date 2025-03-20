// import React, { useState } from "react";
// import img from "../assets/Bookimg.png";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// const LearningJourney = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 text-white"
//       style={{
//         backgroundImage: `url(${img})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Overlay for opacity (dark background effect) */}
//       <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>

//       {/* Content - text and button */}
//       <div className="relative z-10">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//           Start Your Learning Journey Today.
//         </h1>
//         <p className="mt-4 max-w-2xl text-base sm:text-lg">
//           Unlock endless opportunities with expert-led courses. Learn anytime,
//           anywhere, and boost your skills for a brighter future.
//         </p>

//         <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <div className="mt-6">
//             <button
//               className="flex items-center justify-center gap-2 px-5 py-2 rounded-full border bg-white text-black hover:bg-gray-100 font-semibold transition duration-300 mb-5"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <span>Get Started!</span>
//               <span
//                 className={`transform transition-transform duration-300 font-bold ${
//                   isHovered
//                     ? "translate-x-0 opacity-100"
//                     : "translate-x-2 opacity-0"
//                 }`}
//               >
//                 <FaArrowRight />
//               </span>
//             </button>
//           </div>
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default LearningJourney;







const LearningJourney = () => {
  return (
    <div className="w-full bg-black text-white py-16 px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      {/* Left Side - Bold Heading */}
      <h2 className="text-2xl sm:text-5xl font-extrabold tracking-wide uppercase mb-6 sm:mb-0">
        Start Your Learning <br /> Journey Today
      </h2>

      {/* Right Side - Text & Button */}
      <div className="max-w-md">
        <p className="text-lg sm:text-sm font-medium text-gray-300">
          Unlock endless opportunities with expert-led courses. Learn anytime,
          anywhere, and boost your skills for a brighter future.
        </p>

        {/* Button */}
        <button className="mt-6 px-8 py-3 bg-[#047670] text-white font-bold rounded-xl hover:bg-[#035f59] transition">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default LearningJourney;
