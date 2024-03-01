import React, { useState } from "react";
import "./carousel.scss";
import { ItemsCarousel } from "types/component/Carousel";
import Item from "./Item";

export default function Carousel({ items, onCarouselChange }: ItemsCarousel) {
  const [currentItem, setCurrentItem] = useState(0);

  const itemClick = (index: number) => {
    setCurrentItem(index);
    if (onCarouselChange) {
      onCarouselChange(index);
    }
  };

  const buttonNext = () => {
    const newIndex = (currentItem + 1) % items.length;
    itemClick(newIndex);
  };

  const buttonPrev = () => {
    const newIndex = (currentItem - 1 + items.length) % items.length;
    itemClick(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            data-testid={`carousel-item-${index}`}
            key={index}
            className={`carousel-items ${
              index === currentItem ? "active" : ""
            }`}
            onClick={() => itemClick(index)}
          >
            <Item key={index} {...item} />
          </div>
        ))}
      </div>
      <button
        onClick={buttonPrev}
        className="btn chevron-left"
        data-testid="button-prev"
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      <button
        onClick={buttonNext}
        className="btn chevron-right"
        data-testid="button-next"
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}
