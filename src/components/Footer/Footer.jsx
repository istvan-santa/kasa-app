import "./Footer.scss";
import logoWhite from "../../assets/Size=Desktop.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="Kasa" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
