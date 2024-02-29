import { useState } from "react";
import { fiveGcardItens, esimcardItens, simcardItens } from "utils/data";

export const useApp = () => {
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0);

  const getCardList = () => {
    switch (currentCarouselItem) {
      case 0:
        return fiveGcardItens;
      case 1:
        return esimcardItens;
      case 2:
        return simcardItens;
      default:
        return [];
    }
  };

  return { currentCarouselItem, setCurrentCarouselItem, getCardList };
};
