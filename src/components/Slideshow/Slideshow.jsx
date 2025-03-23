import { useState } from "react";
import "./Slideshow.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <div className="slideshow">
      <img src={pictures[current]} alt={`slide ${current}`} className="slideshow__image" />

      {length > 1 && (
        <>
          <button className="slideshow__prev" onClick={prevSlide}>
            <ChevronLeft />
          </button>
          <button className="slideshow__next" onClick={nextSlide}>
            <ChevronRight />
          </button>
          <span className="slideshow__count">
            {current + 1}/{length}
          </span>
        </>
      )}
    </div>
  );
}

export default Slideshow;
