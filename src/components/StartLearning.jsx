import React from "react";
import startLearning from "../assets/Start_journey.png";

const StartLearning = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-10 bg-[#fdfcfb]">
      {/* Top Section - Left and Right Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
        {/* Left Side - Heading */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black">
            START LEARNING <br />
            <span className="text-[#ff7070]">NOW !</span>
          </h1>
        </div>

        {/* Right Side - Text & Button */}
        <div className="text-center lg:text-left">
          <p className="text-sm sm:text-md text-black mb-4">
            BECOME A PRO WITH US THROUGH INDUSTRY-RELEVANT <br /> SKILLS
          </p>
          <button className="bg-[#ff7070] text-black font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg shadow-lg transition-all duration-300 hover:bg-[#ff5c5c]">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Image - Placed Below the Content with Reduced Size */}
      <div className="flex justify-center mt-10 sm:mt-20">
        <img
          src={startLearning}
          alt="Start Learning"
          className="w-full sm:w-3/4 max-w-3xl"
        />
      </div>
    </div>
  );
};

export default StartLearning;