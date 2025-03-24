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
//       style={{ width: "1659px", height: "330px" }}
//     >
//       <motion.div
//         className="flex gap-2" // ✅ Small gap for spacing
//         animate={{ x: ["0%", "-100%"] }} // ✅ Perfect loop animation
//         transition={{
//           duration: 10, // ✅ Adjusted speed (smooth motion)
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         {/* Duplicate images for seamless effect */}
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
//                 height: "100%",
//                 width: "auto",
//                 objectFit: "contain",
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
//       style={{ width: "1659px", height: "330px" }}
//     >
//       <motion.div
//         className="flex gap-2"
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{
//           duration: 20, // ✅ Slower and smoother
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
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
//                 height: "100%",
//                 width: "auto",
//                 objectFit: "contain",
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
//       className="relative overflow-hidden bg-white p-4 md:p-8 flex items-center rounded-xl"
//       style={{ height: "330px" }} // Removed fixed width
//     >
//       <motion.div
//         className="flex gap-2"
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{
//           duration: 20, // Slower scroll
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
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
//                 height: "100%",
//                 width: "auto",
//                 objectFit: "contain",
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
      className="relative overflow-hidden bg-white py-4 md:py-8 w-full"
      style={{ height: "330px" }}
    >
      <motion.div
        className="flex items-center gap-3 pl-10" // 👈 Add left padding here
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* 👇 Dummy spacer to simulate left padding at scroll start */}
        <div style={{ width: "2.5rem" }}></div>

        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ height: "330px", width: "auto" }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-auto object-contain block"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Explore;
