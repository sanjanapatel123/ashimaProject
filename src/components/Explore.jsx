// import React from "react";
// import { motion } from "framer-motion"; // Import Framer Motion for animations
// import img1 from "../assets/Courses.png";
// import img2 from "../assets/Business.png";
// import img3 from "../assets/Newsletter.png";

// const cards = [
//   { title: "Courses", image: img1 },
//   { title: "Business", image: img2 },
//   { title: "Newsletter", image: img3 },
// ];

// const Explore = () => {
//   return (
//     <div
//       className="relative overflow-hidden bg-white p-4 md:p-8 flex items-center"
//       style={{ width: "1659px", height: "330px" }} // ✅ Set exact width & height
//     >
//       <motion.div
//         className="flex"
//         initial={{ x: "0%" }} // ✅ Start from the first position (images are fully visible first)
//         animate={{ x: "-100%" }} // ✅ Then start moving left
//         transition={{
//           duration: 5, // ✅ Increased speed (reduced duration from 10s to 5s)
//           repeat: Infinity,
//           ease: "linear",
//           delay: 2, // ✅ Images will be visible for 2 seconds before scrolling starts
//         }}
//       >
//         {/* Duplicating images for seamless scrolling effect */}
//         {[...cards, ...cards].map((card, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 flex items-center justify-center"
//             style={{ height: "330px", width: "auto" }} // ✅ Proper image container height
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               style={{
//                 height: "100%", // ✅ Ensure image height fits exactly 330px
//                 width: "auto", // ✅ Maintain aspect ratio
//                 objectFit: "contain", // ✅ No cropping, full image visible
//                 display: "block",
//               }}
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Explore;






// import React from "react";
// import { motion } from "framer-motion";
// import img1 from "../assets/Courses.png";
// import img2 from "../assets/Business.png";
// import img3 from "../assets/Newsletter.png";

// const cards = [
//   { title: "Courses", image: img1 },
//   { title: "Business", image: img2 },
//   { title: "Newsletter", image: img3 },
// ];

// const Explore = () => {
//   return (
//     <div
//       className="relative overflow-hidden bg-white p-4 md:p-8 flex items-center"
//       style={{ width: "1659px", height: "330px" }} // ✅ Set exact width & height
//     >
//       <motion.div
//         className="flex gap-1" // ✅ Added gap-1 for space between images
//         initial={{ x: "0%" }} // ✅ Start from the first position
//         animate={{ x: "-100%" }} // ✅ Continuous movement
//         transition={{
//           duration: 5, // ✅ Smooth fast scrolling
//           repeat: Infinity,
//           ease: "linear",
//           delay: 2, // ✅ Starts scrolling after 2s delay
//         }}
//       >
//         {/* Duplicate images for seamless scrolling */}
//         {[...cards, ...cards].map((card, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 flex items-center justify-center"
//             style={{ height: "330px", width: "auto" }}
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               style={{
//                 height: "100%", // ✅ Image fits exactly 330px
//                 width: "auto", // ✅ Maintain aspect ratio
//                 objectFit: "contain", // ✅ No cropping
//                 display: "block",
//               }}
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Explore;




import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/Courses.png";
import img2 from "../assets/Business.png";
import img3 from "../assets/Newsletter.png";

const cards = [
  { title: "Courses", image: img1 },
  { title: "Business", image: img2 },
  { title: "Newsletter", image: img3 },
];

const Explore = () => {
  return (
    <div
      className="relative overflow-hidden bg-white p-4 md:p-8 flex items-center"
      style={{ width: "1659px", height: "330px" }}
    >
      <motion.div
        className="flex gap-2" // ✅ Small gap for spacing
        animate={{ x: ["0%", "-100%"] }} // ✅ Perfect loop animation
        transition={{
          duration: 10, // ✅ Adjusted speed (smooth motion)
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Duplicate images for seamless effect */}
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ height: "330px", width: "auto" }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                height: "100%",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Explore;
