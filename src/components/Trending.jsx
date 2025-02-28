import React from "react";

const Trending = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-5xl font-bold mb-8 text-center">Trending Courses</h2>
      <div className="flex flex-wrap gap-4 mb-12">
        {[
          "AI & ML",
          "Data Science & Engineering",
          "Product",
          "Design & Development",
          "DevOps",
          "Cybersecurity & Testing",
          "Business & Leadership",
          "Marketing & Sales",
          "No Code",
          "Gaming & Network",
          "Founder Connect",
        ].map((label, index) => (
          <button
            key={index}
            className="rounded-[20px] bg-white text-black border border-gray-300 px-6 py-2 text-sm font-medium hover:bg-green-800 hover:text-white focus:bg-green-800 focus:text-white active:bg-green-800 active:text-white"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Trending;
