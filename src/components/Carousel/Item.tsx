import React from "react";
import "./carousel.scss";
import { CarouselProps } from "types/component/Carousel";

export default function Item({ title, iconItem }: CarouselProps) {
  return (
    <div className="items">
      <p>{title}</p>
      <img src={iconItem} className="icon-slider" alt={title} />
    </div>
  );
}
