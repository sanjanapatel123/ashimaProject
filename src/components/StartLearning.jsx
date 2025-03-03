import React from "react";
// import img from "../assets/image.png"; // Your image import

const StartLearning = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
          Start Learning Now
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Join the unique vibrant community
        </p>

        {/* Call to action buttons */}
        <div className="space-x-4 mb-8">
          <button className="bg-green-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700">
            Sign Up
          </button>
        </div>

        {/* App Store and Google Play download buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mt-12">
          {/* Card with description */}
          <div className="bg-gray-900 rounded-lg p-6 sm:p-8 text-center w-full max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Start your journey
            </h2>
            <p className="text-white mb-6 sm:mb-8">
              Join the unique vibrant community
            </p>
            <button className="bg-green-500 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-lg">
              Get Started
            </button>
          </div>

          {/* Icons for Google Play and App Store */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center">
            {/* Google Play Button - Full Color */}
            <button className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-24 w-24 sm:h-16 sm:w-16"
              >
                <path
                  fill="#4285F4"
                  d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
                />
                <path
                  fill="#34A853"
                  d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
                />
                <path
                  fill="#FBBC05"
                  d="M425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"
                />
                <path
                  fill="#EA4335"
                  d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                />
              </svg>
            </button>

            {/* App Store Button - Apple Blue */}
            <button className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-24 w-24 sm:h-16 sm:w-16"
              >
                <path
                  fill="#007AFF" // Apple's App Store Blue
                  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6-5.5-21.8-2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartLearning;
