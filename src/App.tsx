import React from "react";
import "App.scss";
import Header from "components/Header/Index";
import Card from "components/Card/Index";
import Carousel from "components/Carousel/";
import { carouselItems } from "utils/data";

import { useApp } from "hooks/useApp";

export default function App() {
  const { setCurrentCarouselItem, getCardList } = useApp();
  return (
    <div className="App">
      <Header />

      <div className="container mt-5">
        <div className="row ">
          <div className="col-12">
            <p className="h4">Tecnologias</p>
            <Carousel
              items={carouselItems}
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
