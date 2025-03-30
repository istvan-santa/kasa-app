import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import logements from "../data/logements.json";
import homeBanner from "../assets/Image source 1.png";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Banner image={homeBanner} alt="Falaises en bord de mer">
        <h1 className="home__banner-text">Chez vous, partout et ailleurs</h1>
      </Banner>

      <div className="home__cards-container">
        <section className="home__cards">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;

