
// const HeroSection = () => {
//   return (
//     <section className=" bg-[#FFFFFF] pt-[140px] pb-20  md:px-4 text-black">
//       <div className="w-[1364px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
//         {/* Left Side */}
//         <div className="md:w-1/2">
//           <p className="text-[25px] text-[#1E1E1E] font-roboto leading-[24px] Condensed font-[600]">
//             AI SKILLS.
//           </p>
//           <h1 className="text-[40px] md:text-4xl font-normal text-black leading-[55px] font-impact tracking-[0.5%]">
//             TO LIFT UP YOUR CAREER <br />
//             MASTER THE FUTURE OF TECHNOLOGY
//           </h1>
//           <button className="mt-4 px-6 py-3 bg-teal-700 text-black text-[16px] rounded-xl shadow-md hover:bg-teal-600">
//             Explore Courses
//           </button>
//         </div>

//         {/* Right Side */}

//         <div className="flex items-center ">
//           <div className="w-[390px] ">
//             <p className="text-[16px] font-[500] text-[#1e1e1e]  font-roboto leading-[18px] tracking-[2%]">
//               A complete platform to provide you option to learn from Live,
//               Hybrid, and Video courses. No more to look at separate places to
//               learn. Technology changes very fast, and it is very crucial to
//               keep yourself updated with the latest innovations. Our courses are
//               AI-focused across all tech domains and help you learn from top
//               experts in the field. Get the Skills to take your career forward!
//             </p>

//             <div className="flex  gap-4">
//               <button className="w-[95px] py-2 rounded-xl text-[#000000] font-Roboto Condensed bg-[#00E5E0] shadow-md hover:opacity-90">
//                 Live
//               </button>
//               <button className="w-[95px] py-2 rounded-xl text-white font-Roboto Condensed bg-[#1E1E1E] shadow-md hover:opacity-90">
//                 Hybrid
//               </button>
//               <button className="w-[95px] py-2 rounded-xl text-white font-Roboto Condensed bg-[#FF6B6B] shadow-md hover:opacity-90">
//                 Video
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;




const HeroSection = () => {
  return (
    <section className="bg-[#FFFFFF] pt-[150px] pb-20 px-4 text-black">
      <div className="max-w-[1364px] mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Side */}
        <div className="w-full md:w-1/2">
          <p className="text-[25px] text-[#1E1E1E] font-roboto leading-[24px] font-[600]">
            AI SKILLS.
          </p>
          <h1 className="text-[32px] md:text-[40px] font-normal text-black leading-[45px] md:leading-[55px] font-impact tracking-[0.5%]">
            TO LIFT UP YOUR CAREER <br />
            MASTER THE FUTURE OF TECHNOLOGY
          </h1>
          <button className="mt-4 px-6 py-2 bg-teal-700 text-white font-bold text-[16px] rounded-xl shadow-md hover:bg-teal-600">
            Explore Courses
          </button>
        </div>

        {/* Right Side */}
        
        <div className="md:w-1/2">
          <p
            style={{ fontWeight: "600" }}
            className="text-[16px] text-[#1e1e1e] font-roboto leading-[22px] tracking-[1%] mt-5 "
          >
            A complete platform to provide you option to learn from Live,
            Hybrid, and Video courses. No more to look at separate places to
            learn. Technology changes very fast, and it is very crucial to keep
            yourself updated with the latest innovations. Our courses are
            AI-focused across all tech domains and help you learn from top
            experts in the field. Get the Skills to take your career forward!
          </p>
          <div className="flex gap-4 mt-5">
            <button
              style={{ backgroundColor: "#09D0C6", fontWeight: "500" }}
              className="w-[95px] py-2 rounded-xl text-[#000000] font-Roboto Condensed shadow-md hover:opacity-90"
            >
              Live
            </button>
            <button
              style={{ fontWeight: "500" }}
              className="w-[95px] py-2 rounded-xl text-white font-Roboto Condensed bg-[#1E1E1E] shadow-md hover:opacity-90"
            >
              Hybrid
            </button>
            <button
              style={{ fontWeight: "500" }}
              className="w-[95px] py-2 rounded-xl text-white font-Roboto Condensed bg-[#FF6B6B] shadow-md hover:opacity-90"
            >
              Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;