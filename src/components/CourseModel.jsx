import React, { useState } from "react";

const Modal = ({ closeModal }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState({
    marketing: false,
    tech: false,
    growth: false,
  });

  // Function to toggle individual category's visibility
  const toggleCategory = (category) => {
    setIsCategoryOpen((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 transition-opacity"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 w-3/4 lg:w-1/2 rounded-lg overflow-auto transition-transform transform"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Mentorship Programs</h2>
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <p className="text-gray-600 mb-4">
          Get personalized guidance from industry experts
        </p>

        {/* Categories */}
        <div className="space-y-4">
          <div className="space-y-2">
            <button
              onClick={() => toggleCategory("marketing")}
              className="text-left w-full text-gray-800 flex justify-between items-center font-semibold"
            >
              Marketing <i className={`fas fa-chevron-${isCategoryOpen.marketing ? "up" : "down"}`}></i>
            </button>
            {isCategoryOpen.marketing && (
              <div className="ml-4 space-y-1 text-gray-600">
                <p>SEO</p>
                <p>Digital Marketing</p>
                <p>Performance Marketing</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => toggleCategory("tech")}
              className="text-left w-full text-gray-800 flex justify-between items-center font-semibold"
            >
              Tech <i className={`fas fa-chevron-${isCategoryOpen.tech ? "up" : "down"}`}></i>
            </button>
            {isCategoryOpen.tech && (
              <div className="ml-4 space-y-1 text-gray-600">
                <p>Python for Data Science</p>
                <p>Deep Learning for Beginners</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <button
              onClick={() => toggleCategory("growth")}
              className="text-left w-full text-gray-800 flex justify-between items-center font-semibold"
            >
              Growth <i className={`fas fa-chevron-${isCategoryOpen.growth ? "up" : "down"}`}></i>
            </button>
            {isCategoryOpen.growth && (
              <div className="ml-4 space-y-1 text-gray-600">
                <p>Growth Marketing Fundamentals</p>
              </div>
            )}
          </div>

          {/* Add more categories here as needed */}
        </div>

        {/* Self-Paced Programs */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Self-Paced Programs</h3>
          <p className="text-gray-600 mb-4">
            Programs to give you a perfect overview at your own speed
          </p>

          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="font-semibold text-gray-800">Art of Advertising</h4>
              <p className="text-gray-600">by Sudeep Chawla, Ex-Chief Marketing Manager</p>
              <p className="text-gray-600">Live and Recorded</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="font-semibold text-gray-800">SEO Ondemand</h4>
              <p className="text-gray-600">by Kaushal, Founder & MD, Infidigit</p>
              <p className="text-gray-600">Live</p>
            </div>

            <div className="bg-gray-100 p-4 rounded-md">
              <h4 className="font-semibold text-gray-800">Digital Marketing Kickstarter</h4>
              <p className="text-gray-600">Multiple mentors from OTO, Google and more</p>
            </div>

            {/* Add more self-paced programs here */}
          </div>
        </div>

        {/* Apply Button */}
        <div className="mt-6 flex justify-end">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">
            Apply as Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
