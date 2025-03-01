import React, { useState } from "react";
import market1 from "../assets/Market1.jpg";
import market2 from "../assets/Market2.jpg";
import market3 from "../assets/Market3.jpg";
import market4 from "../assets/Market4.jpg";
import design1 from "../assets/Design1.jpg";
import design2 from "../assets/Design2.jpg";
import design3 from "../assets/Design3.jpg";
import design4 from "../assets/Design4.jpg";

const CategoryButtons = () => {
  const categories = [
    "Marketing",
    "Tech",
    "Growth",
    "Data",
    "Design",
    "Product",
    "Business",
    "Gen AI",
  ];

  const categoryImages = {
    Marketing: market1,
    Tech: market2,
    Growth: market3,
    Data: market4,
    Design: design1,
    Product: design2,
    Business: design3,
    "Gen AI": design4,
  };

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        RIDE THE AI WAVE WITH US
      </h1>

      {/* Top Section - Buttons */}
      <div className="flex justify-between items-start">
        {/* Left Side - Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-900 text-white"
                  : "bg-white text-gray-700 border border-gray-400"
              } hover:bg-beige-200 hover:text-black`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Middle Section - Dynamic Content */}
      <div className="mt-12 grid grid-cols-2 gap-4">
        {/* Left Side - Image (Centered) */}
        <div className="flex justify-center items-start">
          <img
            src={categoryImages[activeCategory]}
            alt={activeCategory}
            className="mt-4 rounded-xl shadow-md w-96"
          />
        </div>
      </div>

      {/* Bottom Section - Explore Courses Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold text-lg shadow-md hover:bg-green-800 transition">
          Explore Courses &gt;&gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default CategoryButtons;
