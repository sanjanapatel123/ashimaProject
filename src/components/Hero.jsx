import { IoIosVideocam } from "react-icons/io";
import { FaLaptop } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

function Hero() {
  return (
    <main>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-5xl">AI SKILLS</span>
          <span className="">to uplift your career</span>
        </h1>
        <p className="mt-3 mb-3 text-lg max-w-2xl mx-auto">
          Master the future of Technology
        </p>
        {/* Features */}
        <p>
          A complete platform to provide you option to learn form
          Live,hybrid,and video courses. No more to look at separate places to
          learn,
          <br />
          Technology changes very fast and it is very crucial to keep you
          updated yourself from latest innovations. <br /> Our courses are AI
          focused in all the tech domains and helps you to learn from the top
          experts in the field. <br />
          Get the Skills to take your forword!
        </p>

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
