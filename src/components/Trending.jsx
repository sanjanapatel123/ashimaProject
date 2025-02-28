import React from "react";

const Trending = () => {
  return (
    <>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Trending Courses
        </h2>
        <div className="flex flex-wrap gap-4 mb-12">
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white px-6 py-2 text-sm font-medium">
            AI &amp; ML
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white border-gray-200 px-6 py-2 text-sm font-medium hover:border-custom hover:text-custom">
            Data Science &amp; Engineering
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white border-gray-200 px-6 py-2 text-sm font-medium hover:border-custom hover:text-custom">
            Product
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white rounded-lg">
            Design &amp; Development
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white border-gray-200 px-6 py-2 text-sm font-medium hover:border-custom hover:text-custom">
            DevOps
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white border-gray-200 px-6 py-2 text-sm font-medium hover:border-custom hover:text-custom">
            Cybersecurity &amp; Testing
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white border border-gray-200 px-6 py-2 text-sm font-medium hover:border-custom hover:text-custom">
            Business &amp; Leadership
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white border border-gray-200 px-6 py-2 text-sm font-medium hover:border-custom hover:text-custom">
            Marketing &amp; Sales
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white border border-gray-200 px-6 py-2 text-sm font-medium hover:border-custom hover:text-custom">
            No Code
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white border border-gray-200 px-6 py-2 text-sm font-medium hover:border-custom hover:text-custom">
            Gaming &amp; Network
          </button>
          <button className="rounded-[20px] bg-[#091c08] hover:bg-green-800 text-white border border-gray-200 px-6 py-2 text-sm font-medium hover:border-custom hover:text-custom">
            Founder Connect
          </button>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {" "}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img
          src="https://creatie.ai/ai/api/search-image?query=A professional 3D illustration of artificial intelligence and machine learning concepts, featuring neural networks, data visualization, and modern tech elements on a clean white background&width=400&height=250&orientation=landscape&flag=06509add-e25e-4d96-af30-b1ae1e77be61"
          className="w-full h-48 object-cover"
          alt="Course"
        />{" "}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              AI &amp; ML
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Beginner
            </span>{" "}
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Introduction to Machine Learning
          </h3>{" "}
          <p className="text-gray-600 text-sm mb-4">
            Learn the fundamentals of machine learning and AI algorithms
          </p>
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-gray-400" />
              <span className="text-sm text-gray-600">8 weeks</span>
            </div>
            <button className="rounded-[20px] bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-opacity-90">
              {" "}
              Enroll Now
            </button>
          </div>
        </div>{" "}
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img
          src="https://creatie.ai/ai/api/search-image?query=A modern 3D visualization of data science concepts with flowing data streams, analytics dashboards, and statistical graphs on a minimalist light background&width=400&height=250&orientation=landscape&flag=a12f3051-47ee-4259-97ca-411bb712849a"
          className="w-full h-48 object-cover"
          alt="Course"
        />{" "}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Data Science
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Intermediate
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Advanced Data Analytics
          </h3>{" "}
          <p className="text-gray-600 text-sm mb-4">
            Master data analysis techniques and statistical methods
          </p>
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-gray-400" />
              <span className="text-sm text-gray-600">10 weeks</span>
            </div>
            <button className="rounded-[20px] bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-opacity-90">
              {" "}
              Enroll Now
            </button>
          </div>
        </div>{" "}
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img
          src="https://creatie.ai/ai/api/search-image?query=A sleek 3D illustration of modern product design and development process, featuring wireframes, prototypes, and user interface elements on a clean studio background&width=400&height=250&orientation=landscape&flag=2d9e85db-3ad5-45c7-8106-20c6c4192b9f"
          className="w-full h-48 object-cover"
          alt="Course"
        />{" "}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Product
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Beginner
            </span>{" "}
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Product Management Essentials
          </h3>{" "}
          <p className="text-gray-600 text-sm mb-4">
            Learn core product management skills and methodologies
          </p>
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-gray-400" />
              <span className="text-sm text-gray-600">6 weeks</span>
            </div>
            <button className="rounded-[20px] bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-opacity-90">
              {" "}
              Enroll Now
            </button>
          </div>
        </div>{" "}
      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img
          src="https://creatie.ai/ai/api/search-image?query=A contemporary 3D rendering of cybersecurity concepts, featuring digital locks, shield icons, and network protection visualization on a professional studio background&width=400&height=250&orientation=landscape&flag=3caee6e4-1ef8-4540-bb99-620390ba527e"
          className="w-full h-48 object-cover"
          alt="Course"
        />{" "}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Cybersecurity
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Intermediate
            </span>
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Network Security Fundamentals
          </h3>{" "}
          <p className="text-gray-600 text-sm mb-4">
            Master essential network security concepts and practices
          </p>
          <div className="flex items-center justify-between">
            {" "}
            <div className="flex items-center gap-2">
              <i className="fas fa-clock text-gray-400" />
              <span className="text-sm text-gray-600">12 weeks</span>
            </div>
            <button className="rounded-[20px] bg-custom text-white px-4 py-2 text-sm font-medium hover:bg-opacity-90">
              {" "}
              Enroll Now
            </button>
          </div>
        </div>{" "}
      </div>
    </div> */}
      </div>
    </>
  );
};

export default Trending;
