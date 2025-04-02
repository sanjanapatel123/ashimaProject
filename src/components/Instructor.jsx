// import React from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Navbar,
//   Nav,
//   Card,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

// import { TfiLayoutSlider } from "react-icons/tfi";
// import Header from "./Courses/Header";
// import FAQSection from "./Home/FAQSection";
// import Footer from "./Footer";

// const AITeacherLanding = () => {
//   return (
//     <div>
//       <Header />
//       <div className="container-fluid pt-20">
//         <section
//           style={{
//             backgroundColor: "#00766e",
//             color: "white",
//             padding: "10px",
//           }}
//           className="py-5"
//         >
//           <div className="container-fluid ">
//             <Row className="align-items-center ">
//               {/* Left Content */}
//               <Col md={6} className="mb-4 mb-md-0 text-center text-md-start ">
//                 <h1 className=" mb-3" style={{ fontFamily: "Impact" }}>
//                   Teach Your Way Transform Life
//                 </h1>
//                 <p
//                   className="mb-4"
//                   style={{
//                     fontSize: "1.05rem",
//                     color: "#FFFFFF",
//                     fontFamily: "jost",
//                   }}
//                 >
//                   Join AiSkills And Reach A Global Guideline
//                 </p>
//                 <Button
//                   style={{
//                     backgroundColor: "white",
//                     color: "#00766e",
//                     border: "none",
//                     fontWeight: "600",
//                     padding: "10px 20px",
//                   }}
//                   className="rounded"
//                 >
//                   <Link to={"/instructorSignup"} className="text-[#047670]">
//                     Sign Up
//                   </Link>
//                 </Button>
//               </Col>

//               {/* Right Image */}
//               <Col md={6} className="text-center">
//                 <img
//                   src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
//                   alt="Instructor"
//                   className="img-fluid rounded"
//                   style={{
//                     maxHeight: "348px",
//                     objectFit: "cover",
//                     width: "620px",
//                   }}
//                 />
//               </Col>
//             </Row>
//           </div>
//         </section>
//         <section className="py-5 bg-[#ffffff]">
//           <div className="container">
//             {/* Heading */}
//             <h2
//               className="text-center b-5"
//               style={{ color: "#00766e", fontFamily: "Impact" }}
//             >
//               Why Teach With AISkills ?
//             </h2>

//             {/* 3 Columns */}
//             <Row className="g-4 justify-content-between mt-5">
//               {/* Card 1 */}
//               <Col md={4}>
//                 <Card className="h-100 shadow-sm text-center border border-gray">
//                   <Card.Body>
//                     <div className="mb-3">
//                       <i
//                         className="fas fa-money-bill-wave fa-2x"
//                         style={{ color: "#00766e" }}
//                       ></i>
//                     </div>
//                     <Card.Title className="" style={{ font: "Impact" }}>
//                       Why Teach With AISkills ?
//                     </Card.Title>
//                     <Card.Text>
//                       Only A 10% Platform Fee, Much Lower Than Competitors.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               {/* Card 2 */}
//               <Col md={4}>
//                 <Card className="h-100 shadow-sm text-center border border-gray">
//                   <Card.Body>
//                     <div className="mb-3">
//                       <i
//                         className="fas fa-laptop-code fa-2x"
//                         style={{ color: "#00766e" }}
//                       ></i>
//                     </div>
//                     <Card.Title className="fw-bold">
//                       Flexible Teaching
//                     </Card.Title>
//                     <Card.Text>
//                       Choose Online, Hybrid, Video, Or Cohort-Based Teaching.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               {/* Card 3 */}
//               <Col md={4}>
//                 <Card className="h-100 shadow-sm text-center border border-gray">
//                   <Card.Body>
//                     <div className="mb-3">
//                       <i
//                         className="fas fa-globe fa-2x"
//                         style={{ color: "#00766e" }}
//                       ></i>
//                     </div>
//                     <Card.Title className="fw-bold">
//                       Expand Your Network
//                     </Card.Title>
//                     <Card.Text>
//                       Connect With Learners And Fellow Professionals Worldwide.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>

//             <Row className="g-4 justify-content-between mt-5">
//               {/* Card 1 */}
//               <Col md={4}>
//                 <Card className="h-100 shadow-sm text-center border border-gray">
//                   <Card.Body>
//                     <div className="mb-3 flex justify-center">
//                       <TfiLayoutSlider style={{ color: "#00766e" }} size={40} />
//                     </div>

//                     <Card.Title className="fw-bold">
//                       Simple & Powerful
//                     </Card.Title>
//                     <Card.Text>
//                       User-friendly platform with dedicated support.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               {/* Card 2 */}
//               <Col md={4}>
//                 <Card className="h-100 shadow-sm text-center border border-gray">
//                   <Card.Body>
//                     <div className="mb-3">
//                       <i
//                         class="bi bi-star"
//                         style={{ color: "#00766e", fontSize: "40px" }}
//                       ></i>
//                     </div>
//                     <Card.Title className="fw-bold">
//                       {" "}
//                       Make a Real Impact
//                     </Card.Title>
//                     <Card.Text>
//                       Empower students to achieve their goals and grow.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>

