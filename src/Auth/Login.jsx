import { useState } from "react";
import axios from "axios"; // Don't forget to import axios
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BASE_URL from "../../config"; // Assuming your base URL is in the config file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email,
        password,
      });

      // console.log("Login Response:", response.data.data.token); 
      localStorage.setItem("token", response.data.data.token);
      // Debugging response

      // Check the status from the API response and display accordingly
      if (response.data.status === "true") {
        // Assuming the response contains user data and role
        const userData = {
          email,
          role: response.data.data.role, // Role returned from the API
          name: response.data.data.name || "User", // You can use response.data.name if available
        };
        localStorage.setItem("user", JSON.stringify(userData));

        // Success alert
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome, ${userData.role.toUpperCase()}!`,
        });

        // Navigate to the respective dashboard based on the role
        if (userData.role === "admin") {
          navigate(`/admin-dashboard`);
        } else if (userData.role === "student") {
          navigate(`/student-dashboard`);
        } else if (userData.role === "instructor") {
          navigate(`/instructor-dashboard`);
        } else {
          navigate(`/default-dashboard`);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid credentials or something went wrong.",
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      // Error handling with a Swal alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong, please try again.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF9F7] px-4">
      <div className="w-full max-w-lg bg-[#FFFFFF] rounded-lg shadow border border-[#1E1E1E]/10 p-6 sm:p-8">
        <button
          onClick={() => window.history.back()}
          className="text-[#047670] text-2xl mr-3"
        >
          ←
        </button>
        <h3 className="text-center text-[24px] sm:text-[28px] md:text-[30px] font-impact text-[#047670] mb-6 font-normal uppercase">
          LOG IN TO YOUR ACCOUNT
        </h3>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[13px] sm:text-[14px] font-semibold mb-1"
            >
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[13px] sm:text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-[13px] sm:text-[14px] font-semibold mb-1"
            >
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[13px] sm:text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]"
            />
          </div>

          <button
            className="w-full bg-gray-300 text-[#1E1E1E]/50 py-2 rounded text-[15px] sm:text-[16px] font-medium"
            type="submit"
          >
            LOGIN
          </button>
        </form>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-4 text-[11px] sm:text-[12px]">
          <Link
            to="/forgot-password"
            className="text-[#047670] hover:underline"
          >
            Forget Password?
          </Link>
        </div>

        <p className="text-center mt-6 text-[11px] sm:text-[12px] text-[#000000]">
          Don’t Have An Account?{" "}
          <Link
            to="/signup"
            className="text-[#047670] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
