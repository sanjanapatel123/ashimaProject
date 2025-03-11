import React, { useState } from "react";
import { motion } from "framer-motion";
import market1 from "../assets/Market1.jpg";
import market2 from "../assets/Market2.jpg";
import market3 from "../assets/Market3.jpg";
import market4 from "../assets/Market4.jpg";
import design1 from "../assets/Design1.jpg";
import design2 from "../assets/Design2.jpg";
import design3 from "../assets/Design3.jpg";
import design4 from "../assets/Design4.jpg";
import { FaArrowRight } from "react-icons/fa";

const CategoryButtons = () => {
  const [isHovered, setIsHovered] = useState(false);
  const categories = [
    "Marketing & Sales",
    "AI & ML",
    "Data Science & Engineering",
    "Design & Development",
    "Product",
    "Business & Leadership",
    "Gen AI",
    "Gaming & Network",
    "Cybersecurity & Testing",
    "Founder Connect",
  ];

  const categoryDetails = {
    "Marketing & Sales": {
      image: market1,
      text: "Learn the latest strategies in Marketing & Sales, focusing on customer engagement and business growth.",
    },
    "AI & ML": {
      image: market2,
      text: "Dive into the world of Artificial Intelligence and Machine Learning, learning how these technologies are shaping the future.",
    },
    "Data Science & Engineering": {
      image: market3,
      text: "Master data analysis, engineering, and interpretation to solve complex problems using data-driven approaches.",
    },
    "Design & Development": {
      image: market4,
      text: "Understand design and development from UI/UX to web and app development.",
    },
    Product: {
      image: design1,
      text: "Learn about product management, development, and strategies to launch successful products.",
    },
    "Business & Leadership": {
      image: design2,
      text: "Enhance your leadership skills and business acumen to excel in today's competitive market.",
    },
    "Gen AI": {
      image: design3,
      text: "Explore the revolutionary impact of Generative AI and how it's transforming industries.",
    },
    "Gaming & Network": {
      image: design4,
      text: "Get hands-on experience in gaming and network technologies, focusing on design, coding, and game mechanics.",
    },
    "Cybersecurity & Testing": {
      image: design1,
      text: "Learn the essential skills for securing systems and conducting vulnerability tests in the digital world.",
    },
    "Founder Connect": {
      image: design2,
      text: "Connect with fellow founders, share insights, and learn from the experiences of others in the entrepreneurial world.",
    },
  };

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 font-[Inter]">
      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
      >
        RIDE THE AI WAVE WITH US
      </h1>

      {/* Top Section - Buttons */}
      <div className="flex justify-start items-center gap-4 overflow-x-auto scrolling-touch scrollbar-hidden">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === category
                ? "bg-[#002726] text-white"
                : "hover:bg-[#fffaf1] text-gray-700 border border-black"
            } hover:bg-beige-200`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Middle Section - Dynamic Content */}
      <div className="mt-8 flex gap-8 md:gap-24 items-center flex-col md:flex-row">
        {/* Left Side - Image with Slide-in Animation */}
        <motion.div
          className="flex justify-center items-start w-full md:w-[600px]"
          key={activeCategory}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <img
            src={categoryDetails[activeCategory].image}
            alt={activeCategory}
            className="mt-4 rounded-xl shadow-md w-full md:w-[500px] h-[300px]"
          />
        </motion.div>

        {/* Right Side - Text with Slide-in Animation */}
        <motion.div
          className="flex flex-col justify-center items-start ml-auto w-full md:w-2/4 mt-4 md:mt-0"
          key={activeCategory + "-text"}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <motion.p
            className="text-2xl font-bold text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5 }}
          >
            {activeCategory}
          </motion.p>

          {categoryDetails[activeCategory].text
            .split("\n")
            .map((line, index) => (
              <motion.p
                key={index}
                className={`text-lg font-medium text-gray-700 mt-4 ${
                  index > 0 ? "mt-6" : ""
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.3, duration: 0.8 }}
                viewport={{ amount: 0.5 }}
              >
                {line}
              </motion.p>
            ))}
        </motion.div>
      </div>

      {/* Bottom Section - Explore Courses Button */}

      <motion.button
        className="flex items-center  text-white hover:bg-green-800 bg-[#004726] justify-center gap-2 px-5 py-3 rounded-full border font-semibold transition duration-300 mb-5 mx-auto mt-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Explore Courses</span>
        <motion.span
          initial={{ x: 10, opacity: 0 }}
          animate={{
            x: isHovered ? 0 : 10,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <FaArrowRight />
        </motion.span>
      </motion.button>
    </div>
  );
};

export default CategoryButtons;
