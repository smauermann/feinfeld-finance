import { useState } from "react";

const chartsId = "charts";
const portfolioId = "portfolio";

function Navbar() {
  const [activePane, setActivePane] = useState(chartsId);

  function handleClick(event) {
    setActivePane(event.target.id);
  }

  return (
    <nav className="navbar">
      <h1 className="navbar--title">Feinfeld.</h1>
      <div>
        <a
          className="navbar--link"
          id={chartsId}
          href="#"
          onClick={handleClick}
          style={activePane === chartsId ? null : { textDecoration: "none" }}
        >
          Charts
        </a>
        <a
          className="navbar--link"
          id={portfolioId}
          href="#"
          onClick={handleClick}
          style={activePane === portfolioId ? null : { textDecoration: "none" }}
        >
          Portfolio
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
