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
  "Cybersecurity & Testing",
  "DATA SCIENCE AND ENGINERRING",
  "DESIGN AND DEVLOPMENT",
  "Founder Connect",
  "Gaming & Network",
  "Product",
  "bussiness and leadership",
  "Marketing & Sales",
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
    <div className="w-full py-8 bg-[#f4F3F3] relative overflow-hidden pb-20">
      {/* Title */}
      <h2 className="text-[55px] sm:text-5xl md:text-5xl mb-6 sm:mb-8 text-center leading-snug sm:leading-[60px] tracking-[0.5%] font-[400] text-[#000000] font-impact">
        TRENDING <span className="text-[#047670]">COURSES</span>
      </h2>

      {/* Course Categories */}
      <div className="flex flex-col gap-3 mt-5 w-full">
        {[0, 5, 9].map((startIndex, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-4 sm:gap-4"
          >
            {trendingCourses
              .slice(startIndex, startIndex + [5, 4, 2][rowIndex])
              .map((label) => {
                const isSelected = selectedCourse === label;
                return (
                  <button
                    key={label}
                    onClick={() => handleCourseClick(label)}
                    className={`px-2 py-2 rounded-full text-[16px] font-Roboto Condensed uppercase border transition-all 
                ${
                  isSelected
                    ? "bg-[#002726] text-white border-[#002726]"
                    : "bg-[#f4F3F3] text-gray-800 border-black hover:text-black"
                }`}
                  >
                    {label}
                  </button>
                );
              })}
          </div>
        ))}
      </div>

      {/* Scrollable Courses Section */}
      <div className=" px-2 sm:px-6 lg:px-8 py-8 bg-[#f4F3F3] relative font-Roboto Condensed uppercase">
        <div className="relative max-w-full overflow-x-auto mt-10">
          <div
            ref={sliderRef}
            className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
          >
            {courses.map((course, index) => (
              <div
                key={index}
                className="min-w-[270px] sm:min-w-[350px] lg:min-w-[400px] w-full max-w-[400px]  rounded-xl border border-black overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-[#f4F3F3] uppercaseer"
              >
                <div className="relative h-[450px] sm:h-[500px] w-full overflow-hidden bg-black uppercase">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-black/20 backdrop-blur-sm px-4 pb-4 pt-4 text-white font-Roboto Condensed tracking-wide">
                    <h3 className="text-[25px]  mb-1">{course.title}</h3>
                    <p className="text-[18px] mb-1">{course.mentor}</p>

                    <div className="flex justify-between items-center text-[14px] mt-1 uppercase">
                      <div className="flex items-center gap-1">
                        <span className="text-white font-Roboto Condensed text[14px]">
                          RATING {course.rating}
                        </span>
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={
                              i < Math.floor(course.rating)
                                ? "text-yellow-400"
                                : "text-white"
                            }
                          >
                            ★
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-300">
                        <LuClock12 className="w-6 h-6" /> {course.duration}
                      </div>
                    </div>

                    <button className="mt-3 w-36 px-8 py-2 bg-white text-black rounded-3xl hover:bg-gray-200 transition text-sm font-Roboto Condensed">
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

      {/* <div className="mt-8 px-8 flex justify-between">
        <button
          onClick={scrollLeft}
          className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
        >
          <FaArrowLeft className="h-3 w-3" />
        </button>
        <button
          onClick={scrollRight}
          className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
        >
          <FaArrowRight className="h-3 w-3" />
        </button>
      </div> */}
      {/* Navigation Arrows */}
      {/* <div className="absolute top-[92%] -translate-y-1/2 w-full px-4 flex justify-between pointer-events-none">
        <button
          onClick={scrollLeft}
          className="bg-[#09D0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition pointer-events-auto"
        >
          <FaArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={scrollRight}
          className="bg-[#09D0C6] text-black p-3 rounded-full hover:bg-[#00c5b0] transition pointer-events-auto"
        >
          <FaArrowRight className="h-4 w-4" />
        </button>
      </div> */}

      <div className="flex items-center justify-between w-full max-w-[1380px] mx-auto">
        <div className="ml-7">
          <button
            onClick={scrollLeft}
            className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowLeft className="h-3 w-3" />
          </button>
        </div>

        <div className="mr-7">
          <button
            onClick={scrollRight}
            className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingWithCards;
