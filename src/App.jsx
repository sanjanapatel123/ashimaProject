import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Courses from "./components/Courses/AllCourses"; // Capitalized component name
import Login from "./components/Login";
import Signup from "./components/Signup";
import BlogDeatils from "./components/Blogs/BlogsDetails"
import Instructor from "./components/Instructor/Instructor";
import "./App.css";
import MarketProduct from "./components/DigitalProduct/MarketProductPage";
import Hybrid from "./components/Courses/Hybrid";
import Video from "./components/Courses/Video";
import Live from "./components/Courses/Live";
import Blog from "./components/Blogs/Blog";
import MyDigital from "./components/DigitalProduct/MyDigital";
import InstructorSignup from "./components/Instructor/InstructorSignUp";
import Home from "./components/Home/Home";
import Business from "./components/BusinessProduct/Business"

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} /> {/* Fixed route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/digital" element={<MyDigital />} />
        <Route path="/marketProduct" element={<MarketProduct />} />
        <Route path="/live" element={<Live />} />
        <Route path="/hybrid" element={<Hybrid />} />
        <Route path="/video" element={<Video />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/business" element={<Business/>} />


        <Route path="/blogsDetail" element={<BlogDeatils />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/instructorSignup" element={<InstructorSignup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
