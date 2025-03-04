import React, { useState } from "react";

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

  // Track only ONE selected course
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const baseButtonClass =
    "rounded-full px-6 py-3 text-sm font-medium shadow-sm transition duration-200 ease-in-out cursor-pointer";

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#fff]">
      <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800">
        Trending Courses
      </h2>

      <div className="flex flex-col gap-4 mt-6">
        {/* Rows with buttons */}
        {[0, 5, 9].map((startIndex, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
            {courses.slice(startIndex, startIndex + (rowIndex === 2 ? 2 : 4)).map((label) => {
              const isSelected = selectedCourse === label;

              return (
                <button
                  key={label}
                  className={`${baseButtonClass} ${
                    isSelected
                      ? "bg-[#002726] text-white border-[#002726]"
                      : "bg-white text-gray-800 border border-black hover:bg-[#fffaf1] hover:text-black"
                  }`}
                  onClick={() => handleCourseClick(label)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
