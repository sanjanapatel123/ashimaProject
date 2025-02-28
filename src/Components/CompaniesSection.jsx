import React from "react";

const CompaniesSection = () => {
  return (
    <section className="bg-[#7cb078] py-10 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Join over 100k+ learners to upskill hottest AI skills
        </h1>
        {/* responsive */}
        <div className="h-4 md:h-8"></div>{" "}
        {/* 4px height gap on mobile, 8px on desktop */}
        {/* Outer scroll container (hidden overflow, white-space nowrap) */}
        <div className="overflow-hidden whitespace-nowrap relative">
          {/* Infinite scrolling inner content */}
          <div className="inline-block min-w-full">
            <div
              className="flex items-center space-x-8 md:space-x-16 animate-scroll"
              style={{ minWidth: "200%" }} // Ensures enough width for smooth loop
            >
              {[
                "Google",
                "Meta",
                "Tesla",
                "Coinbase",
                "Amazon",
                "Microsoft",
                "Apple",
                "IBM",
                "Oracle",
                "Intel",
                "NVIDIA",
                "Adobe",
                "Salesforce",
                "Twitter",
                "LinkedIn",
              ].map((company, index) => (
                <span
                  key={index}
                  className="text-black text-sm sm:text-lg md:text-xl font-medium whitespace-nowrap"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Inline Style for Animation */}
        <style>{`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }

          /* Responsive spacing tweaks (optional for smoothness) */
          @media (max-width: 640px) {
            .animate-scroll {
              animation-duration: 30s; /* Slower scroll on mobile */
            }
          }

          @media (min-width: 641px) {
            .animate-scroll {
              animation-duration: 20s; /* Normal speed on desktop */
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default CompaniesSection;
