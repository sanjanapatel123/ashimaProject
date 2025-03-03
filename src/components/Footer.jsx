import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section - Brand & Newsletter */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">AiSkills</h2>
          <p className="text-sm">
            Join our community
            <br />
            and start learning today
          </p>
          <div className="bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black outline-none"
            />
          </div>
        </div>

        {/* Middle Section - Products */}
        <div className="space-y-2">
          <h3 className="font-semibold">Products</h3>
          <ul className="space-y-1 text-sm">
            <li>Courses</li>
            <li>Digital Products</li>
            <li>Newsletter</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Middle Section - Business */}
        <div className="space-y-2">
          <h3 className="font-semibold">Business</h3>
          <ul className="space-y-1 text-sm">
            <li>About us</li>
            <li>Careers</li>
            <li>Instructors</li>
          </ul>
        </div>

        {/* Right Section - Legal & Social */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>Privacy & Terms</li>
              <li>Cookies Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white">
                <IoCloseCircleOutline size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Bottom Section */}
      <div className="text-center text-xs text-white mt-8">
        <p>✅ Resize on mobile | ☐ Include navigation menu</p>
      </div>
    </footer>
  );
};

export default Footer;
