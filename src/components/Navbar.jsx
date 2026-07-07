import "../styles/navbar.css";
import logo from "../assets/Logo da Duo Insight com tagline.png";

import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="container">

        <Link
          to="/"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Duo Insight"
            className="logo"
          />
        </Link>

        <nav className={menuOpen ? "nav active" : "nav"}>

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/empresa"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Empresa
          </NavLink>

          <NavLink
            to="/solucoes"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Soluções
          </NavLink>

          <NavLink
            to="/portfolio"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Portfólio
          </NavLink>

          <NavLink
            to="/contato"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Contato
          </NavLink>

          <Link
            to="/contato"
            className="btn-demo mobile"
            onClick={closeMenu}
          >
            Solicitar Demonstração
          </Link>

        </nav>

        <Link
          to="/contato"
          className="btn-demo desktop"
        >
          Solicitar Demonstração
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>
  );
}

export default Navbar;