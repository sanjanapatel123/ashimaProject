import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";


function AllCourses() {
  return (
   <>
   <Container fluid>
      {/* Top Navigation */}
      <Row className="bg-light py-2">
        <Col>
          <nav className="d-flex align-items-center">
            <Button variant="success" className="me-2">
              AI & ML
            </Button>
            <span className="text-muted mx-2">/</span>
            <span className="text-muted">DevOps</span>
            <span className="text-muted mx-2">/</span>
            <span className="text-muted">No Code</span>
            <span className="text-muted mx-2">/</span>
            <span className="text-muted">Cyber Security</span>
            <span className="text-muted mx-2">/</span>
            <span className="text-muted">Data Science</span>
            <span className="text-muted mx-2">/</span>
            <span className="text-muted">Gaming & Network</span>
            <span className="text-muted mx-2">/</span>
            <span className="text-muted">Design & Dev</span>
          </nav>
        </Col>
      </Row>

      {/* Page Content */}
      <Row className="py-4 px-3">
        <Col md={8}>
          <h2 className="fw-bold">
            All <span className="text-success">AI & ML</span> Courses
          </h2>
        </Col>
        <Col md={4} className="text-end text-muted fw-bold">
          500 RESULTS
        </Col>
      </Row>

      {/* Filters & Sorting */}
      <Row className="py-2 px-3 align-items-center">
        <Col md={2}>
          <Button variant="outline-success" className="w-100">
            Filter
          </Button>
        </Col>
        <Col md={3}>
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" className="w-100">
              Sort By: Most Popular
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Most Popular</Dropdown.Item>
              <Dropdown.Item>Highest Rated</Dropdown.Item>
              <Dropdown.Item>Newest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
   </>
  )
}

export default AllCourses
