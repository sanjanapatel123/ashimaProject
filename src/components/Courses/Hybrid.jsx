// import React from "react";
// import { Container, Row, Col, Button, Breadcrumb, Card, Form, Accordion,  Badge} from "react-bootstrap";
// import { FaStar, FaArrowRight, FaCheckCircle, FaVideo, FaFileAlt, FaDownload, FaTv, FaUser, FaHeart } from "react-icons/fa";

// const Hybrid = () => {


//   const recommendedCourses = [
//     {
//       id: 1,
//       title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
//       rating: 4.8,
//       students: "95000",
//       price: "$79.44",
//       image: "https://via.placeholder.com/100",
//       hours: "135.5 TOTAL HOURS",
//       updated: "UPDATED 2024",
//     },
//     {
//       id: 2,
//       title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
//       rating: 4.8,
//       students: "95000",
//       price: "$79.44",
//       image: "https://via.placeholder.com/100",
//       hours: "135.5 TOTAL HOURS",
//       updated: "UPDATED 2024",
//     },
//     {
//       id: 3,
//       title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
//       rating: 4.8,
//       students: "95000",
//       price: "$79.44",
//       image: "https://via.placeholder.com/100",
//       hours: "135.5 TOTAL HOURS",
//       updated: "UPDATED 2024",
//     },
//     {
//       id: 4,
//       title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
//       rating: 4.8,
//       students: "95000",
//       price: "$79.44",
//       image: "https://via.placeholder.com/100",
//       hours: "135.5 TOTAL HOURS",
//       updated: "UPDATED 2024",
//     },
//     {
//       id: 5,
//       title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
//       rating: 4.8,
//       students: "95000",
//       price: "$79.44",
//       image: "https://via.placeholder.com/100",
//       hours: "135.5 TOTAL HOURS",
//       updated: "UPDATED 2024",
//     },
//   ];
  



//   return (
//     <Container fluid className="bg-teal py-4" >
//       {/* Breadcrumb Navigation */}
//       <div style={{ backgroundColor: "#0E736A", color: "white" }}>
//       <Container>
//         <Breadcrumb className="text-light">
//           <Breadcrumb.Item href="#" className="text-light">AI & ML</Breadcrumb.Item>
//           <Breadcrumb.Item href="#" className="text-light">Prompt Engineering</Breadcrumb.Item>
//           <Breadcrumb.Item active className="text-light">ABCD</Breadcrumb.Item>
//         </Breadcrumb>
//       </Container>

//       {/* Course Details */}
//       <Container >
//         <Row className="align-items-center">
//           {/* Left Column - Course Details */}
//           <Col md={7} className="text-light" >
//             <h2 className="fw-bold" style={{ fontSize: "32px" }}>AI AND ML FOR BEGINNERS</h2>
//             <p style={{ fontSize: "16px" }}>
//               Learn to program using AI & ML. Master AI & ML by building 100 projects in 100 days.
//               Learn data science, automation, build websites, games, and apps!
//             </p>
            
//             {/* Rating */}
//             <p className="d-flex align-items-center" style={{ fontSize: "14px" }}>
//               <FaStar className="text-warning me-1" />
//               <FaStar className="text-warning me-1" />
//               <FaStar className="text-warning me-1" />
//               <FaStar className="text-warning me-1" />
//               <FaStar className="text-warning me-1" />
//               <span className="ms-2">4.8</span> <span className="text-muted mx-2">|</span> 1,942,239 STUDENTS
//             </p>

//             {/* Instructors */}
//             <p className="fw-bold" style={{ fontSize: "14px" }}>HOSTED BY</p>
//             <div className="d-flex align-items-center">
//               <img src="https://via.placeholder.com/40" alt="Instructor" className="rounded-circle me-2" />
//               <span className="me-3">ASHWARYA RAI</span>
//               <img src="https://via.placeholder.com/40" alt="Instructor" className="rounded-circle me-2" />
//               <span>KAPIL SHARMA</span>
//             </div>

