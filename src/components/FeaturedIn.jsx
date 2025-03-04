import React from "react";

// Pre-defined company logos (direct URLs from official sites or free CDN sources)
const companies = [
  {
    name: "BBC",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/BBC_logo_%28black%29.svg/2560px-BBC_logo_%28black%29.svg.png",
  },
  {
    name: "The New York Times",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg",
  },
  {
    name: "CNBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
  {
    name: "Forbes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Forbes_logo.svg",
  },
  {
    name: "The Wall Street Journal",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/The_Wall_Street_Journal_logo.png",
  },
  {
    name: "TechCrunch",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/TechCrunch_logo.svg",
  },
  {
    name: "Bloomberg",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bloomberg_logo.svg",
  },
  {
    name: "Business Insider",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Business_Insider_Logo.png",
  },
  {
    name: "Reuters",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Reuters_logo.svg",
  },
  {
    name: "Mashable",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Mashable_logo.svg",
  },
];

const FeaturedInSection = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">Featured in</h2>

        {/* Logo Section */}
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
          {companies.map((company, index) => (
            <div key={index} className="h-16 flex items-center">
              <img
                src={company.logo}
                alt={company.name}
                className="h-full object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedInSection;
