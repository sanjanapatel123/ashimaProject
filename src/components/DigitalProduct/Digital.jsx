import React, { useRef } from "react";
import digitalproductsection from "../../assets/digitalproductsection.png";
import digitalproduct2 from "../../assets/digitalproduct2.png";
import digitalproduct3 from "../../assets/digitalproduct3.png";
import digitalproduct1 from "../../assets/digitalproduct1.png";
import digitalproduct4 from "../../assets/digitalproduct4.png";
import { Link } from "react-router-dom";
import reviewimage from "../../assets/reviewimage.jpg";
import FAQSection from "../../components/Home/FAQSection";
import Nav_DigitalProduct from "./Nav_DigitalProduct";
import StartLearning from "../Home/StartLearning";
import Header from "../Courses/Header";
import Footer from "../Footer";

function DigitalProductsSection() {
  const productSectionRef = useRef(null);

  const scrollToProducts = () => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const products = [
    {
      img: digitalproduct1,
      title: "Premium Glow Up Akademi Metodu (%50 Özel İndirim)",
      author: "Glow Up Academy",
      price: "Try 129",
      fileCount: "1 File",
    },
    {
      img: digitalproduct2,
      title: "Premium Glow Up Akademi Metodu (%50 Özel İndirim)",
      author: "Glow Up Academy",
      price: "Try 129",
      fileCount: "1 File",
    },
    {
      img: digitalproduct3,
      title: "Premium Glow Up Akademi Metodu (%50 Özel İndirim)",
      author: "Glow Up Academy",
      price: "Try 129",
      fileCount: "1 File",
    },
    {
      img: digitalproduct4,
      title: "Premium Glow Up Akademi Metodu (%50 Özel İndirim)",
      author: "Glow Up Academy",
      price: "Try 129",
      fileCount: "1 File",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div className="pt-20">
        <div className="h-auto bg-[#0E7369] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-10 gap-6">
          {/* Left Side Content */}
          <div className="text-[#ffffff] w-full lg:w-[475px]">
            <h2 className="text-[32px] md:text-[40px] font-impact uppercase">
              Digital Products
            </h2>
            <p className="text-[16px] font-roboto mt-2">
              Download expertly crafted tools, resources, and templates
              developed by top creatives.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={scrollToProducts}
                className="inline-block mt-4 h-[50px] w-[162px] bg-[#FF757A] text-white px-6 py-2 rounded-[12px] shadow-lg font-roboto text-[18px] text-center"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-auto">
            <img
              src={digitalproductsection}
              alt="Shopping carts digital"
              className="w-full max-w-[700px] h-auto rounded-[8px] shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* PRODUCT COUNT */}
    {/* Top Text Row */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-10 pt-8 pb-4 gap-2">
  {/* Left Side Text */}
  <div>
    <p className="text-[14px] text-black font-medium mb-1">1070 PRODUCTS</p>
    <h2
      ref={productSectionRef}
      className="text-[28px] md:text-[32px] font-impact uppercase text-[#000000]"
    >
      All Digital Products
    </h2>
  </div>

  {/* Right Side Filters */}
  <div className="flex flex-wrap items-center gap-2 font-inter">
    <select className="border border-gray-300 rounded-full px-4 py-2 text-[14px] bg-white focus:outline-none">
      <option>Price Range</option>
    </select>
    <select className="border border-gray-300 rounded-full px-4 py-2 text-[14px] bg-white focus:outline-none">
      <option>File Type</option>
    </select>
    <select className="border border-gray-300 rounded-full px-4 py-2 text-[14px] bg-white focus:outline-none">
      <option>Sort By : Most Popular</option>
    </select>
    <select className="border border-gray-300 rounded-full px-4 py-2 text-[14px] bg-white focus:outline-none">
      <option>Date Added</option>
    </select>
  </div>
</div>


      {/* PRODUCT GRID RESPONSIVE */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 px-4 md:px-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="border w-full max-w-[335px] h-[425px] rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition mx-auto"
          >
            <img
              src={item.img}
              alt="Product Cover"
              className="object-cover shraddha w-[300px] h-[234px] mx-auto"
            />
            <div className="p-4">
              <p className="text-[14px] text-[#000000] w-[45px] h-[20px]">
                e Book
              </p>
              <h3 className="font-impact text-[20px] leading-[25px] w-[272px] h-[50px]">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#1E1E1E] w-[123px] h-[14px] font-jost">
                By {item.author}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[#047670] font-impact text-[22px] leading-[25px]">
                  {item.price}
                </p>
                <p className="text-[#1e1e1e] text-[14px]">{item.fileCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 px-4 md:px-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="border w-full max-w-[335px] h-[425px] rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition mx-auto"
          >
            <img
              src={item.img}
              alt="Product Cover"
              className="object-cover shraddha w-[300px] h-[234px] mx-auto"
            />
            <div className="p-4">
              <p className="text-[14px] text-[#000000] w-[45px] h-[20px]">
                e Book
              </p>
              <h3 className="font-impact text-[20px] leading-[25px] w-[272px] h-[50px]">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#1E1E1E] w-[123px] h-[14px] font-jost">
                By {item.author}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[#047670] font-impact text-[22px] leading-[25px]">
                  {item.price}
                </p>
                <p className="text-[#1e1e1e] text-[14px]">{item.fileCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 px-4 md:px-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="border w-full max-w-[335px] h-[425px] rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition mx-auto"
          >
            <img
              src={item.img}
              alt="Product Cover"
              className="object-cover shraddha w-[300px] h-[234px] mx-auto"
            />
            <div className="p-4">
              <p className="text-[14px] text-[#000000] w-[45px] h-[20px]">
                e Book
              </p>
              <h3 className="font-impact text-[20px] leading-[25px] w-[272px] h-[50px]">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#1E1E1E] w-[123px] h-[14px] font-jost">
                By {item.author}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[#047670] font-impact text-[22px] leading-[25px]">
                  {item.price}
                </p>
                <p className="text-[#1e1e1e] text-[14px]">{item.fileCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 px-4 md:px-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="border w-full max-w-[335px] h-[425px] rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition mx-auto"
          >
            <img
              src={item.img}
              alt="Product Cover"
              className="object-cover shraddha w-[300px] h-[234px] mx-auto"
            />
            <div className="p-4">
              <p className="text-[14px] text-[#000000] w-[45px] h-[20px]">
                e Book
              </p>
              <h3 className="font-impact text-[20px] leading-[25px] w-[272px] h-[50px]">
                {item.title}
              </h3>
              <p className="text-[12px] text-[#1E1E1E] w-[123px] h-[14px] font-jost">
                By {item.author}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-[#047670] font-impact text-[22px] leading-[25px]">
                  {item.price}
                </p>
                <p className="text-[#1e1e1e] text-[14px]">{item.fileCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ AND REVIEWS */}
      <FAQSection />
      <StartLearning />
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Heading */}
        <h2 className="text-[36px] font-roboto mb-6 ml-0 sm:ml-36">
          FEATURED REVIEWS:
        </h2>

        {/* Scrollable Card Section */}
        <div className="w-full overflow-x-auto mt-10 ml-0 sm:ml-36">
          <div className="min-w-[1024px] flex gap-10 px-6 py-2 rounded-[8px]">
            {/* Card 1 */}
            <div className="bg-[#047670] text-[#ffffff] p-4 rounded-md shadow-md text-start w-[340px] h-[284px]">
              <div className="flex  mb-4">
                <img
                  src={reviewimage}
                  alt="Neha Sharma"
                  className="w-[91px] h-[91px] rounded-full "
                />
                <h3 className="font-['Roboto_Condensed'] font-bold text-[25px] leading-[24px] tracking-[0.02em] uppercase">
                  NEHA SHARMA
                </h3>
              </div>
              <p className="font-['Roboto_Condensed'] font-medium text-[16px] leading-[22px] tracking-[0.02em] uppercase mb-4">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
                EUSMOD TEMPOR
              </p>
              <div className="text-[14px] font-['Roboto_Condensed'] flex items-center gap-2">
                RATING 4.8
                <span className="text-[#FBBC09] flex">★ ★ ★ ★ ☆</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#047670] text-[#ffffff] p-4 rounded-md shadow-md text-start w-[340px] h-[284px]">
              <div className="flex items-center  mb-4">
                <img
                  src={reviewimage}
                  alt="Neha Sharma"
                  className="w-[91px] h-[91px] rounded-full "
                />
                <h3 className="font-['Roboto_Condensed'] font-bold text-[25px] leading-[24px] tracking-[0.02em] uppercase">
                  NEHA SHARMA
                </h3>
              </div>
              <p className="font-['Roboto_Condensed'] font-medium text-[16px] leading-[22px] tracking-[0.02em] uppercase mb-4">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
                EUSMOD TEMPOR
              </p>
              <div className="text-[14px] font-['Roboto_Condensed'] flex items-center gap-2">
                RATING 4.8
                <span className="text-[#FBBC09] flex">★ ★ ★ ★ ☆</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#047670] text-[#ffffff] p-4 rounded-md shadow-md text-start w-[340px] h-[284px]">
              <div className="flex items-center  mb-4">
                <img
                  src={reviewimage}
                  alt="Neha Sharma"
                  className="w-[91px] h-[91px] rounded-full "
                />
                <h3 className="font-['Roboto_Condensed'] font-bold text-[25px] leading-[24px] tracking-[0.02em] uppercase">
                  NEHA SHARMA
                </h3>
              </div>
              <p className="font-['Roboto_Condensed'] font-medium text-[16px] leading-[22px] tracking-[0.02em] uppercase mb-4">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
                EUSMOD TEMPOR
              </p>
              <div className="text-[14px] font-['Roboto_Condensed'] flex items-center gap-2">
                RATING 4.8
                <span className="text-[#FBBC09] flex">★ ★ ★ ★ ☆</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DigitalProductsSection;
