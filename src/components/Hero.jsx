import "../styles/hero.css";
import { Link } from "react-router-dom";

import dashboard from "../assets/Dashboard_Logistico.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            Especialistas em Transportadoras e Distribuidoras
          </span>

          <h1>
            Reduza custos e tenha <span>controle total</span> da sua operação logística.
          </h1>

          <p>
            A Duo Insight desenvolve Dashboards Power BI, Business Intelligence
            e indicadores para transportadoras e distribuidoras que desejam
            aumentar a produtividade, reduzir desperdícios e tomar decisões
            mais rápidas com base em dados.
          </p>

          <div className="hero-buttons">

            <Link
              to="/contato"
              className="btn-primary"
            >
              Solicitar Demonstração
            </Link>

            <Link
              to="/portfolio"
              className="btn-secondary"
            >
              Ver Portfólio →
            </Link>

          </div>

          <div className="hero-list">

            <span>Redução de Custos</span>

            <span>Indicadores em Tempo Real</span>

            <span>Controle Operacional</span>

            <span>Power BI</span>

            <span>Business Intelligence</span>

            <span>Logística</span>

          </div>

        </div>

        <div className="hero-image">

          <div className="floating-card card-one">

            <strong>+18%</strong>

            <small>Produtividade</small>

          </div>

          <div className="floating-card card-two">

            <strong>96%</strong>

            <small>SLA</small>

          </div>

          <div className="floating-card card-three">

            <strong>R$ 128 mil</strong>

            <small>Economia</small>

          </div>

          <div className="floating-card card-four">

            <strong>Power BI</strong>

            <small>SQL • Excel</small>

          </div>

          <img
            src={dashboard}
            alt="Dashboard Logístico"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;