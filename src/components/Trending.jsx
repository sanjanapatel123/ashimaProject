import React from "react";

const Trending = () => {
  const courses = [
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
  ];

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
        Trending Courses
      </h2>

      <div className="flex flex-col gap-4">
        {/* Row 1 - 5 buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {courses.slice(0, 5).map((label, index) => (
            <button
              key={index}
              className="rounded-full bg-white text-gray-800 border border-gray-400 px-6 py-3 text-sm font-medium shadow-sm hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white active:bg-green-700 transition duration-200 ease-in-out"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Row 2 - 4 buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {courses.slice(5, 9).map((label, index) => (
            <button
              key={index}
              className="rounded-full bg-white text-gray-800 border border-gray-400 px-6 py-3 text-sm font-medium shadow-sm hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white active:bg-green-700 transition duration-200 ease-in-out"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Row 3 - 2 buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {courses.slice(9, 11).map((label, index) => (
            <button
              key={index}
              className="rounded-full bg-white text-gray-800 border border-gray-400 px-6 py-3 text-sm font-medium shadow-sm hover:bg-green-600 hover:text-white focus:bg-green-600 focus:text-white active:bg-green-700 transition duration-200 ease-in-out"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;





