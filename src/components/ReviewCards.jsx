import React from "react";
import { FaLinkedin } from "react-icons/fa";
import review from "../assets/ReviewIcon.png"; // Placeholder image

const reviews = [
  {
    name: "Arshi Kansal",
    companyName: "Company Name",
    review:
      "I recently completed the Generative AI course from AI Skills, and it was fantastic! The content was well-structured, and the hands-on projects made learning practical and engaging. Plus, the certification is a great addition to my resume! Highly recommend it to anyone looking to dive into AI!",
    image: review,
  },
  {
    name: "Sample Name 2",
    companyName: "Company Name",
    review: "Sample review I recently completed the Generative AI course from AI Skills, and it was fantastic! The content was well-structured, and the hands-on projects made learning practical and engaging. Plus, the certification is a great addition to my resume! Highly recommend it to anyone looking to dive into AI!",
    image: review,
  },
  {
    name: "Sample Name 3",
    companyName: "Company Name",
    review: "Sample review I recently completed the Generative AI course from AI Skills, and it was fantastic! The content was well-structured, and the hands-on projects made learning practical and engaging. Plus, the certification is a great addition to my resume! Highly recommend it to anyone looking to dive into AI!",
    image: review,
  },
  {
    name: "Sample Name 4",
    companyName: "Company Name ",
    review: "Sample review I recently completed the Generative AI course from AI Skills, and it was fantastic! The content was well-structured, and the hands-on projects made learning practical and engaging. Plus, the certification is a great addition to my resume! Highly recommend it to anyone looking to dive into AI!",
    image: review,
  },
];

const ReviewCards = () => {
  return (
    <div className="w-full bg-white text-black py-12 font-[Inter]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-10">
          Why our learners love us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="Hover:bg-[#fff] p-6 rounded-3xl border-2 border-[#444444]
              shadow-lg hover:shadow-2xl hover:scale-105 hover:border-yellow hover:bg-[#fffaf1]
              transition-all duration-300 
              w-full max-w-[360px] min-h-[400px]
              flex flex-col justify-between"
            >
              <div className="flex flex-col items-center">
                {/* LinkedIn Icon with Style */}
                <div className="flex justify-end w-full mb-4">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin
                      size={40}
                      className="text-[#0077B5] p-2 bg-white border-2 border-[#0077B5] rounded-full transition-all duration-300 hover:bg-[#0077B5] hover:text-white"
                    />
                  </a>
                </div>

                {/* User Profile Image */}
                <img
                  src={review.image}
                  alt="User"
                  className="rounded-full w-24 h-24 mb-4 border-4 border-[#444444] hover:scale-105 transition-all duration-300"
                />
                <p className="text-xl font-semibold text-black">
                  {review.name}
                </p>
                <p className="text-sm text-gray-600">{review.companyName}</p>
              </div>

              {/* Review Text */}
              <p className="text-sm mt-4 text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCards;
