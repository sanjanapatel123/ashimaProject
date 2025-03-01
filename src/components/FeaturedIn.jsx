import React from "react";
import img from "../assets/learning2.jpg"; // Import your image for the background

const FeaturedIn = () => {
  return (
    <div className="relative py-16">
      {/* Content Section */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 md:mb-16">
          Featured in
        </h2>

        {/* Added flex-wrap and gap for responsive handling */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-70">
          <img
            src={img}
            alt="BBC"
            className="h-12 sm:h-16 object-contain opacity-50"
          />
          <img
            src={img}
            alt="The New York Times"
            className="h-12 sm:h-16 object-contain opacity-50"
          />
          <img
            src={img}
            alt="CNBC"
            className="h-12 sm:h-16 object-contain opacity-50"
          />
          <img
            src={img}
            alt="Forbes"
            className="h-12 sm:h-16 object-contain opacity-50"
          />
          <img
            src={img}
            alt="The Wall Street Journal"
            className="h-12 sm:h-16 object-contain opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
