import React, { useState } from "react";
import "App.scss";
import Header from "components/Header/Index";
import Card from "components/Card/Index";
import Carousel from "components/Carousel/Index";
import {
  fiveGcardItens,
  esimcardItens,
  simcardItens,
  carouselItens,
} from "utils/data";

export default function App() {
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

  return (
    <div className="App">
      <Header />

      <div className="container mt-5">
        <div className="row ">
          <div className="col-12">
            <p className="h4">Tecnologias</p>
            <Carousel
              items={carouselItens}
              onCarouselChange={(index) => setCurrentCarouselItem(index)}
            />
          </div>
          <div className="col-12">
            <p className="h4">Descobrir</p>

            <div className="row group-card">
              {getCardList().map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
