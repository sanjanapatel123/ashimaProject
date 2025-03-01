import React, { useState } from "react";

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
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default active category

  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        RIDE THE AI WAVE WITH US
      </h1>
      <div className="flex justify-center mb-16">
        <div
          className="inline-flex rounded-md shadow-sm flex-wrap justify-center gap-2"
          role="group"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-lg text-lg shadow-md transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-900 text-white"
                  : "bg-white text-gray-700"
              } hover:bg-green-700`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryButtons;
