// import { FaGooglePlay, FaApple } from "react-icons/fa";

// export default function HeroSection() {
//   return (
//     <div className="bg-gradient-to-b  text-black py-16 font-[Inter]">
//       <div className="max-w-4xl mx-auto text-center px-4">

//         {/* Main Heading */}
//         <h1 className="text-4xl sm:text-6xl font-bold mb-4">
//           Start Learning Now
//         </h1>
//         <p className="text-lg sm:text-xl mb-6">
//           Join the unique vibrant community
//         </p>

//         {/* Signup Button */}
//         <button className="bg-white text-teal-700 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition">
//           Signup
//         </button>

//         {/* Start Journey Card */}
//         <div className="mt-10 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg max-w-xl mx-auto">
//           <h2 className="text-2xl font-bold mb-2">Start your journey</h2>
//           <p className="text-gray-500 mb-4">Join the unique vibrant community</p>
//           <button className="bg-white text-teal-700 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-teal-500 hover:text-white transition">
//             Get Started!
//           </button>
//         </div>

//         {/* App Store & Play Store Icons */}
//         <div className="flex justify-center gap-6 mt-8">
//           <div className="flex items-center gap-2 border border-white/50 rounded-lg py-2 px-4 cursor-pointer hover:bg-white hover:text-teal-700 transition">
//             <FaGooglePlay className="text-xl" />
//             <span className="text-sm font-semibold">Google Play</span>
//           </div>

//           <div className="flex items-center gap-2 border border-white/50 rounded-lg py-2 px-4 cursor-pointer hover:bg-white hover:text-teal-700 transition">
//             <FaApple className="text-xl" />
//             <span className="text-sm font-semibold">App Store</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import startLearning from "../assets/Start_journey.png";

// const StartLearning = () => {
//   return (
//     <div className="flex flex-col justify-center items-center px-16 py-10 bg-[#fdfcfb]">
//       {/* Top Section - Left and Right Content */}
//       <div className="flex justify-between items-center w-full">
//         {/* Left Side - Heading */}
//         <div>
//           <h1 className="text-5xl font-extrabold text-black">
//             START LEARNING <br />
//             <span className="text-[#ff7070]">NOW !</span>
//           </h1>
//         </div>

//         {/* Right Side - Text & Button */}
//         <div className="text-left">
//           <p className="text-md text-black mb-4">
//             BECOME A PRO WITH US THROUGH INDUSTRY-RELEVANT <br /> SKILLS
//           </p>
//           <button className="bg-[#ff7070] text-black font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-[#ff5c5c]">
//             SIGN UP
//           </button>
//         </div>
//       </div>

//       {/* Image - Placed Below the Content */}
//       <div className="flex justify-center mt-6">
//         <img src={startLearning} alt="Start Learning" />
//       </div>
//     </div>
//   );
// };

// export default StartLearning;




import React from "react";
import startLearning from "../assets/Start_journey.png";

const StartLearning = () => {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-10 bg-[#fdfcfb]">
      {/* Top Section - Left and Right Content */}
      <div className="flex justify-between items-center w-full">
        {/* Left Side - Heading */}
        <div>
          <h1 className="text-6xl font-extrabold text-black">
            START LEARNING <br />
            <span className="text-[#ff7070]">NOW !</span>
          </h1>
        </div>

        {/* Right Side - Text & Button */}
        <div className="text-left">
          <p className="text-md text-black mb-4">
            BECOME A PRO WITH US THROUGH INDUSTRY-RELEVANT <br /> SKILLS
          </p>
          <button className="bg-[#ff7070] text-black font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-[#ff5c5c]">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Image - Placed Below the Content with Reduced Size */}
      

      <div className="flex justify-center mt-20">
        <img
          src={startLearning}
          alt="Start Learning"
          className="w-3/4 max-w-3xl"
        />
      </div>
    </div>
  );
};

export default StartLearning;
