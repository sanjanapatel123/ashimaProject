import React, { useState, useRef } from "react";
import arrow from "../../assets/coursesarrow.png";
import courses1 from "../../assets/courses1.png";
import courses2 from "../../assets/courses2.png";
import courses3 from "../../assets/courses3.png";
import courses4 from "../../assets/courses4.png";
import trending1 from "../../assets/trending1.png";
import COURSES from "../../assets/COURSE.png";
import dot from "../../assets/3dot.png";
import { CiFilter } from "react-icons/ci";
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import ReviewCarrds from "../../components/Home/ReviewCards";
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
      instructor: "BY KAPIL SHARMA",
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
      <Container fluid className="bg-[#ffffff]">
        {/* Top Navigation */}
        <Row className="bg-[#ffffff] py-2 uppercase">
          <Col>
            <div
              className="d-flex align-items-center  overflow-auto px-2 justify-content-between font-Roboto Condensed"
              style={{ whiteSpace: "nowrap", scrollBehavior: "smooth" }}
            >
              <Button
                variant="success"
                style={{
                  width: "73px",
                  height: "44px",
                  top: "142px",
                  left: "42px",
                  borderRadius: "12px",
                  padding: "10px",
                  gap: "10px",
                  background: "#047670",
                }}
              >
                AI & ML
              </Button>

              <img
                src={arrow}
                style={{
                  width: "32px",
                  height: "67px",
                  top: "131px",
                  opacity: "30%",
                  color: "#706D6E",
                }}
              />

              <span
                className="text-uppercase fw-bold"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.32px", // 2% of 16px
                }}
              >
                DevOps
              </span>

              <span
                className="text-uppercase fw-bold"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.32px", // 2% of 16px
                }}
              >
                No Code
              </span>

              <span
                className="text-uppercase fw-bold"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.32px", // 2% of 16px
                }}
              >
                Cyber Security
              </span>

              <span
                className="text-uppercase fw-bold"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.32px", // 2% of 16px
                }}
              >
                Data Science
              </span>

              <span
                className="text-uppercase fw-bold"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.32px", // 2% of 16px
                }}
              >
                Gaming & Network
              </span>

              <span
                className="text-uppercase fw-bold"
                style={{
                  fontFamily: "'Roboto Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.32px", // 2% of 16px
                }}
              >
                Design & Development
              </span>

              {/* <img src={dot} className="bg-[#FFFFFF]" /> */}
              {/* <div
                style={{
                  position: "relative",
                  overflowY: "visible",
                  zIndex: 1,
                }}
              >
                <Dropdown align="end">
                  <Dropdown.Toggle
                    id="sort-dropdown"
                    as="button"
                    className="btn p-0 border-0 bg-transparent"
                  >
                    <HiDotsVertical size={20} color="#00796B" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ zIndex: 9999 }}>
                    <Dropdown.Header className="fw-bold text-dark">
                      Sort By
                    </Dropdown.Header>
                    <Dropdown.Item
                      onClick={() => setSortOption("Most Popular")}
                    >
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
                    <Dropdown.Item
                      onClick={() => setSortOption("Latest First")}
                    >
                      Latest First
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div> */}
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
        <Row className="mb-3 ">
          <Col md={3} className="d-flex">
            <Button
              variant="outline-success"
              className="w-40 d-flex align-items-center justify-content-center gap-2"
              style={{ height: "62px" }}
            >
              <span style={{ color: "#047670", fontSize: "1.5rem" }}>
                <CiFilter />
              </span>
              <span
                style={{
                  color: "#000000",
                  fontWeight: "600",
                  fontSize: "1rem",
                }}
              >
                Filter
              </span>
            </Button>

            <Dropdown>
              <Dropdown.Toggle variant="outline-success mx-1" className="w-100">
                <label
                  htmlFor=""
                  style={{ color: "#000000", fontWeight: "600" }}
                >
                  Sort By
                </label>{" "}
                <br /> {sortOption}
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
          <Col md={9} className="text-end fw-bold text-muted start-end">
            500 RESULTS
          </Col>
        </Row>

        <Row>
          {/* Sidebar Filters */}
          <Col md={3}>
            <hr />
            <h5 className="fw-bold">Ratings</h5>
            <Form>
              <div className="d-flex">
                <Form.Check type="radio" name="rating" />
                <label htmlFor="" className="ms-4">
                  4.0 & UP ⭐⭐⭐⭐ (100)
                </label>
              </div>

              <div className="d-flex">
                <Form.Check type="radio" name="rating" />
                <label htmlFor="" className="ms-4">
                  4.0 & UP ⭐⭐⭐⭐ (100)
                </label>
              </div>
              <div className="d-flex">
                <Form.Check type="radio" name="rating" />
                <label htmlFor="" className="ms-4">
                  4.0 & UP ⭐⭐⭐⭐ (100)
                </label>
              </div>
              <div className="d-flex">
                <Form.Check type="radio" name="rating" />
                <label htmlFor="" className="ms-4">
                  4.0 & UP ⭐⭐⭐⭐ (100)
                </label>
              </div>
            </Form>

            <hr />

            <h5 className="fw-bold">Price</h5>
            <div className="d-flex">
              <Form.Check type="checkbox" />
              <label htmlFor="" className="ms-4">
                Highest to Lowest
              </label>
            </div>

            <div className="d-flex">
              <Form.Check type="checkbox" />
              <label htmlFor="" className="ms-4">
                Lowest to Highest
              </label>
            </div>
            <hr />

            <h5 className="fw-bold">New Courses</h5>
            {/* <Form.Check type="checkbox" label="Latest First" /> */}
            <div className="d-flex">
              <Form.Check type="checkbox" />
              <label htmlFor="" className="ms-4">
                Latest First
              </label>
            </div>
            <div className="d-flex">
              <Form.Check type="checkbox" />
              <label htmlFor="" className="ms-4">
                Last New Course
              </label>
            </div>
            <hr />

            <h5 className="fw-bold">Mode</h5>
            <Link to="live">
              <div className="d-flex">
                <Form.Check type="checkbox" />
                <label htmlFor="" className="ms-4">
                  Live
                </label>
              </div>
            </Link>

            <div className="d-flex">
              <Form.Check type="checkbox" />
              <Link to="/hybrid">
                <label htmlFor="" className="ms-4">
                  Hybrid
                </label>
              </Link>
            </div>

            <Link to="/vedio">
              <div className="d-flex">
                <Form.Check type="checkbox" />
                <label htmlFor="" className="ms-4">
                  Video
                </label>
              </div>
            </Link>
          </Col>

          {/* Course List */}
          <Col md={9}>
            {courses.map((course, index) => (
              <div key={index} className="mb-4">
                <Row
                  className="g-0 bg-[#background: #D9D9D9;
]"
                >
                  <Col md={4}>
                    <img
                      src={course.image}
                      className="img-fluid"
                      alt="Course Thumbnail"
                    />
                  </Col>
                  <Col md={8}>
                    <div style={{ paddingLeft: "46px" }} className="mt-2">
                      {" "}
                      {/* Padding added for spacing */}
                      <h5 className="fw-bold ">{course.title}</h5>
                      <p
                        className="fw-400"
                        style={{
                          color: "#000000",
                          size: "14px",
                          lineHeight: "20px",
                          letterSpacing: "2%",
                        }}
                      >
                        {course.p}
                      </p>
                      <p className="text-muted">
                        {course.instructor} <br />
                        <label
                          htmlFor=""
                          style={{
                            color: "#047670",
                            fontWeight: "500",
                            size: "10px",
                            lineHeight: "15px",
                            letterSpacing: "2%",
                          }}
                        >
                          UPDATED 4 MARCH 2025{" "}
                        </label>{" "}
                        &nbsp;
                        <label
                          htmlFor=""
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            size: "10px",
                            lineHeight: "15px",
                            letterSpacing: "2%",
                          }}
                        >
                          16 TOTAL HOURS
                        </label>{" "}
                        &nbsp;
                        <label
                          htmlFor=""
                          style={{
                            color: "#047670",
                            fontWeight: "500",
                            size: "10px",
                            lineHeight: "15px",
                            letterSpacing: "2%",
                          }}
                        >
                          All LEVELS{" "}
                        </label>{" "}
                        &nbsp;
                        <label
                          htmlFor=""
                          style={{
                            color: "#000000",
                            fontWeight: "500",
                            size: "10px",
                            lineHeight: "15px",
                            letterSpacing: "2%",
                          }}
                        >
                          64 lECTURES
                        </label>{" "}
                        {course.updated}
                      </p>
                      <p>
                        RATING ⭐⭐⭐⭐ ({course.rating}) ({course.reviews}{" "}
                        reviews) &nbsp;
                        {/* <Button
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
                        </Button> */}
                        {/* <Link to={`live/${course.id}`}>
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
                        </Link> */}
                        <Link
                          to={
                            course.mode === "LIVE"
                              ? "/live"
                              : course.mode === "VIDEO"
                              ? "/video"
                              : course.mode === "HYBRID"
                              ? "/hybrid"
                              : "/"
                          }
                        >
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
                        </Link>
                      </p>
                      <h4 className="text-end fw-bold text-success">
                        {course.price}
                      </h4>
                    </div>
                  </Col>
                </Row>
              </div>
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
            <p style={{ color: "#1E1E1E", fontWeight: "600", size: "36px" }}>
              Courses to get you started
            </p>
            <p style={{ color: "#000000", fontWeight: "400", size: "18px" }}>
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

        <Row className="mb-3 p-5">
          <Col>
            <h2 className="fw-bold">
              Featured <span className="text-success">Courses</span>
            </h2>
            <p className="text-muted">
              Explore courses from experienced, real-world experts.
            </p>
          </Col>
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
        </Row>

        {/* Popular Courses */}
        <Row className="mt-5 p-4">
          <Col>
            <h2 className="fw-bold">
              Popular <span className="text-success">Courses</span>
            </h2>
          </Col>
          <Row className="mt-3">
            <div className="col-md-2 col-sm-12">
              <button type="button" class="btn btn-outline-dark w-100">
                AI & ML
              </button>
            </div>
            <div className="col-md-2 col-sm-12">
              <button type="button" class="btn btn-outline-dark w-100 mt-1">
                Devops
              </button>
            </div>
            <div className="col-md-3 col-sm-12">
              <button type="button" class="btn btn-outline-dark w-100">
                Cyber Security And Testing
              </button>
            </div>
            <div className="col-md-2 col-sm-12">
              <button type="button" class="btn btn-outline-dark w-100">
                Software Development
              </button>
            </div>
            <div className="col-md-3 col-sm-12">
              <button
                type="button"
                class="btn btn-outline-dark w-100"
                style={{ textWrap: "nowrap" }}
              >
                Data Science And Engineering
              </button>
            </div>

            <div className="row mt-3">
              <div className="col-md-2 col-sm-12 ">
                <button type="button" class="btn btn-outline-dark w-100">
                  Gaming And Network
                </button>
              </div>
              <div className="col-md-3 col-sm-12">
                <button type="button" class="btn btn-outline-dark w-100 mt-1">
                  Design And Development
                </button>
              </div>
              <div className="col-md-3 col-sm-12">
                <button type="button" class="btn btn-outline-dark w-100">
                  Business And Leadership
                </button>
              </div>
              <div className="col-md-2 col-sm-12">
                <button type="button" class="btn btn-outline-dark w-100">
                  No Code
                </button>
              </div>
              <div className="col-md-2 col-sm-12">
                <button
                  type="button"
                  class="btn btn-outline-dark w-100"
                  style={{ textWrap: "nowrap" }}
                >
                  Founder Connect
                </button>
              </div>
            </div>
          </Row>
        </Row>
        <ReviewCarrds />
      </Container>
    </>
  );
}

export default AllCourses;
