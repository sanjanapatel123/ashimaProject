// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="bg-white w-full px-7 py-44 flex flex-col md:flex-row justify-between items-center">
//       {/* Left Content */}
//       <div className="">
//         <p className="text-[25px] font-semibold text-[#1E1E1E] tracking-wide font-roboto leading-6">
//           AI SKILLS.
//         </p>
//         <h1 className="text-[50px] md:text-5xl font-normal text-black leading-[55px] mt-2 font-impact tracking-[0.5%]">
//           TO LIFT UP YOUR CAREER <br />
//           MASTER THE FUTURE OF TECHNOLOGY
//         </h1>
//         <button className="mt-8 bg-[#047670] text-white font-semibold w-[150px] h-[45px] p-[10px] rounded-[16px] shadow-md hover:bg-teal-800 transition">
//           Explore Courses
//         </button>
//       </div>

//       {/* Right Content */}
//       {/* <div className="md:w-1/2 mt-10 md:mt-0">
//         <p className="text-gray-700 text-sm font-bold leading-relaxed">
//           A complete platform to provide you option to learn from Live,
//           Hybrid,<br /> and Video courses. No more to look at separate places to <br /> learn.
//           Technology changes very fast and it is very crucial to keep <br /> yourself updated with the latest innovations.
//           Our courses are AI-focused <br /> across all tech domains and help you learn from top experts in the field.
//         </p>
//         <div className="flex space-x-4 mt-6">
//           <button className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md">
//             Live
//           </button>
//           <button className="bg-black text-white font-semibold px-6 py-3 rounded-lg shadow-md">
//             Hybrid
//           </button>
//           <button className="bg-red-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
//             Video
//           </button>
//         </div>
//       </div> */}
//       <div className="mt-10 ml-auto text-pretty">
//         <p className="text-black font-roboto text-[16px] font-semibold leading-[18px] max-w-lg tracking-[2%]">
//           A complete platform to provide you option to learn from Live, Hybrid,
//           and Video courses. No more to look at separate places to learn.
//           Technology changes very fast, and it is very crucial to keep yourself
//           updated with the latest innovations. Our courses are AI-focused across
//           all tech domains and help you learn from top experts in the field. Get
//           the Skills to take your career forward!
//         </p>
//         <div className="flex mt-8 justify-between">
//           <button className="bg-[#09D0C6] text-black font-semibold w-[120px] h-[40px] p-[10px] rounded-[16px] shadow-md">
//             Live
//           </button>
//           <button className="bg-[#1E1E1E] text-white font-semibold p-[10px] w-[117px] h-[40px]  rounded-[16px] shadow-md">
//             Hybrid
//           </button>
//           <button className="bg-[#FF757A] text-black font-semibold p-[10px] w-[120px] h-[40px] rounded-[16px] shadow-md">
//             Video
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-white w-full px-7 py-20 flex flex-col md:flex-row justify-between items-start  lg:mt-[100px] sm:mt-[50px]">
      {/* Left Content */}
      <div className="text-left md:text-left">
        <p className="text-[25px] text-[#1E1E1E] tracking-wide font-roboto leading-6 font-Roboto Condensed font-bold">
          AI SKILLS.
        </p>
        <h1 className="text-[40px] md:text-5xl font-normal text-black leading-[45px]  font-impact tracking-[0.5%]">
          TO LIFT UP YOUR CAREER <br />
          MASTER THE FUTURE OF TECHNOLOGY
        </h1>
        <button className="mt-8 bg-[#047670] text-white font-semibold w-[150px] h-[45px] p-[10px] rounded-[16px] shadow-md hover:bg-teal-800 transition">
          Explore Courses
        </button>
      </div>

      {/* Right Content */}
      <div className="mt-10 md:ml-auto text-start  md:text-left">
        <p className="text-[#000000] text-[16px] font-Roboto Condensed leading-[20px] md:leading-[18px] max-w-lg tracking-[2%]">
          A complete platform to provide you option to learn from Live, Hybrid,
          and Video courses. No more to look at separate places to learn.
          Technology changes very fast, and it is very crucial to keep yourself
          updated with the latest innovations. Our courses are AI-focused across
          all tech domains and help you learn from top experts in the field. Get
          the Skills to take your career forward!
        </p>

        <div className="flex flex-row flex-wrap justify-start gap-4 mt-8 font-Roboto Condensed">
          <button className="bg-[#09D0C6] text-black font-semibold w-[120px] h-[40px] p-[10px] rounded-[16px] shadow-md">
            Live
          </button>
          <button className="bg-[#1E1E1E] text-[#FFFFFF] font-semibold p-[10px] w-[120px] h-[40px] rounded-[16px] shadow-md">
            Hybrid
          </button>
          <button className="bg-[#FF757A] text-black font-semibold p-[10px] w-[120px] h-[40px] rounded-[16px] shadow-md">
            Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
