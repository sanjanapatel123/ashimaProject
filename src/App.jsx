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
 import Courses from "./components/Courses";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Digital from "./components/DigitalProduct/Digital";
import "./App.css";
import { Nav } from "react-bootstrap";
import MarketProduct from "./components/DigitalProduct/MarketProductPage";
import Hybrid from "./components/Courses/Hybrid";
import Video from "./components/Courses/Video";
import Live from "./components/Courses/Live";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
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
              </div>
            </div>
          }
        />
        <Route path="/allcourses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/marketProduct" element={<MarketProduct />} />
        <Route path="/live" element={<Live />} />
        <Route path="/hybrid" element={<Hybrid />} />
        <Route path="/video" element={<Video />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
