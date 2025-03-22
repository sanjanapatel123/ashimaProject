// import Hero from "./components/Hero";
// import LearningJourney from "./components/LearningJourney";
// import LearningStyle from "./components/LearningStyle";
// import Trending from "../src/components/Trending";
// import FeaturedIn from "./components/FeaturedIn";
// import StartLearning from "./components/StartLearning";
// import DigitalProducts from "./components/DigitalProducts";
// import Letmake from "./components/Letmake";
// import CategoryButtons from "./components/CategoryButtons";
// import Navbar from "./components/Navbar";
// import "./App.css";
// import CompaniesSection from "./components/CompaniesSection";
// import Footer from "./components/Footer";
// import FAQSection from "./components/FAQSection";
// import ReviewCards from "./components/ReviewCards";
// import ModernGallery from "./components/ModernGallery";
// import Explore from "./components/Explore";
// import AllCourses from "./components/AllCourses";

// function App() {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="">
//         <Hero></Hero>
//       </div>
//       <Explore />
//       <CompaniesSection />
//       <Trending />
//       <LearningJourney />
//       <CategoryButtons />
//       <DigitalProducts />
//       <FeaturedIn />
//       <Letmake />
//       <FAQSection />
//       <ReviewCards />
//       <StartLearning />
    
//       <Footer />
//     </div>
//   );
// }
// export default App;






// import { Routes, Route } from "react-router-dom";

// import Hero from "./components/Hero";
// import LearningJourney from "./components/LearningJourney";
// import LearningStyle from "./components/LearningStyle";
// import Trending from "../src/components/Trending";
// import FeaturedIn from "./components/FeaturedIn";
// import StartLearning from "./components/StartLearning";
// import DigitalProducts from "./components/DigitalProducts";
// import Letmake from "./components/Letmake";
// import CategoryButtons from "./components/CategoryButtons";
// import Navbar from "./components/Navbar";
// import "./App.css";
// import CompaniesSection from "./components/CompaniesSection";
// import Footer from "./components/Footer";
// import FAQSection from "./components/FAQSection";
// import ReviewCards from "./components/ReviewCards";
// import ModernGallery from "./components/ModernGallery";
// import Explore from "./components/Explore";
// import AllCourses from "./components/AllCourses";


// // Keep all your imports the same as before

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               <Hero />
//               <Explore />
//               <CompaniesSection />
//               <Trending />
//               <LearningJourney />
//               <CategoryButtons />
//               <DigitalProducts />
//               <FeaturedIn />
//               <Letmake />
//               <FAQSection />
//               <ReviewCards />
//               <StartLearning />
//               <Footer />
//             </div>
//           }
//         />
//         <Route path="/courses" element={<AllCourses />} />
//       </Routes>
//     </>
//   );
// }

// export default App;




// import { Routes, Route } from "react-router-dom";

// import Hero from "./components/Hero";
// import LearningJourney from "./components/LearningJourney";
// import LearningStyle from "./components/LearningStyle";
// import Trending from "../src/components/Trending";
// import FeaturedIn from "./components/FeaturedIn";
// import StartLearning from "./components/StartLearning";
// import DigitalProducts from "./components/DigitalProducts";
// import Letmake from "./components/Letmake";
// import CategoryButtons from "./components/CategoryButtons";
// import Navbar from "./components/Navbar";
// import "./App.css";
// import CompaniesSection from "./components/CompaniesSection";
// import Footer from "./components/Footer";
// import FAQSection from "./components/FAQSection";
// import ReviewCards from "./components/ReviewCards";
// import ModernGallery from "./components/ModernGallery";
// import Explore from "./components/Explore";
// import AllCourses from "./components/AllCourses";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               <Hero />
//               <Explore />
//               <CompaniesSection />
//               <Trending />
//               <LearningJourney />
//               <CategoryButtons />
//               <DigitalProducts />
//               <FeaturedIn />
//               <Letmake />
//               <FAQSection />
//               <ReviewCards />
//               <StartLearning />
//               <Footer />
//             </div>
//           }
//         />
//         <Route path="/AllCourses" element={<AllCourses />} />
//       </Routes>
//     </>
//   );
// }

// export default App;





import { Routes, Route, useLocation } from "react-router-dom";

import Hero from "./components/Hero";
import LearningJourney from "./components/LearningJourney";
import LearningStyle from "./components/LearningStyle";
import Trending from "../src/components/Trending";
import FeaturedIn from "./components/FeaturedIn";
import StartLearning from "./components/StartLearning";
import DigitalProducts from "./components/DigitalProducts";
import Letmake from "./components/Letmake";
import CategoryButtons from "./components/CategoryButtons";
import Navbar from "./components/Navbar";
import "./App.css";
import CompaniesSection from "./components/CompaniesSection";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import ReviewCards from "./components/ReviewCards";
import ModernGallery from "./components/ModernGallery";
import Explore from "./components/Explore";
import AllCourses from "./components/AllCourses";

function App() {
  // useLocation hook to get current route
  const location = useLocation();

  return (
    <>
      {/* Conditional rendering of Navbar */}
      {location.pathname !== "/AllCourses" && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <div>
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
        <Route path="/AllCourses" element={<AllCourses />} />
      </Routes>
    </>
  );
}

export default App;
