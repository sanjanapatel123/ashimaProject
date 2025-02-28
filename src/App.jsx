import Company from "./Components/Company";
import Hero from "./components/Hero";
import LearningJourney from "./components/LearningJourney";
import LearningStyle from "./components/LearningStyle";
import New from "./components/New"
import Trending from "./components/Trending";
import FeaturedIn from "./components/FeaturedIn";
import StartLearning from "./components/StartLearning"
import Card from "./components/Card";
import Ride from "./components/Ride.JSX";
import DigitalProducts from "./components/DigitalProducts";
import Letmake from "./components/Letmake";
import CategoryButtons from "./components/CategoryButtons";


function App() {
  return (
    <>
      <New></New>
      <Hero />
      <Company />

      <Trending />
      <Card />
      <LearningJourney />
      <LearningStyle />
      <Ride/>
      <CategoryButtons/>
      <FeaturedIn />
      <StartLearning />
      <DigitalProducts/>
      <Letmake/>
    </>
  );
}
export default App;
     