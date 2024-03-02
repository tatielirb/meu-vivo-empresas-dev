import "./companiesHome.scss";
import Card from "components/Card";
import Carousel from "components/Carousel";
import { carouselItems } from "utils/data";
import { useApp } from "hooks/useApp";

export default function CompaniesHome() {
  const { setCurrentCarouselItem, getCardList } = useApp();

  return (
    <div className="companiesHome">
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
