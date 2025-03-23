import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import aboutImage from "../assets/Image About.png";
import "./About.scss";

function About() {
  const sections = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur entraînera une exclusion de la plateforme."
    },
    {
      title: "Service",
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
    },
  ];

  return (
    <div className="about">
      <Banner image={aboutImage} alt="Montagnes" />
      <div className="about__collapses">
        {sections.map((section, index) => (
          <Collapse key={index} title={section.title}>
            <p>{section.content}</p>
          </Collapse>
        ))}
      </div>
    </div>
  );
}

export default About;
