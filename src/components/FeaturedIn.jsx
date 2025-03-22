// import featureicon from "../assets/featureIcon.png";

// const FeaturedInSection = () => {
//   return (
//     <div className="bg-black flex justify-evenly py-12 font-[Inter]">
//       <div className="max-w-7xl mx-auto px-5  sm:px-6 lg:px-8">
//         {/* Heading - Responsive Text Size */}
//         <h2 className="text-white text-center font-bold mb-12 text-3xl sm:text-4xl md:text-5xl">
//           Featured In
//         </h2>

//         {/* Container for the image */}
//         <div className="flex justify-center">
//           <img
//             src={featureicon}
//             alt="Featured In"
//             className="w-full max-w-3xl object-contain px-4 sm:px-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedInSection;




// import featureicon from "../assets/featureIcon.png";

// const FeaturedInSection = () => {
//   return (
//     <div className="bg-black py-16 font-[Inter]">
//       <div className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-2 gap-16 items-center">
//         {/* Left Section - Heading & Description */}
//         <div className="text-white">
//           <h2 className="font-bold text-4xl sm:text-4xl md:text-5xl mb-4">
//             FEATURED IN
//           </h2>
//           <p className="text-lg text-gray-300">
//             ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS<br></br> FROM INSTANT
//             REAL-WORLD PROJECTS TO PROMPTS.
//           </p>
//         </div>

//         {/* Right Section - Logos */}
//         <div className="flex justify-center">
//           <img
//             src={featureicon}
//             alt="Featured In"
//             className="w-full max-w-4xl object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedInSection;




import featureicon from "../assets/featureIcon.png";

const FeaturedInSection = () => {
  return (
    <div className="bg-black py-16  px-6 sm:px-8 ">
      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-center text-start sm:text-left">
        {/* Left Section - Heading & Description */}
        <div className="text-white">
          <h2 className="font-[400] text-[55px] leading-[65px] tracking-[0.5%] sm:text-4xl md:text-5xl mb-4 font-impact">
            FEATURED IN
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-Roboto Condensed">
            ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS<br></br> FROM
            INSTANT REAL-WORLD PROJECTS TO PROMPTS.
          </p>
        </div>

        {/* Right Section - Logos */}
        <div className="flex justify-center">
          <img
            src={featureicon}
            alt="Featured In"
            className="w-full max-w-xs sm:max-w-4xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedInSection;
