import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF9F7] px-2 sm:px-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#FFFFFF] rounded-lg shadow border border-[#1E1E1E]/10 p-4 sm:p-6 md:p-8">
        <h3 className="text-center text-[36px] sm:text-[30px] md:text-[30px] font-impact text-[#047670] mb-6 font-normal uppercase leading-tight">
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
            className="w-full px-3 py-2 border border-[#1E1E1E]/10 rounded text-[13px] sm:text-[14px] focus:outline-none focus:ring-2 focus:ring-[#047670]"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-gray-300 text-[#1E1E1E]/50 py-2 rounded text-[15px] sm:text-[16px] font-medium cursor-not-allowed"
          disabled
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
      </div>
    </div>
  );
};

export default Login;
