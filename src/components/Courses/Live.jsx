// import React from "react";
// import { Container, Row, Col, Button, Breadcrumb, Card, Form, Accordion,  Badge} from "react-bootstrap";
// import { FaStar, FaArrowRight, FaCheckCircle, FaVideo, FaFileAlt, FaDownload, FaTv, FaUser, FaHeart } from "react-icons/fa";

// const Live = () => {


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
//             <Button variant="success" size="sm" className="me-2">LIVE</Button>
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
//       <Card className="mt-3 p-4 shadow-sm border-0">
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

// export default Live;




import React from "react";
import liveimg1 from "../../assets/liveimg1.png";
import liveimg2 from "../../assets/liveimg2.png";
import liveimg3 from "../../assets/liveimg3.png";
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

  return (
    <div className="bg-[#047670] py-4">
      <div className="bg-[#047670] text-white">
        <div className="container mx-auto px-4 py-2">
          <nav className="text-[22px] flex space-x-2 uppercase font-jost">
            <a href="#" className="text-[#ffffff]">
              AI & ML
            </a>
            <span className="text-[#ffffff]">/</span>
            <a href="#" className="text-[#ffffff]">
              Prompt Engineering
            </a>
            <span className="text-[#ffffff]">/</span>
            <span className="text-[#ffffff]">ABCD</span>
          </nav>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-[#ffffff] md:w-2/3">
              <h2 className="font-impact text-[16px] md:text-3xl">
                AI AND ML FOR BEGINNERS
              </h2>
              <p className="text-[26px] font-roboto mt-2">
                Learn to program using AI & ML. Master AI & ML by building 100
                projects in 100 days. Learn data science, automation, build
                websites, games, and apps!
              </p>
              <p className="flex items-center text-[14px] mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
                <span className="ml-2">4.8</span>
                <span className="mx-2 text-gray-300">|</span>
                1,942,239 STUDENTS
              </p>
              <p className="font-bold text-sm mt-3">HOSTED BY</p>
              <div className="flex items-center mt-1">
                <img
                  src={liveimg2}
                  className="rounded-full mr-2"
                />
                <span className="mr-3">ASHWARYA RAI</span>
                <img
                  src={liveimg3}
                  className="rounded-full mr-2"
                />
                <span>KAPIL SHARMA</span>
              </div>
              <p className="font-bold text-sm mt-4">NEXT COHORTS</p>
              <button className="bg-green-500 text-white text-xs px-2 py-1 mr-2 rounded">
                LIVE
              </button>
              <span className="text-gray-300 text-sm mr-2">
                MAY 24 – JUNE 28, 2025
              </span>
              <button className="bg-cyan-500 text-white text-xs px-2 py-1 rounded">
                ENROLL
              </button>
            </div>

            <div className="md:w-1/3 mt-6 md:mt-0 text-center">
              <div className="bg-white rounded shadow overflow-hidden">
                <img src={liveimg1} alt="Course Preview" className="w-full" />
                <div className="p-4">
                  <h3 className="font-bold text-xl">$79.44</h3>
                  <p className="font-bold text-sm mt-2">NEXT COHORTS</p>
                  <p className="text-gray-500 text-sm">
                    MAY 24 – JUNE 28, 2025
                  </p>
                  <button className="bg-blue-600 text-white text-sm w-full py-1 my-1 rounded">
                    ENROLL
                  </button>
                  <p className="text-gray-500 text-sm">
                    JULY 26 – AUG 31, 2025
                  </p>
                  <button className="bg-blue-600 text-white text-sm w-full py-1 rounded">
                    ENROLL
                  </button>
                  <p className="text-xs text-gray-400 mt-3">
                    GET FUTURE COHORT DATES
                  </p>
                  <form className="flex">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="flex-1 border px-2 py-1 text-sm rounded-l"
                    />
                    <button className="bg-green-500 px-3 py-1 text-white text-sm rounded-r">
                      <FaArrowRight />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional sections like "What You Will Learn", "Course Content", etc., coming next... */}
      <div className="container mx-auto mt-6 bg-white p-6 rounded shadow">
        <h4 className="font-bold text-gray-900">What you will learn</h4>
        <ul className="mt-4 space-y-4">
          {[
            {
              title: "Master Applied Generative AI Concepts",
              desc: "Learn applied generative AI techniques like prompt engineering, RAG, agents, and fine-tuning, with a focus on applying them effectively to real-world business scenarios. Understand how to navigate constraints like cost, latency, and performance constraints in AI systems.",
            },
            {
              title: "Apply Concepts to Build an Agentic Search System",
              desc: "While learning applied AI concepts, we’ll put them into action by building a Perplexity-like AI-powered search system through detailed, hands-on tutorials that demonstrate their practical application (Low code options will be provided)",
            },
            {
              title: "Tackle Business Use-Cases with AI",
              desc: "Participate in brainstorming sessions and team huddles to approach hypothetical business problems. Learn to identify the right AI solutions for specific use cases, leveraging low-code options where applicable.",
            },
            {
              title: "Understand Challenges and Effective Evaluation",
              desc: "Gain a deep understanding of key challenges in building AI systems, including handling hallucinations, adversarial attacks, security, privacy issues etc., and learn best practices to evaluate AI solutions comprehensively",
            },
            {
              title: "Final Capstone Project",
              desc: "You’ll design and demo a solution for a hypothetical business problem, integrating insights from relevant research papers in my curated list, hand-picked for enterprise relevance. This project will also involve addressing challenges and evaluation methods.",
            },
            {
              title: "Access to the Problem-First AI Community",
              desc: "The course includes guest lectures from industry experts, AMA sessions, and our Chai & AI discussions, culminating in a final in-person meetup in the Bay Area. You'll have plenty of opportunities to network and become part of our community.",
            },
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <input type="checkbox" className="mt-1 mr-3" />
              <div>
                <p className="font-semibold text-black">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <hr className="my-6" />

        <h3 className="font-bold text-xl mb-4">Who is this course for</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white border shadow-sm rounded p-4 flex"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-600 text-white font-bold mr-3">
                {num}
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">
                  Access to the Problem-First AI Community
                </p>
                <p className="text-gray-500 text-sm">
                  The course includes guest lectures from industry experts, AMA
                  sessions.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto bg-white mt-6 p-6 rounded shadow">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl">COURSE CONTENT</h3>
          <button className="text-green-600 font-bold text-sm">
            EXPAND ALL SECTIONS
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-1">
          8 sections • 73 lectures • 16h 8m total length
        </p>

        <div className="mt-4 space-y-2">
          {["INTRODUCTION", "TOPIC 2", "TOPIC 3", "TOPIC 4", "LIVE"].map(
            (topic, i) => (
              <div
                key={i}
                className={`rounded border p-4 flex items-center justify-between ${
                  topic === "LIVE" ? "bg-teal-600 text-white" : "bg-gray-100"
                }`}
              >
                <span className={topic === "INTRODUCTION" ? "font-bold" : ""}>
                  {topic}
                </span>
                {topic === "LIVE" ? (
                  <button className="bg-white text-teal-600 text-xs px-2 py-1 rounded">
                    NEXT COHORT
                  </button>
                ) : (
                  <span className="text-sm text-gray-600">LIVE ON 1:25 PM</span>
                )}
              </div>
            )
          )}
        </div>

        {/* Course Includes */}
        <h4 className="font-bold mt-6">
          THIS COURSE <span className="text-green-600">INCLUDES:</span>
        </h4>
        <div className="grid md:grid-cols-2 gap-4 mt-3 text-gray-600 text-sm">
          <div className="flex items-center">
            <FaVideo className="mr-2" /> 16 hours on-demand video
          </div>
          <div className="flex items-center">
            <FaTv className="mr-2" /> Access on mobile and TV
          </div>
          <div className="flex items-center">
            <FaFileAlt className="mr-2" /> 3 articles
          </div>
          <div className="flex items-center">
            <FaDownload className="mr-2" /> 4 downloadable resources
          </div>
        </div>

        {/* Requirements */}
        <h4 className="font-bold mt-6">REQUIREMENTS</h4>
        <p className="text-gray-600 text-sm">
          While we provide low-code options, this course assumes you have some
          coding experience. It's not suitable for those who have never written
          or worked with even basic code.
        </p>

        {/* Students Also Bought */}
        <hr className="my-6" />
        <h3 className="font-bold text-teal-700 text-xl">
          STUDENTS ALSO BOUGHT
        </h3>
        <div className="space-y-4 mt-4">
          {recommendedCourses.map((course) => (
            <div
              key={course.id}
              className="flex items-center bg-white border shadow-sm rounded p-4"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-20 h-20 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h6 className="font-bold mb-1 text-base">{course.title}</h6>
                <div className="flex items-center text-gray-600 text-sm">
                  <FaStar className="text-yellow-400 mr-1" />
                  {course.rating}
                  <FaUser className="ml-4 mr-1" />
                  {course.students}
                  <span className="font-bold text-black ml-4">
                    {course.price}
                  </span>
                </div>
                <div className="mt-2 text-sm">
                  <span className="bg-red-600 text-white px-2 py-0.5 rounded mr-2 text-xs">
                    HIGH RATED
                  </span>
                  <span className="text-green-600 font-semibold mr-3">
                    {course.hours}
                  </span>
                  <span className="text-gray-500">{course.updated}</span>
                </div>
              </div>
              <button className="ml-4 text-red-500 border border-red-500 rounded-full w-8 h-8 flex items-center justify-center">
                <FaHeart />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Live;
