// import React, { useRef, useState } from "react";
// import { LuClock12 } from "react-icons/lu";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Tranding1 from "../assets/Tranding1.png";
// import Tranding2 from "../assets/Tranding2.png";
// import Tranding3 from "../assets/Tranding3.png";

// const courses = [
//   {
//     img: Tranding1,
//     title: "AI AND ML",
//     mentor: "Kapil Sharma",
//     rating: 4.8,
//     duration: "5 HRS",
//   },
//   {
//     img: Tranding2,
//     title: "DATA SCIENCE & ENGINEERING",
//     mentor: "Kapil Sharma",
//     rating: 4.8,
//     duration: "5 HRS",
//   },
//   {
//     img: Tranding3,
//     title: "AI AND ML",
//     mentor: "Kapil Sharma",
//     rating: 4.8,
//     duration: "5 HRS",
//   },
//   {
//     img: Tranding1,
//     title: "AI AND ML",
//     mentor: "Kapil Sharma",
//     rating: 4.8,
//     duration: "5 HRS",
//   },
// ];

// const trendingCourses = [
//   "AI & ML",
//   "Data Science & Engineering",
//   "Product",
//   "Design & Development",
//   "DevOps",
//   "Cybersecurity & Testing",
//   "Business & Leadership",
//   "Marketing & Sales",
//   "No Code",
//   "Gaming & Network",
//   "Founder Connect",
// ];

// const TrendingWithCards = () => {
//   const sliderRef = useRef(null);
//   const [selectedCourse, setSelectedCourse] = useState("");

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

//   const handleCourseClick = (course) => {
//     setSelectedCourse(course);
//   };

//   const baseButtonClass =
//     "rounded-full px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm font-medium shadow-sm transition duration-200 ease-in-out cursor-pointer";

//   return (
//     <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#fff]  relative">
//       {/* Title */}
//       <h2 className="text-6xl sm:text-5xl md:text-5xl mb-8 text-center leading-[50px] sm:leading-[60px] tracking-[0.5%] font-[400] text-black font-impact">
//         TRENDING <span className="text-[#047670]">COURSES</span>
//       </h2>

//       {/* Course Categories */}
//       <div className="flex flex-col gap-4 mt-10">
//         {[0, 6].map((startIndex, rowIndex) => (
//           <div
//             key={rowIndex}
//             className="flex flex-wrap justify-center gap-2 sm:gap-3"
//           >
//             {trendingCourses.slice(startIndex, startIndex + 6).map((label) => {
//               const isSelected = selectedCourse === label;
//               return (
//                 <button
//                   key={label}
//                   className={`px-10 py-2 rounded-full text-[14px] font-semibold border transition-all ${
//                     isSelected
//                       ? "bg-[#002726] text-white border-[#002726]"
//                       : "bg-white text-gray-800 border border-black hover:bg-[#fffaf1] hover:text-black"
//                   }`}
//                   onClick={() => handleCourseClick(label)}
//                 >
//                   {label}
//                 </button>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       {/* Scrollable Courses Section */}

//       <div className="relative lg:max-w-[1500px] mx-auto mt-20">
//         {/* Scrollable Cards Container */}
//         <div
//           ref={sliderRef}
//           className="flex gap-1 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
//         >
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="w-[300px] sm:w-[350px] min-w-[300px] sm:min-w-[350px] rounded-xl border border-black overflow-hidden shadow-md hover:shadow-2xl transition-all bg-white"
//             >
//               {/* Image Section */}
//               <div className="relative h-[400px] sm:h-[500px] group overflow-hidden bg-black">
//                 <img
//                   src={course.img}
//                   alt={course.title}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />

//                 {/* Blur Overlay & Text (Adjusted) */}
//                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent px-4 sm:px-6 pb-4 pt-10 text-white">
//                   {/* Ensuring text stays inside the blur */}
//                   <div className="w-full overflow-hidden">
//                     <h3 className="text-lg sm:text-xl font-semibold truncate">
//                       {course.title}
//                     </h3>
//                   </div>
//                   <p className="text-sm sm:text-lg">By {course.mentor}</p>

//                   {/* Rating & Duration */}
//                   <div className="flex justify-between items-center text-sm sm:text-lg mt-2">
//                     <div className="flex items-center gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <span
//                           key={i}
//                           className={
//                             i < Math.floor(course.rating)
//                               ? "text-yellow-400"
//                               : "text-gray-300"
//                           }
//                         >
//                           ★
//                         </span>
//                       ))}
//                       <span className="text-xs sm:text-sm ml-1">
//                         {course.rating}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-300">
//                       <LuClock12 /> {course.duration}
//                     </div>
//                   </div>

