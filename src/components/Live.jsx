import React from "react";
import { Container, Row, Col, Button, Breadcrumb, Card, Form, Accordion,  Badge} from "react-bootstrap";
import { FaStar, FaArrowRight, FaCheckCircle, FaVideo, FaFileAlt, FaDownload, FaTv, FaUser, FaHeart } from "react-icons/fa";

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
    <Container fluid className="bg-teal py-4" >
      {/* Breadcrumb Navigation */}
      <div style={{ backgroundColor: "#0E736A", color: "white" }}>
      <Container>
        <Breadcrumb className="text-light">
          <Breadcrumb.Item href="#" className="text-light">AI & ML</Breadcrumb.Item>
          <Breadcrumb.Item href="#" className="text-light">Prompt Engineering</Breadcrumb.Item>
          <Breadcrumb.Item active className="text-light">ABCD</Breadcrumb.Item>
        </Breadcrumb>
      </Container>

      {/* Course Details */}
      <Container >
        <Row className="align-items-center">
          {/* Left Column - Course Details */}
          <Col md={7} className="text-light" >
            <h2 className="fw-bold" style={{ fontSize: "32px" }}>AI AND ML FOR BEGINNERS</h2>
            <p style={{ fontSize: "16px" }}>
              Learn to program using AI & ML. Master AI & ML by building 100 projects in 100 days.
              Learn data science, automation, build websites, games, and apps!
            </p>
            
            {/* Rating */}
            <p className="d-flex align-items-center" style={{ fontSize: "14px" }}>
              <FaStar className="text-warning me-1" />
              <FaStar className="text-warning me-1" />
              <FaStar className="text-warning me-1" />
              <FaStar className="text-warning me-1" />
              <FaStar className="text-warning me-1" />
              <span className="ms-2">4.8</span> <span className="text-muted mx-2">|</span> 1,942,239 STUDENTS
            </p>

            {/* Instructors */}
            <p className="fw-bold" style={{ fontSize: "14px" }}>HOSTED BY</p>
            <div className="d-flex align-items-center">
              <img src="https://via.placeholder.com/40" alt="Instructor" className="rounded-circle me-2" />
              <span className="me-3">ASHWARYA RAI</span>
              <img src="https://via.placeholder.com/40" alt="Instructor" className="rounded-circle me-2" />
              <span>KAPIL SHARMA</span>
            </div>

            {/* Next Cohorts */}
            <p className="mt-3 fw-bold" style={{ fontSize: "14px" }}>NEXT COHORTS</p>
            <Button variant="success" size="sm" className="me-2">LIVE</Button>
            <span className="text-muted me-2">MAY 24 – JUNE 28, 2025</span>
            <Button variant="info" size="sm">ENROLL</Button>
          </Col>

          {/* Right Column - Pricing & Video */}
          <Col md={5} className="text-center">
            <Card className="shadow">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/350x200"
                alt="Course Preview"
              />
              <Card.Body>
                <h3 className="fw-bold" style={{ fontSize: "24px" }}>$79.44</h3>
                <p className="fw-bold" style={{ fontSize: "14px" }}>NEXT COHORTS</p>
                <p className="text-muted" style={{ fontSize: "14px" }}>MAY 24 – JUNE 28, 2025</p>
                <Button variant="primary" className="w-100 mb-2" size="sm">ENROLL</Button>
                <p className="text-muted" style={{ fontSize: "14px" }}>JULY 26 – AUG 31, 2025</p>
                <Button variant="primary" className="w-100" size="sm">ENROLL</Button>
                <p className="text-muted mt-3" style={{ fontSize: "12px" }}>GET FUTURE COHORT DATES</p>

                {/* Email Input */}
                <Form className="d-flex">
                  <Form.Control type="email" placeholder="Your Email" className="rounded-0" />
                  <Button variant="success" className="rounded-0"><FaArrowRight /></Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>

      {/* What You Will Learn Section */}
      <Container className="mt-4 bg-white p-4 rounded shadow">
        <h4 className="fw-bold text-dark">What you will learn</h4>
        <ul className="list-unstyled mt-3">
          <li className="d-flex align-items-start mb-3">
            <input type="checkbox"  className="me-2" />
            <div>
              <strong className="text-black">Master Applied Generative AI Concepts</strong>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              Learn applied generative AI techniques like prompt engineering, RAG, agents, and fine-tuning, with a focus on applying them effectively to real-world business scenarios. Understand how to navigate constraints like cost, latency, and performance constraints in AI systems.  
              </p>
            </div>
          </li>
          <li className="d-flex align-items-start">
            <input type="checkbox"  className="me-2" />
            <div>
              <strong className="text-black">Apply Concepts to Build an Agentic Search System</strong>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              While learning applied AI concepts, we’ll put them into action by building a Perplexity-like AI-powered search system through detailed, hands-on tutorials that demonstrate their practical application (Low code options will be provided)
              </p>
            </div>
          </li>
          <li className="d-flex align-items-start">
            <input type="checkbox"  className="me-2" />
            <div>
              <strong className="text-black">Tackle Business Use-Cases with AI</strong>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              Participate in brainstorming sessions and team huddles to approach hypothetical business problems. Learn to identify the right AI solutions for specific use cases, leveraging low-code options where applicable.
              </p>
            </div>
          </li>
          <li className="d-flex align-items-start">
            <input type="checkbox"  className="me-2" />
            <div>
              <strong className="text-black">Understand Challenges and Effective Evaluation</strong>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              Gain a deep understanding of key challenges in building AI systems, including handling hallucinations, adversarial attacks, security, privacy issues etc., and learn best practices to evaluate AI solutions comprehensively
              </p>
            </div>
          </li>
          <li className="d-flex align-items-start">
            <input type="checkbox"  className="me-2" />
            <div>
              <strong className="text-black">Final Capstone Project</strong>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              You’ll design and demo a solution for a hypothetical business problem, integrating insights from relevant research papers in my curated list, hand-picked for enterprise relevance. This project will also involve addressing challenges and evaluation methods.
              </p>
            </div>
          </li>
          <li className="d-flex align-items-start">
            <input type="checkbox"  className="me-2" />
            <div>
              <strong className="text-black">Access to the Problem-First AI Community</strong>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
              The course includes guest lectures from industry experts, AMA sessions, and our Chai & AI discussions, culminating in a final in-person meetup in the Bay Area. You'll have plenty of opportunities to network and become part of our community.
              </p>
            </div>
          </li>
        </ul>

   <hr/>

        <h3 className="fw-bold mb-4 mt-4">Who is this course for</h3>

      <Row className="gy-3">
        {[1, 2, 3].map((num) => (
          <Col md={4} key={num}>
            <Card className="border-0 shadow-sm p-3">
              <div className="d-flex align-items-start">
                <div
                  className="rounded-circle text-white fw-bold d-flex align-items-center justify-content-center"
                  style={{
                    width: "35px",
                    height: "25px",
                    backgroundColor: "red",
                    fontSize: "16px",
                  }}
                >
                  {num}
                </div>
                <div className="ms-2">
                  <p className="fw-bold mb-1">Access to the Problem-First AI Community</p>
                  <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                    The course includes guest lectures from industry experts, AMA sessions.
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Section: What You Will Learn */}
      <Card className="mt-3 p-4 shadow-sm border-0">
        <h4 className="fw-bold">Master Applied Generative AI Concepts</h4>

        <ul className="list-unstyled mt-3">
          <li className="d-flex align-items-start mb-3">
            <FaCheckCircle className="text-success me-2" />
            <div>
              <strong>Master Applied Generative AI Concepts</strong>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                Learn applied generative AI techniques like prompt engineering, RAG, agents, and fine-tuning.
              </p>
            </div>
          </li>

          <li className="d-flex align-items-start">
            <FaCheckCircle className="text-success me-2" />
            <div>
              <strong>Understand Challenges and Effective Evaluation</strong>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                Gain a deep understanding of key challenges in building AI systems, including security and privacy.
              </p>
            </div>
          </li>
        </ul>
      </Card>


      <div className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">COURSE CONTENT</h3>
        <Button variant="link" className="text-success fw-bold">
          EXPAND ALL SECTIONS
        </Button>
      </div>
      <p className="text-muted">8 sections • 73 lectures • 16h 8m total length</p>

      {/* Accordion for Course Topics */}
      <Accordion defaultActiveKey="0" className="mb-4">
        {["INTRODUCTION", "TOPIC 2", "TOPIC 3", "TOPIC 4", "LIVE"].map(
          (topic, index) => (
            <Accordion.Item
              key={index}
              eventKey={index.toString()}
              className={topic === "LIVE" ? "bg-teal text-white" : ""}
            >
              <Accordion.Header>
                <span className={topic === "INTRODUCTION" ? "fw-bold" : ""}>
                  {topic}
                </span>
              </Accordion.Header>
              <Accordion.Body className="d-flex justify-content-between">
                LIVE ON 1:25 PM
                {topic === "LIVE" && <Button variant="light">NEXT COHORT</Button>}
              </Accordion.Body>
            </Accordion.Item>
          )
        )}
      </Accordion>

      {/* Course Includes Section */}
      <h4 className="fw-bold">
        THIS COURSE <span className="text-success">INCLUDES:</span>
      </h4>
      <Row className="text-muted my-3">
        <Col xs={12} md={6} className="d-flex align-items-center mb-2">
          <FaVideo className="me-2" /> 16 hours on-demand video
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center mb-2">
          <FaTv className="me-2" /> Access on mobile and TV
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center mb-2">
          <FaFileAlt className="me-2" /> 3 articles
        </Col>
        <Col xs={12} md={6} className="d-flex align-items-center mb-2">
          <FaDownload className="me-2" /> 4 downloadable resources
        </Col>
      </Row>

      {/* Requirements Section */}
      <h4 className="fw-bold mt-4">REQUIREMENTS</h4>
      <p className="text-muted">
        While we provide low-code options, this course assumes you have some coding experience. It's not suitable for those who have never written or worked with even basic code.
      </p>
       
 <hr/>

      <h3 className="fw-bold text-teal">STUDENTS ALSO BOUGHT</h3>

      {/* Course List */}
      {recommendedCourses.map((course) => (
        <Card key={course.id} className="border-0 shadow-sm p-3 my-2">
          <Row className="align-items-center">
            {/* Course Image */}
            <Col xs={3} md={2}>
              <Card.Img src={course.image} alt={course.title} className="rounded" />
            </Col>

            {/* Course Details */}
            <Col xs={7} md={8}>
              <h6 className="fw-bold mb-1">{course.title}</h6>

              {/* Rating & Students */}
              <div className="d-flex align-items-center text-muted" style={{ fontSize: "14px" }}>
                <FaStar className="text-warning me-1" />
                {course.rating} <FaUser className="ms-3 me-1" />
                {course.students}
                <span className="fw-bold text-dark ms-3">{course.price}</span>
              </div>

              {/* Tags */}
              <div className="mt-2">
                <Badge bg="danger" className="me-2">HIGH RATED</Badge>
                <span className="text-success fw-bold">{course.hours}</span>
                <span className="text-muted ms-3">{course.updated}</span>
              </div>
            </Col>

            {/* Wishlist Button */}
            <Col xs={2} className="text-end">
              <Button variant="outline-danger" className="rounded-circle">
                <FaHeart />
              </Button>
            </Col>
          </Row>
        </Card>
      ))}


      </Container>

      
    </Container>
  );
};

export default Live;