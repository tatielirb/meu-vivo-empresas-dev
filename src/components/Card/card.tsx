import wifi from "../../assets/img/wifi.svg";
import "./card.scss";
import { CardProps } from "types/component/Card";

export default function Card({ description, title, badgeText }: CardProps) {
  return (
    <div className="card shadow-lg">
      {badgeText && <span className="badge">{badgeText}</span>}
      <div className="card-body">
        <div className="card-header">
          <img src={wifi} alt="sinal internet icon" className="col-4" />
          <div className="card-infos col-9">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
          </div>
        </div>

        <div className="card-gray"></div>
        <a href="#" className="btn">
          Consultar cobertura
        </a>
      </div>
    </div>
  );
}
