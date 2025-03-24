import Hero from "./Hero";
import LearningJourney from "./LearningJourney";
// import LearningStyle from "./components/LearningStyle";
import Trending from "./Trending";
import FeaturedIn from "./FeaturedIn";
import StartLearning from "./StartLearning";
import DigitalProducts from "./DigitalProducts";
import Letmake from "./Letmake";
import CategoryButtons from "./CategoryButtons";
import Navbar from "./Navbar";
import CompaniesSection from "./CompaniesSection";
import Footer from "./Footer";
import FAQSection from "./FAQSection";
import ReviewCards from "./ReviewCards";
import Explore from "./Explore";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:bg-black lg:px-[34px]">
        <Hero></Hero>
        <Explore />
        <CompaniesSection />
        <div className="mb-10">
          <Trending />
        </div>
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

      {/* 
      
     
      
     
     */}
    </div>
  );
};

export default Home;
