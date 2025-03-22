// import { useState } from "react";
// import { FaPlus, FaMinus } from "react-icons/fa";

// const faqs = [
//   {
//     question: "WHAT MAKES AISKILLS DIFFERENT FROM OTHER PLATFORMS?",
//     answer:
//       "AISKILLS provides real-world AI-powered learning experiences with hands-on projects and expert guidance.",
//   },
//   {
//     question: "HOW DOES AISKILLS' AI-POWERED LEARNING WORK?",
//     answer:
//       "Our AI tailors personalized learning paths based on your skills and progress, offering real-time recommendations.",
//   },
//   {
//     question: "WHAT TYPES OF COURSES DOES AISKILLS OFFER?",
//     answer:
//       "We offer courses in AI, Data Science, Software Development, Business, and more.",
//   },
//   {
//     question: "WHAT KIND OF SUPPORT DOES AISKILLS PROVIDE TO STUDENTS?",
//     answer:
//       "Students get access to 24/7 support, live mentoring, and interactive community discussions.",
//   },
//   {
//     question: "HOW DOES AISKILLS HELP ME BUILD MY CAREER?",
//     answer:
//       "We provide career guidance, resume reviews, and direct job opportunities through industry partnerships.",
//   },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="bg-black py-16 md:py-28 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
//         {/* Left Section - Heading */}
//         <div className="text-white">
//           <h2 className="font-impact text-4xl md:text-6xl uppercase leading-tight">
//             Frequently Asked <br /> Questions
//           </h2>
//           <p className="text-base md:text-lg text-gray-400 mt-6 w-full md:w-[75%] font-Roboto Condensed">
//             ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS FROM INSTANT
//             REAL-WORLD PROJECTS TO PROMPTS.
//           </p>
//         </div>

//         {/* Right Section - FAQ List */}
//         <div className="w-full">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border-t border-gray-600 py-6 hover:cursor-pointer font-Roboto Condensed"
//               onClick={() => toggleFAQ(index)}
//             >
//               <div className="flex justify-between items-center text-white font-semibold text-base md:text-lg">
//                 <span>{faq.question}</span>
//                 {openIndex === index ? (
//                   <FaMinus className="text-gray-400" />
//                 ) : (
//                   <FaPlus className="text-gray-400" />
//                 )}
//               </div>
//               {openIndex === index && (
//                 <p className="text-gray-400 text-sm mt-3">{faq.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQSection;




import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "WHAT MAKES AISKILLS DIFFERENT FROM OTHER PLATFORMS?",
    answer:
      "AISKILLS provides real-world AI-powered learning experiences with hands-on projects and expert guidance.",
  },
  {
    question: "HOW DOES AISKILLS' AI-POWERED LEARNING WORK?",
    answer:
      "Our AI tailors personalized learning paths based on your skills and progress, offering real-time recommendations.",
  },
  {
    question: "WHAT TYPES OF COURSES DOES AISKILLS OFFER?",
    answer:
      "We offer courses in AI, Data Science, Software Development, Business, and more.",
  },
  {
    question: "WHAT KIND OF SUPPORT DOES AISKILLS PROVIDE TO STUDENTS?",
    answer:
      "Students get access to 24/7 support, live mentoring, and interactive community discussions.",
  },
  {
    question: "HOW DOES AISKILLS HELP ME BUILD MY CAREER?",
    answer:
      "We provide career guidance, resume reviews, and direct job opportunities through industry partnerships.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Section - Heading & Description */}
        {/* <div className="text-white flex flex-col gap-4 text-start">
          <h2 className="font-impact text-5xl md:text-5xl uppercase">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-lg text-gray-400 font-Roboto Condensed leading-snug">
            ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS FROM INSTANT
            REAL-WORLD PROJECTS TO PROMPTS.
          </p>
        </div> */}
        <div className="text-white flex flex-col gap-4 text-start  pr-20 sm:pr-20 lg:pr-40">
          <h2 className="font-impact text-5xl md:text-5xl uppercase">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-lg text-gray-400 font-Roboto Condensed leading-snug">
            ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS FROM INSTANT
            REAL-WORLD PROJECTS TO PROMPTS.
          </p>
        </div>

        {/* Right Section - FAQ List */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-600 py-5 hover:cursor-pointer font-Roboto Condensed transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center text-white font-semibold text-lg">
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-[#00E0C6]" />
                ) : (
                  <FaPlus className="text-gray-400" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-400 text-md mt-3 transition-opacity duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
