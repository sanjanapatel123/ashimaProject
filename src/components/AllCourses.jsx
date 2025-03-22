import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import arrow from "../assets/coursesarrow.png";
import courses1 from "../assets/courses1.png";
import courses2 from "../assets/courses2.png";
import courses3 from "../assets/courses3.png";
import courses4 from "../assets/courses4.png";
import trending1 from "../assets/trending1.png";
import COURSES from "../assets/COURSE.png";
import dot from "../assets/3dot.png";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  Form,
  Card,
  Pagination,
  Nav,
} from "react-bootstrap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function AllCourses() {
  const [sortOption, setSortOption] = useState("Most Popular");

  const scrollRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const courses = [
    {
      title: "AI AND ML FOR BEGINNERS",
      p: "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      price: "$19.99",
      rating: 4.8,
      reviews: 87,
      mode: "VIDEO",
      instructor: "Kapil Sharma",
      updated: "4 March 2025",
      hours: "16 Total Hours",
      level: "All Levels",
      lectures: "64 Lectures",
      image: courses1,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      p: "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      price: "$19.99",
      rating: 4.8,
      reviews: 87,
      mode: "LIVE",
      instructor: "Kapil Sharma",
      updated: "4 March 2025",
      hours: "16 Total Hours",
      level: "All Levels",
      lectures: "64 Lectures",
      image: courses2,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      price: "$19.99",
      p: "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      rating: 4.8,
      reviews: 87,
      mode: "HYBRID",
      instructor: "Kapil Sharma",
      updated: "4 March 2025",
      hours: "16 Total Hours",
      level: "All Levels",
      lectures: "64 Lectures",
      image: courses3,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      price: "$19.99",
      p: "Learn to program using the Ai & Ml. Master Ai & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      rating: 4.8,
      reviews: 87,
      mode: "LIVE",
      instructor: "Kapil Sharma",
      updated: "4 March 2025",
      hours: "16 Total Hours",
      level: "All Levels",
      lectures: "64 Lectures",
      image: courses4,
    },
  ];

  const coursess = [
    {
      title: "AI AND ML FOR BEGINNERS",
      instructor: "Kapil Sharma",
      rating: 4.8,
      price: "$19.99",
      mode: "LIVE",
      image: trending1,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      instructor: "Kapil Sharma",
      rating: 4.8,
      price: "$19.99",
      mode: "HYBRID",
      image: trending1,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      instructor: "Kapil Sharma",
      rating: 4.8,
      price: "$19.99",
      mode: "LIVE",
      image: trending1,
    },
    {
      title: "AI AND ML FOR BEGINNERS",
      instructor: "Kapil Sharma",
      rating: 4.8,
      price: "$19.99",
      mode: "VIDEO",
      image: trending1,
    },
  ];

  // Scroll Function for Navigation Arrows
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += direction === "left" ? -300 : 300;
    }
  };

  const featuredCourses = [
    {
      title: "AI AND ML FOR BEGINNERS",
      description:
        "Learn to program using the AI & ML. Master AI & ML by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      instructor: "Kapil Sharma",
      updated: "4 March 2025",
      hours: "16 Total Hours",
      level: "All Levels",
      lectures: "64 Lectures",
      rating: 4.8,
      reviews: 87,
      price: "$19.99",
      badge: "HIGH RATED",
      image: COURSES,
    },
    {
      title: "Deep Learning with Python",
      description:
        "Master deep learning and neural networks with hands-on projects and real-world datasets.",
      instructor: "Sarah Johnson",
      updated: "1 March 2025",
      hours: "20 Total Hours",
      level: "Advanced",
      lectures: "50 Lectures",
      rating: 4.9,
      reviews: 120,
      price: "$24.99",
      badge: "TOP RATED",
      image: "https://source.unsplash.com/400x250/?ai,machinelearning",
    },
  ];

  // Scroll Functions
  const nextCourse = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredCourses.length);
  };

  const prevCourse = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + featuredCourses.length) % featuredCourses.length
    );
  };

  return (
    <>
      <Container fluid>
        {/* Top Navigation */}
        <Row className="bg-light py-2 uppercase">
          <Col>
            <div
              className="d-flex align-items-center  overflow-auto px-2 justify-content-between font-Roboto Condensed"
              style={{ whiteSpace: "nowrap", scrollBehavior: "smooth" }}
            >
              <Button className=" bg-[#047670] me-2 flex-shrink-0">
                AI & ML
              </Button>

              <img src={arrow} className="h-12 w-6" />

              <span className="text-dark fw-bold me-2 flex-shrink-0">
                DevOps
              </span>

              <span className="text-dark fw-bold me-2 flex-shrink-0">
                No Code
              </span>

              <span className="text-dark fw-bold me-2 flex-shrink-0">
                Cyber Security
              </span>

              <span className="text-dark fw-bold me-2 flex-shrink-0">
                Data Science
              </span>

              <span className="text-dark fw-bold me-2 flex-shrink-0">
                Gaming & Network
              </span>

              <span className="text-dark fw-bold me-2 flex-shrink-0">
                Design & Development
              </span>
              
                <img src={dot} className="bg-[#FFFFFF]" />
             
            </div>
          </Col>
        </Row>

        {/* Page Content */}

        {/* Filters & Sorting */}

        <Row className="mb-3 mt-5">
          <Col md={8}>
            <h2 className="fw-bold">
              All AI & ML <span className="text-success">Courses</span>
            </h2>
          </Col>
        </Row>

        {/* Filters & Sorting */}
        <Row className="mb-3">
          <Col md={2}>
            <Button variant="outline-success" className="w-100">
              Filter
            </Button>
          </Col>
          <Col md={3}>
            <Dropdown>
              <Dropdown.Toggle variant="" className="w-100">
                Sort By: {sortOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortOption("Most Popular")}>
                  Most Popular
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSortOption("Highest to Lowest")}
                >
                  Highest to Lowest
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => setSortOption("Lowest to Highest")}
                >
                  Lowest to Highest
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption("Latest First")}>
                  Latest First
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={7} className="text-end fw-bold text-muted start-end">
            500 RESULTS
          </Col>
        </Row>

        <Row>
          {/* Sidebar Filters */}
          <Col md={3} className="border-end">
            <hr />
            <h5 className="fw-bold">Ratings</h5>
            <Form>
              <Form.Check
                type="radio"
                label="4.5 & UP ⭐⭐⭐⭐⭐ (100)"
                name="rating"
              />
              <Form.Check
                type="radio"
                label="4.0 & UP ⭐⭐⭐⭐ (100)"
                name="rating"
              />
              <Form.Check
                type="radio"
                label="3.5 & UP ⭐⭐⭐ (100)"
                name="rating"
              />
              <Form.Check
                type="radio"
                label="3.0 & UP ⭐⭐ (100)"
                name="rating"
              />
            </Form>

            <hr />

            <h5 className="fw-bold">Price</h5>
            <Form.Check type="checkbox" label="Highest to Lowest" />
            <Form.Check type="checkbox" label="Lowest to Highest" />

            <hr />

            <h5 className="fw-bold">New Courses</h5>
            <Form.Check type="checkbox" label="Latest First" />
            <Form.Check type="checkbox" label="Last New Course" />

            <hr />

            <h5 className="fw-bold">Mode</h5>
            <Form.Check type="checkbox" label="Live" />
            <Form.Check type="checkbox" label="Hybrid" />
            <Form.Check type="checkbox" label="Video" />
          </Col>

          {/* Course List */}
          <Col md={9}>
            {courses.map((course, index) => (
              <Card key={index} className="mb-4">
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      src={course.image}
                      className="img-fluid"
                      alt="Course Thumbnail"
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <h5 className="fw-bold">{course.title}</h5>
                      <p className="text-muted fw-bold">{course.p}</p>
                      <p className="text-muted">
                        {course.instructor} | Updated {course.updated}
                      </p>
                      <p>
                        {course.hours} | {course.level} | {course.lectures}
                      </p>
                      <p>
                        RATING ⭐⭐⭐⭐ ({course.rating}) ({course.reviews}{" "}
                        reviews) &nbsp;
                        <Button
                          size="sm"
                          variant={
                            course.mode === "VIDEO"
                              ? "danger"
                              : course.mode === "LIVE"
                              ? "success"
                              : course.mode === "HYBRID"
                              ? "dark"
                              : "success"
                          }
                        >
                          {course.mode}
                        </Button>
                      </p>
                      <h4 className="text-end fw-bold text-success">
                        {course.price}
                      </h4>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}

            {/* Pagination */}
            <Pagination className="justify-content-center">
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{67}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <h1 className="fw-bold">AI AND ML COURSES</h1>
            <p className="text-muted">Courses to get you started</p>
            <p className="text-muted">
              Explore courses from experienced, real-world experts.
            </p>
          </Col>
        </Row>

        {/* Tabs for Most Popular / Trending */}
        <Nav variant="tabs" defaultActiveKey="popular" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="popular" className="fw-bold">
              Most Popular
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="trending" className="fw-bold text-muted">
              Trending
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Scrollable Course List */}
        <div className="position-relative d-flex flex-column">
          <Button
            variant="dark"
            className="position-absolute start-0 top-50 translate-middle-y z-2 d-none d-md-inline"
            onClick={() => scroll("left")}
          >
            <FaArrowLeft />
          </Button>

          <div
            ref={scrollRef}
            className="d-flex overflow-auto pb-3 px-2 px-md-4"
            style={{
              scrollBehavior: "smooth",
              marginLeft: "0",
              gap: "1rem",
            }}
          >
            {coursess.map((course, index) => (
              <Card
                key={index}
                className="flex-shrink-0"
                style={{
                  minWidth: "250px",
                  width: "100%",
                  maxWidth: "280px",
                  marginLeft: "21px",
                }}
              >
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                  <h6 className="fw-bold">{course.title}</h6>
                  <p className="text-muted mb-1">BY {course.instructor}</p>
                  <p className="mb-1">RATING {course.rating} ⭐⭐⭐⭐⭐</p>
                  <h5 className="fw-bold">{course.price}</h5>
                  <Button
                    variant={
                      course.mode === "VIDEO"
                        ? "danger"
                        : course.mode === "LIVE"
                        ? "success"
                        : "warning"
                    }
                    size="sm"
                  >
                    {course.mode}
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>

          <Button
            variant="dark"
            className="position-absolute end-0 top-50 translate-middle-y z-2 d-none d-md-inline"
            onClick={() => scroll("right")}
          >
            <FaArrowRight />
          </Button>
        </div>

        <Row className="mb-3">
          <Col>
            <h2 className="fw-bold">
              Featured <span className="text-success">Courses</span>
            </h2>
            <p className="text-muted">
              Explore courses from experienced, real-world experts.
            </p>
          </Col>
        </Row>

        <Row className="position-relative">
          <Col md={12}>
            <Card className="p-3 shadow">
              <Row className="g-0 align-items-center">
                <Col md={5}>
                  <Card.Img
                    src={featuredCourses[currentIndex].image}
                    className="img-fluid rounded"
                    alt="Course"
                  />
                </Col>
                <Col md={7}>
                  <Card.Body>
                    <h4 className="fw-bold">
                      {featuredCourses[currentIndex].title}
                    </h4>
                    <p className="text-muted">
                      {featuredCourses[currentIndex].description}
                    </p>
                    <p>
                      <strong>
                        BY {featuredCourses[currentIndex].instructor}
                      </strong>{" "}
                      | Updated {featuredCourses[currentIndex].updated}
                    </p>
                    <p className="text-muted small">
                      {featuredCourses[currentIndex].hours} |{" "}
                      {featuredCourses[currentIndex].level} |{" "}
                      {featuredCourses[currentIndex].lectures}
                    </p>
                    <p>
                      Rating: ⭐ {featuredCourses[currentIndex].rating} (
                      {featuredCourses[currentIndex].reviews} reviews)
                      <Button size="sm" variant="danger" className="ms-2">
                        {featuredCourses[currentIndex].badge}
                      </Button>
                    </p>
                    <h4 className="fw-bold text-success">
                      {featuredCourses[currentIndex].price}
                    </h4>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* <Button variant="dark" className="position-absolute  translate-middle-y w-25 top-100 text-center align-center" onClick={nextCourse}>
          <FaArrowRight />
        </Button> */}
        </Row>

        {/* Popular Courses */}
        <Row className="mt-5">
          <Col>
            <h2 className="fw-bold">
              Popular <span className="text-success">Courses</span>
            </h2>
          </Col>
        </Row>

        <Row className="mt-3 ">
          {[
            "AI & ML",
            "Devops",
            "Cyber Security And Testing",
            "Software Development",
            "Data Science And Engineering",
            "Gaming And Network",
            "Design And Development",
            "Business And Leadership",
            "No Code",
            "Founder Connect",
          ].map((category, index) => (
            <Col key={index} xs={6} md={3} lg={2} className="mb-3">
              <Button variant="outline-dark" className="w-100 fw-bold">
                {category}
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default AllCourses;





