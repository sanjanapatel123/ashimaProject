import Company from "./Components/Company";
import Hero from "./components/Hero";
import LearningJourney from "./Components/LearningJourney";
import LearningStyle from "./Components/LearningStyle";
import New from "./Components/New"
import Trending from "./Components/Trending";
import FeaturedIn from "./Components/FeaturedIn";
import StartLearning from "./Components/StartLearning"
import Card from "./Components/Card";
import Ride from "./Components/Ride.JSX";
import DigitalProducts from "./Components/DigitalProducts";
import Letmake from "./Components/Letmake";
import CategoryButtons from "./Components/CategoryButtons";


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
     