<<<<<<< HEAD
import React, { useState } from "react";
import img from "../assets/Bookimg.png";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
=======
// import React from "react";
// import img from "../assets/Bookimg.png";

// const HeroSection = () => {
//   return (
//     <div
//       className="relative w-full h-[80px] sm:h-[150px] md:h-[150px] lg:h-[350px] flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 text-white"
//       style={{
//         backgroundImage: `url(${img})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//         Start Your Learning Journey Today.
//       </h1>
//       <p className="mt-4 max-w-2xl text-base sm:text-lg">
//         Unlock endless opportunities with expert-led courses. Learn anytime,
//         anywhere, and boost your skills for a brighter future.
//       </p>
//       <button className="mt-6 px-6 py-3 bg-green-700 text-white font-bold rounded hover:bg-green-900 transition">
//         Get Started!
//       </button>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import img from "../assets/Bookimg.png";
>>>>>>> a1e5894a4cc8185756b4b446f8e1525b16d832cb

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 text-white"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Start Your Learning Journey Today.
      </h1>
      <p className="mt-4 max-w-2xl text-base sm:text-lg">
        Unlock endless opportunities with expert-led courses. Learn anytime,
        anywhere, and boost your skills for a brighter future.
      </p>

      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <div className="mt-6">
          <button
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-full border bg-white text-black hover:bg-gray-100 font-semibold transition duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Get Started!</span>
            <span
              className={`transform transition-transform duration-300 font-bold ${
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0"
              }`}
            >
              <FaArrowRight />
            </span>
          </button>
        </div>
      </motion.button>
    </div>
  );
};

export default HeroSection;
