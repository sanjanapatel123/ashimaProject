import React from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ padding: "30px" }}
    >
      <Card
        className="p-4 shadow-sm"
        style={{ width: "480px", borderRadius: "8px" }}
      >
        <h3
          className="text-center fw-bold text-teal mb-4"
          style={{ fontSize: "26px", color: "#008578" }}
        >
          LOG IN TO YOUR ACCOUNT
        </h3>

        {/* Social Login Buttons */}
        <Button
          variant="light"
          className="d-flex align-items-center mb-2 w-100 border  justify-content-center"
        >
          <FaLinkedin className="me-2" size={20} color="#0077B5" />
          LOGIN WITH LINKEDIN
        </Button>

        <Button
          variant="light"
          className="d-flex align-items-center mb-3 w-100 border justify-content-center"
        >
          <FaGoogle className="me-2" size={20} color="#DB4437" />
          LOGIN WITH GOOGLE
        </Button>

        {/* Divider */}
        <div className="d-flex align-items-center text-muted mb-3">
          <hr className="flex-grow-1" />
          <span className="mx-2">Or Use Email</span>
          <hr className="flex-grow-1" />
        </div>

        {/* Login Form */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">EMAIL</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">PASSWORD</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" />
          </Form.Group>

          <Button variant="secondary" className="w-100 mb-3" disabled>
            LOGIN
          </Button>
        </Form>

        {/* Footer Links */}
        <Row className="text-center">
          <Col>
            <a href="#" className="text-success small">
              Forgot Password?
            </a>
          </Col>
        </Row>

        <Row className="text-center mt-2">
          <Col>
            <span className="small">
              Don't Have An Account?{" "}
              <a href="#" className="text-primary fw-bold">
                Sign Up
              </a>
            </span>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Login;
