import React from 'react'

const Trending = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Trending Courses</h2>
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
    
              
    </div>
  );
}

export default Trending
