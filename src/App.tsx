import React from "react";
import "App.scss";
import Header from "components/Header/Index";
import Card from "components/Card/Index";
import Carousel from "components/Carousel/Index";
import { cardItens, carouselItens, navVivo } from "utils/data";

export default function App() {
  return (
    <div className="App">
      <Header />

      <div className="container mt-5">
        <div className="row ">
          <div className="col-12">
            <p className="h4">Tecnologias</p>

            <Carousel items={carouselItens} />
          </div>
          <div className="col-12">
            <p className="h4">Descobrir</p>

            <div className="row group-card">
              {cardItens.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
