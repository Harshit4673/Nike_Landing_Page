import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Featured";
import Football from "./components/football/Football";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Poster from "./components/poster/Poster";
import {slides} from './data/carouselData.json'

const App = () => {
  return (
    <>
      <Navigation />
      <Football />
      <Featured/>
      <Carousel data={slides}/>
      <Poster/>
      <Footer/>
    </>
  );
};

export default App;
