// import React from "react";
// import business1 from "../../assets/business1.png";
// import business2 from "../../assets/business2.png";
// import business3 from "../../assets/business3.png";
// import business4 from "../../assets/business4.png";
// import business5 from "../../assets/business5.png";
// import business6 from "../../assets/business6.png";
// import business7 from "../../assets/business7.png";
// import business8 from "../../assets/business8.png";
// import business9 from "../../assets/business9.png";
// import business10 from "../../assets/business10.png";
// import Header from "../Layout/Header";
// import { motion } from "framer-motion";

// const Business = () => {
//   const brandLogos = [
//     { src: business2, alt: "Sun Life" },
//     { src: business3, alt: "Amazon" },
//     { src: business4, alt: "Springboard" },
//     { src: business5, alt: "HP" },
//     { src: business6, alt: "The North Face" },
//     { src: business7, alt: "Visa" },
//     { src: business8, alt: "Saatchi & Saatchi" },
//     { src: business9, alt: "Walmart" },
//     { src: business10, alt: "JP Morgan Chase" },
//   ];

//   const duplicatedLogos = [...brandLogos, ...brandLogos]; // For smooth loop

//   return (
//     <>
//       <Header />
//       <div className="bg-[#047670] py-10 px-4 md:px-16 pt-32">
//         <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Text Section */}
//           <div className="text-[#ffffff] md:w-1/2">
//             <h2 className="text-[50px] md:text-5xl font-normal mb-4 font-impact">
//               AI SKILLS For Business
//             </h2>
//             <p className="text-[22px] md:text-lg font-medium font-jost w-[653px]">
//               Partner With Us To Upskill Your Workforce. Empower Your Team With
//               Cutting-Edge AI Skills Through Live, Hybrid, And Video-Based
//               Courses. Our Comprehensive Training Programs Are Designed To Boost
//               Productivity, Foster Innovation, And Help Your Business Stay Ahead
//               In A Rapidly Evolving Tech Landscape.
//             </p>

//             <button className="mt-6 text-[22px] bg-[#ffffff] text-[#047670] font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition w-[325px] h-[57px] duration-300 font-roboto">
//               Contact Us
//             </button>
//           </div>

//           {/* Image Section */}
//           <div className="md:w-1/2">
//             <img
//               src={business1}
//               alt="AI Skills"
//               className="rounded-md w-full object-cover shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-[#000000] py-12 px-4 md:px-16 overflow-hidden">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-[#ffffff] text-[28px] md:text-[36px] uppercase font-[Impact,Arial,sans-serif] tracking-wide">
//             Chosen By Industry-Leading Brands:
//           </h2>
//         </div>

//         {/* Scrollable Logos */}
//         <div className="w-full  overflow-hidden relative mx-auto">
//           <motion.div
//             className="flex w-max gap-6"
//             animate={{ x: ["0%", "-50%"] }} // Right to Left scroll
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           >
//             {duplicatedLogos.map((logo, index) => (
//               <div
//                 key={index}
//                 className="bg-[#ffffff] rounded-lg p-3 flex items-center justify-center w-[90px] h-[70px]"
//               >
//                 <img
//                   src={brandLogos}
//                   alt={logo.alt}
//                   className="h-auto w-[70px] object-contain"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Business;




import React from "react";
import { motion } from "framer-motion";
import business1 from "../../assets/business1.png";
import business2 from "../../assets/business2.png";
import business3 from "../../assets/business3.png";
import business4 from "../../assets/business4.png";
import business5 from "../../assets/business5.png";
import business6 from "../../assets/business6.png";
import business7 from "../../assets/business7.png";
import business8 from "../../assets/business8.png";
import business9 from "../../assets/business9.png";
import business10 from "../../assets/business10.png";
import business11 from "../../assets/business11.png";
import business12 from "../../assets/business12.png";
import business13 from "../../assets/business13.png";
import business14 from "../../assets/business14.png";
import business15 from "../../assets/business15.png";
import business16 from "../../assets/business16.png";

import Header from "../Layout/Header";

