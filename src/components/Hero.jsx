import { IoIosVideocam } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

function Hero() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">AI SKILLS</span>
          <span className="block text-black-600">to uplift your career</span>
        </h1>
        <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
          Master the future of Technology with Live, Hybrid, and Video
          courses—all in one place.
        </p>
        {/* Features */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <FaVideo />
            </div>
            <h3 className="mt-2 font-semibold">Live</h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <FaLaptop />
            </div>
            <h3 className="mt-2 font-semibold">Hybrid</h3>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              {/* <i className="fas fa-play text-2xl text-blue-600" /> */}
              <IoIosVideocam className="text-2xl text-black-600" />
            </div>
            <h3 className="mt-2 font-semibold">Video</h3>
          </div>
        </div>
        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="#"
            className="px-8 py-3 text-white bg-green-900 hover:bg-green-700 rounded-lg text-lg shadow-md"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </main>
  );
}

export default Hero;
