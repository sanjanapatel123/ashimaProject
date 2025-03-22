// import React, { useRef, useState } from "react";
// import { LuClock12 } from "react-icons/lu";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import trending1 from "../assets/trending1.png";
// import trending2 from "../assets/trending2.png";
// import trending3 from "../assets/trending3.png";
// import trending from "../assets/trending.png";

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
//   "DEVOPS",
//   "NO CODE",
//   "DATA SCIENCE AND ENGINERRING",
//   "DESIGN AND DEVLOPMENT",
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

//   return (
//     <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#ffffff] relative">
//       {/* Title */}
//       <h2 className="text-6xl sm:text-5xl md:text-5xl mb-8 text-center leading-[50px] sm:leading-[60px] tracking-[0.5%] font-[400] text-[#000000] font-impact">
//         TRENDING <span className="text-[#047670]">COURSES</span>
//       </h2>

//       {/* Course Categories */}

//       <div className="flex flex-col gap-[26px] mt-10">
//         {[0, 5, 9].map((startIndex, rowIndex) => (
//           <div
//             key={rowIndex}
//             className="flex flex-wrap justify-center gap-3 sm:gap-4"
//           >
//             {trendingCourses
//               .slice(startIndex, startIndex + [5, 4, 2][rowIndex])
//               .map((label) => {
//                 const isSelected = selectedCourse === label;
//                 return (
//                   <button
//                     key={label}
//                     className={`px-12 py-2 rounded-full text-[14px] font-semibold uppercase border transition-all ${
//                       isSelected
//                         ? "bg-[#002726] text-white border-[#002726]"
//                         : "bg-white text-gray-800 border border-black hover:bg-[#fffaf1] hover:text-black"
//                     }`}
//                     onClick={() => handleCourseClick(label)}
//                   >
//                     {label}
//                   </button>
//                 );
//               })}
//           </div>
//         ))}
//       </div>

//       {/* Scrollable Courses Section */}

//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#ffffff] relative font-Roboto Condensed case-uppercase">
//         {/* Scrollable Courses Section */}
//         <div className="relative lg:max-w-[2000px] mx-auto mt-10">
//           {/* Scrollable Cards Container */}
//           <div
//             ref={sliderRef}
//             className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
//           >
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="w-[2000px] min-w-[400px] rounded-xl border border-black overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
//               >
//                 {/* Image Section */}
//                 <div className="relative h-[500px] w-[470px] overflow-hidden bg-black">
//                   <img
//                     src={course.img}
//                     alt={course.title}
//                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                   />

//                   {/* Stronger Blur Overlay & Text */}
//                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-black/20 backdrop-blur-sm px-4 pb-6 pt-8 text-white font-Roboto Condensed leading-[24%] tracking-[2%] font-bold">
//                     {/* Course Title */}
//                     <h3 className="text-lg font-semibold">{course.title}</h3>
//                     <p className="text-sm">{course.mentor}</p>

//                     {/* Rating & Duration */}
//                     <div className="flex justify-between items-center text-lg mt-2">
//                       <div className="flex items-center gap-1">
//                         {[...Array(5)].map((_, i) => (
//                           <span
//                             key={i}
//                             className={
//                               i < Math.floor(course.rating)
//                                 ? "text-yellow-400"
//                                 : "text-[#ffffff]"
//                             }
//                           >
//                             ★
//                           </span>
//                         ))}
//                         <span className="text-xs ml-1">{course.rating}</span>
//                       </div>

//                       <div className="flex items-center gap-1 text-xs text-gray-300">
//                         <LuClock12 /> {course.duration}
//                       </div>
//                     </div>

//                     {/* "Learn More" Button */}
//                     <button className="mt-4 w-40 px-6 py-3 bg-white text-black rounded-3xl hover:bg-gray-200 transition">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex justify-between w-full mt-0 px-6">
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
import trending from "../assets/trending.png";

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
  "DEVOPS",
  "NO CODE",
  "Cybersecurity & Testing",
  "DATA SCIENCE AND ENGINERRING",
  "DESIGN AND DEVLOPMENT",
  "Founder Connect",
  "Gaming & Network",
  "Product",
  "bussiness and leadership", 
  "Marketing & Sales",
  
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
    <div className=" px-4 sm:px-6 lg:px-8 py-8 bg-[#f4F3F3] relative">
      {/* Title */}
      <h2 className="text-[55px] sm:text-5xl md:text-5xl mb-6 sm:mb-8 text-center leading-snug sm:leading-[60px] tracking-[0.5%] font-[400] text-[#000000] font-impact">
        TRENDING <span className="text-[#047670]">COURSES</span>
      </h2>

      {/* Course Categories */}
      <div className="flex flex-col gap-3 mt-5 w-full">
        {[0, 5, 9].map((startIndex, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-4 sm:gap-4"
          >
            {trendingCourses
              .slice(startIndex, startIndex + [5, 4, 2][rowIndex])
              .map((label) => {
                const isSelected = selectedCourse === label;
                return (
                  <button
                    key={label}
                    onClick={() => handleCourseClick(label)}
                    className={`px-2 py-2 rounded-full text-[16px] font-Roboto Condensed uppercase border transition-all 
                ${
                  isSelected
                    ? "bg-[#002726] text-white border-[#002726]"
                    : "bg-[#f4F3F3] text-gray-800 border-black hover:text-black"
                }`}
                  >
                    {label}
                  </button>
                );
              })}
          </div>
        ))}
      </div>

      {/* Scrollable Courses Section */}
      <div className=" px-2 sm:px-6 lg:px-8 py-8 bg-[#f4F3F3] relative font-Roboto Condensed uppercase">
        <div className="relative w-full overflow-x-auto mt-10">
          <div
            ref={sliderRef}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="w-[2000px] min-w-[300px] sm:min-w-[400px] rounded-xl border border-black overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-[#f4F3F3] uppercaseer"
              >
                <div className="relative h-[450px] sm:h-[500px] w-full overflow-hidden bg-black uppercase">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-black/20 backdrop-blur-sm px-4 pb-4 pt-4 text-white font-Roboto Condensed tracking-wide">
                    <h3 className="text-[25px]  mb-1">{course.title}</h3>
                    <p className="text-[18px] mb-1">{course.mentor}</p>

                    <div className="flex justify-between items-center text-[14px] mt-1 uppercase">
                      <div className="flex items-center gap-1">
                        <span className="text-white font-Roboto Condensed text[14px]">
                          RATING {course.rating}
                        </span>
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.floor(course.rating)
                                ? "text-yellow-400"
                                : "text-white"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-300">
                        <LuClock12 className="w-6 h-6" /> {course.duration}
                      </div>
                    </div>

                    <button className="mt-3 w-36 px-8 py-2 bg-white text-black rounded-3xl hover:bg-gray-200 transition text-sm font-Roboto Condensed">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}

      <div className="absolute top-[97%] left-8 right-8 flex justify-between">
        <button
          onClick={scrollLeft}
          className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
        >
          <FaArrowLeft className="h-3 w-3" />
        </button>
        <button
          onClick={scrollRight}
          className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
        >
          <FaArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default TrendingWithCards;