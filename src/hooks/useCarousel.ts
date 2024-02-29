import { useState } from "react";
import { ItemsCarousel } from "types/component/Carousel";

export const useCarousel = ({ items, onCarouselChange }: ItemsCarousel) => {
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

  return { currentItem, setCurrentItem, itemClick, buttonNext, buttonPrev };
};
