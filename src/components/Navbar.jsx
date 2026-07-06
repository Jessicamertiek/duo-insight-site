import "../styles/navbar.css";
import logo from "../assets/Logo da Duo Insight com tagline.png";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container">

        <a href="#inicio" className="logo-link">
          <img
            src={logo}
            alt="Duo Insight"
            className="logo"
          />
        </a>

        <nav className="menu">

          <a href="#inicio">
            Início
          </a>

          <a href="#servicos">
            Soluções
          </a>

          <a href="#contato">
            Contato
          </a>

        </nav>

        <a
          href="#contato"
          className="btn-demo"
        >
          Solicitar Demonstração
        </a>

      </div>

    </header>
  );
}

export default Navbar;