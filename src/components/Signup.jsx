import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FaLinkedin, FaGoogle } from "react-icons/fa";

function Signup() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ padding: "50px", backgroundColor: "#F9F9F9" }}
    >
      <Card
        className="shadow-sm border-0"
        style={{ width: "480px", borderRadius: "8px" }}
      >
        <h3
          className="text-center mb-4"
          style={{ fontSize: "30px", fontWeight: "bold", color: "#02756A" }}
        >
          CREATE AN ACCOUNT
        </h3>

        {/* Social Signup Buttons */}
        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center mb-3 w-100 border"
        >
          <FaLinkedin className="me-2" size={18} color="#0A66C2" />
          SIGN UP WITH LINKEDIN
        </Button>

        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center mb-3 w-100 border"
        >
          <FaGoogle className="me-2" size={18} color="#DB4437" />
          SIGN UP WITH GOOGLE
        </Button>

        {/* Divider */}
        <div className="d-flex align-items-center text-muted mb-3">
          <hr className="flex-grow-1" />
          <span className="mx-2" style={{ fontSize: "14px", color: "#777" }}>
            Or Use Email
          </span>
          <hr className="flex-grow-1" />
        </div>

        {/* Signup Form */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "14px", fontWeight: "bold" }}>
              EMAIL
            </Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontSize: "14px", fontWeight: "bold" }}>
              PASSWORD
            </Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Button
            style={{ backgroundColor: "#A8A8A8", border: "none" }}
            className="w-100 mb-2"
            disabled
          >
            SIGN UP
          </Button>

          <div
            className="text-center"
            style={{ fontSize: "12px", color: "#02756A" }}
          >
            By Continuing, You Agree To Ai Skills Terms And Privacy Policy.
          </div>

          <div className="text-center mt-4">
            <span style={{ fontSize: "12px", color: "#333" }}>
              Already Have An Account?{" "}
              <a href="#" style={{ fontSize: "12px", color: "#02756A" }}>
                Log In
              </a>
            </span>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Signup;
