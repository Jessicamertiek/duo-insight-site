import "../styles/about.css";

import {
  FaChartLine,
  FaTruck,
  FaChartBar,
  FaBoxes,
} from "react-icons/fa";

function Empresa() {
  return (
    <section className="about">

      <div className="about-container">

        <div className="about-left">

          <span className="about-badge">
            Sobre a Duo Insight
          </span>

          <h1>
            Especialistas em Business Intelligence para Transportadoras e Distribuidoras.
          </h1>

          <p className="about-text">
            A Duo Insight nasceu para ajudar transportadoras e distribuidoras
            a reduzir custos, aumentar a produtividade e tomar decisões mais
            rápidas através de Dashboards Power BI, Business Intelligence e
            indicadores operacionais.
          </p>

          <p className="about-text">
            Transformamos dados da operação em informações estratégicas,
            proporcionando maior controle da logística, acompanhamento de
            indicadores, redução de desperdícios e melhoria contínua dos
            processos.
          </p>

          <p className="about-highlight">
            Nosso compromisso é entregar soluções práticas, intuitivas e
            personalizadas que auxiliem gestores na tomada de decisão e no
            crescimento sustentável de suas operações.
          </p>

        </div>

        <div className="about-right">

          <div className="about-card">

            <FaChartLine />

            <h3>Business Intelligence</h3>

            <p>
              Transformamos dados operacionais em informações estratégicas para
              apoiar decisões rápidas e seguras.
            </p>

          </div>

          <div className="about-card">

            <FaTruck />

            <h3>Logística e Transportes</h3>

            <p>
              Soluções voltadas para transportadoras, operadores logísticos e
              distribuidoras.
            </p>

          </div>

          <div className="about-card">

            <FaChartBar />

            <h3>Dashboards Power BI</h3>

            <p>
              Indicadores em tempo real para acompanhar custos, produtividade,
              SLA e desempenho operacional.
            </p>

          </div>

          <div className="about-card">

            <FaBoxes />

            <h3>Distribuição</h3>

            <p>
              Controle da expedição, produtividade do centro de distribuição,
              nível de serviço e desempenho das entregas.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Empresa;