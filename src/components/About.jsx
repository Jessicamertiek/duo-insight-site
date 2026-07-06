import "../styles/about.css";

import {
  FaChartLine,
  FaLightbulb,
  FaRobot,
  FaUsers,
} from "react-icons/fa";

function About() {
  return (
    <section className="about" id="sobre">

      <div className="about-container">

        <div className="about-content">

          <span className="about-badge">
            Sobre a Duo Insight
          </span>

          <h2>
            Transformamos dados em vantagem competitiva.
          </h2>

          <p>
            A Duo Insight nasceu com o propósito de ajudar empresas a tomar
            decisões mais rápidas, inteligentes e estratégicas através da
            análise de dados, Business Intelligence, Inteligência Artificial e
            automação de processos.
          </p>

          <p>
            Atuamos desenvolvendo dashboards, indicadores, integrações e
            soluções personalizadas que aumentam a produtividade e reduzem
            custos operacionais.
          </p>

        </div>

        <div className="about-cards">

          <div className="about-card">

            <FaChartLine />

            <h3>Business Intelligence</h3>

            <p>
              Dashboards e indicadores para acompanhar o desempenho do negócio.
            </p>

          </div>

          <div className="about-card">

            <FaRobot />

            <h3>Inteligência Artificial</h3>

            <p>
              Automatizamos tarefas e utilizamos IA para gerar eficiência.
            </p>

          </div>

          <div className="about-card">

            <FaLightbulb />

            <h3>Inovação</h3>

            <p>
              Soluções modernas alinhadas às necessidades de cada empresa.
            </p>

          </div>

          <div className="about-card">

            <FaUsers />

            <h3>Foco no Cliente</h3>

            <p>
              Projetos desenvolvidos para gerar resultados reais e mensuráveis.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;