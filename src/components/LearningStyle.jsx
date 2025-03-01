import React from "react";

const LearningStyle = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-around mt-10 bg-gray-100">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full lg:ml-40 space-y-12 text-center lg:text-left">
        <p className="text-xl font-medium text-black">
          Use any image or style<br></br>here
        </p>
        <div className="flex justify-center lg:justify-start space-x-10 font-bold">
          {["LIVE", "HYBRID", "VIDEO"].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full mb-2"></div>
              <p className="text-2xl font-bold">{item}</p>
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
          <p className="text-black text-lg max-w-md font-bold">
            Earn Certificates and <br /> share your success with <br /> the
            world.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6">
        <h1 className="text-5xl font-extrabold uppercase">
          Build a<br />
          Bright
          <br /> Future <br /> With Your
          <br /> Unique <br /> Learning
          <br /> Style
        </h1>
        <p className="text-black text-2xl max-w-lg">
          Learn from industry experts through live, hybrid, or self-paced video
          courses. Choose the path that best suits your schedule and learning
          style.
        </p>
        {/* <div className="flex justify-center lg:justify-start">
          <button className="mt-6 px-8 py-4 text-white text-xl font-bold rounded-lg bg-green-600 hover:bg-green-800">
            Sign Up
          </button>
        </div> */}
        <div className="flex ml-44">
          <button className=" px-8 py-4 text-white text-xl font-bold rounded-lg bg-green-600 hover:bg-green-800">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningStyle;
