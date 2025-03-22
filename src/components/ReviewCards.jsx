import React from "react";
import review from "../assets/reviewimage.jpg";

const testimonials = [
  {
    name: "Neha Sharma",
    image: review,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4.8,
  },
  {
    name: "Neha Sharma",
    image: review,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4.8,
  },
  {
    name: "Neha Sharma",
    image: review,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4.8,
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 bg-white px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black mb-8 text-start sm:text-left font-impact">
        WHY OUR LEARNERS LOVE US <span className="text-red-500">❤</span>
      </h1>

      {/* Testimonials Grid */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-6 font-Roboto Condensed">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#0F7768] text-white w-full sm:w-[48%] lg:w-[31.5%] min-h-[350px] p-6 rounded-xl shadow-lg text-left transition-all duration-300 hover:scale-105"
          >
            {/* Circular Image and Name Section */}
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <h3 className="text-xl font-bold mt-4 sm:mt-0 sm:ml-6 tracking-wide text-center sm:text-left">
                {testimonial.name}
              </h3>
            </div>

            {/* Review Text */}
            <p className="text-sm sm:text-base leading-relaxed text-gray-200 mt-4">
              {testimonial.review}
            </p>

            {/* Rating Section */}
            <div className="mt-4 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-yellow-400 font-semibold text-sm sm:text-base">
              <span className="text-white font-bold">
                RATING {testimonial.rating}
              </span>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;