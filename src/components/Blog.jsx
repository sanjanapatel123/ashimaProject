import React from "react";
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
const Blog = () => {
    const blogPosts = [
      {
        imageUrl: blog2,
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
      {/* Hero Section */}
      <section className="hero bg-[#047670] py-24 px-4 sm:px-6 md:px-10 h-auto flex flex-col lg:flex-row justify-evenly gap-10 flex-wrap">
        <div className="bg-white rounded-lg shadow-md p-5 w-full lg:w-[670px] h-auto">
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
          <button className="block mt-4 bg-[#047670] text-[#ffffff] text-[18px] sm:text-[20px] md:text-[22px] font-roboto border-[1px] font-bold rounded-[12px] h-[57px] w-full sm:w-[355px]">
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
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>

      {/* Blog Categories */}
    

      <section className="px-10 mt-12">
        <h2 className="text-[50px] font-normal font-impact text-[#000000] mb-10">
          Blog Categories
        </h2>

        <div className="flex flex-wrap justify-center items-center  gap-3 w-[993px] h-[140px] ml-44">
          {/* First Row - 5 */}
          {[
            "AI & ML",
            "Devops",
            "NO CODE",
            "CYBER SECURITY AND TESTING",
            "DATA SCIENCE AND ENGINEERING",
          ].map((category, index) => (
            <span
              key={index}
              className="px-4 py-1 border-[1px] border-[#1E1E1E] rounded-[16px] font-roboto text-[16px] font-bold text-[#1E1E1E] whitespace-nowrap"
            >
              {category}
            </span>
          ))}

          {/* Row break (invisible but full width) */}
          <div className="w-full h-0" />

          {/* Second Row - 4 */}
          {[
            "DESIGN AND DEVELOPMENT",
            "FOUNDER CONNECT",
            "GAMING AND NETWORK",
            "PRODUCT",
          ].map((category, index) => (
            <span
              key={index + 5}
              className="px-4 py-1 border-[1px] border-[#1E1E1E] rounded-[16px] font-roboto text-[16px] font-bold text-[#1E1E1E] whitespace-nowrap"
            >
              {category}
            </span>
          ))}

          {/* Row break */}
          <div className="w-full h-0" />

          {/* Third Row - 2 */}
          {["BUSINESS AND LEADERSHIP", "MARKETING AND SALES"].map(
            (category, index) => (
              <span
                key={index + 9}
                className="px-4 py-1  border-[1px] border-[#1E1E1E] rounded-[16px] font-roboto text-[16px] font-bold text-[#1E1E1E] whitespace-nowrap"
              >
                {category}
              </span>
            )
          )}
        </div>
      </section>

     
      <section className="blog-posts px-10 mt-16">
        <h2 className="text-[50px] font-impact font-normal text-[#000000] mb-12">
          <span className="text-[#000000]">All </span>
          <span className="text-[#047670]">Blogs</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2  h-[456px] lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="h-[235px] bg-cover bg-center"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              ></div>
              <div className="p-5">
                <div className="font-jost font-normal  text-[12px] text-[#000000] mb-1">
                  {post.meta}
                </div>
                <h3 className="text-[20px] font-impact font-normal text-[#000000] ">
                  {post.title}
                </h3>
              <p className="text-[12px] text-[#1E1E1E1]/80 font-normal mt-2 font-jost">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  className="inline-block mt-4 bg-[#047670] text-white text-[14px] font-bold font-roboto py-2 px-4 rounded-md"
                >
                  Best Artificial Intelligence Blogs
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Optional) */}
        <div className="pagination flex justify-center items-center gap-3 mt-10 font-jost text-sm">
          <a href="#" className="text-[#047670] hover:underline">
            PREV
          </a>
          <a href="#" className="text-[#047670] font-bold">
            1
          </a>
          <a href="#" className="text-[#047670]">
            2
          </a>
          <span className="text-gray-500">...</span>
          <a href="#" className="text-[#047670]">
            67
          </a>
          <a href="#" className="text-[#047670] hover:underline">
            NEXT
          </a>
        </div>
      </section>

    
    
    












    
      {/* Trending Section */}
      <section className="trending-section px-10 mt-12">
        <h2 className="text-5xl font-impact text-black mb-12">
          Trending Blogs
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {[
            "Data Science Tutorial",
            "How to become a Data Scientist",
            "Learn to be Pro",
            "Data Science",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-teal-200 rounded-lg p-4 text-center text-xl font-bold text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
