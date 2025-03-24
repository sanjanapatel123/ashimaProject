// const LearningJourney = () => {
//   return (
//     <div className="w-full bg-black text-[#FFFFFF] py-12 px-4 sm:px-8 lg:px-20 flex flex-col sm:flex-row justify-between items-start text-start sm:text-right font-impact tracking-[0.065em] leading-[1.2]">
//       {/* Left Side - Bold Heading */}
//       <div className="w-full sm:w-1/2 pl-2 sm:pl-6 mb-8 sm:mb-0">
//         <h2 className="text-[55px] sm:text-5xl font-impact tracking-wide uppercase">
//           Start Your Learning <br /> Journey Today
//         </h2>
//       </div>

//       {/* Right Side - Text & Button */}

//       <div className="w-full sm:w-1/2 pr-2 sm:pr-6 flex flex-col items-start text-start sm:text-center sm:ml-0">
//         <p className="text-[16px] sm:text-sm font-Roboto Condensed text-[#FFFFFF] uppercase tracking-[0.2em] mb-4 max-w-xl">
//           Unlock endless opportunities with expert-led courses. Learn <br />
//           anytime, anywhere, and boost your skills for a brighter future.
//         </p>

//         <button className="px-10 py-3 bg-[#047670] text-white font-Roboto Condensed rounded-2xl hover:bg-[#035f59] transition">
//           GET STARTED
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LearningJourney;

const LearningJourney = () => {
  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-[1366px] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Side - Bold Heading */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-[45px] pl-2 sm:text-[55px] font-impact font-400 tracking-wide uppercase leading-[1.2]">
            Start Your Learning <br /> Journey Today
          </h2>
        </div>

        {/* Right Side - Text & Button */}
        {/* <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[16px] sm:text-sm font-Roboto Condensed uppercase tracking-[0.2em] mb-4 w-full max-w-[520px] leading-[1.6]">
            Unlock endless opportunities with expert-led courses. Learn <br />
            anytime, anywhere, and boost your skills for a brighter future.
          </p>

          <button className="px-10 py-3 bg-[#047670] text-white font-Roboto Condensed rounded-2xl hover:bg-[#035f59] transition">
            GET STARTED
          </button>
        </div> */}

        {/* Right Side - Text & Button */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <p className="text-[16px] sm:text-sm font-Roboto Condensed uppercase tracking-[0.2em] mb-4 max-w-[600px] leading-snug md:leading-[26px]">
            Unlock endless opportunities with expert-led courses. Learn anytime,
            anywhere, and boost your skills for a brighter future.
          </p>
          <button className="px-10 py-3 bg-[#047670] text-white font-Roboto Condensed rounded-2xl hover:bg-[#035f59] transition">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
