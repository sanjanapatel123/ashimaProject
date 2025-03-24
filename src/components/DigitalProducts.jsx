import React from "react";
import product1 from "../assets/Rectangle 21.png";
import product2 from "../assets/Rectangle 22 (1).png";
import product3 from "../assets/Rectangle 22 (2).png";
import product4 from "../assets/Rectangle 22.png";

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
    <div className="bg-white text-black py-16  mt-5 ">
      <div
        className="w-[451px] h-[131px] mx-auto text-center"
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

        <p className=" text-[#000] font-[400] text-[16px] font-Roboto Condensed leading-[25px] tracking-[0.5%] mt-2">
          ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS <br /> FROM INSTANT
          REAL-WORLD PROJECTS TO PROMPTS.
        </p>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center mt-10 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-full h-[404px] rounded-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#4B4B4B] text-white text-sm font-bold py-1 px-3 rounded-md font-Roboto Condensed uppercase tracking-wide">
              {product.tag}
            </div>
            <div className="absolute bottom-4 left-4 text-white font-impact uppercase">
              <h3 className="text-[22px] leading-[28px]">{product.title}</h3>
              <p className="font-Roboto Condensed text-sm mt-1">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full h-[404px] relative rounded-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#4B4B4B] text-white text-sm font-bold py-1 px-3 rounded-md font-Roboto Condensed uppercase tracking-wide">
              {product.tag}
            </div>
            <div className="absolute bottom-4 left-4 text-white font-impact uppercase">
              <h3 className="text-[22px] leading-[28px]">{product.title}</h3>
              <p className="font-Roboto Condensed text-sm mt-1">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalProducts;
