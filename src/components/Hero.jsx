import { useState } from "react";
import bgGridImage from "../assets/image.png"; // Background grid
import podcastMan from "../assets/image1.png"; // Image 1 - Man with Mic
import onlineClassWoman from "../assets/image2.png"; // Image 2 - Woman with Headphones
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import ai from "../assets/ai.png";
// import walkingirl from "../assets/walkingirl";
const walkingirl = "/assets/WalkingGirl.gif";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-[85vh] flex items-center"
      style={{ backgroundImage: `url(${bgGridImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-center mt-10">
        {/* Left Text Section */}
        <div className="max-w-3xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            <div className="flex items-end">
              {/* <img
                src={ai}
                alt="AI Logo"
                className="w-10 h-10 sm:w-10 sm:h-12"
              /> */}
              <span className="block text-5xl sm:text-6xl md:text-7xl mr-9">
                AI SKILLS
              </span>
            </div>
            <div className="flex items-end">
              <span
                className="block text-2xl sm:text-3xl md:text-4xl"
                style={{ wordSpacing: "0.3rem" }}
              >
                to uplift your career
              </span>
              <img src={walkingirl} alt="Walking Girl" className="w-8 h-8" />
            </div>
          </h1>

          <p className="mt-3 text-lg sm:text-2xl max-w-2xl">
            Master the future of Technology
          </p>

          <p className="text-sm sm:text-base leading-relaxed mt-2">
            A complete platform to provide you option to learn from Live,
            Hybrid, and Video courses. No more to look at separate places to
            learn.
            <br />
            Technology changes very fast and it is very crucial to keep yourself
            updated with the latest innovations.
            <br />
            Our courses are AI-focused across all tech domains and help you
            learn from top experts in the field.
            <br />
            Get the Skills to take your career forward!
          </p>

          <div className="flex flex-row justify-start gap-5 mt-5 font-bold">
            <h4 className="text-lg sm:text-xl">Live</h4>
            <h4 className="text-lg sm:text-xl">Hybrid</h4>
            <h4 className="text-lg sm:text-xl">Video</h4>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="mt-6">
              <button
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full border bg-white text-black hover:bg-gray-100 font-semibold transition duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span>Explore Courses</span>
                <span
                  className={`transform transition-transform duration-300 font-bold  ${
                    isHovered
                      ? "translate-x-0 opacity-100"
                      : "translate-x-2 opacity-0"
                  }`}
                >
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </motion.button>
        </div>

        {/* Right Image Section - Hidden on Mobile */}
        <div className="relative mt-24 md:mt-0 hidden md:flex flex-col items-end gap-4">
          {/* Top Image - Shifted Left */}
          <div className="relative w-40 h-56 sm:w-40 sm:h-60 overflow-hidden rounded-xl border-8 border-white translate-x-[-110%] translate-y-14">
            <img
              src={"https://c.stocksy.com/a/rIb100/z9/381725.jpg"}
              alt="Man with microphone"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Image - Aligned normally to right */}
          <div className="relative w-36 h-56 sm:w-40 sm:h-60 overflow-hidden rounded-xl border-8 border-white translate-y-[-20%]">
            <img
              src={"https://c.stocksy.com/a/YIb100/z9/381706.jpg"}
              alt="Woman taking notes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;

// import { useState } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import ai from "../assets/ai.png"; // This is fine (PNG in src/assets)

// // Use direct URL for GIF from public folder
// const walkingirl = "/assets/WalkingGirl.gif"; // No import needed

// function Hero() {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <main className="relative bg-cover bg-center bg-no-repeat text-white min-h-[85vh] flex items-center bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row justify-between items-center mt-10">
//         {/* Left Text Section */}
//         <div className="max-w-3xl text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight flex items-center gap-2">
//             {/* AI Logo Image */}
//             <img src={ai} alt="AI Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
//             <span className="text-5xl sm:text-6xl md:text-7xl">AI SKILLS</span>
//           </h1>

//           {/* "to uplift your career" with walking girl GIF */}
//           <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
//             <span className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-semibold">
//               to uplift your career
//             </span>
//             <img src={walkingirl} alt="Walking Girl" className="w-8 h-8" />
//           </div>

//           <p className="mt-4 text-lg sm:text-2xl text-gray-800">
//             Master the future of Technology
//           </p>

//           {/* Rest of your code unchanged */}
//           <p className="text-sm sm:text-base leading-relaxed mt-2 text-gray-600">
//             A complete platform to provide you options to learn from Live,
//             Hybrid, and Video courses. No more to look at separate places to
//             learn.
//             <br />
//             Technology changes very fast and it is very crucial to keep yourself
//             updated with the latest innovations.
//             <br />
//             Our courses are AI-focused across all tech domains and help you
//             learn from top experts in the field.
//             <br />
//             Get the skills to take your career forward!
//           </p>

//           <div className="flex flex-row justify-center md:justify-start gap-5 mt-5 font-bold">
//             <h4 className="text-lg sm:text-xl text-gray-900">Live</h4>
//             <h4 className="text-lg sm:text-xl text-gray-900">Hybrid</h4>
//             <h4 className="text-lg sm:text-xl text-gray-900">Video</h4>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="mt-6 flex justify-center md:justify-start">
//               <button
//                 className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border bg-black text-white hover:bg-gray-800 font-semibold transition duration-300"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <span>Explore Courses</span>
//                 <span
//                   className={`transform transition-transform duration-300 font-bold ${
//                     isHovered
//                       ? "translate-x-0 opacity-100"
//                       : "translate-x-2 opacity-0"
//                   }`}
//                 >
//                   <FaArrowRight />
//                 </span>
//               </button>
//             </div>
//           </motion.button>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Hero;
