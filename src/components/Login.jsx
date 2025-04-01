import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { FaLinkedin, FaGoogle } from "react-icons/fa";
 import "bootstrap/dist/css/bootstrap.min.css";
 import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ padding: "30px", backgroundColor: "#F9F9F9" }}
    >
      <Card
        className="p-4 shadow-sm border-0"
        style={{ width: "480px", borderRadius: "8px" }}
      >
        <h3
          className="text-center mb-4 font-normal"
          style={{
            fontSize: "36px",
            fontFamily: "Impact",
            color: "#047670",
            width: "400",
            lineHeight: "20px",
            letterSpacing: "0%",
          }}
        >
          LOG IN TO YOUR ACCOUNT
        </h3>

        {/* Social Login Buttons */}
        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center mb-3 w-100 border text-[24px] font-roboto font-normal"
        >
          <FaLinkedin className="me-2" size={18} color="#0A66C2" />
          LOGIN WITH LINKEDIN
        </Button>

        <Button
          variant="light"
          className="d-flex align-items-center justify-content-center mb-3 w-100 border text-[24px] font-roboto font-normal"
        >
          <FaGoogle className="me-2" size={18} color="#DB4437" />
          LOGIN WITH GOOGLE
        </Button>

        {/* Divider */}
        <div className="d-flex align-items-center text-muted mb-3">
          <hr className="flex-grow-1" />
          <span className="mx-2" style={{ fontSize: "14px", color: "#777" }}>
            Or Use Email
          </span>
          <hr className="flex-grow-1" />
        </div>

        {/* Login Form */}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontSize: "20px", fontWeight: "normal" }} className="font-roboto">
              EMAIL
            </Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label style={{ fontSize: "20px", fontWeight: "normal" }} className="font-roboto">
              PASSWORD
            </Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Button
            
            className="w-100 mb-2 rounded-[4px] bg-[#706D6E] border-[1px]"
            disabled
          >
            LOGIN
          </Button>

          <div className="text-start">
            <a href="#" style={{ fontSize: "12px", color: "#02756A" }}>
              Forget Password?
            </a>
          </div>

          <div className="text-center mt-4">
            <span style={{ fontSize: "12px", color: "#333" }}>
              Don't Have An Account?{" "}
              <Link to="/signup" style={{ fontSize: "12px", color: "#02756A" }}>
                Sign Up
              </Link>
            </span>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;

