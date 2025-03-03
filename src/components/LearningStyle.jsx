import { FaCertificate } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Image array for rotation
const images = [
  "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  "https://images.unsplash.com/photo-1555421689-491a97ff2040",
  "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a",
];

function LearningSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 font-['Poppins']">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Section */}
        <div className="space-y-8">
          {/* Image - Animated on Hover + Auto Rotate */}
          <motion.div
            className="w-full md:w-[90%] h-80 overflow-hidden rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={images[currentImage]}
              alt="Online Learning"
              className="w-full h-full object-cover transition-all duration-1000"
            />
          </motion.div>

          {/* Live | Hybrid | Video - Animated Icons */}
          {/* Live | Hybrid | Video - Centered on Desktop, Attractive Hover Icons */}
          <div className="flex justify-center md:justify-center gap-8">
            {["LIVE", "HYBRID", "VIDEO"].map((label, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex flex-col items-center space-y-2"
              >
                {/* Modern Circular Icon with Hover Effect */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg border border-yellow-600 cursor-pointer transition-transform"
                >
                  <MdOutlinePlayCircle className="text-[#1E3A8A]" size={28} />
                </motion.div>

                {/* Label */}
                <span className="font-semibold text-sm text-gray-800">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Certificate Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            {/* Certificate Icon with Hover Effect */}
            <motion.div
              whileHover={{ scale: 1.15, rotate: 8 }}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1E3A8A] text-white cursor-pointer shadow-lg transition-transform"
            >
              <FaCertificate size={28} />
            </motion.div>

            <div>
              <p className="font-semibold text-gray-800 leading-tight">
                Earn Certificates and share your success with the world
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#1E3A8A]">
            BUILD A<br />
            BRIGHT
            <br />
            FUTURE
            <br />
            WITH YOUR
            <br />
            UNIQUE
            <br />
            LEARNING
            <br />
            STYLE
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Learn from industry experts through live, hybrid, or self-paced
            video courses. Choose the path that best suits your schedule and
            learning style.
          </p>

          {/* CTA Button - Animated Hover */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // className="mt-4 px-8 py-3 bg-[#FBBF24] text-[#1E3A8A] font-medium text-lg rounded-full hover:bg-[#f59e0b] transition-all"
          >
            <div className="flex justify-center">
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border  text-white hover:bg-green-800 bg-green-600 transition duration-300 ease-in-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="font-medium text-lg">Signup</span>
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
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default LearningSection;
