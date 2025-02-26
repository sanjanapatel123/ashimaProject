import React from "react";

const LearningStyle = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-gray-100 p-10">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-left space-y-8">
        <p className="text-xl font-medium text-black">
          Use any image or style<br></br>here
        </p>
        <div className="flex justify-center lg:justify-start space-x-8">
          {["LIVE", "HYBRID", "VIDEO"].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full mb-2"></div>
              <p className="text-xl font-semibold">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full text-lg font-bold">
              🎓
            </div>
            <p className="text-lg font-semibold">Certificate Symbol</p>
          </div>
          <p className="text-gray-600 text-lg max-w-md">
            Earn Certificates and share your success with the world.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6">
        <h1 className="text-8xl font-extrabold uppercase leading-snug">
          Build a<br />
          Bright
          <br /> Future <br /> With Your
          <br /> Unique <br /> Learning<br /> Style
        </h1>
        <p className="text-black text-2xl max-w-lg">
          Learn from industry experts through live, hybrid, or self-paced video
          courses. Choose the path that best suits your schedule and learning 
          style.
        </p>
        <button className="mt-6 px-8 py-4 bg-blue-700 text-white text-xl font-bold rounded-lg hover:bg-blue-800">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LearningStyle;
