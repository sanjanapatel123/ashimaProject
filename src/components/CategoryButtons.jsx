// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import market1 from "../assets/Market1.jpg";
// import market2 from "../assets/Market2.jpg";
// import market3 from "../assets/Market3.jpg";
// import market4 from "../assets/Market4.jpg";
// import design1 from "../assets/Design1.jpg";
// import design2 from "../assets/Design2.jpg";
// import design3 from "../assets/Design3.jpg";
// import design4 from "../assets/Design4.jpg";
// import { FaArrowRight } from "react-icons/fa";

// const CategoryButtons = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const categories = [
//     "Marketing & Sales",
//     "AI & ML",
//     "Data Science & Engineering",
//     "Design & Development",
//     "Product",
//     "Business & Leadership",
//     "Gen AI",
//     "Gaming & Network",
//     "Cybersecurity & Testing",
//     "Founder Connect",
//   ];

//   const categoryDetails = {
//     "Marketing & Sales": {
//       image: market1,
//       text: "Learn the latest strategies in Marketing & Sales, focusing on customer engagement and business growth.",
//     },
//     "AI & ML": {
//       image: market2,
//       text: "Dive into the world of Artificial Intelligence and Machine Learning, learning how these technologies are shaping the future.",
//     },
//     "Data Science & Engineering": {
//       image: market3,
//       text: "Master data analysis, engineering, and interpretation to solve complex problems using data-driven approaches.",
//     },
//     "Design & Development": {
//       image: market4,
//       text: "Understand design and development from UI/UX to web and app development.",
//     },
//     Product: {
//       image: design1,
//       text: "Learn about product management, development, and strategies to launch successful products.",
//     },
//     "Business & Leadership": {
//       image: design2,
//       text: "Enhance your leadership skills and business acumen to excel in today's competitive market.",
//     },
//     "Gen AI": {
//       image: design3,
//       text: "Explore the revolutionary impact of Generative AI and how it's transforming industries.",
//     },
//     "Gaming & Network": {
//       image: design4,
//       text: "Get hands-on experience in gaming and network technologies, focusing on design, coding, and game mechanics.",
//     },
//     "Cybersecurity & Testing": {
//       image: design1,
//       text: "Learn the essential skills for securing systems and conducting vulnerability tests in the digital world.",
//     },
//     "Founder Connect": {
//       image: design2,
//       text: "Connect with fellow founders, share insights, and learn from the experiences of others in the entrepreneurial world.",
//     },
//   };

//   const [activeCategory, setActiveCategory] = useState(categories[0]);

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 py-8 font-[Inter]">
//       {/* Heading */}
//       <h1
//         className="text-4xl md:text-5xl font-bold text-center mb-10"
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ amount: 0.5 }}
//       >
//         RIDE THE AI WAVE WITH US
//       </h1>

//       {/* Top Section - Buttons */}
//       <div className="flex justify-start items-center gap-4 overflow-x-auto scrolling-touch scrollbar-hidden">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
//               activeCategory === category
//                 ? "bg-[#002726] text-white"
//                 : "hover:bg-[#fffaf1] text-gray-700 border border-black"
//             } hover:bg-beige-200`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Middle Section - Dynamic Content */}
//       <div className="mt-8 flex gap-8 md:gap-24 items-center flex-col md:flex-row">
//         {/* Left Side - Image with Slide-in Animation */}
//         <motion.div
//           className="flex justify-center items-start w-full md:w-[600px]"
//           key={activeCategory}
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ amount: 0.3 }}
//         >
//           <img
//             src={categoryDetails[activeCategory].image}
//             alt={activeCategory}
//             className="mt-4 rounded-xl shadow-md w-full md:w-[500px] h-[300px]"
//           />
//         </motion.div>

//         {/* Right Side - Text with Slide-in Animation */}
//         <motion.div
//           className="flex flex-col justify-center items-start ml-auto w-full md:w-2/4 mt-4 md:mt-0"
//           key={activeCategory + "-text"}
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ amount: 0.3 }}
//         >
//           <motion.p
//             className="text-2xl font-bold text-gray-700"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ amount: 0.5 }}
//           >
//             {activeCategory}
//           </motion.p>

