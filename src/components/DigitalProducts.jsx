import React from "react";
import { motion } from "framer-motion";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

// Product Data
const products = [
  { name: "Product Name", image: product1, link: "#" },
  { name: "Product Name", image: product2, link: "#" },
  { name: "Product Name", image: product3, link: "#" },
  { name: "Product Name", image: product4, link: "#" },
  { name: "Product Name", image: product5, link: "#" },
  { name: "Product Name", image: product6, link: "#" },
];

const DigitalProducts = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#fffaf1]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-center">
        {/* Right Side - Text Section */}
        <motion.div
          className="lg:col-span-5 flex flex-col justify-center items-center text-center px-4 lg:px-0 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5 }} // Ensures animation triggers when 50% visible
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            DIGITAL PRODUCTS
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Enhance your learning with instant digital products from instant
            real-world projects to prompts.
          </p>
        </motion.div>

        {/* Left Side - Product Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 order-2 lg:order-1">
          {products.map((product, index) => (
            <motion.a
              href={product.link}
              key={index}
              className="group flex flex-col items-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ amount: 0.3 }} // 30% visible, animation triggers
            >
              <div className="w-32 h-48 rounded-[50px] overflow-hidden shadow-lg bg-[#18453B] items-start justify-center transition-transform transform duration-300 group-hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-20 rounded-3xl mt-5 ml-6"
                />
                <p className="mt-5 text-center text-white font-medium">
                  {product.name}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalProducts;
