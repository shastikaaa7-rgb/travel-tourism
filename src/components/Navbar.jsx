import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Travel<span>Tourism</span>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/destinations" onClick={() => setMenuOpen(false)}>Destinations</Link>
        <Link to="/packages" onClick={() => setMenuOpen(false)}>Packages</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <Link
        to="/booking"
        className="book-button"
        onClick={() => setMenuOpen(false)}
      >
        Book Now
      </Link>

    </nav>
  );
}

export default Navbar;