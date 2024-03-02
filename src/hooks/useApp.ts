import { useState } from "react";
import { fiveGcardItems, esimcardItems, simcardItems } from "utils/data";

export const useApp = () => {
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0);
  const CAROUSEL_ITEMS = {
    FIVE_G: 0,
    ESIM: 1,
    SIM: 2,
  };

  const getCardList = () => {
    switch (currentCarouselItem) {
      case CAROUSEL_ITEMS.FIVE_G:
        return fiveGcardItems;
      case CAROUSEL_ITEMS.ESIM:
        return esimcardItems;
      case CAROUSEL_ITEMS.SIM:
        return simcardItems;
      default:
        return [];
    }
  };

  return { currentCarouselItem, setCurrentCarouselItem, getCardList };
};
