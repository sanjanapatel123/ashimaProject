import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Auth/ScrollToTop";
import Courses from "./components/Courses/AllCourses"; // Capitalized component name
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import BlogDeatils from "./components/Blogs/BlogsDetails";
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
import ProtectedRoute from "./Auth/ProtectedRoute";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import StudentDashboard from "./components/Dashboard/StudentDashboard ";
import InstructorDashboard from "./components/Dashboard/InstructorDashboard";
import DigitalProducts from "./components/InstructorPanel/DigitalProducts";
import NewCourse from "./components/InstructorPanel/NewCourse";
import WebDevelopment from "./components/InstructorPanel/WebDevelopment";
import UXDesign from "./components/InstructorPanel/UXDesign";
import Business from "./components/BusinessProduct/Business";
import AIPowered from "./components/BusinessProduct/AI-Powered";
import LaunchPage from "./components/BusinessProduct/LaunchPage";
import MyCourses from "./components/InstructorPanel/MyCourses";
import CreateNewPage from "./components/InstructorPanel/CreateNewPage";
import CourseDetails from "./components/InstructorPanel/CourseDetails";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} /> {/* Fixed route */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* <Route path="/projects"></Route> */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route
          path="/digital"
          element={<DigitalProducts></DigitalProducts>}
        ></Route>
        <Route
          path="/web-dev"
          element={<WebDevelopment></WebDevelopment>}
        ></Route>
        <Route path="/ui-ux" element={<UXDesign></UXDesign>}></Route>
        <Route path="/newCourse" element={<NewCourse></NewCourse>}></Route>
        <Route
          path="/createnewpage"
          element={<CreateNewPage></CreateNewPage>}
        ></Route>
        <Route path="/mycourse" element={<MyCourses></MyCourses>}></Route>
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/digital" element={<MyDigital />} />
        <Route path="/marketProduct" element={<MarketProduct />} />
        <Route path="/live" element={<Live />} />
        <Route path="/hybrid" element={<Hybrid />} />
        <Route path="/video" element={<Video />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogsDetail" element={<BlogDeatils />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/instructorSignup" element={<InstructorSignup />} />
        <Route path="/business" element={<Business />} />
        <Route path="/aipowered" element={<AIPowered />} />
        <Route path="/launchpage" element={<LaunchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
