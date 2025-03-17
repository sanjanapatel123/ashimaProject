import React, { useState } from "react";
import design1 from "../assets/Design1.jpg";
import design2 from "../assets/Design2.jpg";
import design3 from "../assets/Design3.jpg";
import design4 from "../assets/Design4.jpg";

const courses = [
  {
    title: "Art of Advertising",
    duration: "1.5+ Hours",
    mentor: "Sudeep Chawla",
    role: "Ex-Chief Marketing Manager - Pidilite, GrowthSchool",
    img: design1,
    mentorImg: design2,
  },
  {
    title: "SEO Ondemand",
    duration: "10+ Hours",
    mentor: "Kaushal",
    role: "Founder & MD, Infidigit",
    img: design2,
    mentorImg: design4,
  },
  {
    title: "Digital Marketing Kickstarter",
    duration: "4 Hours",
    mentor: "Multiple mentors from OTO, Google and 2 more",
    img: design3,
    mentorImg: design3,
  },
  {
    title: "Generative AI for Marketers",
    duration: "10+ Hours",
    mentor: "Multiple mentors from AdWorld and Even",
    img: design4,
    mentorImg:
      "https://i.ibb.co/hJ6nYkyG/2cd408e1-2e65-4667-b4c3-42f18fc9d77a.jpg",
  },
];

const trendingCourses = [
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

const TrendingWithCards = () => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const baseButtonClass =
    "rounded-full px-6 py-3 text-sm font-medium shadow-sm transition duration-200 ease-in-out cursor-pointer";

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#fff] font-[Inter]">
      <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">
        Trending Courses
      </h2>

      <div className="flex flex-col gap-4 mt-6">
        {[0, 6].map((startIndex, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-3">
            {trendingCourses.slice(startIndex, startIndex + 6).map((label) => {
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

      {/* Card Section */}
      <div className="bg-[#fff] relative lg:max-w-[1470px] mx-auto py-10 font-[Inter]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {courses.slice(0, 4).map((course, index) => (
            <div
              key={index}
              className="w-full rounded-xl border border-black overflow-hidden shadow-md hover:shadow-2xl transition-all bg-white hover:bg-[#fffaf1]"
            >
              <div className="relative h-64 group overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
                  {course.title}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-1 mb-3">
                  ⏱️ {course.duration}
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={course.mentorImg}
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Mentor"
                  />
                  <div className="text-xs text-gray-600">
                    <p className="font-medium text-gray-800">{course.mentor}</p>
                    <p className="text-gray-500">{course.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingWithCards;
