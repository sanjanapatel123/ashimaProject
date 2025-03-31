import React from "react";

function InstructorSignUp() {
  return (
    <div>
      <div className="container">
        <div className="form-signup">
          <h3 className="text-center mb-4" style={{ color: "#047670" }}>
            Sign Up As Instructor
          </h3>

          <div className="social-buttons">
            <button
              className="btn btn-outline-primary mb-2"
              style={{ width: "100%" }}
            >
              <i className="fa-brands fa-linkedin"></i> Sign Up with LinkedIn
            </button>
            <button
              className="btn btn-outline-danger mb-2"
              style={{ width: "100%" }}
            >
              <img src="https://i.ibb.co/zhdcWpL0/google-logo-search-new-svgrepo-com.png" />{" "}
              Sign Up with Google
            </button>
            <p className="text-center">Or Use Email</p>
          </div>

          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="d-grid">
              <button
                className="btn btn-custom"
                type="submit"
                style={{ backgroundColor: "#706D6E5E" }}
              >
                Sign Up
              </button>
            </div>
          </form>

          <p
            className="text-center form-text"
            style={{ backgroundColor: "#047670" }}
          >
            By continuing, you agree to our <a href="#">Terms</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
          <p className="text-center">
            Already have an account? <a href="#">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InstructorSignUp;
