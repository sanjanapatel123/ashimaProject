import React from "react";
import img from "../assets/image copy 3.png"; // Import your image for the background

const FeaturedIn = () => {
  return (
    <div className="relative py-16">
    
    

      {/* Content Section */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-6xl font-bold mb-16">Featured in</h2>

        <div className="flex justify-center space-x-12 opacity-70">
          <img src={img} alt="BBC" className="h-16 object-contain opacity-50" />
          <img
            src={img}
            alt="The New York Times"
            className="h-16 object-contain opacity-50"
          />
          <img
            src={img}
            alt="CNBC"
            className="h-16 object-contain opacity-50"
          />
          <img
            src={img}
            alt="Forbes"
            className="h-16 object-contain opacity-50"
          />
          <img
            src={img}
            alt="The Wall Street Journal"
            className="h-16 object-contain opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;