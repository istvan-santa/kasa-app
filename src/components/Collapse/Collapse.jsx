import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <span className={`collapse__arrow ${isOpen ? "open" : ""}`}>
          {isOpen ? "▲" : "▼"}
        </span>
      </div>

      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
}

export default Collapse;
