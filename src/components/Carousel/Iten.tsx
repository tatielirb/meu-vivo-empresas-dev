import React, { useState } from "react";
import "./carousel.scss";
import { CarouselProps } from "types/component/Carousel";

export default function Iten({ title, iconItem }: CarouselProps) {
  return (
    <div className="itens">
      <p>{title}</p>
      <img src={iconItem} className="icon-slider" alt={title} />
    </div>
  );
}
