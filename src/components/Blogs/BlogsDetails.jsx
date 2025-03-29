import React from 'react'

function BlogsDetails() {
  return (
    <div>
       <div>
      {/* Navbar Section */}
      <nav className="bg-white p-4 flex justify-between items-center shadow-md">
        {/* Left: Logo */}
        <h1 className="text-4xl font-extrabold uppercase">AI Skills</h1>
        
        {/* Middle: Search Bar */}
        <div className="hidden md:flex items-center border border-gray-400 px-4 py-2 rounded-full w-1/3">
          <span className="text-gray-500 mr-2">🔍</span>
          <input type="text" placeholder="Search for anything" className="bg-transparent w-full focus:outline-none text-gray-700" />
        </div>
        
        {/* Middle: Navigation Links */}
        <ul className="hidden lg:flex space-x-6 font-semibold text-gray-900">
          <li><a href="#" className="hover:text-teal-600">Courses</a></li>
          <li><a href="#" className="hover:text-teal-600">Business</a></li>
          <li><a href="#" className="hover:text-teal-600">Digital Product</a></li>
          <li><a href="#" className="hover:text-teal-600">Newsletter</a></li>
        </ul>
        
        {/* Right: Cart, Login, and Signup */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <a href="#" className="text-teal-600 text-xl">🛒</a>
          {/* Login Button */}
          <a href="#" className="border border-teal-600 px-4 py-2 rounded-full text-teal-600 font-semibold">Login</a>
          {/* Signup Button */}
          <a href="#" className="bg-teal-600 text-white px-5 py-2 rounded-full font-semibold">Sign Up</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0E7C74] text-white py-10 px-6 md:px-18">
        {/* Breadcrumb */}
        <div className="text-sm flex items-center space-x-2 text-white mb-4">
          <span>📖 BLOG</span>
          <span>›</span>
          <a href="#" className="hover:underline">Best Artificial Intelligence Blogs</a>
          <span>›</span>
          <a href="#" className="hover:underline font-semibold">How to Prepare for an Interview</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              How To Prepare For An AI Interview?
            </h1>
            <p className="text-gray-200 mt-3" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
              Learn How To Prepare For An AI Interview With Expert Tips, Real-World Projects,
              And ProjectPro’s AI-Powered Interview Coach To Build Your Confidence.
            </p>
            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="bg-white text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-100">
                Best Artificial Intelligence Blogs
              </a>
              <a href="#" className="border border-white px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition">
                View All Artificial Intelligence Blogs
              </a>
            </div>
            {/* Last Updated */}
            <p className="text-white text-sm mt-4">Last Updated: 28 Feb 2025 |</p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img src="images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg" alt="AI Interview" className="rounded-md border border-blue-300 shadow-lg w-72 h-56 object-cover md:w-[600px] md:h-[350px]" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-6">
          <p className="text-gray-800 text-lg" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
            Want a job that pays six figures and is nearly recession-proof? Companies are in an AI talent war for AI
            engineers and machine learning experts. AI job postings have surged 450% in the last seven years.
            Top AI engineers at companies like OpenAI and Google DeepMind earn over $500,000+ in compensation with stock options.
          </p>
          <p className="text-gray-800 text-lg" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
            Meanwhile, a <a href="#" className="text-black font-semibold hover:underline">McKinsey report</a> found that
            companies integrating AI agent workflows outperform non-adopters. AI value is growing by up to 25% annually.
            And AI hiring is booming—but hiring the right talent is twice as fast.
          </p>

          {/* Featured Project */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-6">
              <img src="images/image2.png" alt="Person working on tablet" className="w-full h-auto rounded-lg" />
            </div>

            {/* Text and Button Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900">Microsoft Fabric Project To Build A Financial Reporting Agent</h3>
              <p className="text-gray-600 text-sm mt-2">Downloadable Solution Code | Explanatory Videos | AISkills</p>
              <button className="mt-4 bg-teal-700 text-white py-2 px-6 rounded-md hover:bg-teal-700 transition-colors">
                Start Project Now
              </button>
            </div>
          </div>

          {/* Table of Content */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-8">
            <h3 className="font-semibold text-lg text-teal-700">Table Of Content</h3>
            <ul className="list-disc list-inside text-gray-800 mt-2">
              <li><a href="#" className="text-black hover:underline">7 Essential Tips on How to Prepare for an AI Interview</a></li>
              <li><a href="#" className="text-black hover:underline">AI Mock Interview: Your Secret Weapon to Interview Success</a></li>
              <li><a href="#" className="text-black hover:underline">Learn How to Prepare for Your AI Interview with AISkills</a></li>
            </ul>
          </div>

          {/* Article Title */}
          <h2 className="text-teal-700 font-extrabold text-2xl md:text-3xl mb-4">
            7 Essential Tips On How To Prepare For An AI Interview
          </h2>

          {/* Article Description */}
          <p className="text-gray-800 text-lg mb-6" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
            Using AI-related keywords on your resume isn’t enough to get an AI job; you must also demonstrate that
            you can use AI concepts to address real-world business problems. Hiring managers and recruiters look for
            applicants who can write effective code, think critically, and keep up with the most recent AI developments.
            The secret to preparing for an AI interview is a combination of technical skills, practical projects,
            and effective communication. Here are seven secret tips that will build your confidence and help you land your dream job -
          </p>

          {/* Image Section */}
          <div className="w-full flex justify-center my-6">
            <img src="images/7essential.png" alt="AI Interview" className="rounded-lg shadow-lg w-2/3 md:w-1/2" />
          </div>

          {/* First Tip Title */}
          <h3 className="text-teal-700 font-extrabold text-xl md:text-2xl mt-8">
            1. Master The Basics For Interview Success
          </h3>

          {/* Article Description */}
          <p className="text-gray-800 text-lg mb-6" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
            A strong foundation in AI and machine learning concepts is essential. Interviewers often test fundamental
            understanding before digging deep into complex topics. Make sure you are well prepared to answer interview
            questions based on key terms such as:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-800 space-y-2" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
            <li><strong>Supervised vs. Unsupervised Learning</strong> to let the interviewer know you understand how labeled and unlabeled data affect model training.</li>
            <li><strong>Classification vs. Regression</strong> to demonstrate your ability to differentiate between tasks that require categorical predictions (classification) versus those predicting continuous values (regression). You should be able to showcase projects of real-world applications for each.</li>
            <li><strong>Overfitting and Underfitting</strong> to show your understanding of the strong grasp of the bias-variance tradeoff by explaining how models can generalize well or fail due to excessive complexity or oversimplification.</li>
            <li><strong>Common Machine Learning Algorithms:</strong> It is crucial to know the strengths and weaknesses of traditional machine learning algorithms to show you know about their suitability for different types of AI problems.</li>
          </ul>

          {/* Image Section */}
          <div className="w-full flex justify-center my-6" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
            <img src="images/1master_Basic.png" alt="AI Interview" className="rounded-lg shadow-lg w-2/3 md:w-1/2" />
          </div>

          {/* Resources Section */}
          <h3 className="text-teal-700 font-semibold text-lg mb-2" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
            Resources
          </h3>
          <ul className="list-disc list-inside text-blue-600 space-y-1">
            <li><a href="#" className="hover:underline">Machine Learning Interview Questions and Answers</a></li>
            <li><a href="#" className="hover:underline">Linear Regression Interview Questions and Answers</a></li>
            <li><a href="#" className="hover:underline">Logistic Regression Interview Questions and Answers</a></li>
            <li><a href="#" className="hover:underline">Time Series Interview Questions and Answers</a></li>
            <li><a href="#" className="hover:underline">Artificial Intelligence Interview Questions and Answers</a></li>
          </ul>

        </div>
      </section>
    </div>
    </div>
  )
}

export default BlogsDetails
