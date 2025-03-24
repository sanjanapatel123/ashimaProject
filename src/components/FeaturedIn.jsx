import featureicon from "../assets/featureIcon.png";

const FeaturedInSection = () => {
  return (
    // <div className="bg-black py-16  px-3">
    //   <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-center text-start sm:text-left">

    //     <div className="text-white">
    //       <h2 className="font-[400] text-[55px] leading-[65px] tracking-[0.5%] sm:text-4xl md:text-5xl mb-4 font-impact">
    //         FEATURED IN
    //       </h2>
    //       <p className="text-[16px] leading-[25px] tracking-[0.5%] sm:text-lg font-Roboto font-[400] Condensed">
    //         ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS<br></br> FROM
    //         INSTANT REAL-WORLD PROJECTS TO PROMPTS.
    //       </p>
    //     </div>

    //     <div className="flex justify-center">
    //       <img
    //         src={featureicon}
    //         alt="Featured In"
    //         className="w-full max-w-xs sm:max-w-4xl object-contain"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Left Section - Heading & Description */}
        <div className="text-white text-center sm:text-left px-4">
          <h2 className="font-[400] text-[40px] sm:text-[55px] leading-[50px] sm:leading-[65px] tracking-[0.5%] mb-4 font-impact">
            FEATURED IN
          </h2>
          <p className="text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25px] tracking-[0.5%] font-Roboto Condensed">
            ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS
            <br />
            FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.
          </p>
        </div>

        {/* Right Section - Logos */}
        <div className="flex justify-center px-4">
          <img
            src={featureicon}
            alt="Featured In"
            className="w-full max-w-[300px] sm:max-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedInSection;
