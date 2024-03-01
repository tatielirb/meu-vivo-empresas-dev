import { useState } from "react";
import { fiveGcardItems, esimcardItems, simcardItems } from "utils/data";

export const useApp = () => {
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0);

  const getCardList = () => {
    switch (currentCarouselItem) {
      case 0:
        return fiveGcardItems;
      case 1:
        return esimcardItems;
      case 2:
        return simcardItems;
      default:
        return [];
    }
  };

  return { currentCarouselItem, setCurrentCarouselItem, getCardList };
};
