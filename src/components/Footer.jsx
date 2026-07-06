import "../styles/footer.css";

import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {

  const voltarTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>Duo Insight</h2>

          <p>
            Transformamos dados em decisões inteligentes através de
            Business Intelligence, Dashboards Power BI,
            Inteligência Artificial e Automação de Processos.
          </p>

        </div>

        <div className="footer-links">

          <h3>Navegação</h3>

          <a href="#inicio">Início</a>

          <a href="#servicos">Soluções</a>

          <a href="#contato">Contato</a>

        </div>

        <div className="footer-contact">

          <h3>Contato</h3>

          <a href="mailto:duoalves.inteligencia@gmail.com">
            <FaEnvelope />
            <span>duoalves.inteligencia@gmail.com</span>
          </a>

          <a
            href="https://wa.me/5531999126371"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            <span>(31) 99912-6371</span>
          </a>

          <div className="footer-social">

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Duo Insight • Todos os direitos reservados.
        </p>

        <button
          className="back-top"
          onClick={voltarTopo}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;