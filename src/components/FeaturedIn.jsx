// import React from "react";
// import { FcBbc } from "react-icons/fc";

// // Pre-defined company logos (direct URLs from official sites or free CDN sources)
// const companies = [
//   {
//     name: "BBC",
//     logo: <FcBbc />,
//   },
//   {
//     name: "The New York Times",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg",
//   },
//   {
//     name: "CNBC",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
//   },
//   {
//     name: "Forbes",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
//   },
//   {
//     name: "The Wall Street Journal",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
//   },
//   {
//     name: "TechCrunch",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
//   },
//   {
//     name: "Bloomberg",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
//   },
//   {
//     name: "Business Insider",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
//   },
//   {
//     name: "Reuters",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
//   },
//   {
//     name: "Mashable",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
//   },
// ];

// const FeaturedInSection = () => {
//   return (
//     <div className="w-full py-16 bg-[#002726]">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Heading */}
//         <h2 className="text-5xl font-bold text-white mb-16">Featured in</h2>

//         {/* Logo Section with improved spacing and alignment */}
//         <div className="flex flex-wrap justify-center items-center gap-10 md:gap-12 lg:gap-16 opacity-80">
//           {companies.map((company, index) => (
//             <div
//               key={index}
//               className="h-12 flex items-center justify-center bg-white rounded-lg shadow-lg p-2 hover:scale-105 transition-transform duration-300"
//             >
//               <img
//                 src={company.logo}
//                 alt={company.name}
//                 className="h-full object-contain max-w-[140px] transition-all duration-300"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedInSection;





import React from "react";
import { FcBbc } from "react-icons/fc";

// Pre-defined company logos (direct URLs from official sites or free CDN sources)
const companies = [
  {
    name: "BBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
  {
    name: "The New York Times",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg",
  },
  {
    name: "CNBC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
  {
    name: "Forbes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
  {
    name: "The Wall Street Journal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
  {
    name: "TechCrunch",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
  {
    name: "Bloomberg",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
  {
    name: "Business Insider",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
  {
    name: "Reuters",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
  {
    name: "Mashable",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/CNBC_logo.svg",
  },
];

const FeaturedInSection = () => {
  return (
    <div className="w-full py-16 bg-[#002726]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-white mb-16">Featured in</h2>

        {/* Logo Section with improved spacing and alignment */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-12 lg:gap-16 opacity-80">
          {companies.map((company, index) => (
            <div
              key={index}
              className="h-12 flex items-center justify-center bg-white rounded-lg shadow-lg p-2 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-full object-contain max-w-[140px] transition-all duration-300 hover:brightness-125"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedInSection;