const Business = () => {
  const brandLogos = [
    { src: business2, alt: "Sun Life" },
    { src: business3, alt: "Amazon" },
    { src: business4, alt: "Springboard" },
    { src: business5, alt: "HP" },
    { src: business6, alt: "The North Face" },
    { src: business7, alt: "Visa" },
    { src: business8, alt: "Saatchi & Saatchi" },
    { src: business9, alt: "Walmart" },
    { src: business10, alt: "JP Morgan Chase" },
  ];
 const features = [
   {
     img: business11,
     desc: "Transform your workforce. Equip your employees with in-demand AI skills to enhance performance and efficiency.",
   },
   {
     img: business12,
     desc: "Flexible learning options. Choose from live sessions, hybrid courses, or video-based training to fit your team’s schedule.",
   },
   {
     img: business13,
     desc: "Real-world impact. Hands-on projects and practical exercises ensure skills translate to real business outcomes.",
   },
   {
     img: business14,
     desc: "Customized training programs. Tailor our curriculum to match your company’s goals and technological needs.",
   },
 ];
  const duplicatedLogos = [...brandLogos, ...brandLogos]; // for infinite scroll
const options = [
  {
    title: "Expert-Led Training:",
    desc: "Learn from top industry professionals with real-world experience.",
  },
  {
    title: "Interactive Sessions:",
    desc: "Foster engagement and collaboration through live and hybrid models.",
  },
  {
    title: "Ongoing Support:",
    desc: "Post-training resources to help employees continue growing.",
  },
  {
    title: "Global Reach:",
    desc: "Empower teams from anywhere in the world with flexible online access.",
  },
];
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="bg-[#047670] py-10 px-4 md:px-16 pt-32">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div className="text-[#ffffff] md:w-1/2">
            <h2 className="text-[50px] md:text-5xl font-normal mb-4 font-impact">
              AI SKILLS For Business
            </h2>
            <p className="text-[22px] md:text-lg font-medium font-jost w-full md:w-[653px]">
              Partner With Us To Upskill Your Workforce. Empower Your Team With
              Cutting-Edge AI Skills Through Live, Hybrid, And Video-Based
              Courses. Our Comprehensive Training Programs Are Designed To Boost
              Productivity, Foster Innovation, And Help Your Business Stay Ahead
              In A Rapidly Evolving Tech Landscape.
            </p>

            <button className="mt-6 text-[22px] bg-[#ffffff] text-[#047670] font-bold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition w-[325px] h-[57px] duration-300 font-roboto">
              Contact Us
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={business1}
              alt="AI Skills"
              className="rounded-md w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Brand Logos Scrolling */}
      <div className="bg-[#000000] py-12 px-4 md:px-16 overflow-hidden">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[#ffffff] mt-3 text-[36px] md:text-[36px] uppercase font-impact tracking-wide">
            Chosen By Industry-Leading Brands:
          </h2>
        </div>

        {/* Logo Scroller */}
        <div className="w-full overflow-hidden relative mx-auto mt-5">
          <motion.div
            className="flex w-max gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="rounded-lg p-3 flex items-center justify-center w-[110px] h-[70px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.alt}
                  className="h-auto w-[90px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="bg-[#FAFAF9] py-12 px-4 md:px-16">
        <h2 className="text-[#047670] text-center text-[50px] md:text-[36px] font-normal mb-10 font-impact">
          Why Partner With Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#ffffff] border-[1px] border-[#000000]/10 shadow-sm rounded-[3px] p-6 text-center transition duration-300 hover:shadow-md h-[260px]"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.img}
                  alt={`icon-${index}`}
                  className="h-[60px] w-[60px] object-contain"
                />
              </div>
              <p className="text-[20px] text-[#1E1E1E]  font-normal font-jost">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#fffffff] py-16 px-4 md:px-16">
        {/* Heading */}
        <h2 className="text-[#1E1E1E] text-center text-[50px] font-normal font-impact mb-12">
          What Makes Us Different?
        </h2>

        {/* Grid layout */}

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Features */}
          <div className="w-full lg:w-1/2">
            {options.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={business16}
                  alt="check"
                  className="w-[24px] h-[24px] mt-1"
                />
                <div>
                  <h3 className="text-[20px] font-normal font-impact text-[#1E1E1E]">
                    {item.title}
                  </h3>
                  <p className="text-[20px] text-[#4B4B4B] font-normal font-jost leading-relaxed">
                    {item.desc
                      ?.replace(/(.*)\s(\S+)$/, "$1\n$2")
                      .split("\n")
                      .map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
            <img
              src={business15}
              alt="feature"
              className="rounded-md w-full h-full max-h-[417px] object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-14">
        <h2 className="text-[50px] lg:text-[40px] font-impact font-normal text-[#047670]">
          Immediate ROI With Measurable Growth
        </h2>
        <p className="text-[16px] lg:text-[16px] text-[#000000] font-jost font-normal mt-2">
          Maximizing Your Bottom Line Achieve Rapid Returns With Our AI Training
          Programs Designed To Deliver Real-World Impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        {/* Card 1 */}
        <div className="text-center px-4">
          <h4 className="text-[16px] font-bold font-jost text-[#1E1E1E] uppercase mb-2">
            Maximizing Your Bottom Line
          </h4>
          <h3 className="text-[60px] font-impact text-[#047670] font-normal mb-3">
            9x ROI
          </h3>
          <p className="text-[20px] text-[#4B4B4B] font-jost font-normal leading-relaxed">
            Leading businesses have experienced a 9x return on investment
            through our AI-driven training programs, equipping teams with
            practical skills directly applied to real-world projects.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center px-4">
          <h4 className="text-[16px] font-bold font-jost text-[#1E1E1E] uppercase mb-2">
            Real Business Impact
          </h4>
          <h3 className="text-[60px] font-impact text-[#047670] font-normal mb-3">
            68%
          </h3>
          <p className="text-[20px] text-[#4B4B4B] font-jost font-normal leading-relaxed">
            Our clients have seen a 68% boost in MQL-to-Opportunity conversion
            rates through hands-on, job-specific projects — just one of the many
            efficiencies gained during our courses.
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center px-4">
          <h4 className="text-[16px] font-bold font-jost text-[#1E1E1E] uppercase mb-2">
            Tangible Growth With Lasting Results
          </h4>
          <h3 className="text-[60px] font-impact text-[#047670] font-normal mb-3">
            +$150K
          </h3>
          <p className="text-[20px] text-[#4B4B4B] font-jost font-normal leading-relaxed">
            Our comprehensive training approach has delivered an average
            financial gain of $150,000 per project, showcasing measurable value
            and long-term business impact.
          </p>
        </div>
      </div>
    </>
  );
};

export default Business;
