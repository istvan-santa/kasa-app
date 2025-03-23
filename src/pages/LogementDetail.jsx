import Slideshow from "../components/Slideshow/Slideshow";
import Collapse from "../components/Collapse/Collapse";
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import "./LogementDetail.scss"; // à créer

function LogementDetail() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) return <Navigate to="/404" />;

  return (
    <div className="logement-detail">
      <Slideshow pictures={logement.pictures} />

      <div className="logement-detail__top">
        <div className="logement-detail__info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement-detail__tags">
            {logement.tags.map((tag, index) => (
              <span className="tag" key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement-detail__host-rating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < logement.rating ? "star full" : "star empty"}>★</span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement-detail__collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equip, index) => (
              <li key={index}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default LogementDetail;