//             {/* Next Cohorts */}
//             <p className="mt-3 fw-bold" style={{ fontSize: "14px" }}>NEXT COHORTS</p>
//             <Button variant="dark" size="sm" className="me-2">HYBRID</Button>
//             <span className="text-muted me-2">MAY 24 – JUNE 28, 2025</span>
//             <Button variant="info" size="sm">ENROLL</Button>
//           </Col>

//           {/* Right Column - Pricing & Video */}
//           <Col md={5} className="text-center">
//             <Card className="shadow">
//               <Card.Img
//                 variant="top"
//                 src="https://via.placeholder.com/350x200"
//                 alt="Course Preview"
//               />
//               <Card.Body>
//                 <h3 className="fw-bold" style={{ fontSize: "24px" }}>$79.44</h3>
//                 <p className="fw-bold" style={{ fontSize: "14px" }}>NEXT COHORTS</p>
//                 <p className="text-muted" style={{ fontSize: "14px" }}>MAY 24 – JUNE 28, 2025</p>
//                 <Button variant="primary" className="w-100 mb-2" size="sm">ENROLL</Button>
//                 <p className="text-muted" style={{ fontSize: "14px" }}>JULY 26 – AUG 31, 2025</p>
//                 <Button variant="primary" className="w-100" size="sm">ENROLL</Button>
//                 <p className="text-muted mt-3" style={{ fontSize: "12px" }}>GET FUTURE COHORT DATES</p>

//                 {/* Email Input */}
//                 <Form className="d-flex">
//                   <Form.Control type="email" placeholder="Your Email" className="rounded-0" />
//                   <Button variant="success" className="rounded-0"><FaArrowRight /></Button>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//       </div>

//       {/* What You Will Learn Section */}
//       <Container className="mt-4 bg-white p-4 rounded shadow">
//         <h4 className="fw-bold text-dark">What you will learn</h4>
//         <ul className="list-unstyled mt-3">
//           <li className="d-flex align-items-start mb-3">
//             <input type="checkbox"  className="me-2" />
//             <div>
//               <strong className="text-black">Master Applied Generative AI Concepts</strong>
//               <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
//               Learn applied generative AI techniques like prompt engineering, RAG, agents, and fine-tuning, with a focus on applying them effectively to real-world business scenarios. Understand how to navigate constraints like cost, latency, and performance constraints in AI systems.  
//               </p>
//             </div>
//           </li>
//           <li className="d-flex align-items-start">
//             <input type="checkbox"  className="me-2" />
//             <div>
//               <strong className="text-black">Apply Concepts to Build an Agentic Search System</strong>
//               <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
//               While learning applied AI concepts, we’ll put them into action by building a Perplexity-like AI-powered search system through detailed, hands-on tutorials that demonstrate their practical application (Low code options will be provided)
//               </p>
//             </div>
//           </li>
//           <li className="d-flex align-items-start">
//             <input type="checkbox"  className="me-2" />
//             <div>
//               <strong className="text-black">Tackle Business Use-Cases with AI</strong>
//               <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
//               Participate in brainstorming sessions and team huddles to approach hypothetical business problems. Learn to identify the right AI solutions for specific use cases, leveraging low-code options where applicable.
//               </p>
//             </div>
//           </li>
//           <li className="d-flex align-items-start">
//             <input type="checkbox"  className="me-2" />
//             <div>
//               <strong className="text-black">Understand Challenges and Effective Evaluation</strong>
//               <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
//               Gain a deep understanding of key challenges in building AI systems, including handling hallucinations, adversarial attacks, security, privacy issues etc., and learn best practices to evaluate AI solutions comprehensively
//               </p>
//             </div>
//           </li>
//           <li className="d-flex align-items-start">
//             <input type="checkbox"  className="me-2" />
//             <div>
//               <strong className="text-black">Final Capstone Project</strong>
//               <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
//               You’ll design and demo a solution for a hypothetical business problem, integrating insights from relevant research papers in my curated list, hand-picked for enterprise relevance. This project will also involve addressing challenges and evaluation methods.
//               </p>
//             </div>
//           </li>
//           <li className="d-flex align-items-start">
//             <input type="checkbox"  className="me-2" />
//             <div>
//               <strong className="text-black">Access to the Problem-First AI Community</strong>
//               <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
//               The course includes guest lectures from industry experts, AMA sessions, and our Chai & AI discussions, culminating in a final in-person meetup in the Bay Area. You'll have plenty of opportunities to network and become part of our community.
//               </p>
//             </div>
//           </li>
//         </ul>

