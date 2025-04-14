import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRoleClick = (selectedRole) => {
    const creds = {
      admin: { email: "admin@example.com", password: "admin123" },
      student: { email: "student@example.com", password: "student123" },
      instructor: {
        email: "instructor@example.com",
        password: "instructor123",
      },
    };

    setEmail(creds[selectedRole].email);
    setPassword(creds[selectedRole].password);
    setRole(selectedRole);
  };

  const handleLogin = () => {
    if (!email || !password || !role) {
      alert("Select a role first!");
      return;
    }

    const userData = { email, role, name: `${role} user`.toUpperCase() };
    localStorage.setItem("user", JSON.stringify(userData));

    navigate(`/${role}-dashboard`);
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

        {/* Social Login Buttons */}
        <button className="flex items-center justify-center w-full border border-[#1E1E1E]/10 text-[#000000] font-medium text-[18px] sm:text-[18px] py-2 mb-3 rounded hover:bg-gray-100 transition">
          <FaLinkedin className="mr-2 text-[#047670]" />
          LOGIN WITH LINKEDIN
        </button>

        <button className="flex items-center justify-center w-full border border-[#1E1E1E]/10 text-[#000000] font-medium text-[18px] sm:text-[18px] py-2 mb-6 rounded hover:bg-gray-100 transition">
          <FaGoogle className="mr-2 text-[#DB4437]" />
          LOGIN WITH GOOGLE
        </button>

        {/* Divider */}
        <div className="flex items-center text-[#000000] text-[14px] sm:text-[16px] mb-6">
          <hr className="flex-grow border-t border-[#1E1E1E]/70" />
          <span className="mx-2 text-[13px] sm:text-[14px] text-[#1E1E1E]/70 whitespace-nowrap">
            Or Use Email
          </span>
          <hr className="flex-grow border-t border-[#1E1E1E]/70" />
        </div>

        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Login Button */}
        <button
          className="w-full bg-gray-300 text-[#1E1E1E]/50 py-2 rounded text-[15px] sm:text-[16px] font-medium cursor-not-allowed"
          // disabled
          onClick={handleLogin}
        >
          LOGIN
        </button>

        {/* Bottom Section */}
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

        <div className="flex justify-between gap-2">
          <button
            onClick={() => handleRoleClick("admin")}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            Admin
          </button>
          <button
            onClick={() => handleRoleClick("student")}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            Student
          </button>
          <button
            onClick={() => handleRoleClick("instructor")}
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            Instructor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
