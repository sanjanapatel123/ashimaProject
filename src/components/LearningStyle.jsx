import { FaCertificate } from "react-icons/fa";

function LearningSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section - Image, Live/Hybrid/Video Dots & Certificate Section */}
        <div className="flex flex-col items-center space-y-6 md:items-start w-full md:w-1/2">
          {/* Placeholder for Image */}
          <div className="w-full h-56 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">Use any image or style here</span>
          </div>

          {/* Live | Hybrid | Video with Dots */}
          <div className="flex items-center gap-8">
            {["LIVE", "HYBRID", "VIDEO"].map((label, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="w-6 h-6 rounded-full bg-red-500 block"></span>
                <span className="mt-2 font-bold text-sm">{label}</span>
              </div>
            ))}
          </div>

          {/* Certificate Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white">
              <FaCertificate size={24} />
            </div>
            <div className="text-center md:text-left">
              <p className="font-semibold">Earn Certificates and</p>
              <p className="font-semibold">share your success with world</p>
            </div>
          </div>
        </div>

        {/* Right Section - Bold Text & Paragraph */}
        <div className="text-left w-full md:w-1/2">
          <h2 className="text-4xl font-bold leading-tight space-y-1">
            <div>BUILD A</div>
            <div>BRIGHT</div>
            <div>FUTURE</div>
            <div>WITH YOUR</div>
            <div>UNIQUE</div>
            <div>LEARNING</div>
            <div>STYLE</div>
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Learn from industry experts through live, hybrid or self-paced video courses. 
            Choose the path that best suits your schedule and learning style.
          </p>

          {/* Sign Up Button */}
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}

export default LearningSection;
