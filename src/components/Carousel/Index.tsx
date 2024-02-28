import React, { useState } from "react";
import "./carousel.scss";
import { ItemsCarousel } from "types/component/Carousel";

import Iten from "./Iten";

export default function Carousel({ items }: ItemsCarousel) {
  const [currentItem, setCurrentItem] = useState(0);

  const handleNext = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentItem((prevItem) => (prevItem - 1 + 3) % 3);
  };
  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-items ${
              index === currentItem ? "active" : ""
            }`}
            onClick={() => setCurrentItem(index)}
          >
            <Iten key={index} {...item} />
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="btn chevron-left">
        <i className="bi bi-chevron-left"></i>
      </button>
      <button onClick={handleNext} className="btn chevron-right ">
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}
