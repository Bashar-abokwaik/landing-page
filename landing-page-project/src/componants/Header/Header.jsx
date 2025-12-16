import { useState } from "react";
import logoImge from "../../assets/logo.png";
import "./Header.css";

function Header() {
  // State to manage the menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="heder">
      <div className="logo">
        <img src={logoImge} alt="Logo" className="logo-img" />
        <h1 className="heder-titel">{"Astraeus Gym".toUpperCase()}</h1>
      </div>

      {/* Hamburger menu icon */}
      <div
        className={`dropLest ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${menuOpen ? "show" : ""}`}>
        <ul className="lest">
          <li>
            <a href="#hero">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT US</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#contact">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
