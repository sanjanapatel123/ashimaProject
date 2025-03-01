import { useState } from "react";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="bg-gray-100">
      {/* Added pt for small devices to avoid overlap with fixed navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24 md:pt-28 lg:pt-24 pb-10 sm:py-16 md:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          <span className="block text-5xl sm:text-6xl md:text-7xl">
            AI SKILLS
          </span>
          <span
            className="block text-2xl sm:text-3xl md:text-4xl"
            style={{ wordSpacing: "0.3rem" }}
          >
            to uplift your career
          </span>
        </h1>

        <p className="mt-2 mb-2 text-lg sm:text-2xl max-w-2xl mx-auto">
          Master the future of Technology
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          A complete platform to provide you option to learn from Live, Hybrid,
          and Video courses. No more to look at separate places to learn.
          <br />
          Technology changes very fast and it is very crucial to keep yourself
          updated with the latest innovations.
          <br />
          Our courses are AI-focused across all tech domains and help you learn
          from top experts in the field.
          <br />
          Get the Skills to take your career forward!
        </p>

        <div className="flex flex-row justify-center gap-5 mt-4 font-bold">
          <h4 className="text-lg sm:text-xl">Live</h4>
          <h4 className="text-lg sm:text-xl">Hybrid</h4>
          <h4 className="text-lg sm:text-xl">Video</h4>
        </div>

        {/* CTA Button with Smooth Arrow */}
        <div className="flex justify-center">
          <button
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border  text-white hover:bg-green-800 bg-green-600 transition duration-300 ease-in-out mt-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="font-medium">Explore Courses</span>
            <span
              className={`transform transition-transform duration-300 ${
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "translate-x-2 opacity-0"
              }`}
            >
              →
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Hero;
