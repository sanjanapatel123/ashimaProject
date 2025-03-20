// import React from "react";

// const Letmake = () => {
//   return (
//     <div>
//       <main className="bg-[#fff] font-[Inter]">
//         <div className="text-center">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">
//             Let's make learning better
//           </h1>
//           <p className="text-xl text-gray-600">
//             Become a Pro with us through industry-relevant skills
//           </p>
//         </div>
//         <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//           {/* Responsive Grid Layout to show 5 cards on desktop, 2-3 on tablet, 1 on mobile */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//             {[
//               {
//                 title: "Industry-Relevant Skills",
//                 desc: "Stay ahead in your field by mastering high-demand skills through our online sessions",
//                 img: "https://i.ibb.co/FLZh9wLF/21d0a875-94d2-49b8-b3e6-15837e6ba289.jpg",
//               },
//               {
//                 title: "Hybrid Learning Platform",
//                 desc: "Work experience certificates for real projects and cohort learning.",
//                 img: "https://i.ibb.co/324nFB2/75d77568-48cb-4c5c-b884-7e874570965a.jpg",
//               },
//               {
//                 title: "Career Networking",
//                 desc: "Showcase your learning journey to prospective employers.",
//                 img: "https://i.ibb.co/p6Mgw6qG/bf19ef8b-fad6-471b-88cc-0b31cd9e935b.jpg",
//               },
//               {
//                 title: "Personalized Learning",
//                 desc: "Tailored learning paths to match your career goals.",
//                 img: "https://i.ibb.co/p6Mgw6qG/bf19ef8b-fad6-471b-88cc-0b31cd9e935b.jpg",
//               },
//               {
//                 title: "Certification Benefits",
//                 desc: "Earn recognized certificates to boost your resume.",
//                 img: "https://i.ibb.co/p6Mgw6qG/bf19ef8b-fad6-471b-88cc-0b31cd9e935b.jpg",
//               },
//             ].map((card, index) => (
//               <div
//                 key={index}
//                 className="w-full h-[350px] bg-gray-800 rounded-lg overflow-hidden relative flex-shrink-0 group"
//               >
//                 <div className="p-4 text-white relative z-10">
//                   <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
//                   <p className="text-sm text-gray-100">{card.desc}</p>
//                 </div>
//                 <img
//                   src={card.img}
//                   className="absolute inset-0 w-full h-full object-cover"
//                   alt={card.title}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-4 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                   <h4 className="font-semibold text-whi mb-2">Explore More</h4>
//                   <p className="text-sm text-gray-600">
//                     Discover interactive cohort-based learning with hands-on
//                     projects.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Letmake;






// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useRef } from "react";
// import letmake1 from "../assets/Letmake1.png";
// import letmake2 from "../assets/Letmake2.png";
// import letmake3 from "../assets/Letmake3.png";

// const courses = [
//   {
//     title: "Course 1",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: letmake1,
//   },
//   {
//     title: "Course 2",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: letmake2,
//   },
//   {
//     title: "Course 3",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: letmake3,
//   },
//   {
//     title: "Course 1",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     image: letmake1,
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
//       <div className="max-w-7xl mx-auto grid grid-cols-2 items-center">
//         {/* Left Section - Heading */}
//         <div className="text-black font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
//           LET'S MAKE <br /> LEARNING BETTER
//         </div>

//         {/* Right Section - Text & Button */}
//         <div className="text-right">
//           <p className="text-lg text-black mb-6">
//             BECOME A PRO WITH US THROUGH INDUSTRY-RELEVANT SKILLS
//           </p>
//           <button className="bg-[#FF6B6B] text-black font-bold px-8 py-3 rounded-lg hover:bg-[#FF4C4C] transition">
//             SIGN UP
//           </button>
//         </div>
//       </div>

//       {/* Course Section */}
//       <div className="relative lg:max-w-[1500px] mx-auto ml-8">
//         {/* Scrollable Cards Container */}
//         <div
//           ref={sliderRef}
//           className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
//         >
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="w-[350px] min-w-[350px] rounded-xl border border-black overflow-hidden shadow-md hover:shadow-2xl transition-all bg-white"
//             >
//               {/* Image Section */}
//               <div className="relative h-[500px] group overflow-hidden bg-black">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />

//                 {/* Blur Overlay & Text */}
//                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 text-white">
//                   <h3 className="text-2xl font-semibold">{course.title}</h3>
//                   <p className="text-lg">{course.description}</p>

//                   {/* Button */}
//                   <button className="mt-4 w-40 px-4 py-2 bg-black text-white font-semibold rounded-3xl hover:bg-gray-200 transition">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows & Dots Indicator */}
//       <div className="flex flex-col">
//         {/* Dots Indicator */}
//         <div className="flex justify-center space-x-2 mb-4">
//           {[...Array(4)].map((_, i) => (
//             <div
//               key={i}
//               className={`w-3 h-3 rounded-full ${
//                 i === 0 ? "bg-black" : "bg-gray-500"
//               }`}
//             ></div>
//           ))}
//         </div>

//         {/* Arrows Below Cards */}
//         <div className="flex justify-between items-center px-16 mb-5">
//           {/* Left Arrow */}
//           <button
//             onClick={scrollLeft}
//             className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
//           >
//             <FaArrowLeft className="h-4 w-4" />
//           </button>

//           {/* Right Arrow */}
//           <button
//             onClick={scrollRight}
//             className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
//           >
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
import letmake1 from "../assets/Letmake1.png";
import letmake2 from "../assets/Letmake2.png";
import letmake3 from "../assets/Letmake3.png";

const courses = [
  {
    title: "Course 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: letmake1,
  },
  {
    title: "Course 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: letmake2,
  },
  {
    title: "Course 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: letmake3,
  },
  {
    title: "Course 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: letmake1,
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
    <div className="bg-[#FAFAF8] py-10 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center sm:text-left">
        {/* Left Section - Heading */}
        <div className="text-black font-extrabold text-3xl sm:text-5xl md:text-6xl leading-tight">
          LET'S MAKE <br /> LEARNING BETTER
        </div>

        {/* Right Section - Text & Button */}
        <div>
          <p className="text-lg text-black mb-6">
            BECOME A PRO WITH US THROUGH INDUSTRY-RELEVANT SKILLS
          </p>
          <button className="bg-[#FF6B6B] text-black font-bold px-8 py-3 rounded-lg hover:bg-[#FF4C4C] transition">
            SIGN UP
          </button>
        </div>
      </div>

      {/* Course Section */}
      <div className="relative lg:max-w-[1500px] mx-auto mt-10">
        {/* Scrollable Cards Container */}
        <div
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="w-full sm:w-[350px] min-w-full sm:min-w-[350px] rounded-xl border border-black overflow-hidden shadow-md hover:shadow-2xl transition-all bg-white"
            >
              {/* Image Section */}
              <div className="relative h-[400px] sm:h-[500px] group overflow-hidden bg-black">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Blur Overlay & Text */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    {course.title}
                  </h3>
                  <p className="text-sm sm:text-lg">{course.description}</p>

                  {/* Button */}
                  <button className="mt-4 w-full sm:w-40 px-4 py-2 bg-black text-white font-semibold rounded-3xl hover:bg-gray-200 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows & Dots Indicator */}
      <div className="flex flex-col items-center mt-6">
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 0 ? "bg-black" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>

        {/* Arrows Below Cards */}
        <div className="flex justify-between items-center w-full max-w-sm px-6">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowLeft className="h-4 w-4" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeLearningBetter;
