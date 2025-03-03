// import React from "react";
// import img from "../assets/Bookimg.png";

// const HeroSection = () => {
//   return (
//     <div
//       className="relative w-full h-[80px] sm:h-[150px] md:h-[150px] lg:h-[350px] flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 text-white"
//       style={{
//         backgroundImage: `url(${img})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
//         Start Your Learning Journey Today.
//       </h1>
//       <p className="mt-4 max-w-2xl text-base sm:text-lg">
//         Unlock endless opportunities with expert-led courses. Learn anytime,
//         anywhere, and boost your skills for a brighter future.
//       </p>
//       <button className="mt-6 px-6 py-3 bg-green-700 text-white font-bold rounded hover:bg-green-900 transition">
//         Get Started!
//       </button>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";
import img from "../assets/Bookimg.png";

const HeroSection = () => {
  return (
    <div
      className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[400px] flex flex-col justify-center items-start px-6 sm:px-12 lg:px-20 text-white"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Start Your Learning Journey Today.
      </h1>
      <p className="mt-4 max-w-2xl text-base sm:text-lg">
        Unlock endless opportunities with expert-led courses. Learn anytime,
        anywhere, and boost your skills for a brighter future.
      </p>
      <button className="mt-6 px-6 py-3 bg-green-700 text-white font-bold rounded hover:bg-green-900 transition">
        Get Started!
      </button>
    </div>
  );
};

export default HeroSection;