//                   {/* Button */}
//                   <button className="mt-4 w-full px-3 sm:px-4 py-2 bg-white text-black font-semibold rounded-3xl hover:bg-gray-200 transition">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between w-full  mt-4 px-6">
//         {/* Left Arrow */}
//         <button
//           onClick={scrollLeft}
//           className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
//         >
//           <FaArrowLeft className="h-5 w-5" />
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={scrollRight}
//           className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
//         >
//           <FaArrowRight className="h-5 w-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TrendingWithCards;




// import React, { useRef, useState } from "react";
// import { LuClock12 } from "react-icons/lu";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import trending1 from "../assets/trending1.png";
// import trending2 from "../assets/trending2.png";
// import trending3 from "../assets/trending3.png";

// const courses = [
//   {
//     img: trending1,
//     title: "AI AND ML",
//     mentor: "Kapil Sharma",
//     rating: 4.8,
//     duration: "5 HRS",
//   },
//   {
//     img: trending2,
//     title: "DATA SCIENCE & ENGINEERING",
//     mentor: "Kapil Sharma",
//     rating: 4.8,
//     duration: "5 HRS",
//   },
//   {
//     img: trending3,
//     title: "AI AND ML",
//     mentor: "Kapil Sharma",
//     rating: 4.8,
//     duration: "5 HRS",
//   },
  
// ];

// const trendingCourses = [
//   "AI & ML",
//   "Data Science & Engineering",
//   "Product",
//   "Design & Development",
//   "DevOps",
//   "Cybersecurity & Testing",
//   "Business & Leadership",
//   "Marketing & Sales",
//   "No Code",
//   "Gaming & Network",
//   "Founder Connect",
// ];

// const TrendingWithCards = () => {
//   const sliderRef = useRef(null);
//   const [selectedCourse, setSelectedCourse] = useState("");

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

//   const handleCourseClick = (course) => {
//     setSelectedCourse(course);
//   };

//   const baseButtonClass =
//     "rounded-full px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm font-medium shadow-sm transition duration-200 ease-in-out cursor-pointer";

//   return (
//     <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#fff]  relative">
//       {/* Title */}
//       <h2 className="text-6xl sm:text-5xl md:text-5xl mb-8 text-center leading-[50px] sm:leading-[60px] tracking-[0.5%] font-[400] text-[#000000] font-impact">
//         TRENDING <span className="text-[#047670]">COURSES</span>
//       </h2>

//       {/* Course Categories */}
//       <div className="flex flex-col gap-4 mt-10">
//         {[0, 6].map((startIndex, rowIndex) => (
//           <div
//             key={rowIndex}
//             className="flex flex-wrap justify-center gap-2 sm:gap-3"
//           >
//             {trendingCourses.slice(startIndex, startIndex + 6).map((label) => {
//               const isSelected = selectedCourse === label;
//               return (
//                 <button
//                   key={label}
//                   className={`px-10 py-2 rounded-full text-[14px] font-semibold border transition-all ${
//                     isSelected
//                       ? "bg-[#002726] text-white border-[#002726]"
//                       : "bg-white text-gray-800 border border-black hover:bg-[#fffaf1] hover:text-black"
//                   }`}
//                   onClick={() => handleCourseClick(label)}
//                 >
//                   {label}
//                 </button>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       {/* Scrollable Courses Section */}

//       <div className="relative lg:max-w-[1500px] mx-auto mt-20">
//         {/* Scrollable Cards Container */}
//         <div
//           ref={sliderRef}
//           className="flex gap-1 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
//         >
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="w-[300px] sm:w-[350px] min-w-[300px] sm:min-w-[350px] rounded-xl border border-black overflow-hidden shadow-md hover:shadow-2xl transition-all bg-white"
//             >
//               {/* Image Section */}
//               <div className="relative h-[400px] sm:h-[500px] group overflow-hidden bg-black">
//                 <img
//                   src={course.img}
//                   alt={course.title}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />

