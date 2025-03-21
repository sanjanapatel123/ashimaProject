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
//     <div className="bg-[#FAFAF8] py-10 px-6 sm:px-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center sm:text-left">
//         {/* Left Section - Heading */}
//         <div className="text-[#000000] font-impact text-3xl sm:text-5xl md:text-6xl tracking-[0.5%] leading-[65px]">
//           LET'S MAKE <br /> LEARNING BETTER
//         </div>

//         {/* Right Section - Text & Button */}
//         <div>
//           <p className="text-lg text-black mb-6 font-Roboto Condensed">
//             BECOME A PRO WITH US THROUGH INDUSTRY-RELEVANT SKILLS
//           </p>
//           <button className="bg-[#FF6B6B] text-black font-bold px-16 py-3 rounded-2xl hover:bg-[#FF4C4C] transition">
//             SIGN UP
//           </button>
//         </div>
//       </div>

//       <div className="max-w-[1300px] mx-auto flex justify-center gap-6">
//         {courses.slice(0, 3).map((course, index) => (
//           <div
//             key={index}
//             className="w-[380px] rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
//           >
//             {/* Image Section */}
//             <div className="relative h-[250px] sm:h-[300px] overflow-hidden">
//               <img
//                 src={course.image}
//                 alt={course.title}
//                 className="w-full h-full object-cover"
//               />
//               {/* Full Blur Overlay with Title, Description & Button */}
//               <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-md p-6 flex flex-col justify-end">
//                 <h3 className="text-xl font-extrabold text-white">
//                   {course.title}
//                 </h3>
//                 <p className="text-sm sm:text-md font-medium text-gray-200 mt-2">
//                   {course.description}
//                 </p>
//                 <button className="mt-3 px-6 py-2 bg-white text-black text-md font-semibold rounded-full hover:bg-gray-300 transition">
//                   Learn More
//                 </button>
//               </div>
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
//         <div className="w-full flex justify-between items-center px-10">
//           {/* Left Arrow */}
//           <button className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition">
//             <FaArrowLeft className="h-4 w-4" />
//           </button>

//           {/* Right Arrow */}
//           <button className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition">
//             <FaArrowRight className="h-4 w-4" />
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

const courses = [
  {
    title: "Course 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: letstart1,
  },
  {
    title: "Course 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: letstart2,
  },
  {
    title: "Course 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: letstart3,
  },
];

const MakeLearningBetter = () => {
  const sliderRef = useRef(null);

  // Scroll Functions
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="bg-[#FAFAF8] py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-center text-center sm:text-left">
        {/* Left Section - Heading */}
        <div className="text-[#000000] font-impact text-4xl sm:text-5xl md:text-6xl tracking-wide leading-tight">
          LET'S MAKE <br /> LEARNING BETTER
        </div>

        {/* Right Section - Text & Button */}
        <div>
          <p className="text-lg text-black mb-6 font-medium">
            BECOME A PRO WITH US THROUGH INDUSTRY-RELEVANT SKILLS
          </p>
          <button className="bg-[#FF6B6B] text-white font-bold px-16 py-3 rounded-2xl hover:bg-[#FF4C4C] transition transform hover:scale-105 shadow-lg">
            SIGN UP
          </button>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto flex justify-center gap-8 mt-10">
        {courses.slice(0, 3).map((course, index) => (
          <div
            key={index}
            className="w-[380px] rounded-xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white transform hover:scale-105"
          >
            {/* Image Section */}
            <div className="relative h-[250px] sm:h-[300px] overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              {/* Full Blur Overlay with Title, Description & Button */}
              <div className="absolute bottom-0 left-0 w-full h-[160px] bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-md p-6 flex flex-col justify-end">
                <h3 className="text-xl font-extrabold text-white">
                  {course.title}
                </h3>
                <p className="text-sm sm:text-md font-medium text-gray-200 mt-2">
                  {course.description}
                </p>
                <button className="mt-3 px-6 py-2 bg-white text-black text-md font-semibold rounded-full hover:bg-gray-300 transition transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows & Dots Indicator */}
      <div className="flex flex-col items-center mt-8">
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === 0 ? "bg-black scale-110" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>

        {/* Arrows Below Cards */}
        <div className="w-full flex justify-between items-center px-10">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="bg-[#00E0C6] text-black p-4 rounded-full hover:bg-[#00c5b0] transition transform hover:scale-110 shadow-md"
          >
            <FaArrowLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="bg-[#00E0C6] text-black p-4 rounded-full hover:bg-[#00c5b0] transition transform hover:scale-110 shadow-md"
          >
            <FaArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeLearningBetter;


