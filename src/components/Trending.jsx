import React, { useRef, useState } from "react";
import { LuClock12 } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import trending1 from "../assets/trending1.png";
import trending2 from "../assets/trending2.png";
import trending3 from "../assets/trending3.png";
import trending from "../assets/trending.png";

const courses = [
  {
    img: trending1,
    title: "AI AND ML",
    mentor: "Kapil Sharma",
    rating: 4.8,
    duration: "5 HRS",
  },
  {
    img: trending2,
    title: "DATA SCIENCE & ENGINEERING",
    mentor: "Kapil Sharma",
    rating: 4.8,
    duration: "5 HRS",
  },
  {
    img: trending3,
    title: "AI AND ML",
    mentor: "Kapil Sharma",
    rating: 4.8,
    duration: "5 HRS",
  },
];

const trendingCourses = [
  "AI & ML",
  "DEVOPS",
  "NO CODE",
  "DATA SCIENCE AND ENGINERRING",
  "DESIGN AND DEVLOPMENT",
  "Cybersecurity & Testing",
  "Business & Leadership",
  "Marketing & Sales",
  "No Code",
  "Gaming & Network",
  "Founder Connect",
];

const TrendingWithCards = () => {
  const sliderRef = useRef(null);
  const [selectedCourse, setSelectedCourse] = useState("");

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#fff] relative">
      {/* Title */}
      <h2 className="text-6xl sm:text-5xl md:text-5xl mb-8 text-center leading-[50px] sm:leading-[60px] tracking-[0.5%] font-[400] text-[#000000] font-impact">
        TRENDING <span className="text-[#047670]">COURSES</span>
      </h2>

      {/* Course Categories */}

      <div className="flex flex-col gap-6 mt-10">
        {[0, 4, 8].map((startIndex, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {trendingCourses.slice(startIndex, startIndex + 4).map((label) => {
              const isSelected = selectedCourse === label;
              return (
                <button
                  key={label}
                  className={`px-10 py-2 rounded-full text-[14px] font-semibold uppercase border transition-all ${
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

      {/* Scrollable Courses Section */}

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#fff] relative font-Roboto Condensed case-uppercase">
        {/* Scrollable Courses Section */}
        <div className="relative lg:max-w-[2000px] mx-auto mt-10">
          {/* Scrollable Cards Container */}
          <div
            ref={sliderRef}
            className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="w-[450px] min-w-[450px] rounded-xl border border-black overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white"
              >
                {/* Image Section */}
                <div className="relative h-[500px] overflow-hidden bg-black">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />

                  {/* "Top Rated" Badge */}
                  {/* <div className="absolute top-3 right-3">
                    <img src={trending} alt="Top Rated" className="h-12 w-12" />
                  </div>  */}

                  {/* Stronger Blur Overlay & Text */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-black/40 px-4 pb-6 pt-20 text-white font-semibold">
                    {/* Course Title */}
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <p className="text-sm">{course.mentor}</p>

                    {/* Rating & Duration */}
                    <div className="flex justify-between items-center text-sm mt-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.floor(course.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          >
                            ★
                          </span>
                        ))}
                        <span className="text-xs ml-1">{course.rating}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-300">
                        <LuClock12 /> {course.duration}
                      </div>
                    </div>

                    {/* "Learn More" Button */}
                    <button className="mt-4 w-40 px-6 py-2 bg-white text-black font-semibold rounded-3xl hover:bg-gray-200 transition">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between w-full mt-4 px-6">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
        >
          <FaArrowLeft className="h-5 w-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="bg-[#00E0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition"
        >
          <FaArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TrendingWithCards;






