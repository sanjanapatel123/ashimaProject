import React from "react";
import img from "../assets/image copy 3.png"; // Your image import

const LearningJourney = () => {
  return (
    <div className="relative">
      {/* Background Image fixed */}
      <div
        className="absolute  inset-0 bg-stroll bg-center "
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-50"> </div>
      </div>

      {/* Content Layer */}
      <div className="flex justify-around">
        <div className="relative z-10 flex flex-col  text-white p-6 md:p-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            Start Your Learning Journey Today.
          </h1>
          <p className=" md:text-xl">
            Unlock endless opportunities with expert-led <br />
            courses. Learn anytime, anywhere, and boost your
            <br /> skills for a brighter future.
          </p>
          <button className="bg-green-900 hover:bg-green-700 text-white font-bold w-28 h-16 rounded-lg">
            Get Started!
          </button>
        </div>
        {/* <div className="relative test-black text-lg font-bold flex items-center justify-center ">
          <p>
            Note: I liked your style <br />
            that you have shown <br />
            in the demo before the start of
            <br /> the project. Use that here.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LearningJourney;

// import React from 'react'
// import img from "../assets/image copy 3.png";

// const LearningJourney = () => {
//   return (

// <div class="bg-gray-50">

//         <div class="relative bg-gray-900 overflow-hidden">
//             <div class="inset-0 fixed">
//                 <img src={img} class=" object-cover opacity-50 fixed" alt="Hero Background"/>
//             </div>
//             <div class="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
//                 <div class="max-w-2xl">
//                     <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Transform Your Future With Online Learning</h1>
//                     <p class="mt-6 text-xl text-gray-300">Access world-class education from anywhere. Join millions of learners worldwide and start your success journey today.</p>
//                     <div class="mt-10">
//                         <button class="bg-custom text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-custom/90 !rounded-button">Explore Courses <i class="fas fa-arrow-right ml-2"></i></button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>

//   )
// }

// export default LearningJourney