//    <hr/>

//         <h3 className="fw-bold mb-4 mt-4">Who is this course for</h3>

//       <Row className="gy-3">
//         {[1, 2, 3].map((num) => (
//           <Col md={4} key={num}>
//             <Card className="border-0 shadow-sm p-3">
//               <div className="d-flex align-items-start">
//                 <div
//                   className="rounded-circle text-white fw-bold d-flex align-items-center justify-content-center"
//                   style={{
//                     width: "35px",
//                     height: "25px",
//                     backgroundColor: "red",
//                     fontSize: "16px",
//                   }}
//                 >
//                   {num}
//                 </div>
//                 <div className="ms-2">
//                   <p className="fw-bold mb-1">Access to the Problem-First AI Community</p>
//                   <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
//                     The course includes guest lectures from industry experts, AMA sessions.
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Section: What You Will Learn */}
//       <Card className="mt-3 shadow-sm border-0">
//         <h4 className="fw-bold">Master Applied Generative AI Concepts</h4>

//         <ul className="list-unstyled mt-3">
//           <li className="d-flex align-items-start mb-3">
//             <FaCheckCircle className="text-success me-2" />
//             <div>
//               <strong>Master Applied Generative AI Concepts</strong>
//               <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
//                 Learn applied generative AI techniques like prompt engineering, RAG, agents, and fine-tuning.
//               </p>
//             </div>
//           </li>

//           <li className="d-flex align-items-start">
//             <FaCheckCircle className="text-success me-2" />
//             <div>
//               <strong>Understand Challenges and Effective Evaluation</strong>
//               <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
//                 Gain a deep understanding of key challenges in building AI systems, including security and privacy.
//               </p>
//             </div>
//           </li>
//         </ul>
//       </Card>





// <div className="max-w-6xl mx-auto mt-10 px-4">
//   <h3 className="text-2xl font-bold text-gray-900 mb-6">Who is this course for</h3>

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//     {[1, 2, 3].map((num) => (
//       <div
//         key={num}
//         className="border border-gray-300 rounded-md shadow-sm p-4 flex items-start gap-3"
//       >
//         <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-600 text-white text-sm font-bold mt-1">
//           {num}
//         </div>
//         <div>
//           <p className="text-sm font-bold text-gray-900 leading-tight">
//             Access to the Problem-First AI Community
//           </p>
//           <p className="text-xs text-gray-600 leading-snug mt-1">
//             The course includes guest lectures from industry experts, AMA sessions,
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>











//       <div className="d-flex justify-content-between align-items-center">
//         <h3 className="fw-bold">COURSE CONTENT</h3>
//         <Button variant="link" className="text-success fw-bold">
//           EXPAND ALL SECTIONS
//         </Button>
//       </div>
//       <p className="text-muted">8 sections • 73 lectures • 16h 8m total length</p>

//       {/* Accordion for Course Topics */}
//       <Accordion defaultActiveKey="0" className="mb-4">
//         {["INTRODUCTION", "TOPIC 2", "TOPIC 3", "TOPIC 4", "LIVE"].map(
//           (topic, index) => (
//             <Accordion.Item
//               key={index}
//               eventKey={index.toString()}
//               className={topic === "LIVE" ? "bg-teal text-white" : ""}
//             >
//               <Accordion.Header>
//                 <span className={topic === "INTRODUCTION" ? "fw-bold" : ""}>
//                   {topic}
//                 </span>
//               </Accordion.Header>
//               <Accordion.Body className="d-flex justify-content-between">
//                 LIVE ON 1:25 PM
//                 {topic === "LIVE" && <Button variant="light">NEXT COHORT</Button>}
//               </Accordion.Body>
//             </Accordion.Item>
//           )
//         )}
//       </Accordion>