//           {categoryDetails[activeCategory].text
//             .split("\n")
//             .map((line, index) => (
//               <motion.p
//                 key={index}
//                 className={`text-lg font-medium text-gray-700 mt-4 ${
//                   index > 0 ? "mt-6" : ""
//                 }`}
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.3 + index * 0.3, duration: 0.8 }}
//                 viewport={{ amount: 0.5 }}
//               >
//                 {line}
//               </motion.p>
//             ))}
//         </motion.div>
//       </div>

//       {/* Bottom Section - Explore Courses Button */}

//       <motion.button
//         className="flex items-center  text-white hover:bg-green-800 bg-[#004726] justify-center gap-2 px-5 py-3 rounded-full border font-semibold transition duration-300 mb-5 mx-auto mt-5"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         initial={{ scale: 1 }}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         <span>Explore Courses</span>
//         <motion.span
//           initial={{ x: 10, opacity: 0 }}
//           animate={{
//             x: isHovered ? 0 : 10,
//             opacity: isHovered ? 1 : 0,
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           <FaArrowRight />
//         </motion.span>
//       </motion.button>
//     </div>
//   );
// };

// export default CategoryButtons;







// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Ride1 from "../assets/RidePage1.png";
// import Ride2 from "../assets/RidePage2.png";
// import Ride3 from "../assets/RidePage3.png";
// import Ride4 from "../assets/RidePage4.png";

// const courses = [
//   {
//     title: "MARKETING & SALES",
//     image: Ride1,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "AI & MI",
//     image: Ride2,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "PRODUCTS",
//     image: Ride3,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
//   {
//     title: "BUSINESS DEVELOPMENT",
//     image: Ride4,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
//   },
// ];

// const RideTheAIWave = () => {
//   return (
//     <div className="bg-black text-white">
//       {/* Heading */}
//       <h2 className="text-center text-5xl font-extrabold uppercase mb-10">
//         RIDE THE AI WAVE WITH US
//       </h2>

//       {/* Cards Container */}
//       <div className="flex gap-6 overflow-x-auto px-6 scrollbar-hide justify-center mt-20">
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             className="bg-white text-black rounded-lg shadow-lg p-6 w-[340px] min-w-[340px] flex-shrink-0" // ✅ Slight Width Increase
//           >
//             {/* Title */}
//             <h3 className="text-lg font-bold mb-4">{course.title}</h3>

//             {/* Image */}
//             <img
//               src={course.image}
//               alt={course.title}
//               className="w-full h-48 object-cover rounded-md mb-4"
//             />

//             {/* Description */}
//             <p className="text-sm text-black mb-4">{course.description}</p>

//             {/* Button */}
//             <button className="w-44 py-2 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition">
//               EXPLORE COURSES
//             </button>
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

// export default RideTheAIWave;




import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Ride1 from "../assets/RidePage1.png";
import Ride2 from "../assets/RidePage2.png";
import Ride3 from "../assets/RidePage3.png";
import Ride4 from "../assets/RidePage4.png";

const courses = [
  {
    title: "MARKETING & SALES",
    image: Ride1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "AI & MI",
    image: Ride2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "PRODUCTS",
    image: Ride3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "BUSINESS DEVELOPMENT",
    image: Ride4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "BUSINESS DEVELOPMENT",
    image: Ride4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "BUSINESS DEVELOPMENT",
    image: Ride4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
];

const RideTheAIWave = () => {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-5xl font-extrabold uppercase mb-10">
        RIDE THE AI WAVE WITH US
      </h2>

      {/* Cards Container */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto px-4 scrollbar-hide justify-start sm:justify-center mt-10 sm:mt-20">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg p-6 w-[90%] sm:w-[340px] min-w-[90%] sm:min-w-[340px] flex-shrink-0"
          >
            {/* Title */}
            <h3 className="text-lg font-bold mb-4">{course.title}</h3>

            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />

            {/* Description */}
            <p className="text-sm text-black mb-4">{course.description}</p>

            {/* Button */}
            <button className="w-full sm:w-44 py-2 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition">
              EXPLORE COURSES
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Arrows & Dots Indicator */}
      <div className="flex flex-col items-center mt-6">
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 0 ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>

        {/* Arrows Below Cards */}
        <div className="w-full flex justify-between items-center px-10">
          {/* Left Arrow */}
          <button className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition">
            <FaArrowLeft className="h-4 w-4" />
          </button>

          {/* Right Arrow */}
          <button className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition">
            <FaArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RideTheAIWave;