//               {/* Card 3 */}
//               <Col md={4}>
//                 <Card className="h-100 shadow-sm text-center border border-gray">
//                   <Card.Body>
//                     <div className="mb-3">
//                       <i
//                         class="bi bi-calendar-date"
//                         style={{ color: "#00766e", fontSize: "40px" }}
//                       ></i>
//                     </div>
//                     <Card.Title className="fw-bold">
//                       Your Expertise, Your Schedule
//                     </Card.Title>
//                     <Card.Text>
//                       Teach live, create self-paced courses, or mix both.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             </Row>
//             <div className="mt-5  text-center">
//               <button
//                 className="text-cenetr text-[#ffffff]"
//                 style={{
//                   backgroundColor: "#047670",
//                   border: "none",
//                   width: "287px",
//                   height: "57px",
//                   fontFamily: "Roboto Condensed",
//                   fontSize: "22px",
//                 }}
//               >
//                 sign up
//               </button>
//             </div>
//           </div>
//         </section>

//         <section className="">
//           <div className="row" style={{ backgroundColor: "#047670" }}>
//             <div
//               className="col-md-6 text-center d-flex flex-column justify-content-center align-item-center"
//               style={{ backgroundColor: "#047670", color: "white" }}
//             >
//               <h2
//                 className="text-white text-start"
//                 style={{ fontSize: "50px", fontFamily: "Impact" }}
//               >
//                 Teach on AI Skills Plan, Publish, and Promote an Engaging Class
//               </h2>
//               <p className="text-white text-start">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
//                 perspiciatis enim maiores earum velit eaque! Veritatis earum
//                 eaque ipsa! Soluta nostrum tempore similique blanditiis ab fugit
//                 neque, hic rerum quisquam sunt saepe nemo magni labore dolores
//                 dolorum rem nesciunt eveniet porro doloremque commodi sint vel
//                 alias aliquam! Possimus, quod ratione doloribus aliquid amet
//                 dolorum ex laudantium mollitia! Maxime eos beatae pariatur a
//                 quaerat ex recusandae illo, eum hic consequuntur ad quia
//                 praesentium veritatis voluptatum labore eius consectetur
//                 aspernatur sequi esse non quisquam dicta aperiam inventore. Ut
//                 odio, labore id laboriosam architecto cum illum, quod inventore
//                 accusantium enim dignissimos. Suscipit, commodi.
//               </p>
//               <div className="text-start  ">
//                 <button
//                   className="rounded-2 fw-bold"
//                   style={{
//                     backgroundColor: "white",
//                     color: "#047670",
//                     border: "none",
//                     width: "287px",
//                     height: "57px",
//                     fontFamily: "Roboto Condensed",
//                     fontSize: "22px",
//                   }}
//                 >
//                   sign up
//                 </button>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <img
//                 src="https://i.ibb.co/Z1JPmPxs/Rectangle-74.png"
//                 style={{ width: "753px" }}
//               />
//             </div>
//           </div>
//         </section>
//         <section className="mt-10 p-0">
//           <FAQSection />
//         </section>
//         <section className="mt-5">
//           <Footer />
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AITeacherLanding;










import React from "react";
import { Link } from "react-router-dom";
import { TfiLayoutSlider } from "react-icons/tfi";
import FAQSection from "./Home/FAQSection";
import Footer from "./Footer";
import blogdetail1 from "../assets/blogdetail1.png"
import blogdetail2 from "../assets/blogdetail2.png"
import blogdetail3 from "../assets/blogdetail3.png";
import blogdetail4 from "../assets/blogdetail4.png";
import blogdetail5 from "../assets/blogdetail5.png";
import blogdetail6 from "../assets/blogdetail6.png"
import blogdetail7 from "../assets/blogdetail7.png";
import Header from "./Courses/Header";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";




