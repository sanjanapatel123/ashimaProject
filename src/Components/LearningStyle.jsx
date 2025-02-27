// import React from "react";

// const LearningStyle = () => {
//   return (
//     <div className="flex  lg:flex-row items-center justify-around min-h-screen bg-gray-100 p-10">
//       {/* Left Section */}
//       <div className="lg:w-1/2 w-full ml-20 space-y-16">
//         <p className="text-xl font-medium  text-black">
//           Use any image or style<br></br>here
//         </p>
//         <div className="flex justify-center lg:justify-start space-x-10 font-bold">
//           {["LIVE", "HYBRID", "VIDEO"].map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="w-8 h-8 bg-orange-500 rounded-full mb-2"></div>
//               <p className="text-2xl font-bold">{item}</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col items-center lg:items-start space-y-4">
//           <div className="flex items-center space-x-4 ml-6">
//             <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full text-lg font-bold">
//               🎓
//             </div>
//             <p className="text-lg font-semibold">Certificate Symbol</p>
//           </div>
//           <p className="text-black text-lg max-w-md font-bold mr-8">
//             Earn Certificates and <br /> share your success with <br /> the world.
//           </p>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="lg:w-1/2 w-full text-center lg:text-left space-y-6">
//         <h1 className="text-5xl font-extrabold uppercase leading-snug">
//           Build a<br />
//           Bright
//           <br /> Future <br /> With Your
//           <br /> Unique <br /> Learning
//           <br /> Style
//         </h1>
//         <p className="text-black text-2xl max-w-lg">
//           Learn from industry experts through live, hybrid, or self-paced video
//           courses. Choose the path that best suits your schedule and learning
//           style.
//         </p>
//         <button className="mt-6 px-8 py-4 ml-44 text-white text-xl font-bold rounded-lg bg-[#091c08] hover:bg-green-800">
//           Sign Up
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LearningStyle;



// import React from "react";

// const LearningStyle = () => {
//   return (
//     <div className="flex flex-col lg:flex-row items-center justify-around min-h-screen bg-gray-100 p-6 md:p-10">
//       {/* Left Section */}
//       <div className="lg:w-1/2 w-full lg:ml-20 space-y-8 md:space-y-16 text-center lg:text-left">
//         <p className="text-lg md:text-xl font-medium text-black">
//           Use any image or style here
//         </p>
//         <div className="flex justify-center lg:justify-start space-x-6 md:space-x-10 font-bold">
//           {["LIVE", "HYBRID", "VIDEO"].map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full mb-2"></div>
//               <p className="text-lg md:text-2xl font-bold">{item}</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col items-center lg:items-start space-y-4">
//           <div className="flex items-center space-x-3 md:space-x-4">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-black text-white flex items-center justify-center rounded-full text-lg font-bold">
//               🎓
//             </div>
//             <p className="text-md md:text-lg font-semibold">
//               Certificate Symbol
//             </p>
//           </div>
//           <p className="text-black text-md md:text-lg max-w-md font-bold">
//             Earn Certificates and share your success with the world.
//           </p>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="lg:w-1/2 w-full text-center lg:text-left space-y-4 md:space-y-6 mt-6 lg:mt-0">
//         <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-snug">
//           Build a <br /> Bright <br /> Future <br /> With Your <br /> Unique{" "}
//           <br /> Learning <br /> Style
//         </h1>
//         <p className="text-black text-lg md:text-2xl max-w-lg mx-auto lg:mx-0">
//           Learn from industry experts through live, hybrid, or self-paced video
//           courses. Choose the path that best suits your schedule and learning
//           style.
//         </p>
//         <div className="flex justify-center lg:justify-start">
//           <button className="mt-6 px-6 md:px-8 py-3 md:py-4 text-white text-lg md:text-xl font-bold rounded-lg bg-[#091c08] hover:bg-green-800">
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearningStyle;

import React from "react";

const LearningStyle = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-around min-h-screen bg-gray-100 p-10">
      {/* Left Section */}
      <div className="lg:w-1/2 w-full lg:ml-20 space-y-16 text-center lg:text-left">
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
        <h1 className="text-5xl font-extrabold uppercase leading-snug">
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
        <div className="flex justify-center lg:justify-start">
          <button className="mt-6 px-8 py-4 text-white text-xl font-bold rounded-lg bg-[#091c08] hover:bg-green-800">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningStyle;
