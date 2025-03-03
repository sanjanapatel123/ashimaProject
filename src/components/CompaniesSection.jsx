import React from "react";

const CompaniesSection = () => {
  const companies = [
    {
      name: "Google",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    },
    {
      name: "Tesla",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/512px-Tesla_Motors.svg.png",
    },
    {
      name: "Coinbase",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coinbase.svg/512px-Coinbase.svg.png",
    },
    {
      name: "Amazon",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Microsoft",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Apple",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Oracle",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    },
    {
      name: "Intel",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel_logo_%282020%2C_dark_blue%29.svg",
    },
    {
      name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
    },
    {
      name: "Adobe",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/d/d4/Adobe_Systems_logo_and_wordmark.svg",
    },
    {
      name: "Salesforce",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Salesforce.com_logo.svg/512px-Salesforce.com_logo.svg.png",
    },
    {
      name: "Twitter",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/X_logo_2023.svg",
    },

    {
      name: "LinkedIn",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    },
  ];

  return (
    <section className="bg-[#7cb078] py-6 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-black text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Join over 100k+ learners to upskill hottest AI skills
        </h1>

        <div className="h-4 md:h-8"></div>

        {/* Outer scroll container */}
        <div className="overflow-hidden whitespace-nowrap relative">
          {/* Infinite scrolling inner content */}
          <div className="inline-block min-w-full">
            <div
              className="flex items-center space-x-8 md:space-x-16 animate-scroll"
              style={{ minWidth: "200%" }}
            >
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-black text-sm sm:text-lg md:text-xl font-medium whitespace-nowrap"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-6 w-6 md:h-8 md:w-8 object-contain"
                  />
                  <span>{company.name}</span>
                </div>
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
          @media (max-width: 640px) {
            .animate-scroll {
              animation-duration: 30s;
            }
          }
          @media (min-width: 641px) {
            .animate-scroll {
              animation-duration: 20s;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default CompaniesSection;
