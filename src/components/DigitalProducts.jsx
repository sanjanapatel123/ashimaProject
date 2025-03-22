// import React from "react";
// import { motion } from "framer-motion";
// import product1 from "../assets/product1.jpg";
// import product2 from "../assets/product2.png";
// import product3 from "../assets/product3.png";
// import product4 from "../assets/product4.png";
// import product5 from "../assets/product5.png";
// import product6 from "../assets/product6.png";

// // Product Data
// const products = [
//   { name: "Product Name", image: product1, link: "#" },
//   { name: "Product Name", image: product2, link: "#" },
//   { name: "Product Name", image: product3, link: "#" },
//   { name: "Product Name", image: product4, link: "#" },
//   { name: "Product Name", image: product5, link: "#" },
//   { name: "Product Name", image: product6, link: "#" },
// ];

// const DigitalProducts = () => {
//   return (
//     <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#fff] text-center font-[Inter]">
//       {/* Title Section */}
//       <div
//         className="flex flex-col justify-center items-center text-center px-4 lg:px-0 mb-8"
//         initial={{ opacity: 0, y: -50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ amount: 0.5 }}
//       >
//         <h2 className="text-5xl font-bold text-gray-900 mb-4">
//           DIGITAL PRODUCTS
//         </h2>
//         <p className="text-gray-700 leading-relaxed">
//           Enhance your learning with instant digital products from instant
//           real-world projects to prompts.
//         </p>
//       </div>

//       {/* Second Row - Same as Above */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-20">
//         {products.map((product, index) => (
//           <motion.a
//             href={product.link}
//             key={`second-row-${index}`}
//             className="group flex flex-col items-center"
//             initial={{ opacity: 0, y: 100 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.2,
//               ease: "easeOut",
//             }}
//             viewport={{ amount: 0.3 }}
//           >
//             <div className="w-32 h-48 rounded-[50px] overflow-hidden shadow-lg bg-[#18453B] items-start justify-center transition-transform transform duration-300 group-hover:scale-105">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="h-24 w-20 rounded-3xl mt-5 ml-6"
//               />
//               <p className="mt-5 text-center text-white font-medium">
//                 {product.name}
//               </p>
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DigitalProducts;

// import React from "react";
// import product1 from "../assets/product1.png"
// import product2 from "../assets/product2.png";
// import product3 from "../assets/product3.png";
// import product4 from "../assets/product4.png";

// const products = [
//   {
//     id: 1,
//     title: "PRODUCT NAME",
//     description: "DESCRIPTION",
//     image: product1,
//     tag: "PRODUCT 1",
//   },
//   {
//     id: 2,
//     title: "PRODUCT NAME",
//     description: "DESCRIPTION",
//     image: product2,
//     tag: "PRODUCT 2",
//   },
//   {
//     id: 3,
//     title: "PRODUCT NAME",
//     description: "DESCRIPTION",
//     image: product3,
//     tag: "PRODUCT 3",
//   },
//   {
//     id: 4,
//     title: "PRODUCT NAME",
//     description: "DESCRIPTION",
//     image: product4,
//     tag: "PRODUCT 4",
//   },
// ];

// const DigitalProducts = () => {
//   return (
//     <div className="bg-white text-black py-16 px-8">
//       {/* Heading Section */}
//       <h2 className="text-center text-5xl font-extrabold uppercase mb-4">
//         DIGITAL <span className="text-[#008578]">PRODUCTS</span>
//       </h2>
//       <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto">
//         ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS FROM INSTANT
//         REAL-WORLD PROJECTS TO PROMPTS.
//       </p>

//       {/* Product Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mt-10 px-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="relative shadow-md rounded-lg overflow-hidden bg-gray-100 p-4 flex items-center justify-center"
//           >
//             {/* Product Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-auto aspect-[4/3] object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DigitalProducts;

// import React from "react";
// import product1 from "../assets/product1.png";
// import product2 from "../assets/product2.png";
// import product3 from "../assets/product3.png";
// import product4 from "../assets/product4.png";

// const products = [
//   {
//     id: 1,
//     title: "PRODUCT NAME",
//     description: "DESCRIPTION",
//     image: product1,
//     tag: "PRODUCT 1",
//   },
//   {
//     id: 2,
//     title: "PRODUCT NAME",
//     description: "DESCRIPTION",
//     image: product2,
//     tag: "PRODUCT 2",
//   },
//   {
//     id: 3,
//     title: "PRODUCT NAME",
//     description: "DESCRIPTION",
//     image: product3,
//     tag: "PRODUCT 3",
//   },
//   {
//     id: 4,
//     title: "PRODUCT NAME",
//     description: "DESCRIPTION",
//     image: product4,
//     tag: "PRODUCT 4",
//   },
// ];

