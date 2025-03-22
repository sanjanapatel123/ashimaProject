import React from "react";
import startLearning from "../assets/Start_journey.png";

const StartLearning = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-10 bg-[#fdfcfb] mt-20">
      {/* Top Section - Left and Right Content */}
      <div className="w-full flex flex-col sm:flex-row justify-between px-4 sm:px-16 lg:px-32 py-10">
        {/* Left Section - Stays on top in mobile */}
        <div className="w-full sm:w-1/2 text-left mb-6 sm:mb-0">
          <h2 className="text-[55px] sm:text-5xl font-impact tracking-wide uppercase ml-0 sm:ml-5">
            Start Learning <br />
            <span className="text-[#FF757A]">Now !</span>
          </h2>
        </div>

        {/* Right Section - Stays below in mobile */}
        <div className="w-full sm:w-1/2 flex flex-col items-start text-start">
          <p className="text-[16px]  font-Roboto Condensed text-[#000000] uppercase tracking-[0.2em] leading-relaxed mb-4">
            Become a Pro with us through industry-relevant <br /> skills
          </p>
          <button className="px-16 -mt-2 py-2 bg-[#FF757A] text-black font-Roboto Condensed rounded-2xl hover:bg-[#035f59] transition text-start">
            sign up
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