// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Home/Hero";
// import Explore from "./components/Home/Explore";
// import CompaniesSection from "./components/Home/CompaniesSection";
// import Trending from "./components/Home/Trending";
// import LearningJourney from "./components/Home/LearningJourney";
// import CategoryButtons from "./components/Home/CategoryButtons";
// import DigitalProducts from "./components/Home/DigitalProductsSection";
// import FeaturedIn from "./components/Home/FeaturedIn";
// import Letmake from "./components/Home/Letmake";
// import FAQSection from "./components/Home/FAQSection";
// import ReviewCards from "./components/Home/ReviewCards";
// import StartLearning from "./components/Home/StartLearning";
// import Footer from "./components/Footer";
// import courses from "./components/Courses/AllCourses";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import BlogDeatils from "./components/Blogs/BlogsDetails";
// import Instructor from "./components/Instructor";
// import Digital from "./components/DigitalProduct/Digital";
// import "./App.css";
// import MarketProduct from "./components/DigitalProduct/MarketProductPage";
// import Hybrid from "./components/Courses/Hybrid";
// import Video from "./components/Courses/Video";
// import Live from "./components/Courses/Live";
// import Blog from "./components/Blog";
// import MyDigital from "./components/DigitalProduct/MyDigital";
// import InstructorSignup from "./components/InstructorSignup";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               <div>
//                 <Navbar />
//                 <Hero />
//                 <Explore />
//                 <CompaniesSection />
//                 <Trending />
//                 <LearningJourney />
//                 <CategoryButtons />
//                 <DigitalProducts />
//                 <FeaturedIn />
//                 <Letmake />
//                 <FAQSection />
//                 <ReviewCards />
//                 <StartLearning />
//                 <Footer />
//               </div>
//             </div>
//           }
//         />
//         <Route path="/courses" element={<courses />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/digital" element={<MyDigital />} />
//         <Route path="/marketProduct" element={<MarketProduct />} />
//         <Route path="/live" element={<Live />} />
//         <Route path="/hybrid" element={<Hybrid />} />
//         <Route path="/video" element={<Video />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route
//           path="/blogsDetail"
//           element={<BlogDeatils></BlogDeatils>}
//         ></Route>
//         <Route path="/instructor" element={<Instructor></Instructor>}></Route>
//         <Route
//           path="/instructorSignup"
//           element={<InstructorSignup></InstructorSignup>}
//         ></Route>
//       </Routes>
//     </div>
//   );
// };

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Home/Hero";
import Explore from "./components/Home/Explore";
import CompaniesSection from "./components/Home/CompaniesSection";
import Trending from "./components/Home/Trending";
import LearningJourney from "./components/Home/LearningJourney";
import CategoryButtons from "./components/Home/CategoryButtons";
import DigitalProducts from "./components/Home/DigitalProductsSection";
import FeaturedIn from "./components/Home/FeaturedIn";
import Letmake from "./components/Home/Letmake";
import FAQSection from "./components/Home/FAQSection";
import ReviewCards from "./components/Home/ReviewCards";
import StartLearning from "./components/Home/StartLearning";
import Footer from "./components/Footer";
import Courses from "./components/Courses/AllCourses"; // Capitalized component name
import Login from "./components/Login";
import Signup from "./components/Signup";
import BlogDeatils from "./components/Blogs/BlogsDetails";
import Instructor from "./components/Instructor";
import Digital from "./components/DigitalProduct/Digital";
import "./App.css";
import MarketProduct from "./components/DigitalProduct/MarketProductPage";
import Hybrid from "./components/Courses/Hybrid";
import Video from "./components/Courses/Video";
import Live from "./components/Courses/Live";
import Blog from "./components/Blog";
import MyDigital from "./components/DigitalProduct/MyDigital";
import InstructorSignup from "./components/InstructorSignup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Hero />
              <Explore />
              <CompaniesSection />
              <Trending />
              <LearningJourney />
              <CategoryButtons />
              <DigitalProducts />
              <FeaturedIn />
              <Letmake />
              <FAQSection />
              <ReviewCards />
              <StartLearning />
              <Footer />
            </div>
          }
        />
        <Route path="/courses" element={<Courses />} /> {/* Fixed route */}
        <Route path="/login" element={<Login />} />
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
      </Routes>
    </div>
  );
};

export default App;
