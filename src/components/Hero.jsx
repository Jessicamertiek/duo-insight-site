import "./../styles/hero.css";
import dashboard from "../assets/Dashboard de performance logística moderno.png";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            Business Intelligence • Inteligência Artificial • Automação
          </span>

          <h1>
            Transformamos dados em
            <span> decisões inteligentes.</span>
          </h1>

          <p>
            A Duo Insight ajuda empresas a reduzir custos,
            aumentar produtividade e tomar decisões estratégicas
            através de Dashboards Power BI, Inteligência Artificial,
            Automação e Business Intelligence.
          </p>

          <div className="hero-buttons">

  <a href="#contato" className="btn-primary">
    Solicitar Demonstração
  </a>

  <a href="#servicos" className="btn-secondary">
    Conhecer Soluções
  </a>

</div>

        </div>

        <div className="hero-image">

          <img
            src={dashboard}
            alt="Dashboard Duo Insight"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;