//       {/* Course Includes Section */}
//       <h4 className="fw-bold">
//         THIS COURSE <span className="text-success">INCLUDES:</span>
//       </h4>
//       <Row className="text-muted my-3">
//         <Col xs={12} md={6} className="d-flex align-items-center mb-2">
//           <FaVideo className="me-2" /> 16 hours on-demand video
//         </Col>
//         <Col xs={12} md={6} className="d-flex align-items-center mb-2">
//           <FaTv className="me-2" /> Access on mobile and TV
//         </Col>
//         <Col xs={12} md={6} className="d-flex align-items-center mb-2">
//           <FaFileAlt className="me-2" /> 3 articles
//         </Col>
//         <Col xs={12} md={6} className="d-flex align-items-center mb-2">
//           <FaDownload className="me-2" /> 4 downloadable resources
//         </Col>
//       </Row>

//       {/* Requirements Section */}
//       <h4 className="fw-bold mt-4">REQUIREMENTS</h4>
//       <p className="text-muted">
//         While we provide low-code options, this course assumes you have some coding experience. It's not suitable for those who have never written or worked with even basic code.
//       </p>
       
//  <hr/>

//       <h3 className="fw-bold text-teal">STUDENTS ALSO BOUGHT</h3>

//       {/* Course List */}
//       {recommendedCourses.map((course) => (
//         <Card key={course.id} className="border-0 shadow-sm p-3 my-2">
//           <Row className="align-items-center">
//             {/* Course Image */}
//             <Col xs={3} md={2}>
//               <Card.Img src={course.image} alt={course.title} className="rounded" />
//             </Col>

//             {/* Course Details */}
//             <Col xs={7} md={8}>
//               <h6 className="fw-bold mb-1">{course.title}</h6>

//               {/* Rating & Students */}
//               <div className="d-flex align-items-center text-muted" style={{ fontSize: "14px" }}>
//                 <FaStar className="text-warning me-1" />
//                 {course.rating} <FaUser className="ms-3 me-1" />
//                 {course.students}
//                 <span className="fw-bold text-dark ms-3">{course.price}</span>
//               </div>

//               {/* Tags */}
//               <div className="mt-2">
//                 <Badge bg="danger" className="me-2">HIGH RATED</Badge>
//                 <span className="text-success fw-bold">{course.hours}</span>
//                 <span className="text-muted ms-3">{course.updated}</span>
//               </div>
//             </Col>

//             {/* Wishlist Button */}
//             <Col xs={2} className="text-end">
//               <Button variant="outline-danger" className="rounded-circle">
//                 <FaHeart />
//               </Button>
//             </Col>
//           </Row>
//         </Card>
//       ))}


//       </Container>

      
//     </Container>
//   );
// };

// export default Hybrid;





import React from "react";
import liveimg1 from "../../assets/liveimg1.png";
import liveimg2 from "../../assets/liveimg2.png";
import liveimg3 from "../../assets/liveimg3.png";
import { FaCheck } from "react-icons/fa";
import liveimg4 from "../../assets/liveimg4.png"
import liveimg5 from "../../assets/liveimg5.png";
import reviewimage from "../../assets/reviewimage.jpg";
 import { FaYoutube } from "react-icons/fa";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FaCalendarAlt } from "react-icons/fa";



import {
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaVideo,
  FaFileAlt,
  FaDownload,
  FaTv,
  FaUser,
  FaHeart,
} from "react-icons/fa";
import FAQSection from "../Home/FAQSection";

