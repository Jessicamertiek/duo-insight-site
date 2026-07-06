import "./../styles/hero.css";
import dashboard from "../assets/Dashboard de performance logística moderno.png";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            Business Intelligence • Power BI • Inteligência Artificial
          </span>

          <h1>
            Transformamos dados em
            <span> resultados inteligentes.</span>
          </h1>

          <p>
            A Duo Insight desenvolve soluções em Business Intelligence,
            Dashboards Power BI, Inteligência Artificial e Automação para
            empresas que desejam reduzir custos, aumentar produtividade e
            tomar decisões baseadas em dados.
          </p>

          <div className="hero-buttons">

            <a
              href="#contato"
              className="btn-primary"
            >
              Solicitar Demonstração
            </a>

            <a
              href="#servicos"
              className="btn-secondary"
            >
              Conhecer Soluções
            </a>

          </div>

          <div className="hero-highlights">

            <div className="highlight-item">
              ✓ Dashboards Power BI
            </div>

            <div className="highlight-item">
              ✓ Inteligência Artificial
            </div>

            <div className="highlight-item">
              ✓ Automação de Processos
            </div>

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