import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { TfiLayoutSlider } from "react-icons/tfi";

const AITeacherLanding = () => {
  return (
    <div>
      <div className="container-fluid">
        <Navbar
          style={{ backgroundColor: "#ffffff" }}
          expand="lg"
          className="border-bottom px-3 py-2"
        >
          <div className="container">
            <Navbar
              className="fs-3"
              style={{
                fontFamily: "Impact",
                width: "400",
                fontSize: "50px",
                lineHeight: "55px",
                letterSpacing: "0.5%",
              }}
            >
              AI SKILLS
            </Navbar>
            <Nav className="ms-auto d-flex align-items-center gap-3">
              <div style={{ width: "30px", height: "30px" }}>
                <i
                  className="fas fa-globe fa-2x"
                  style={{ color: "#00766e" }}
                ></i>
              </div>
              <Button
                className="rounded px-3 py-1 fw-semibold"
                style={{
                  backgroundColor: "#00766e",
                  color: "white",
                  border: "none",
                }}
              >
                Sign Up
              </Button>
            </Nav>
          </div>
        </Navbar>
        <section
          style={{
            backgroundColor: "#00766e",
            color: "white",
            padding: "10px",
          }}
          className="py-5"
        >
          <div className="container">
            <Row className="align-items-center">
              {/* Left Content */}
              <Col md={6} className="mb-4 mb-md-0 text-center text-md-start">
                <h1 className=" mb-3" style={{ fontFamily: "Impact" }}>
                  Teach Your Way Transform Life
                </h1>
                <p
                  className="mb-4"
                  style={{
                    fontSize: "1.05rem",
                    color: "#FFFFFF",
                    fontFamily: "jost",
                  }}
                >
                  Join AiSkills And Reach A Global Guideline
                </p>
                <Button
                  style={{
                    backgroundColor: "white",
                    color: "#00766e",
                    border: "none",
                    fontWeight: "600",
                    padding: "10px 20px",
                  }}
                  className="rounded"
                >
                  Get Started As An Instructor
                </Button>
              </Col>

              {/* Right Image */}
              <Col md={6} className="text-center">
                <img
                  src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
                  alt="Instructor"
                  className="img-fluid rounded"
                  style={{
                    maxHeight: "348px",
                    objectFit: "cover",
                    width: "620px",
                  }}
                />
              </Col>
            </Row>
          </div>
        </section>
        <section className="py-5 bg-white">
          <div className="container">
            {/* Heading */}
            <h2
              className="text-center b-5"
              style={{ color: "#00766e", fontFamily: "Impact" }}
            >
              Why Teach With AISkills ?
            </h2>

            {/* 3 Columns */}
            <Row className="g-4 justify-content-between mt-5">
              {/* Card 1 */}
              <Col md={4}>
                <Card className="h-100 shadow-sm text-center border border-gray">
                  <Card.Body>
                    <div className="mb-3">
                      <i
                        className="fas fa-money-bill-wave fa-2x"
                        style={{ color: "#00766e" }}
                      ></i>
                    </div>
                    <Card.Title className="" style={{ font: "Impact" }}>
                      Why Teach With AISkills ?
                    </Card.Title>
                    <Card.Text>
                      Only A 10% Platform Fee, Much Lower Than Competitors.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={4}>
                <Card className="h-100 shadow-sm text-center border border-gray">
                  <Card.Body>
                    <div className="mb-3">
                      <i
                        className="fas fa-laptop-code fa-2x"
                        style={{ color: "#00766e" }}
                      ></i>
                    </div>
                    <Card.Title className="fw-bold">
                      Flexible Teaching
                    </Card.Title>
                    <Card.Text>
                      Choose Online, Hybrid, Video, Or Cohort-Based Teaching.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={4}>
                <Card className="h-100 shadow-sm text-center border border-gray">
                  <Card.Body>
                    <div className="mb-3">
                      <i
                        className="fas fa-globe fa-2x"
                        style={{ color: "#00766e" }}
                      ></i>
                    </div>
                    <Card.Title className="fw-bold">
                      Expand Your Network
                    </Card.Title>
                    <Card.Text>
                      Connect With Learners And Fellow Professionals Worldwide.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="g-4 justify-content-between mt-5">
              {/* Card 1 */}
              <Col md={4}>
                <Card className="h-100 shadow-sm text-center border border-gray">
                  <Card.Body>
                    <div className="mb-3 flex justify-center">
                      <TfiLayoutSlider style={{ color: "#00766e" }} size={40} />
                    </div>

                    <Card.Title className="fw-bold">
                      Simple & Powerful
                    </Card.Title>
                    <Card.Text>
                      User-friendly platform with dedicated support.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 2 */}
              <Col md={4}>
                <Card className="h-100 shadow-sm text-center border border-gray">
                  <Card.Body>
                    <div className="mb-3">
                      <i
                        class="bi bi-star"
                        style={{ color: "#00766e", fontSize: "40px" }}
                      ></i>
                    </div>
                    <Card.Title className="fw-bold">
                      {" "}
                      Make a Real Impact
                    </Card.Title>
                    <Card.Text>
                      Empower students to achieve their goals and grow.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Card 3 */}
              <Col md={4}>
                <Card className="h-100 shadow-sm text-center border border-gray">
                  <Card.Body>
                    <div className="mb-3">
                      <i
                        class="bi bi-calendar-date"
                        style={{ color: "#00766e", fontSize: "40px" }}
                      ></i>
                    </div>
                    <Card.Title className="fw-bold">
                      Your Expertise, Your Schedule
                    </Card.Title>
                    <Card.Text>
                      Teach live, create self-paced courses, or mix both.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="mt-5  text-center">
              <button
                className="text-cenetr text-white"
                style={{
                  backgroundColor: "#047670",
                  border: "none",
                  width: "287px",
                  height: "57px",
                  fontFamily: "Roboto Condensed",
                  fontSize: "22px",
                }}
              >
                sign up
              </button>
            </div>
          </div>
        </section>

        <section className="">
          <div className="row" style={{ backgroundColor: "#047670" }}>
            <div
              className="col-md-6 text-center d-flex flex-column justify-content-center align-item-center"
              style={{ backgroundColor: "#047670", color: "white" }}
            >
              <h2
                className="text-white text-start"
                style={{ fontSize: "50px", fontFamily: "Impact" }}
              >
                Teach on AI Skills Plan, Publish, and Promote an Engaging Class
              </h2>
              <p className="text-white text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                perspiciatis enim maiores earum velit eaque! Veritatis earum
                eaque ipsa! Soluta nostrum tempore similique blanditiis ab fugit
                neque, hic rerum quisquam sunt saepe nemo magni labore dolores
                dolorum rem nesciunt eveniet porro doloremque commodi sint vel
                alias aliquam! Possimus, quod ratione doloribus aliquid amet
                dolorum ex laudantium mollitia! Maxime eos beatae pariatur a
                quaerat ex recusandae illo, eum hic consequuntur ad quia
                praesentium veritatis voluptatum labore eius consectetur
                aspernatur sequi esse non quisquam dicta aperiam inventore. Ut
                odio, labore id laboriosam architecto cum illum, quod inventore
                accusantium enim dignissimos. Suscipit, commodi.
              </p>
              <div className="text-start  ">
                <button
                  className="rounded-2 fw-bold"
                  style={{
                    backgroundColor: "white",
                    color: "#047670",
                    border: "none",
                    width: "287px",
                    height: "57px",
                    fontFamily: "Roboto Condensed",
                    fontSize: "22px",
                  }}
                >
                  sign up
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://i.ibb.co/Z1JPmPxs/Rectangle-74.png"
                style={{ width: "753px" }}
              />
            </div>
          </div>
        </section>

        <section>
          <div
            className="row mt-5 mb-3 p-5"
            style={{ backgroundColor: "black", color: "white" }}
          >
            <div className="col-md-5 d-flex flex-column justify-content-center align-item-center ">
              <h2
                style={{
                  fontFamily: "Impact",
                  fontWeight: "400",
                  fontSize: "55px",
                }}
              >
                frequently asked questions
              </h2>
              <p
                style={{
                  fontFamily: "Roboto Condensed",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Enhance your learning with instant digital products from instant
                real-world projects to prompts.
              </p>
            </div>

            <div className="col-md-7">
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  What types of courses can I create on the platform?
                </p>
                <i class="fa-solid fa-plus"></i>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  How much commission does the platform take?
                </p>
                <i class="fa-solid fa-plus"></i>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  hen will I receive my earnings
                </p>
                <i class="fa-solid fa-plus"></i>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  How do I receive my payments?
                </p>
                <i class="fa-solid fa-plus"></i>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  Can I set my own course prices?
                </p>
                <i class="fa-solid fa-plus"></i>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  Do I own the content I upload?
                </p>
                <i class="fa-solid fa-plus"></i>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p
                  style={{
                    fontFamily: "Roboto Condensed",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  Can I edit my course after publishing?
                </p>
                <i class="fa-solid fa-plus"></i>
              </div>
              <hr />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AITeacherLanding;