const Live = () => {
  const recommendedCourses = [
    {
      id: 1,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
    {
      id: 2,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
    {
      id: 3,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
    {
      id: 4,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
    {
      id: 5,
      title: "Java Masterclass 2025 : 130+ Hours Of Expert Lessons",
      rating: 4.8,
      students: "95000",
      price: "$79.44",
      image: "https://via.placeholder.com/100",
      hours: "135.5 TOTAL HOURS",
      updated: "UPDATED 2024",
    },
  ];
   const sections = ["INTRODUCTION", "TOPIC 2", "TOPIC 3", "TOPIC 4"];
   const [openSection, setOpenSection] = useState(null);

   const toggleSection = (index) => {
     setOpenSection(openSection === index ? null : index);
   };
   const [startDate, setStartDate] = useState(new Date());


  return (
    <div className="bg-[#ffffff] py-4">
      {/* Breadcrumb Navigation */}

      {/* Hero + Course Intro Section */}
      <div className="h-[467px] bg-[#047670]  sm:px-10 md:px-20 py-6 sm:py-12">
        {/* Breadcrumb */}
        <nav className="text-[18px] sm:text-[20px] md:text-[22px] text-white uppercase font-impact font-semibold mb-4 sm:mb-6">
          <a href="#" className="mr-2">
            AI & ML
          </a>
          <span className="mx-1 font-roboto font-semibold">›</span>
          <a href="#" className="mr-2 font-roboto font-semibold">
            Prompt Engineering
          </a>
          <span className="mx-1 font-jost font-semibold">›</span>
          <span>ABCD</span>
        </nav>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-6 h-[75%]">
          {/* Left */}
          <div className="w-full lg:w-2/3 flex flex-col justify-between h-full uppercase">
            <div className="">
              <h2 className="text-[48px]  font-normal font-impact  mb-2 text-[#ffffff] uppercase">
                AI AND ML FOR BEGINNERS
              </h2>
              <p className="text-[12px] sm:text-[16px] font-normal font-roboto text-[#ffffff] mb-4">
                Learn to program using the AI & ML. Master AI & ML by building
                100 <br />
                projects in 100 days. Learn data science, automation, build
                websites,
                <br /> games and apps!
              </p>

              <div className="flex items-center font-roboto font-bold text-[14px] text-[#ffffff] mb-4">
                <span className="text-[#fBBC09] flex items-center">
                  <span className="text-white">4.8</span>
                  <FaStar className="mx-1" />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="ml-4">| 1,942,239 STUDENTS</span>
              </div>

              {/* Hosts */}
              <div className="flex flex-wrap items-center gap-4 font-roboto font-bold mb-4">
                <span className="text-[#fBBC09] text-[14px]">HOSTED BY</span>
                <div className="flex items-center gap-2">
                  <img
                    src={liveimg2}
                    className="w-[50px] h-[50px] rounded-full"
                    alt="Ashwarya Rai"
                  />
                  <span className="text-[14px] text-[#ffffff]">
                    ASHWARYA RAI
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={liveimg3}
                    className="w-[50px] h-[50px] rounded-full"
                    alt="Kapil Sharma"
                  />
                  <span className="text-[14px] text-[#ffffff]">
                    KAPIL SHARMA
                  </span>
                </div>
              </div>
            </div>

            {/* Cohort & Login */}
            <div className="flex flex-wrap items-center gap-2 font-roboto font-semibold uppercase">
              <span className="text-[12px] text-[#ffffff]">NEXT COHORTS</span>

              <span className="text-[12px] text-[#ffffff] px-3 py-1 rounded-full flex items-center">
                <FaCalendarAlt className="mr-2 text-[14px]" />
                MAY 24 – JUNE 28, 2025
              </span>

              <button className="bg-[#09D0C6] text-[#000000] text-[12px] px-3 py-1 rounded-[12px]">
                ENROLL
              </button>
            </div>
            <button className="bg-[#000000] w-[85px] h-[26px] text-[#ffffff] text-[12px] px-3 py-1 rounded-[12px] font-roboto font-semibold">
              HYBRID
            </button>
          </div>

          {/* Right */}
          <div className="w-full lg:w-1/3 flex flex-col items-start">
            <div className="w-full bg-[#ffffff] rounded shadow text-[#000000] relative">
              <img
                src={liveimg1}
                alt="Course Preview"
                className="w-full h-auto"
              />
              {/* YouTube Logo and Text Overlay */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="">
                  <FaYoutube className="text-[#ffffff] bg-[#CD201F]  w-[60px] h-[27px] rounded" />
                </div>
                <span className="text-[#ffffff] font-semibold  text-[22px] font-jost mt-2">
                  Preview this course
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-[24px] sm:text-[28px] font-roboto">
                  $79.44
                </h3>
                <p className="text-[12px] font-roboto font-semibold text-black/50 mt-3">
                  NEXT COHORTS
                </p>

                <div className="flex items-center justify-between mt-2 text-[12px]">
                  <span className="uppercase font-roboto font-bold text-[14px] text-[#000000]">
                    MAY 24 – JUNE 28, 2025
                  </span>
                  <button className="bg-[#09D0C6] text-[#000000] text-[12px] px-3 py-1 rounded-[12px] font-roboto font-bold">
                    ENROLL
                  </button>
                </div>

                <div className="flex items-center justify-between mt-2 text-[12px] font-roboto font-bold">
                  <span className="uppercase font-roboto font-bold text-[14px] text-[#000000]">
                    JULY 26 – AUG 31, 2025
                  </span>
                  <button className="bg-[#09D0C6] text-[#000000] text-[12px] px-3 py-1 rounded-[12px]">
                    ENROLL
                  </button>
                </div>

                <p className="text-[12px] text-[#000000] font-bold font-roboto mt-4">
                  GET FUTURE COHORT DATES
                </p>

                <form className="flex items-center mt-2 text-[#047670]">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="flex-1 border text-[#047670] placeholder:text-[#047670] border-gray-300 px-3 py-2 text-[16px] font-bold font-roboto rounded-l focus:outline-none"
                  />
                  <button className="bg-[#047670] w-[40px] h-[40px] text-[#ffffff] rounded-r flex items-center justify-center">
                    <FaArrowRight />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[1000px] h-auto mt-28 px-2 sm:px-40 grid gap-4">
        {/* Left Content Block */}
        <div className="w-full sm:w-[900px] ml-1 sm:ml-20 h-auto mt-16 px-3 sm:px-32 grid gap-4">
          {/* Left Content Block */}
          <div className="md:col-span-3 bg-[#ffffff] py-6 px-4 sm:px-6 rounded shadow border">
            <h2 className="text-[36px] font-jost font-semibold text-[#1e1e1e]">
              What you will learn
            </h2>

            <ul className="mt-6 space-y-2 ">
              {[
                {
                  title: "Master Applied Generative AI Concepts",
                  desc: "Learn applied generative AI techniques like prompt engineering, RAG, agents, and fine-tuning, with a focus on applying them effectively to real-world business scenarios. Understand how to navigate constraints like cost, latency, and performance constraints in AI systems.",
                },
                {
                  title: "Apply Concepts to Build an Agentic Search System",
                  desc: "While learning applied AI concepts, we’ll put them into action by building a Perplexity-like AI-powered search system through detailed, hands-on tutorials that demonstrate their practical application (Low code options will be provided).",
                },
                {
                  title: "Tackle Business Use-Cases with AI",
                  desc: "Participate in brainstorming sessions and team huddles to approach hypothetical business problems. Learn to identify the right AI solutions for specific use cases, leveraging low-code options where applicable.",
                },
                {
                  title: "Understand Challenges and Effective Evaluation",
                  desc: "Gain a deep understanding of key challenges in building AI systems, including handling hallucinations, adversarial attacks, security, privacy issues etc., and learn best practices to evaluate AI solutions comprehensively.",
                },
                {
                  title: "Final Capstone Project",
                  desc: "You’ll design and demo a solution for a hypothetical business problem, integrating insights from relevant research papers in my curated list, hand-picked for enterprise relevance. This project will also involve addressing challenges and evaluation methods.",
                },
                {
                  title: "Access to the Problem-First AI Community",
                  desc: "The course includes guest lectures from industry experts, AMA sessions, and our Chai & AI discussions, culminating in a final in-person meetup in the Bay Area. You'll have plenty of opportunities to network and become part of our community.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <input
                    type="checkbox"
                    className="mt-1 mr-3 accent-[#047670] w-[20px] h-[20px]"
                  />
                  <div>
                    <p className="font-roboto text-[18px] font-normal text-[#1E1E1E] mb-1">
                      {item.title}
                    </p>
                    <p className="font-roboto text-[16px] font-normal text-[#1E1E1E]">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[850px] ml-16 sm:ml-20 mt-16">
        <h3 className="text-[36px] font-jost text-[#1e1e1e] mb-6 w-[362px] h-[40px] font-semibold">
          Who is this course for
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="border border-[#1E1E1ECC] rounded-[4px] shadow-sm p-4 items-start gap-8 w-[250px] h-[200px] uppercase"
            >
              <div className="w-[26px] h-[26px] flex items-center justify-center rounded-full bg-[#ff757A] text-[#fffff] text-sm font-bold mt-1">
                {num}
              </div>
              <div>
                <p className="text-[14px] font-roboto text-[#1e1e1e] mt-4 font-bold">
                  Access to the Problem-First AI Community
                  <span className="text-[#1E1E1ECC]">
                    {" "}
                    The course includes guest lectures from industry experts,
                    AMA sessions,
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-[850px] ml-4 sm:ml-20 mt-16">
        <div className="bg-[#ffffff] border rounded shadow p-4">
          <h2 className="text-[36px] font-semibold font-jost text-[#1e1e1e] mb-6">
            Master Applied Generative AI Concepts
          </h2>

          <ul className="space-y-6">
            {/* Item 1 */}
            <li className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-3 w-[20px] h-[20px] accent-[#047670]"
                defaultChecked
              />
              <div>
                <p className="font-roboto test-[18px] font-bold text-[#1e1e1e]">
                  Master Applied Generative AI Concepts
                </p>
                <p className="text-[16px] font-robotp font-normal text-[#1E1E1ECC]">
                  Learn applied generative AI techniques like prompt
                  engineering, RAG, agents, and fine-tuning, with a focus on
                  applying them effectively to real-world business scenarios.
                  Understand how to navigate constraints like cost, latency, and
                  performance constraints in AI systems.
                </p>
              </div>
            </li>

            {/* Item 2 */}
            <li className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 mr-3 w-[20px] h-[20px] accent-[#047670]"
              />
              <div>
                <p className="font-roboto test-[18px] font-bold text-[#1e1e1e]">
                  Understand Challenges and Effective Evaluation
                </p>
                <p className="text-[16px] font-robotp font-normal text-[#1E1E1ECC]">
                  Gain a deep understanding of key challenges in building AI
                  systems, including handling hallucinations, adversarial
                  attacks, security, privacy issues etc., and learn best
                  practices to evaluate AI solutions comprehensively.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className=" bg-[#ffffff] mt-6 p-6 rounded  shadow-lg">
        <div className="w-full sm:w-[850px] ml-2 sm:ml-10">
          <div className="bg-[#ffffff] text-[#1e1e1e] p-4 sm:p-10 flex justify-start sm:h-[524px]">
            <div className="w-full">
              <h2 className="text-[28px] sm:text-[36px] font-roboto font-bold mb-2">
                COURSE CONTENT
              </h2>

              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="text-[12px] text-[#1e1e1e] mb-2 sm:mb-6">
                  8 sections • 73 lectures • 16h 8m total length
                </p>
                <p className="text-[16px] text-[#047670] font-roboto cursor-pointer mb-2 sm:mb-6">
                  EXPAND ALL SECTIONS
                </p>
              </div>

              {/* Intro + Topics List with inner borders */}
              <div className="border-t border-double border-[#047670]/40 mt-5">
                {sections.map((item, i) => (
                  <div key={i}>
                    <div
                      style={{ backgroundColor: "#04767066" }}
                      onClick={() => toggleSection(i)}
                      className="flex flex-col sm:flex-row border-[3px] border-double border-[#047670]/40 items-start sm:items-center justify-between px-4 py-4 bg-[#047670]/40 transition-all cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                        {openSection === i ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#047670]" />
                        )}
                        <span className="font-roboto text-lg">{item}</span>
                      </div>
                      <span className="text-[12px] text-[#1e1e1e] font-roboto">
                        LIVE ON 1:25 PM
                      </span>
                    </div>

                    {openSection === i && (
                      <div className="bg-[#ffffff] px-4 py-3 text-sm text-gray-700 border-b border-gray-300">
                        Lecture 1<br />
                        Lecture 2<br />
                        Lecture 3
                      </div>
                    )}

                    {/* Optional: double border only after INTRODUCTION */}
                    {i === 0 && (
                      <div className="border-t-[3px] border-double border-[#047670]"></div>
                    )}
                  </div>
                ))}

                {/* LIVE Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-4 bg-teal-700 text-white">
                  <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                    <ChevronDown className="w-4 h-4 text-[#ffffff]" />
                    <span className="font-bold text-lg">LIVE</span>
                  </div>
                  <span className="text-xs font-semibold">NEXT COHORT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-4 sm:ml-20">
          {/* Course Includes */}
          <h4 className="font-roboto mt-28 text-[36px] font-bold ml-0">
            THIS COURSE{" "}
            <span className="text-[#047670] text-[36px] font-roboto font-bold">
              INCLUDES:
            </span>
          </h4>

          <div className="grid gap-3 mt-3 text-[#1e1e1e] font-roboto font-normal ml-0 text-[12px]">
            <div className="flex flex-col sm:flex-row sm:items-center font-normal text-[12px]">
              <div className="flex items-center">
                <FaVideo className="mr-2" /> 16 hours on-demand video
              </div>
              <div className="flex items-center mt-2 sm:mt-0 sm:ml-5">
                <FaTv className="mr-2" /> Access on mobile and TV
              </div>
            </div>

            <div className="flex items-center">
              <FaFileAlt className="mr-2" /> 3 articles
            </div>
            <div className="flex items-center">
              <FaDownload className="mr-2" /> 4 downloadable resources
            </div>
          </div>
        </div>

        <div className="ml-4 sm:ml-20">
          {/* Requirements */}
          <h4 className="font-bold mt-10 text-[36px] text-start sm:text-left">
            REQUIREMENTS
          </h4>
          <p className="text-[#1e1e1e] font-normal font-roboto text-[12px] text-start sm:text-left">
            While we provide low-code options, this course assumes you have some
            coding experience. It's not
            <br className="hidden sm:block" />
            suitable for those who have never written or worked with even basic
            code.
          </p>
        </div>

        {/* Students Also Bought */}

        <div className=" mt-16 sm:ml-20">
          <hr className="" />
          <h3 className="font-bold font-roboto uppercase text-[36px] text-[#047670] text-start">
            STUDENTS ALSO BOUGHT
          </h3>

          <div className="space-y-4 mt-4 gap-3 ml-0 sm:ml-30">
            {recommendedCourses.map((course, index) => (
              <div key={course.id}>
                <div className="flex flex-col sm:flex-row bg-[#ffffff]  items-start">
                  <img
                    src={liveimg4}
                    alt={course.title}
                    className="w-[61px] h-[81px] object-cover rounded mb-4 sm:mb-0 sm:mr-4"
                  />

                  <div className="">
                    {/* Title + Ratings + Heart in one row */}
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <h6 className="font-bold text-[22px] font-roboto text-[#000000]">
                        {course.title}
                      </h6>

                      {/* Rating, Students, Price */}
                      <div className="flex flex-wrap items-center text-gray-600 text-[14px] mt-2 sm:mt-0 sm:ml-5">
                        <FaStar className="text-[#FBBC09] mr-1" />
                        {course.rating}
                        <FaUser className="ml-4 mr-1 font-roboto font-medium text-[14px] uppercase" />
                        {course.students}
                        <span className="text-[#000000] ml-4 font-roboto font-bold text-[20px]">
                          {course.price}
                        </span>

                        <button className="rounded-full flex items-center justify-center ml-4 mt-2 sm:mt-0">
                          <img
                            src={liveimg5}
                            alt="Heart"
                            className="w-[40px] h-[40px]"
                          />
                        </button>
                      </div>
                    </div>

                    {/* Bottom: HIGH RATED, Hours, Updated */}
                    <div className="mt-2">
                      <span className="bg-[#FF757A] text-[#1e1e1e] font-semibold font-roboto uppercase px-2 py-0.5 rounded-[4px] mr-2 text-[10px]">
                        HIGH RATED
                      </span>
                      <span className="text-[#047670] font-semibold uppercase font-roboto text-[16px] mr-3">
                        {course.hours}
                      </span>
                      <span className="text-[#1e1e1e] font-semibold uppercase font-roboto text-[14px]">
                        {course.updated}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 👇 Horizontal line after each course */}
                <hr className="w-full sm:w-[850px] border-[#000000]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQSection />
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
    </div>
  );
};

export default Live;
