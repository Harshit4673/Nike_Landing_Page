import Carousel from "./components/Carousel";
import Featured from "./components/featured";
import Football from "./components/Football";
import Navigation from "./components/Navigation";
import {slides} from './data/carouselData.json'

const App = () => {
  return (
    <>
      <Navigation />
      <Football />
      <Featured/>
      <Carousel data={slides}/>
    
    </>
  );
};

export default App;