const AITeacherLanding = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  

  const faqs = [
    {
      question: "WHAT TYPES OF COURSES CAN I CREATE ON THE PLATFORM?",
      answer:
        "You can create live, video, hybrid, and cohort-based courses in any subject of your expertise.",
    },
    {
      question: "HOW MUCH COMMISSION DOES THE PLATFORM TAKE?",
      answer:
        "We charge only a 10% platform fee, allowing instructors to keep 90% of their course revenue.",
    },
    {
      question: "WHEN WILL I RECEIVE MY EARNINGS?",
      answer:
        "Earnings are processed monthly and typically reach you within 5–7 business days.",
    },
    {
      question: "HOW DO I RECEIVE MY PAYMENTS?",
      answer:
        "Payments are sent via secure channels such as bank transfer or PayPal.",
    },
    {
      question: "CAN I SET MY OWN COURSE PRICES?",
      answer:
        "Yes, instructors have full control over setting the price of their courses.",
    },
    {
      question: "DO I OWN THE CONTENT I UPLOAD?",
      answer:
        "Absolutely. You retain full ownership of your course content at all times.",
    },
    {
      question: "CAN I EDIT MY COURSE AFTER PUBLISHING?",
      answer:
        "Yes, you can update your content and resources anytime after publishing.",
    },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#047670] text-[#ffffff] py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-28">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-[36px] sm:text-[42px] md:text-[50px] font-impact font-normal ">
              Teach Your Way Transform Life
            </h1>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] font-jost font-semibold ">
              Join AiSkills And Reach A Global Guideline
            </p>
            <Link to="/instructorSignup">
              <button className="bg-[#ffffff] text-[#047670] font-bold font-roboto py-2 px-6 rounded-[4px] mt-2">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 text-center">
            <img
              src={blogdetail1}
              alt="Instructor"
              className="rounded w-full max-w-[620px] max-h-[348px] object-cover mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Teach Section */}

      <section className="bg-[#ffffff] py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-[#047670] font-impact font-normal text-[50px] mb-10">
            Why Teach With AISkills ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail2} />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Why Teach With AISkills ?
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Only A 10% Platform Fee, Much Lower Than Competitors.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail3} className="h-[100px] w-[100px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Flexible Teaching
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Choose Online, Hybrid, Video, Or Cohort-Based Teaching.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail4} className="h-[100px] w-[100px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Expand Your Network
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Connect With Learners And Fellow Professionals Worldwide.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail5} className="h-[100px] w-[100px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Simple & Powerful
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                User-Friendly Platform With Dedicated Support.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail6} className="h-[100px] w-[100px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Make A Real Impact
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Empower Students To Achieve Their Goals And Grow.
              </p>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="border-[1px] shadow-sm rounded-lg p-6 text-center hover:shadow-md transition h-[290px] w-full max-w-[420px]"
            >
              <div className="mb-4 flex justify-center">
                <img src={blogdetail7} className="h-[100px] w-[100px]" />
              </div>
              <h3 className="font-impact font-normal text-[#1E1E1E1] text-[26px] mb-2">
                Your Expertise, Your Schedule
              </h3>
              <p className="text-[22px] font-jost font-semibold text-[#1E1E1E1]">
                Teach Live, Create Self-Paced Courses, Or Mix Both.
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <button className="p-[10px] w-[90px] h-[50px] text-center text-[#ffffff] text-[18px] bg-[#047670] rounded-[12px] font-medium font-roboto">
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* Teach on AI Skills Section */}

      <section className="bg-[#047670] text-[#ffffff] px-4 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Left Content (Text) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-impact mb-4">
              Teach on AI Skills Plan, Publish, and Promote an Engaging Class
            </h2>
            <p className="mb-6 overflow-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              perspiciatis enim maiores earum velit eaque! Veritatis earum eaque
              ipsa! Soluta nostrum tempore similique blanditiis ab fugit neque,
              hic rerum quisquam sunt saepe nemo magni labore dolores dolorum
              rem nesciunt eveniet porro doloremque commodi sint vel alias
              aliquam! Possimus, quod ratione doloribus aliquid amet dolorum ex
              laudantium mollitia! Maxime eos beatae pariatur a quaerat ex
              recusandae illo, eum hic consequuntur ad quia praesentium
              veritatis voluptatum labore eius consectetur aspernatur sequi esse
              non quisquam dicta aperiam inventore. Ut odio, labore id
              laboriosam architecto cum illum, quod inventore accusantium enim
              dignissimos. Suscipit, commodi.
            </p>
            <Link to="/instructorSignup">
              <button className="bg-[#ffffff] text-[#047670] font-bold font-roboto py-2 px-6 rounded-[4px] mt-2">
                Sign Up
              </button>
            </Link>
          </div>

          {/* Right Content (Image) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://i.ibb.co/Z1JPmPxs/Rectangle-74.png"
              alt="Teach"
              className="w-full max-w-[753px] h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* FAQ and Footer */}

      <div className="bg-[#000000] py-20 px-6 md:px-12 mt-10">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2  items-center">
          <div className="text-[#ffffff] flex flex-col gap-4 text-start  pr-20 sm:pr-20 lg:pr-40">
            <h2 className="font-impact text-[55px] md:text-5xl uppercase">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-[16px] text-[#ffffff] font-roboto leading-snug">
              ENHANCE YOUR LEARNING WITH INSTANT DIGITAL PRODUCTS FROM INSTANT
              REAL-WORLD PROJECTS TO PROMPTS.
            </p>
          </div>

          {/* Right Section - FAQ List */}
          <div className="w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#ffffff] py-4 hover:cursor-pointer font-roboto transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center text-[#ffffff] font-roboto text-[24px]">
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

      <section className="mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default AITeacherLanding;