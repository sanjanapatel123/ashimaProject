import featureicon from "../assets/featureIcon.png";

const FeaturedInSection = () => {
  return (
    <div className="bg-[#002726] py-12 font-[Inter]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading - Responsive Text Size */}
        <h2 className="text-white text-center font-bold mb-12 text-3xl sm:text-4xl md:text-5xl">
          Featured In
        </h2>

        {/* Container for the image */}
        <div className="flex justify-center">
          <img
            src={featureicon}
            alt="Featured In"
            className="w-full max-w-3xl object-contain px-4 sm:px-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedInSection;