//                 {/* Blur Overlay & Text (Adjusted) */}
//                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent px-4 sm:px-6 pb-4 pt-10 text-white">
//                   {/* Ensuring text stays inside the blur */}
//                   <div className="w-full overflow-hidden">
//                     <h3 className="text-lg sm:text-xl font-semibold truncate">
//                       {course.title}
//                     </h3>
//                   </div>
//                   <p className="text-sm sm:text-lg">By {course.mentor}</p>

//                   {/* Rating & Duration */}
//                   <div className="flex justify-between items-center text-sm sm:text-lg mt-2">
//                     <div className="flex items-center gap-1">
//                       {[...Array(5)].map((_, i) => (
//                         <span
//                           key={i}
//                           className={
//                             i < Math.floor(course.rating)
//                               ? "text-yellow-400"
//                               : "text-gray-300"
//                           }
//                         >
//                           ★
//                         </span>
//                       ))}
//                       <span className="text-xs sm:text-sm ml-1">
//                         {course.rating}
//                       </span>
//                     </div>

//                     <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-300">
//                       <LuClock12 /> {course.duration}
//                     </div>
//                   </div>

//                   {/* Button */}
//                   <button className="mt-4 w-full px-3 sm:px-4 py-2 bg-white text-black font-semibold rounded-3xl hover:bg-gray-200 transition">
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between w-full  mt-4 px-6">
//         {/* Left Arrow */}
//         <button
//           onClick={scrollLeft}
//           className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
//         >
//           <FaArrowLeft className="h-5 w-5" />
//         </button>

//         {/* Right Arrow */}
//         <button
//           onClick={scrollRight}
//           className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
//         >
//           <FaArrowRight className="h-5 w-5" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TrendingWithCards;




import React, { useRef, useState } from "react";
import { LuClock12 } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import trending1 from "../assets/trending1.png";
import trending2 from "../assets/trending2.png";
import trending3 from "../assets/trending3.png";

const courses = [
  {
    img: trending1,
    title: "AI AND ML",
    mentor: "Kapil Sharma",
    rating: 4.8,
    duration: "5 HRS",
  },
  {
    img: trending2,
    title: "DATA SCIENCE & ENGINEERING",
    mentor: "Kapil Sharma",
    rating: 4.8,
    duration: "5 HRS",
  },
  {
    img: trending3,
    title: "AI AND ML",
    mentor: "Kapil Sharma",
    rating: 4.8,
    duration: "5 HRS",
  },
];

const trendingCourses = [
  "AI & ML",
  "Data Science & Engineering",
  "Product",
  "Design & Development",
  "DevOps",
  "Cybersecurity & Testing",
  "Business & Leadership",
  "Marketing & Sales",
  "No Code",
  "Gaming & Network",
  "Founder Connect",
];

const TrendingWithCards = () => {
  const sliderRef = useRef(null);
  const [selectedCourse, setSelectedCourse] = useState("");

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

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#fff] relative">
      {/* Title */}
      <h2 className="text-6xl sm:text-5xl md:text-5xl mb-8 text-center leading-[50px] sm:leading-[60px] tracking-[0.5%] font-[400] text-[#000000] font-impact">
        TRENDING <span className="text-[#047670]">COURSES</span>
      </h2>

      {/* Course Categories */}
      <div className="flex flex-col gap-4 mt-10">
        {[0, 6].map((startIndex, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
          >
            {trendingCourses.slice(startIndex, startIndex + 6).map((label) => {
              const isSelected = selectedCourse === label;
              return (
                <button
                  key={label}
                  className={`px-10 py-2 rounded-full text-[14px] font-semibold border transition-all ${
                    isSelected
                      ? "bg-[#002726] text-white border-[#002726]"
                      : "bg-white text-gray-800 border border-black hover:bg-[#fffaf1] hover:text-black"
                  }`}
                  onClick={() => handleCourseClick(label)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Scrollable Courses Section */}

      <div className="relative lg:max-w-[1500px] mx-auto mt-20">
        {/* Scrollable Cards Container */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className={`rounded-xl border border-black overflow-hidden shadow-md hover:shadow-2xl transition-all bg-white flex flex-col ${
                index === 0
                  ? "w-[449.4716px] min-w-[449.4716px] h-[497px]" // ✅ First image (trending1) gets exact width & height
                  : "w-[350px] min-w-[350px] h-[450px]" // ✅ Other images are adjusted
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full h-full overflow-hidden bg-black">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between w-full mt-4 px-6">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
        >
          <FaArrowLeft className="h-5 w-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
        >
          <FaArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TrendingWithCards;




