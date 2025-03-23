import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import logements from "../data/logements.json";
import homeBanner from "../assets/home-banner.png";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Banner image={homeBanner} alt="Falaises en bord de mer">
      </Banner>

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
  );
}

export default Home;