// const DigitalProducts = () => {
//   return (
//     <div className="bg-white text-black py-16 px-6 sm:px-8">
//       {/* Heading Section */}
//       <h2 className="text-center text-3xl sm:text-5xl font-extrabold uppercase mb-4">
//         DIGITAL <span className="text-[#008578]">PRODUCTS</span>
//       </h2>
//       <p className="text-center text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
//         ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS FROM INSTANT
//         REAL-WORLD PROJECTS TO PROMPTS.
//       </p>

//       {/* Product Cards Section */}
//       <div className="flex gap-6 overflow-x-auto px-4 scrollbar-hide justify-start sm:justify-between">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="relative bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-[300px] min-w-full sm:min-w-[300px] flex-shrink-0"
//           >
//             {/* Product Image */}
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-[400px] sm:h-[600px] object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DigitalProducts;

import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";

const products = [
  {
    id: 1,
    title: "PRODUCT NAME",
    description: "DESCRIPTION",
    image: product1,
    tag: "PRODUCT 1",
  },
  {
    id: 2,
    title: "PRODUCT NAME",
    description: "DESCRIPTION",
    image: product2,
    tag: "PRODUCT 2",
  },
  {
    id: 3,
    title: "PRODUCT NAME",
    description: "DESCRIPTION",
    image: product3,
    tag: "PRODUCT 3",
  },
  {
    id: 4,
    title: "PRODUCT NAME",
    description: "DESCRIPTION",
    image: product4,
    tag: "PRODUCT 4",
  },
];

const DigitalProducts = () => {
  return (
    <div className="bg-white text-black py-16 px-6 sm:px-8 mt-5 ">
      {/* Heading Section */}
      {/* <h2
        className="text-center text-[55px] sm:text-5xl font-impact
 uppercase mb-4 tracking-[0.5%] leading-[65px]"
      >
        DIGITAL <span className="text-[#008578]">PRODUCTS</span>
      </h2>
    
      <p className="text-center text-[16px] text-[#1E1E1E]   font-Roboto Condensed tracking-[0.5%]">
        ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS <br />
        FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.
      </p> */}
      {/* <h2
        className="text-center text-[55px] sm:text-5xl font-impact
  uppercase mb-4 tracking-[0.5%] leading-[65px]"
      >
        DIGITAL <span className="text-[#008578]">PRODUCTS</span>
      </h2>

      <p className="text-center text-[16px] text-[#1E1E1E] font-Roboto Condensed tracking-[0.5%]">
        ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS <br />
        FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.
      </p> */}
      {/* <div className="mx-auto text-center max-w-[600px]">
       
        <h2 className="text-[55px] sm:text-5xl font-impact uppercase mb-4 tracking-[0.5%] leading-[65px]">
          DIGITAL <span className="text-[#008578]">PRODUCTS</span>
        </h2>

        <p className="text-[16px] text-[#1E1E1E] font-Roboto Condensed leading-[25px]">
          ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS <br />
          FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.
        </p>
      </div> */}

      {/* <div className="w-[411px] h-[131px] mx-auto flex flex-col items-center justify-center gap-4">
        <h2 className="text-[55px] font-impact uppercase tracking-[0.5%] leading-[65px] text-center">
          DIGITAL <span className="text-[#008578]">PRODUCTS</span>
        </h2>

        <p className="text-[16px] text-[#1E1E1E] font-Roboto Condensed leading-[25px] text-center">
          ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS <br />
          FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.
        </p>
      </div> */}
      {/* <div
        className="w-[411px] h-[131px] mx-auto text-center"
        style={{
          lineHeight: "normal", // Keeps height tight
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px", // Smaller gap between h2 and p
        }}
      >
        <h2 className="text-[55px] sm:text-5xl font-impact uppercase mb-0 tracking-[0.5%] leading-[65px]">
          DIGITAL <span className="text-[#008578]">PRODUCTS</span>
        </h2>

        <p className="text-[16px] text-[#1E1E1E] font-Roboto Condensed leading-[25px]">
          ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS <br />
          FROM INSTANT REAL-WORLD PROJECTS TO PROMPTS.
        </p>
      </div> */}
      <div
        className="w-[411px] h-[131px] mx-auto text-center"
        style={{
          lineHeight: "normal",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <h2 className="text-[55px] sm:text-5xl font-impact uppercase mb-0 tracking-[0.5%] leading-[65px]">
          DIGITAL <span className="text-[#008578]">PRODUCTS</span>
        </h2>

        <p className=" text-[#1E1E1E] font-Roboto Condensed leading-[25px]">
          ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS FROM INSTANT
          REAL-WORLD PROJECTS TO PROMPTS.
        </p>
      </div>

      {/* Product Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  place-items-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-transparent  rounded-lg overflow-hidden flex flex-col items-center w-[350px] h-[440px] mx-auto"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain p-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalProducts;
