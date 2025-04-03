import React, { useState, useRef } from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import Header from "./Courses/Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Blog = () => {
  const trendingCourses = [
    "All Blogs",
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

  const [selectedCourse, setSelectedCourse] = useState("");
  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const blogPosts = [
    {
      imageUrl: blog2,
      meta: "25.march.2025",
      title: "LangGraph Tutorial for Beginners to Build AI Agents",
      description:
        "A step-by-step, hands-on Langgraph tutorial that takes you from the basics to advanced concepts, helping you quickly.",
      link: "#",
    },
    {
      imageUrl: blog3,
      meta: "25.march.2025",
      title: "LangGraph Tutorial for Beginners to Build AI Agents",
      description:
        "A step-by-step, hands-on Langgraph tutorial that takes you from the basics to advanced concepts, helping you quickly.",
      link: "#",
    },
    {
      imageUrl: blog4,
      meta: "25.march.2025",
      title: "LangGraph Tutorial for Beginners to Build AI Agents",
      description:
        "A step-by-step, hands-on Langgraph tutorial that takes you from the basics to advanced concepts, helping you quickly.",
      link: "#",
    },
    {
      imageUrl: blog5,
      meta: "25.march.2025",
      title: "LangGraph Tutorial for Beginners to Build AI Agents",
      description:
        "A step-by-step, hands-on Langgraph tutorial that takes you from the basics to advanced concepts, helping you quickly.",
      link: "#",
    },
    // Add more blog post objects as needed
  ];
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="hero bg-[#047670] py-24 sm:px-6 md:px-10  flex flex-col lg:flex-row justify-around gap-10 flex-wrap pt-32">
        <div className="bg-[#ffffff] rounded-lg shadow-md p-3 w-full lg:w-[670px] h-auto">
          <img
            src={blog1}
            className="w-full h-auto max-h-[360px] object-cover rounded-md"
          />
          <div className="mt-4">
            <span className="text-[12px] font-normal text-[#1E1E1E1] font-jost">
              25 Mar 2025
            </span>
            <span className="mx-2 text-[12px] font-normal text-[#1E1E1E1] font-jost">
              |
            </span>
            <span className="text-[12px] font-normal text-[#1E1E1E1] font-jost">
              Featured
            </span>
          </div>
          <h2 className="text-[24px] sm:text-[28px] md:text-[36px] text-[#047670] mt-2 font-normal font-impact">
            How to Use Large Concept Models for Text Generation?
          </h2>
          <p className="text-[16px] sm:text-[18px] font-jost font-semibold text-[#1E1E1E] mt-3">
            Explore Large Concept Models, their architecture, differences from
            LLMs, implementation guide, and applications.
          </p>
          {/* <button className="block mt-4 bg-[#047670] text-[#ffffff] text-[18px] sm:text-[20px] md:text-[22px] font-roboto border-[1px] font-bold rounded-[12px] h-[57px] w-full sm:w-[355px]">
            Best Artificial Intelligence Blogs
          </button> */}
          <button className="mt-4 bg-[#047670] text-[#ffffff] text-[18px] sm:text-[20px] md:text-[22px] font-roboto border font-bold rounded-[12px] h-[57px] w-full sm:w-[355px] flex justify-center items-center">
            Best Artificial Intelligence Blogs
          </button>
        </div>

        {/* Sign-Up Form */}
        <div className="bg-[#ffffff] w-full sm:w-[400px] h-auto p-6 rounded-lg shadow-md mt-10 lg:mt-20">
          <h3 className="text-[24px] sm:text-[30px] font-normal font-impact text-[#000000]">
            Start Learning Now
          </h3>
          <p className="text-[14px] sm:text-[16px] text-[#000000] font-[500px] font-jost mt-2">
            Learn by Doing
          </p>
          <div className="mt-4 space-y-4">
            <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-5 h-5 mr-2"
              />
              SIGN UP WITH LINKEDIN
            </button>
            <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              SIGN UP WITH GOOGLE
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 text-sm">Or Use Email</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="space-y-3">
            <label className="text-[16px] sm:text-[18px] font-roboto font-normal text-[#1E1E1E]">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />

            <label className="text-[16px] sm:text-[18px] font-roboto font-normal text-[#1E1E1E]">
              PASSWORD
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full h-[47px] bg-[#1E1E1E]/10 text-[#1E1E1E]/50 font-medium py-2 rounded-lg mt-4 cursor-not-allowed text-[16px] sm:text-[18px]">
            SIGN UP
          </button>

          <p className="text-[12px] font-roboto font-normal text-center text-[#047670] mt-3">
            By continuing, you agree to AI Skills{" "}
            <a href="#" className="text-blue-600">
              Terms
            </a>
            and
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>
      {/* Blog Categories */}
      <section className="bg-white py-8 px-10">
        <h2 className="text-[50px] font-impact font-normal text-[#000000] mb-12">
          <span className="text-[#000000">TRENDING </span>
          <span className="text-[#047670]">NEWSLETTER</span>
        </h2>
        <div className="flex flex-col gap-3">
          {[0, 5, 9].map((startIndex, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-4 sm:gap-4 "
            >
              {trendingCourses
                .slice(startIndex, startIndex + [5, 4, 2][rowIndex])
                .map((label) => {
                  const isSelected = selectedCourse === label;
                  return (
                    <button
                      key={label}
                      onClick={() => handleCourseClick(label)}
                      className={`px-2 py-2 rounded-full text-[16px] font-Roboto Condensed fw-bold uppercase border transition-all
                ${
                  isSelected
                    ? "bg-[#047670] text-[#fff] border-[#002726]"
                    : "bg-[#f4F3F3] text-gray-800 border-[#000000] hover:bg-[#fffaf1] hover:text-[#000000]"
                }`}
                    >
                      {label}
                    </button>
                  );
                })}
            </div>
          ))}
        </div>
      </section>

      <section className="blog-posts px-10 sm:px-6 md:px-10 mt-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-auto">
          {blogPosts.map((post, index) => (
            <Link
              to="/blogsDetail"
              key={index}
              className="bg-[#ffffff] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:bg-[#fffaf1]"
            >
              <div
                className="h-[235px] bg-cover bg-center transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              ></div>
              <div className="p-3">
                <div className="font-jost font-normal text-[12px] text-[#000000]">
                  {post.meta}
                </div>
                <h3 className="text-[20px] font-impact font-normal text-[#000000] ">
                  {post.title}
                </h3>
                <p className="text-[12px] text-[#1E1E1E1]/80 font-normal font-jost">
                  {post.description}
                </p>

                <div className="inline-flex justify-center items-center bg-[#047670] text-white w-[225px] h-[42px] text-[14px] font-bold font-roboto rounded-[8px] border-[1px] mt-2">
                  Best Artificial Intelligence Blogs
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination (Optional) */}

        <div className="flex justify-center items-center gap-2 mt-10 font-jost text-sm">
          {/* Previous */}
          <a
            href="#"
            className="flex items-center gap-1 px-3 py-1 border border-[#047670] rounded-md text-[#757575] hover:bg-[#047670]/10"
          >
            ← <span>Previous</span>
          </a>

          {/* Page 1 (active) */}
          <a
            href="#"
            className="px-3 py-1 bg-[#047670] text-[#fff] rounded-md font-bold border border-[#047670]"
          >
            1
          </a>

          {/* Other pages */}
          <a
            href="#"
            className="px-3 py-1 border border-[#047670] text-[#000000] rounded-md"
          >
            2
          </a>
          <a
            href="#"
            className="px-3 py-1 border border-[#047670] text-[#000000] rounded-md"
          >
            3
          </a>
          <span className="px-2 text-gray-500">...</span>
          <a
            href="#"
            className="px-3 py-1 border border-[#047670] text-[#000000] rounded-md"
          >
            67
          </a>

          {/* Next */}
          <a
            href="#"
            className="flex items-center gap-1 px-3 py-1 border border-[#047670] rounded-md text-[#000000] hover:bg-[#047670]/10"
          >
            <span>Next</span> →
          </a>
        </div>
      </section>

      {/* Trending Section */}

      <section className="trending-section px-10 mt-12 mb-10">
        <h2 className="text-[50px] font-impact font-normal text-[#000000] mb-12">
          <span className="text-[#000000">TRENDING </span>
          <span className="text-[#047670]">TUTORIALS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "DATA SCIENCE TUTORIAL",
            "HOW TO BECOME A DATA SCIENTIST",
            "LEARN TO BE A PRO",
            "DATA SCIENCE",
            "DATA SCIENCE TUTORIAL",
            "HOW TO BECOME A DATA SCIENTIST",
            "LEARN TO BE A PRO",
            "DATA SCIENCE",
          ].map((item, index) => {
            const bgColors = [
              "bg-[#09D0C6]",
              "bg-[#FF757A]",
              "bg-[#A393FF]",
              "bg-[#FEE08B]",
            ];
            return (
              <div
                key={index}
                className={` h-[216px]  w-[300px] flex items-center justify-center text-center text-[#1E1E1E] font-jost font-normal text-[20px] px-2 ${
                  bgColors[index % 4]
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </section>
      <section className="trending-section px-10 mt-16 mb-10">
        <h2 className="text-[50px] font-impact font-normal text-[#000000] mb-12">
          <span className="text-[#000000">TRENDING </span>
          <span className="text-[#047670]">BLOGS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "DATA SCIENCE TUTORIAL",
            "HOW TO BECOME A DATA SCIENTIST",
            "LEARN TO BE A PRO",
            "DATA SCIENCE",
            "DATA SCIENCE TUTORIAL",
            "HOW TO BECOME A DATA SCIENTIST",
            "LEARN TO BE A PRO",
            "DATA SCIENCE",
          ].map((item, index) => {
            const bgColors = [
              "bg-[#09D0C6]",
              "bg-[#FF757A]",
              "bg-[#A393FF]",
              "bg-[#FEE08B]",
            ];
            return (
              <div
                key={index}
                className={` h-[216px]  w-[300px] flex items-center justify-center text-center text-[#1E1E1E] font-jost font-normal text-[20px] px-2 ${
                  bgColors[index % 4]
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
