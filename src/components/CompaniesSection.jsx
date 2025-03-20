// import React from "react";
// import { motion } from "framer-motion"; // Import Framer Motion for animation
// import company1 from "../assets/company1.png";
// import company2 from "../assets/company2.png";
// import company3 from "../assets/company3.png";
// import company4 from "../assets/company4.png";
// import company5 from "../assets/company5.png";
// import company6 from "../assets/company6.png";
// import company7 from "../assets/company7.png";


// const companies = [
//   company1,
//   company2,
//   company3,
//   company4,
//   company5,
//   company6,
//   company7,
// ];

// const CompaniesSection = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 py-10 px-6 md:px-12 font-impact">
//       {/* Left Section - Static Text */}
//       <div className="w-full md:w-1/3 text-center md:text-left flex flex-col mb-6 md:mb-0">
//         <h2 className="text-[25px] md:text-[30px] font-[400] leading-[40px] tracking-[0.5%] text-black">
//           JOIN OVER <span className="text-red-500">100K+</span> LEARNERS
//         </h2>
//         <h3 className="text-[25px] md:text-[30px] font-[400] leading-[40px] tracking-[0.5%] text-black">
//           TO UPSKILL HOTTEST AI SKILLS
//         </h3>
//       </div>

//       {/* Right Section - Properly Styled Scrolling Logos */}
//       <div className="w-full md:w-2/3 overflow-hidden relative flex">
//         <motion.div
//           className="flex gap-4 flex-shrink-0"
//           initial={{ x: "-100%" }} // ✅ Start from left
//           animate={{ x: "100%" }} // ✅ Move towards right
//           transition={{
//             duration: 8, // ✅ Adjusted smooth scrolling speed
//             repeat: Infinity, // ✅ Infinite looping
//             ease: "linear",
//           }}
//         >
//           {[...companies, ...companies].map((logo, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-3 flex items-center justify-center w-[90px] h-[70px]" // ✅ White Card Styling
//             >
//               <img
//                 src={logo}
//                 alt={`Company ${index + 1}`}
//                 className="h-auto w-[70px] object-contain" // ✅ Properly Sized Logos
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CompaniesSection;



// import React from "react";
// import { motion } from "framer-motion"; // Import Framer Motion for smooth animation
// import company1 from "../assets/company1.png";
// import company2 from "../assets/company2.png";
// import company3 from "../assets/company3.png";
// import company4 from "../assets/company4.png";
// import company5 from "../assets/company5.png";
// import company6 from "../assets/company6.png";
// import company7 from "../assets/company7.png";

// const companies = [
//   company1,
//   company2,
//   company3,
//   company4,
//   company5,
//   company6,
//   company7,
// ];

// const CompaniesSection = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 py-10 px-6 md:px-12 font-impact">
//       {/* Left Section - Static Text */}
//       <div className="w-full md:w-1/3 text-center md:text-left flex flex-col mb-6 md:mb-0">
//         <h2 className="text-[25px] md:text-[30px] font-[400] leading-[40px] tracking-[0.5%] text-black">
//           JOIN OVER <span className="text-red-500">100K+</span> LEARNERS
//         </h2>
//         <h3 className="text-[25px] md:text-[30px] font-[400] leading-[40px] tracking-[0.5%] text-black">
//           TO UPSKILL HOTTEST AI SKILLS
//         </h3>
//       </div>

//       {/* Right Section - Properly Styled Continuous Scrolling Logos */}
//       <div className="w-full md:w-2/3 overflow-hidden relative flex">
//         <motion.div
//           className="flex gap-4 flex-shrink-0"
//           animate={{ x: ["100%", "-100%"] }} // ✅ Continuous motion (Never stops)
//           transition={{
//             duration: 8, // ✅ Smooth and natural scrolling speed
//             repeat: Infinity, // ✅ Infinite looping
//             ease: "linear",
//           }}
//         >
//           {[...companies, ...companies].map((logo, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-3 flex items-center justify-center w-[90px] h-[70px]" // ✅ White Card Styling
//             >
//               <img
//                 src={logo}
//                 alt={`Company ${index + 1}`}
//                 className="h-auto w-[70px] object-contain" // ✅ Properly Sized Logos
//               />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CompaniesSection;





import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for smooth animation
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import company7 from "../assets/company7.png";

const companies = [
  company1,
  company2,
  company3,
  company4,
  company5,
  company6,
  company7,
];

const CompaniesSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 py-20 px-6 md:px-12 font-impact">
      {/* Left Section - Static Text */}
      <div className="w-full md:w-1/3 text-center md:text-left flex flex-col mb-6 md:mb-0">
        <h2 className="text-[25px] md:text-[30px] font-[400] leading-[40px] tracking-[0.5%] text-black">
          JOIN OVER <span className="text-red-500">100K+</span> LEARNERS
        </h2>
        <h3 className="text-[25px] md:text-[30px] font-[400] leading-[40px] tracking-[0.5%] text-black">
          TO UPSKILL HOTTEST AI SKILLS
        </h3>
      </div>

      {/* Right Section - Properly Styled Continuous Scrolling Logos */}
      <div className="w-full md:w-2/3 overflow-hidden relative flex">
        <motion.div
          className="flex gap-4 flex-shrink-0"
          initial={{ x: "-100%" }} // ✅ Start from left
          animate={{ x: "100%" }} // ✅ Move continuously towards the right
          transition={{
            duration: 8, // ✅ Smooth and natural scrolling speed
            repeat: Infinity, // ✅ Infinite looping
            ease: "linear",
          }}
        >
          {[...companies, ...companies].map((logo, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-3 flex items-center justify-center w-[90px] h-[70px]" // ✅ White Card Styling
            >
              <img
                src={logo}
                alt={`Company ${index + 1}`}
                className="h-auto w-[70px] object-contain" // ✅ Properly Sized Logos
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CompaniesSection;



