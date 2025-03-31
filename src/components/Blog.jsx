import React from "react";
import blog1 from "../assets/blog1.png"

const Blog = () => {
    const blogPosts = [
      {
        imageUrl:
          "https://media-hosting.imagekit.io/1613f1e947184b31/screenshot_1743149465898.png?Expires=1837757467&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SI53PV1CxwqVd4YUNfCzN735WAbb9ymsP6Q9tYb0RpxheXq-a1GEAdQWnVsSZQCJibN92C7u7PAja03PgDFR7owXrO2kMzkkdccPrvAJa1WzcvklDTfAF5~OSzOlxxJjE-Uzfcuy9hk2kP7uzeDNJWHDkjbBoxelE8Z3lfP8JRS9SxdFbHqxaprYSjgLCEO~iIkQaMTye1dcAdepkSQVFqtr63ebuPKEXGB6zQq0f0DR7zWU8gYLzUp1LkY3ZR3Rqkn05dXPu8v9AVg~fyF1uG0Y1qNlZ6h3ymubW~qa-qiSU~rFG1yF1p2qFAbPq~oS2v8WYbmRLXX4~VffmnRsXQ__",
        meta: "25.march.2025",
        title: "LangGraph Tutorial for Beginners to Build AI Agents",
        description:
          "A step-by-step, hands-on Langgraph tutorial that takes you from the basics to advanced concepts, helping you quickly.",
        link: "#",
      },
      {
        imageUrl:
          "https://media-hosting.imagekit.io/f597e47896474538/screenshot_1743149422120.png?Expires=1837757423&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lITmz6XcxKaNexc~voIcxmKxSezXJQVXYL8FlxEX4w6GGS8b1-j3krr8uwtmjY~PH29baztYTBJQfVcKa7YQH~Pgt7Px3YMI-Uao6PmmOpOgNWwgHPpTB1cef-MEC2msNcey~UcFytym8~hDfU678uN5~UuB2i~fXqEsAJ5NWosvurAS61itkyH6t~CCPds6jVpYvwieKI0YB4OhOlSlz8vR-K3xNR8t5vKf3e10dJqxrMof9~7FChkE~FvEg~Yehfj6WmgXNZI8l5rrSWD-urUm47JPpeWKgTMWZNQdly6GDiHY6eE2Chi0MtS89jvfoQMbvFLLHuPJ079p3QtbXA__",
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
      <section className="hero bg-teal-700 py-24 px-10 flex justify-center items-center gap-10 flex-wrap">
        <div className="bg-white rounded-lg shadow-md p-5 w-96" >  <img src={blog1} />
          <div className="mt-4">
            <span className="text-xs text-gray-700">25 Mar 2025</span>
            <span className="mx-2 text-xs text-gray-700">|</span>
            <span className="text-xs text-gray-700">Featured</span>
          </div>
          <h2 className="text-xl text-teal-700 mt-2">
            How to Use Large Concept Models for Text Generation?
          </h2>
          <p className="text-sm text-gray-700 mt-3">
            Explore Large Concept Models, their architecture, differences from
            LLMs, implementation guide, and applications.
          </p>
          <a href="#" className="block mt-4 text-teal-700 text-sm">
            Best Artificial Intelligence Blogs
          </a>
        </div>

        {/* Sign-Up Form */}
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <h3 className="text-2xl font-semibold text-gray-900">
            Start Learning Now
          </h3>
          <p className="text-sm text-gray-600 mt-2">Learn by Doing</p>
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

          {/* Email and Password Inputs */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-gray-700">EMAIL</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />

            <label className="text-sm font-semibold text-gray-700">
              PASSWORD
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-gray-300 text-gray-500 font-semibold py-2 rounded-lg mt-4 cursor-not-allowed">
            SIGN UP
          </button>

          <p className="text-xs text-center text-gray-500 mt-3">
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
      <section className="blog-categories px-10 mt-12">
        <h2 className="text-5xl text-black mb-12">Blog Categories</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "AI & ML",
            "DevOps",
            "No Code",
            "Cyber Security",
            "Data Science",
            "Design and Development",
            "Founder Connect",
            "Gaming",
            "Business",
            "Marketing",
          ].map((category, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-gray-800 rounded-full px-5 py-2 text-gray-800 text-sm capitalize cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      {/* <section className="blog-posts px-10 mt-12">
        <h2 className="text-5xl font-impact text-black mb-12">All Blogs</h2>
        <div className="grid grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg">
              <div
                className="h-56 bg-cover rounded-t-lg"
                style={{
                  backgroundImage: `url('https://media-hosting.imagekit.io/1613f1e947184b31/screenshot_1743149465898.png')`,
                }}
              ></div>
              <div className="p-5">
                <div className="font-jost text-xs text-gray-800">
                  25 March 2025
                </div>
                <h3 className="text-xl font-impact text-black mt-2">
                  LangGraph Tutorial for Beginners to Build AI Agents
                </h3>
                <p className="text-sm text-gray-700 mt-2">
                  A step-by-step, hands-on Langgraph tutorial that takes you
                  from the basics to advanced concepts, helping you quickly.
                </p>
                <a href="#" className="text-teal-700 text-sm mt-3 inline-block">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="blog-posts">
        <h2 className="text-2xl font-bold">
          <span className="text-black">All</span>
          <span className="text-teal-700">Blogs</span>
        </h2>

        <div className="posts-grid">
          {blogPosts.map((post, index) => (
            <div className="post-card" key={index}>
              <div
                className="image"
                style={{ backgroundImage: `url(${post.imageUrl})` }}
              ></div>
              <div className="meta">{post.meta}</div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={post.link} className="read-more">
                best artificial intelligence blogs
              </a>
            </div>
          ))}
        </div>

        <div className="pagination">
          <a href="#">PREV</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <span>...</span>
          <a href="#">67</a>
          <a href="#">NEXT</a>
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
