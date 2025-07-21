import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const VISIBLE_COUNT = 5;

const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);
  const length = data.length;

  const nextSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  const prevSlide = () => {
    setCurrent((current + 1) % length);
  };

  const visibleImages = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    visibleImages.push(data[(current + i) % length]);
  }

  return (
    <>
      <div id="shop-text">Shop by Icons</div>
      <div className="carousel">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        <div className="carousel-slide">
          {visibleImages.map((item, idx) => (
            <div key={idx} className="slide-container">
              <img src={item.src} alt={item.title} className="slide" />
              <div className="slide-title">{item.title}</div>
            </div>
          ))}
        </div>
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
    </>
  );
};

export default Carousel;
