

// import React, { useState } from "react"; // Import useState hook
// import marketproduct1 from "../../assets/marketproduct1.png";
// import marketproduct2 from "../../assets/marketproduct2.png";
// import marketproduct3 from "../../assets/marketproduct3.png";
// import marketproduct4 from "../../assets/marketproduct4.png";
// import marketproduct5 from "../../assets/marketproduct5.png";
// import marketproduct6 from "../../assets/marketproduct6.png";
// import marketproduct8 from "../../assets/marketproduct8.png";
// import digitalproduct1 from "../../assets/digitalproduct1.png";
// import StartLearning from "../Home/StartLearning";
// import reviewimage from "../../assets/reviewimage.jpg";
// import Nav_DigitalProduct from "./Nav_DigitalProduct";
// import Header from "../Courses/Header";

// const MarketProduct = () => {
//   const [openIndex, setOpenIndex] = useState(null); // Track the open question index

//   const handleToggle = (index) => {
//     // Toggle the clicked question's visibility
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqData = [
//     {
//       question: "WHAT TYPES OF DIGITAL PRODUCTS ARE AVAILABLE ON AISKILLS?",
//       answer:
//         "AISKILLS offers a wide range of digital products including eBooks, online courses, software tools, templates, and more.",
//     },
//     {
//       question: "ARE THE DIGITAL PRODUCTS ON AISKILLS BEGINNER-FRIENDLY?",
//       answer:
//         "Yes, most of our digital products are beginner-friendly, with easy-to-follow instructions and tutorials.",
//     },
//     {
//       question: "HOW DO I ACCESS MY PURCHASED DIGITAL PRODUCTS?",
//       answer:
//         "After purchase, you will receive an email with a download link or access instructions. You can also find your products in your account under 'My Purchases'.",
//     },
//     {
//       question:
//         "CAN I GET A REFUND IF I'M NOT SATISFIED WITH A DIGITAL PRODUCT?",
//       answer:
//         "Refunds are available within 30 days of purchase. Please contact customer support for assistance.",
//     },
//     {
//       question: "CAN INSTRUCTORS SELL THEIR OWN DIGITAL PRODUCTS ON AISKILLS?",
//       answer:
//         "Yes, instructors can sell their digital products on AISKILLS. You can sign up as a seller and upload your products for sale.",
//     },
//     {
//       question: "ARE THERE ANY FREE DIGITAL PRODUCTS AVAILABLE?",
//       answer:
//         "Yes, AISKILLS offers several free digital products, including free courses, templates, and resources.",
//     },
//     {
//       question: "CAN I USE AISKILLS DIGITAL PRODUCTS FOR COMMERCIAL PROJECTS?",
//       answer:
//         "Some digital products are licensed for commercial use, but please review the license terms of each product before using them in commercial projects.",
//     },
//     {
//       question: "DO I NEED SPECIAL SOFTWARE TO USE THE DIGITAL PRODUCTS?",
//       answer:
//         "In most cases, you don't need special software, but some products may require specific software like PDF readers or course platforms.",
//     },
//   ];

//   return (
//     <>
//       <Header />
//       <div className="flex flex-col lg:flex-row bg-[#047670] lg:h-[652px] p-4 lg:p-0 mt-4">
//         {/* Left Image Section */}
//         <div className="flex w-full lg:w-1/2 items-center justify-center lg:justify-start p-6 lg:pl-20">
//           <img
//             src={digitalproduct1}
//             alt="Lost Connections Book"
//             className="w-full h-full object-contain rounded-tl-[4px] rounded-tr-[4px] mt-8"
//           />
//         </div>

//         {/* Right Content Section */}
//         <div className="relative w-full lg:absolute lg:w-[460px] bg-[#ffffff] rounded-md p-6 mt-6 lg:mt-40 lg:left-[50%] xl:left-[931px]">
//           {/* eBook Tag */}
//           <div className="text-[13px] font-roboto text-[#000000] mt-4">
//             e Book
//           </div>

//           {/* Title */}
//           <div className="w-full text-2xl lg:text-[30px] tracking-[0.02em] capitalize font-impact mt-2">
//             Premium Glow Up Akademi <br />
//             Metodu (% 50 Ozel Indirim)
//             {/* Author */}
//             <div className="text-[12px] font-Jost mb-2 text-[#1E1E1ECC] p-2 rounded-md mt-2">
//               By <span>Glow Up Academy</span>
//             </div>
//           </div>

//           {/* Price and File */}
//           <div className="text-[45px] lg:text-[32px] font-impact text-[#047670] whitespace-nowrap text-start mt-2">
//             Try 129{" "}
//             <span className="text-[20px] text-[#1E1E1E] font-jost">
//               | 1 File
//             </span>
//           </div>

//           {/* Buy Now Button */}
//           <button className="w-full bg-[#047670] hover:bg-[#005b4f] text-white border border-[#047670] rounded-[12px] px-px py-[10px] flex items-center justify-center gap-[10px] text-lg lg:text-[22px] mt-3">
//             Buy Now
//           </button>

//           {/* Unlock and Access Button */}
//           <button className="w-full lg:w-[214px] mx-auto lg:ml-20 h-[32.33px] bg-[#ffffff] rounded-[4px] text-sm lg:text-[18px] text-[#1E1E1ECC] flex items-center justify-center gap-4 mt-2 font-jost">
//             <img
//               src={marketproduct2}
//               alt="lock"
//               className="w-[24px] h-[24px]"
//             />
//             Unlock And Access
//           </button>

//           {/* PDF Download Section */}
//           <div className="flex items-center border border-[#047670] justify-center gap-[12px] font-roboto p-2 rounded-[12px] mt-5">
//             <img src={marketproduct1} alt="icon" className="w-6 h-6" />
//             <a
//               href="#"
//               className="flex-1 text-center !text-[#047670] py-2 rounded-[12px] text-sm lg:text-[22px] truncate"
//             >
//               Premium Glowup.PDF (128mb)
//             </a>
//             <img src={marketproduct2} alt="lock" className="w-6" />
//           </div>
//         </div>
//       </div>

//       <div className="w-full px-4 sm:px-8 mt-10">
//         <div className="lg:w-[850px] bg-[#ffffff] rounded-md text-[#1E1E1E] mt-8 lg:mt-20 lg:ml-20">
//           {/* Header Section */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
//             <h2 className="text-[#047670] text-[26px] font-impact leading-[20px]">
//               Related Images
//             </h2>
//             <div className="flex items-center gap-2 text-[#1E1E1ECC] font-jost text-[18px] mt-2 sm:mt-0">
//               Download
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="#047670"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
//                 />
//               </svg>
//             </div>
//           </div>

//           {/* Images Row with fixed min-width */}
//           <div className="flex gap-4 min-w-[850px] mt-2">
//             <img
//               src={marketproduct3}
//               alt="img1"
//               className="w-[190px] h-[120px] object-cover rounded-md"
//             />
//             <img
//               src={marketproduct4}
//               alt="img2"
//               className="w-[190px] h-[120px] object-cover rounded-md"
//             />
//             <img
//               src={marketproduct5}
//               alt="img3"
//               className="w-[190px] h-[120px] object-cover rounded-md"
//             />
//             <img
//               src={marketproduct6}
//               alt="img4"
//               className="w-[190px] h-[120px] object-cover rounded-md"
//             />
//           </div>
//         </div>
//       </div>

//       {/* About This Product Section */}
//       <div className="lg:w-[796px] bg-[#ffffff] p-4 rounded-md shadow text-[#1E1E1E] mt-8 lg:mt-20 lg:ml-20">
//         <div className="flex items-center justify-between mb-4">
//           {/* Left Heading */}
//           <h2 className="text-2xl lg:text-[26px] font-impact text-[#1E1E1E]">
//             About This Product
//           </h2>

//           {/* Right Share Button */}
//           <div className="flex items-center gap-2 text-[#047670] font-jost text-[18px] cursor-pointer">
//             <span>Share</span>
//             <img src={marketproduct8} className="w-[30px] h-[30px]" />
//           </div>
//         </div>

//         <p className="mb-4 text-base lg:text-[18px] font-Jost">
//           Sorularınızdan Bıktınız Mı? Glow Up Akademi Metodu Size Yardımcı
//           Olacaktır. 🚀
//         </p>
//         <p className="mb-4 text-base lg:text-[18px] font-Jost">
//           Glow Up Akademi Metodu Göz Çevresindeki İyileşmelerden (Puffiner
//           [şeyi] Tutan, Heaving Straightening Kadar Gözle Görüldü) Her Şeyi
//           Anlayın. Kullanmanız Gereken Cilt Bakım Ürünleri, Size Sürülene Kadar
//           Ne İşe Yaradıklarını, Size Güvenlik Veriyoruz...
//         </p>
//         <p className="mb-4 text-base lg:text-[18px] font-Jost">
//           Ürün Ekstra Olarak Yazan Günlük Rutininizi Ve Tavsiyelerinizi De
//           İçeriyor. 🧴
//         </p>
//         <p className="mb-4 text-base lg:text-[18px] font-Jost">
//           Ürün Şuanki Sınırlı Stoklu İndirimde Ve Hızlı Eriştiği Değerlere
//           Yükseleceğini, O Yüzden Elini Çabuk Tut!
//         </p>
//       </div>

//       {/* FAQ Section */}
//       <div className="w-full lg:w-[870px] bg-black text-[#ffffff] px-6 py-8 lg:py-16 mt-8 lg:mt-20 ">
//         <div className="w-full lg:w-[738px] h-auto bg-black text-white p-4 lg:p-6 lg:ml-10">
//           <div className="flex flex-col gap-6 lg:gap-[36px]">
//             {faqData.map((item, index) => (
//               <div
//                 key={index}
//                 className="border-b border-white pb-2 flex justify-between items-center text-sm lg:text-[16px] font-roboto cursor-pointer"
//                 onClick={() => handleToggle(index)} // Toggle question on click
//               >
//                 {item.question}
//                 <span className="text-lg lg:text-[24px] font-roboto">
//                   {openIndex === index ? "-" : "+"}
//                 </span>
//               </div>
//             ))}

//             {/* Display the answer of the clicked question */}
//             {openIndex !== null && (
//               <div className="text-sm lg:text-[16px] font-roboto text-white pt-2">
//                 <p>{faqData[openIndex].answer}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <StartLearning />
//     </>
//   );
// };

// export default MarketProduct;




import React, { useState } from "react"; // Import useState hook
import marketproduct1 from "../../assets/marketproduct1.png";
import marketproduct2 from "../../assets/marketproduct2.png";
import marketproduct3 from "../../assets/marketproduct3.png";
import marketproduct4 from "../../assets/marketproduct4.png";
import marketproduct5 from "../../assets/marketproduct5.png";
import marketproduct6 from "../../assets/marketproduct6.png";
import marketproduct8 from "../../assets/marketproduct8.png";
import digitalproduct1 from "../../assets/digitalproduct1.png";
import StartLearning from "../Home/StartLearning";
import reviewimage from "../../assets/reviewimage.jpg";
import Nav_DigitalProduct from "./Nav_DigitalProduct";
import Header from "../Courses/Header";

const MarketProduct = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track the open question index

  const handleToggle = (index) => {
    // Toggle the clicked question's visibility
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "WHAT TYPES OF DIGITAL PRODUCTS ARE AVAILABLE ON AISKILLS?",
      answer:
        "AISKILLS offers a wide range of digital products including eBooks, online courses, software tools, templates, and more.",
    },
    {
      question: "ARE THE DIGITAL PRODUCTS ON AISKILLS BEGINNER-FRIENDLY?",
      answer:
        "Yes, most of our digital products are beginner-friendly, with easy-to-follow instructions and tutorials.",
    },
    {
      question: "HOW DO I ACCESS MY PURCHASED DIGITAL PRODUCTS?",
      answer:
        "After purchase, you will receive an email with a download link or access instructions. You can also find your products in your account under 'My Purchases'.",
    },
    {
      question:
        "CAN I GET A REFUND IF I'M NOT SATISFIED WITH A DIGITAL PRODUCT?",
      answer:
        "Refunds are available within 30 days of purchase. Please contact customer support for assistance.",
    },
    {
      question: "CAN INSTRUCTORS SELL THEIR OWN DIGITAL PRODUCTS ON AISKILLS?",
      answer:
        "Yes, instructors can sell their digital products on AISKILLS. You can sign up as a seller and upload your products for sale.",
    },
    {
      question: "ARE THERE ANY FREE DIGITAL PRODUCTS AVAILABLE?",
      answer:
        "Yes, AISKILLS offers several free digital products, including free courses, templates, and resources.",
    },
    {
      question: "CAN I USE AISKILLS DIGITAL PRODUCTS FOR COMMERCIAL PROJECTS?",
      answer:
        "Some digital products are licensed for commercial use, but please review the license terms of each product before using them in commercial projects.",
    },
    {
      question: "DO I NEED SPECIAL SOFTWARE TO USE THE DIGITAL PRODUCTS?",
      answer:
        "In most cases, you don't need special software, but some products may require specific software like PDF readers or course platforms.",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row bg-[#047670] lg:h-[652px] p-4 lg:p-0 mt-4">
        {/* Left Image Section */}
        <div className="flex w-full lg:w-1/2 items-center justify-center lg:justify-start p-6 lg:pl-20">
          <img
            src={digitalproduct1}
            alt="Lost Connections Book"
            className="w-full h-full object-contain rounded-tl-[4px] rounded-tr-[4px] mt-8"
          />
        </div>

        {/* Right Content Section */}
        <div className="relative w-full lg:absolute lg:w-[460px] bg-[#ffffff] rounded-md p-6 mt-6 lg:mt-40 lg:left-[50%] xl:left-[931px]">
          {/* eBook Tag */}
          <div className="text-[13px] font-roboto text-[#000000] mt-4">
            e Book
          </div>

          {/* Title */}
          <div className="w-full text-2xl lg:text-[30px] tracking-[0.02em] capitalize font-impact mt-2">
            Premium Glow Up Akademi <br />
            Metodu (% 50 Ozel Indirim)
            {/* Author */}
            <div className="text-[12px] font-Jost mb-2 text-[#1E1E1ECC] p-2 rounded-md mt-2">
              By <span>Glow Up Academy</span>
            </div>
          </div>

          {/* Price and File */}
          <div className="text-[45px] lg:text-[32px] font-impact text-[#047670] whitespace-nowrap text-start mt-2">
            Try 129{" "}
            <span className="text-[20px] text-[#1E1E1E] font-jost">
              | 1 File
            </span>
          </div>

          {/* Buy Now Button */}
          <button className="w-full bg-[#047670] hover:bg-[#005b4f] text-white border border-[#047670] rounded-[12px] px-px py-[10px] flex items-center justify-center gap-[10px] text-lg lg:text-[22px] mt-3">
            Buy Now
          </button>

          {/* Unlock and Access Button */}
          <button className="w-full lg:w-[214px] mx-auto lg:ml-20 h-[32.33px] bg-[#ffffff] rounded-[4px] text-sm lg:text-[18px] text-[#1E1E1ECC] flex items-center justify-center gap-4 mt-2 font-jost">
            <img
              src={marketproduct2}
              alt="lock"
              className="w-[24px] h-[24px]"
            />
            Unlock And Access
          </button>

          {/* PDF Download Section */}
          <div className="flex items-center border border-[#047670] justify-center gap-[12px] font-roboto p-2 rounded-[12px] mt-5">
            <img src={marketproduct1} alt="icon" className="w-6 h-6" />
            <a
              href="#"
              className="flex-1 text-center !text-[#047670] py-2 rounded-[12px] text-sm lg:text-[22px] truncate"
            >
              Premium Glowup.PDF (128mb)
            </a>
            <img src={marketproduct2} alt="lock" className="w-6" />
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 mt-10">
        <div className="lg:w-[850px] bg-[#ffffff] rounded-md text-[#1E1E1E] mt-8 lg:mt-20 lg:ml-20">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
            <h2 className="text-[#047670] text-[26px] font-impact leading-[20px]">
              Related Images
            </h2>
            <div className="flex items-center gap-2 text-[#1E1E1ECC] font-jost text-[18px] mt-2 sm:mt-0">
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#047670"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </div>
          </div>

          {/* Images Row with fixed min-width */}
          <div className="flex gap-4 min-w-[850px] mt-2">
            <img
              src={marketproduct3}
              alt="img1"
              className="w-[190px] h-[120px] object-cover rounded-md"
            />
            <img
              src={marketproduct4}
              alt="img2"
              className="w-[190px] h-[120px] object-cover rounded-md"
            />
            <img
              src={marketproduct5}
              alt="img3"
              className="w-[190px] h-[120px] object-cover rounded-md"
            />
            <img
              src={marketproduct6}
              alt="img4"
              className="w-[190px] h-[120px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* About This Product Section */}
      <div className="lg:w-[796px] bg-[#ffffff] p-4 rounded-md shadow text-[#1E1E1E] mt-8 lg:mt-20 lg:ml-20">
        <div className="flex items-center justify-between mb-4">
          {/* Left Heading */}
          <h2 className="text-2xl lg:text-[26px] font-impact text-[#1E1E1E]">
            About This Product
          </h2>

          {/* Right Share Button */}
          <div className="flex items-center gap-2 text-[#047670] font-jost text-[18px] cursor-pointer">
            <span>Share</span>
            <img src={marketproduct8} className="w-[30px] h-[30px]" />
          </div>
        </div>

        <p className="mb-4 text-base lg:text-[18px] font-Jost">
          Sorularınızdan Bıktınız Mı? Glow Up Akademi Metodu Size Yardımcı
          Olacaktır. 🚀
        </p>
        <p className="mb-4 text-base lg:text-[18px] font-Jost">
          Glow Up Akademi Metodu Göz Çevresindeki İyileşmelerden (Puffiner
          [şeyi] Tutan, Heaving Straightening Kadar Gözle Görüldü) Her Şeyi
          Anlayın. Kullanmanız Gereken Cilt Bakım Ürünleri, Size Sürülene Kadar
          Ne İşe Yaradıklarını, Size Güvenlik Veriyoruz...
        </p>
        <p className="mb-4 text-base lg:text-[18px] font-Jost">
          Ürün Ekstra Olarak Yazan Günlük Rutininizi Ve Tavsiyelerinizi De
          İçeriyor. 🧴
        </p>
        <p className="mb-4 text-base lg:text-[18px] font-Jost">
          Ürün Şuanki Sınırlı Stoklu İndirimde Ve Hızlı Eriştiği Değerlere
          Yükseleceğini, O Yüzden Elini Çabuk Tut!
        </p>
      </div>

      {/* FAQ Section */}
      <div className="w-full lg:w-[870px] bg-black text-[#ffffff] px-6 py-8 lg:py-16 mt-8 lg:mt-20 ">
        <div className="w-full lg:w-[738px] h-auto bg-black text-white p-4 lg:p-6 lg:ml-10">
          <div className="flex flex-col gap-6 lg:gap-[36px]">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-white pb-2 flex justify-between items-center text-sm lg:text-[16px] font-roboto cursor-pointer"
                onClick={() => handleToggle(index)} // Toggle question on click
              >
                {item.question}
                <span className="text-lg lg:text-[24px] font-roboto">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
            ))}

            {/* Display the answer of the clicked question */}
            {openIndex !== null && (
              <div className="text-sm lg:text-[16px] font-roboto text-white pt-2">
                <p>{faqData[openIndex].answer}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <StartLearning />
    </>
  );
};

export default MarketProduct;
