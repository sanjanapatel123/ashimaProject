// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useRef } from "react";
// import letstart1 from "../assets/letstart1.png";
// import letstart2 from "../assets/letstart2.png";
// import letstart3 from "../assets/letstart3.png";

// const courses = [
//   {
//     title: "Course 1",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: letstart1,
//   },
//   {
//     title: "Course 2",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: letstart2,
//   },
//   {
//     title: "Course 3",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: letstart3,
//   },
// ];

// const MakeLearningBetter = () => {
//   const sliderRef = useRef(null);

//   // Scroll Functions
//   const scrollLeft = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollLeft -= 300;
//     }
//   };

//   const scrollRight = () => {
//     if (sliderRef.current) {
//       sliderRef.current.scrollLeft += 300;
//     }
//   };

//   return (
//     <div className="bg-[#FAFAF8] ">
//       <div className="w-full flex flex-col sm:flex-row justify-between px-4 sm:px-16 lg:px-32 py-10">
//         {/* Left Section - Stays on top in mobile */}
//         <div className="w-full sm:w-1/2 text-left mb-6 sm:mb-0">
//           <h2 className="text-2xl sm:text-5xl font-impact tracking-wide uppercase ml-0 sm:ml-5">
//             lets make <br /> learning better
//           </h2>
//         </div>

//         {/* Right Section - Stays below in mobile */}
//         <div className="w-full sm:w-1/2 flex flex-col items-start text-start sm:ml-96">
//           <p className="text-lg sm:text-sm font-Roboto Condensed text-[#000000] uppercase tracking-[0.2em] leading-relaxed mb-4">
//             Become a Pro with us through industry-relevant <br /> skills
//           </p>
//           <button className="px-16 -mt-2 py-2 bg-[#FF757A] text-black font-Roboto Condensed rounded-2xl hover:bg-[#035f59] transition text-start">
//             sign up
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16 py-12">
//         {[
//           {
//             image: letstart1,
//             title: "INDUSTRY-RELEVANT SKILLS",
//             description:
//               "STAY AHEAD IN YOUR FIELD BY MASTERING HIGH-DEMAND SKILLS THROUGH OUR ONLINE SESSIONS",
//           },
//           {
//             image: letstart2,
//             title: "HYBRID LEARNING PLATFORM",
//             description:
//               "WORK EXPERIENCE CERTIFICATES FOR REAL PROJECTS AND COHORT LEARNING",
//           },
//           {
//             image: letstart3,
//             title: "CAREER NETWORKING",
//             description:
//               "STAY AHEAD IN YOUR FIELD BY MASTERING HIGH-DEMAND SKILLS THROUGH OUR ONLINE SESSIONS",
//           },
//         ].map((card, index) => (
//           <div
//             key={index}
//             className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 w-full sm:w-[480px] h-[550px] mx-auto flex-shrink-0"
//           >
//             {/* Image */}
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-full object-cover"
//             />

//             {/* Dark Blur Overlay - Proper Height */}
//             <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-md"></div>

//             {/* Text Content - Inside Blur Section */}
//             <div className="absolute bottom-6 left-6 right-6 text-black">
//               <h3 className="text-xl font-Roboto Condensed uppercase">
//                 {card.title}
//               </h3>
//               <p className="text-md">{card.description}</p>

//               {/* Button */}
//               <button className="px-10 py-2 bg-black text-black rounded-full transition">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows & Dots Indicator */}
//       <div className="flex flex-col items-center mt-6">
//         {/* Dots Indicator */}
//         <div className="flex justify-center space-x-2 mb-4">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className={`w-3 h-3 rounded-full ${
//                 i === 0 ? "bg-white" : "bg-gray-500"
//               }`}
//             ></div>
//           ))}
//         </div>

//         {/* Arrows Below Cards */}

//         <div className="absolute  -translate-y-6 left-8 right-8 flex justify-between">
//           <button
//             onClick={scrollLeft}
//             className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
//           >
//             <FaArrowLeft className="h-3 w-3" />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
//           >
//             <FaArrowRight className="h-3 w-3" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MakeLearningBetter;

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import letstart1 from "../assets/letstart1.png";
import letstart2 from "../assets/letstart2.png";
import letstart3 from "../assets/letstart3.png";

const MakeLearningBetter = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 480;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 480;
    }
  };

  return (
    <div className="bg-[#FAFAF8] relative py-14">
      {/* Top Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start pl-6 sm:pl-8 mb-12 lg:mt-8">
        {/* Left Heading */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-[55px] text-black sm:text-[50px] lg:text-[55px] font-impact tracking-wide uppercase leading-[65px]">
            LETS MAKE <br /> LEARNING BETTER
          </h2>
        </div>

        {/* Right CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-start mt-4 lg:ml-14">
          <p className="text-[16px] sm:text-sm font-Roboto Condensed text-[#000000] uppercase tracking-[0.2em] leading-[25px] mb-4">
            Become a Pro with us through industry-relevant <br /> skills
          </p>
          <button className="px-[16px] w-[220px] h-[54px] py-[12px] bg-[#FF757A] text-black font-semibold font-Roboto Condensed rounded-[16px] hover:bg-[#ff5c62] transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Cards Section + Arrows */}
      <div className="relative">
        {/* Left Arrow */}

        {/* Scrollable Cards */}
        <div
          ref={sliderRef}
          className="flex gap-2 overflow-x-auto px-5 scroll-smooth scrollbar-hide"
        >
          {[
            {
              image: letstart1,
              title: "INDUSTRY-RELEVANT SKILLS",
              description:
                "STAY AHEAD IN YOUR FIELD BY MASTERING HIGH-DEMAND SKILLS THROUGH OUR ONLINE SESSIONS",
            },
            {
              image: letstart2,
              title: "HYBRID LEARNING PLATFORM",
              description:
                "WORK EXPERIENCE CERTIFICATES FOR REAL PROJECTS AND COHORT LEARNING",
            },
            {
              image: letstart3,
              title: "CAREER NETWORKING",
              description:
                "STAY AHEAD IN YOUR FIELD BY MASTERING HIGH-DEMAND SKILLS THROUGH OUR ONLINE SESSIONS",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden w-[390px] h-[497px] flex-shrink-0 border border-gray-200 shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-md"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-[16px] font-bold font-Roboto Condensed uppercase mb-2">
                  {card.title}
                </h3>
                <p className="text-sm mb-3">{card.description}</p>
                <button className="px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {/* <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[#00E0C6] p-2 rounded-full hover:bg-[#00c5b0] transition"
        >
          <FaArrowRight className="text-black h-4 w-4" />
        </button> */}
      </div>

      {/* Dots */}
      {/* <div className="flex justify-center mt-8 space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === 0 ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default MakeLearningBetter;
