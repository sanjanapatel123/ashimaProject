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
    <div className="bg-black text-white py-10 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="text-center text-[45px] sm:text-5xl font-impact uppercase mb-10">
        RIDE THE AI WAVE WITH US
      </h2>

      {/* Cards + Arrows wrapper */}

      <div className="w-full flex justify-center">
        <div className="grid grid-cols-4 gap-6">
          {courses.slice(0, 4).map((course, index) => (
            <div
              key={index}
              className="bg-white text-black w-[320px] h-[455px] rounded-[4px] shadow-lg p-6 sm:w-[340px] sm:min-w-[340px] flex-shrink-0"
            >
              <h3 className="mb-4 font-impact text-[24px] uppercase">
                {course.title}
              </h3>
              <img
                src={course.image}
                alt={course.title}
                className="w-[280px] h-[208px] object-cover rounded-[4px] mb-4"
              />
              <p className="text-[16px] font-Roboto Condensed text-[#1E1E1E] uppercase mb-4 line-clamp-3">
                {course.description}
              </p>
              <button className="w-full sm:w-44 py-2 bg-black text-white font-bold rounded-xl hover:bg-gray-900 transition">
                EXPLORE COURSES
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}

      <div className="flex items-center justify-between w-full max-w-[1380px] mx-auto mt-10 px-4">
        {/* Left Arrow shifted slightly left */}
        <div className="ml-[-20px]">
          <button
            onClick={scrollLeft}
            className="bg-[#00E0C6] text-black p-2 rounded-full hover:bg-[#00c5b0] transition"
          >
            <FaArrowLeft className="h-3 w-3" />
          </button>
        </div>

        {/* Dots */}
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

        {/* Right Arrow shifted slightly right */}
        <div className="mr-[-25px]">
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




