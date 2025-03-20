// import React from "react";
// import { FaLinkedin } from "react-icons/fa";
// import review from "../assets/ReviewIcon.png"; // Placeholder image

// const reviews = [
//   {
//     name: "Arshi Kansal",
//     companyName: "Company Name",
//     review:
//       "I recently completed the Generative AI course from AI Skills, and it was fantastic! The content was well-structured, and the hands-on projects made learning practical and engaging. Plus, the certification is a great addition to my resume! Highly recommend it to anyone looking to dive into AI!",
//     image: review,
//   },
//   {
//     name: "Sample Name 2",
//     companyName: "Company Name",
//     review: "Sample review I recently completed the Generative AI course from AI Skills, and it was fantastic! The content was well-structured, and the hands-on projects made learning practical and engaging. Plus, the certification is a great addition to my resume! Highly recommend it to anyone looking to dive into AI!",
//     image: review,
//   },
//   {
//     name: "Sample Name 3",
//     companyName: "Company Name",
//     review: "Sample review I recently completed the Generative AI course from AI Skills, and it was fantastic! The content was well-structured, and the hands-on projects made learning practical and engaging. Plus, the certification is a great addition to my resume! Highly recommend it to anyone looking to dive into AI!",
//     image: review,
//   },
//   {
//     name: "Sample Name 4",
//     companyName: "Company Name ",
//     review: "Sample review I recently completed the Generative AI course from AI Skills, and it was fantastic! The content was well-structured, and the hands-on projects made learning practical and engaging. Plus, the certification is a great addition to my resume! Highly recommend it to anyone looking to dive into AI!",
//     image: review,
//   },
// ];

// const ReviewCards = () => {
//   return (
//     <div className="w-full bg-white text-black py-12 font-[Inter]">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-5xl font-extrabold text-center mb-10">
//           Why our learners love us
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
//           {reviews.map((review, index) => (
//             <div
//               key={index}
//               className="Hover:bg-[#fff] p-6 rounded-3xl border-2 border-[#444444]
//               shadow-lg hover:shadow-2xl hover:scale-105 hover:border-yellow hover:bg-[#fffaf1]
//               transition-all duration-300 
//               w-full max-w-[360px] min-h-[400px]
//               flex flex-col justify-between"
//             >
//               <div className="flex flex-col items-center">
//                 {/* LinkedIn Icon with Style */}
//                 <div className="flex justify-end w-full mb-4">
//                   <a
//                     href="https://www.linkedin.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaLinkedin
//                       size={40}
//                       className="text-[#0077B5] p-2 bg-white border-2 border-[#0077B5] rounded-full transition-all duration-300 hover:bg-[#0077B5] hover:text-white"
//                     />
//                   </a>
//                 </div>

//                 {/* User Profile Image */}
//                 <img
//                   src={review.image}
//                   alt="User"
//                   className="rounded-full w-24 h-24 mb-4 border-4 border-[#444444] hover:scale-105 transition-all duration-300"
//                 />
//                 <p className="text-xl font-semibold text-black">
//                   {review.name}
//                 </p>
//                 <p className="text-sm text-gray-600">{review.companyName}</p>
//               </div>

//               {/* Review Text */}
//               <p className="text-sm mt-4 text-gray-700">{review.review}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewCards;







// import React from "react";

// const testimonials = [
//   {
//     name: "Neha Sharma",
//     image: "https://via.placeholder.com/100", // Replace with actual image URL
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
//     rating: 4.8,
//   },
//   {
//     name: "Neha Sharma",
//     image: "https://via.placeholder.com/100", // Replace with actual image URL
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
//     rating: 4.8,
//   },
//   {
//     name: "Neha Sharma",
//     image: "https://via.placeholder.com/100", // Replace with actual image URL
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
//     rating: 4.8,
//   },
// ];

// const TestimonialCard = ({ name, image, text, rating }) => {
//   return (
//     <div className="bg-teal-700 text-white p-6 rounded-2xl shadow-lg max-w-sm">
//       <div className="flex items-center gap-4">
//         <img
//           src={image}
//           alt={name}
//           className="w-16 h-16 rounded-full border-2 border-white"
//         />
//         <h3 className="text-lg font-bold">{name}</h3>
//       </div>
//       <p className="mt-4 text-sm leading-relaxed">{text}</p>
//       <div className="mt-4 flex items-center gap-2">
//         <span className="font-semibold">Rating {rating}</span>
//         <div className="flex gap-1">
//           {[...Array(4)].map((_, i) => (
//             <span key={i} className="text-yellow-400 text-lg">
//               ★
//             </span>
//           ))}
//           <span className="text-yellow-400 text-lg">☆</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Testimonials = () => {
//   return (
//     <section className="py-12 text-center">
//       <h2 className="text-3xl font-bold text-black">
//         WHY OUR LEARNERS LOVE US <span className="text-red-500">❤️</span>
//       </h2>
//       <div className="mt-8 flex flex-wrap justify-center gap-6">
//         {testimonials.map((testimonial, index) => (
//           <TestimonialCard key={index} {...testimonial} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;






import React from "react";
import review from "../assets/reviewimage.jpg"

const testimonials = [
  {
    name: "Neha Sharma",
    image: review,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4.8,
  },
  {
    name: "Neha Sharma",
    image: review,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4.8,
  },
  {
    name: "Neha Sharma",
    image: review,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    rating: 4.8,
  },
];

const Testimonials = () => {
  return (
    <div className=" py-12 bg-white ml-5 ">
      <h1 className="text-5xl font-bold text-black mb-10 font-impact">
        WHY OUR LEARNERS LOVE US <span className="text-red-500">❤</span>
      </h1>

      <div className="flex flex-wrap gap-8 justify-start">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#0F7768] text-white w-[450px] min-h-[350px] p-6 rounded-xl shadow-lg text-left transition-all duration-300 hover:scale-105"
          >
            {/* Circular Image and Name Section */}
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
              />
              <h3 className="text-xl font-bold ml-6 tracking-wide">
                {testimonial.name}
              </h3>
            </div>

            {/* Review Text */}
            <p className="text-base leading-relaxed text-gray-200">
              {testimonial.review}
            </p>

            {/* Rating Section */}
            <div className="mt-4 flex items-center space-x-2 text-yellow-400 font-semibold text-base">
              <span className="text-white font-bold">
                RATING {testimonial.rating}
              </span>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
