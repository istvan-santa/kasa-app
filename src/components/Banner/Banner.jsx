import "./Banner.scss";

function Banner({ image, alt, children }) {
    return (
      <div className="banner">
        <img src={image} alt={alt} className="banner__image" />
        {children && <div className="banner__overlay">{children}</div>}
      </div>
    );
  }
  

export default Banner;
