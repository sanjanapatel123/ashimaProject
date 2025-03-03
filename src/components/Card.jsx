import { useRef } from "react";
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
  {
    title: "Generative AI for Marketers",
    duration: "10+ Hours",
    mentor: "Multiple mentors from AdWorld and Even",
    img: design4,
    mentorImg:
      "https://i.ibb.co/hJ6nYkyG/2cd408e1-2e65-4667-b4c3-42f18fc9d77a.jpg",
  },
];

const Card = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div className="bg-[#fffaf1] relative lg:max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Left Arrow - Thoda Door */}

      {/* Card Container - Large Enough to Show 4 Cards */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-[48%] md:w-[32%] lg:w-80 rounded-xl border border-black overflow-hidden shadow-md hover:shadow-2xl transition-all bg-white hover:bg-yellow-50"
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
                  {index === 2 || index === 3 ? (
                    <p className="text-gray-500">{course.mentor}</p>
                  ) : (
                    <p className="text-gray-500">{course.role}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
