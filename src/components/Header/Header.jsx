import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/Screen=Desktop, Active=None.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/" className="header__link">Accueil</NavLink>
        <NavLink to="/about" className="header__link">À Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
