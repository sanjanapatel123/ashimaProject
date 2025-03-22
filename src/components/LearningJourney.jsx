const LearningJourney = () => {
  return (
    <div className="w-full bg-black text-[#FFFFFF] py-16 px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left font-imapct">
      {/* Left Side - Bold Heading */}
      <h2 className="text-2xl sm:text-5xl font-extrabold tracking-wide uppercase mb-6 sm:mb-0">
        Start Your Learning <br /> Journey Today
      </h2>

      {/* Right Side - Text & Button */}
      <div className="max-w-md">
        <p className="text-lg sm:text-sm font-Roboto Condensed text-gray-300 mt-5">
          Unlock endless opportunities with expert-led courses. Learn anytime,
          anywhere, and boost your skills for a brighter future.
        </p>

        {/* Button */}
        <button className="mt-6 px-8 py-3 bg-[#047670] text-white font-bold rounded-xl hover:bg-[#035f59] transition">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default LearningJourney;
