import React from "react";
import "./carousel.scss";
import { ItemsCarousel } from "types/component/Carousel";
import Item from "./Item";
import { useCarousel } from "hooks/useCarousel";

export default function Carousel({ items, onCarouselChange }: ItemsCarousel) {
  const { currentItem, itemClick, buttonNext, buttonPrev } = useCarousel({
    items,
    onCarouselChange,
  });
  return (
    <div className="carousel-container">
      <div className="carousel">
        {items.map((item, index) => (
          <div
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
      <button onClick={buttonPrev} className="btn chevron-left">
        <i className="bi bi-chevron-left"></i>
      </button>
      <button onClick={buttonNext} className="btn chevron-right ">
        <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
}
