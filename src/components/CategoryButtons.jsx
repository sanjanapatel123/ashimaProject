import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Ride1 from "../assets/RidePage1.png";
import Ride2 from "../assets/RidePage2.png";
import Ride3 from "../assets/RidePage3.png";
import Ride4 from "../assets/RidePage4.png";

const courses = [
  {
    title: "MARKETING & SALES",
    image: Ride1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "AI & MI",
    image: Ride2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "PRODUCTS",
    image: Ride3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "BUSINESS DEVELOPMENT",
    image: Ride4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    title: "BUSINESS DEVELOPMENT",
    image: Ride4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
];

const RideTheAIWave = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-black text-white py-10">
      {/* Heading */}
      <h2 className="text-center text-[45px] sm:text-5xl font-impact uppercase mb-10">
        RIDE THE AI WAVE WITH US
      </h2>

      {/* Cards + Arrows wrapper */}

      {/* Scrollable Cards Section */}
      <div className="relative overflow-hidden w-full">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-hide"
          // className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white text-black w-[320px] h-[455px] rounded-[4px] shadow-lg p-6 flex-shrink-0"
            >
              <h3 className="mb-4 font-impact text-[24px] uppercase">
                {course.title}
              </h3>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[208px] object-cover rounded-[4px] mb-4"
              />
              <p className="text-[16px] font-Roboto Condensed text-[#1E1E1E] uppercase mb-4 line-clamp-3">
                {course.description}
              </p>
              <button className="w-full py-2 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition">
                EXPLORE COURSES
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      {/* Navigation Dots & Arrows */}
      <div className="flex items-center justify-between w-full max-w-[1380px] mx-auto mt-10">
        <div className="">
          <button
            onClick={scrollLeft}
            className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowLeft className="h-3 w-3" />
          </button>
        </div>

        <div className="flex justify-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === 0 ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>

        <div className="">
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

export default RideTheAIWave;
