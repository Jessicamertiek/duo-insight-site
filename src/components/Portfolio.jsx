import { useState } from "react";
import "../styles/portfolio.css";

import dashboardLogistico from "../assets/Dashboard_Logistico.png";
import dashboardFinanceiro from "../assets/Dashboard_Financeiro.png";
import dashboardComercial from "../assets/Dashboard_Comercial.png";

const projetos = [
  {
    titulo: "Dashboard Logístico",
    categoria: "Power BI • Logística",
    resultado: "-18% nos custos operacionais",
    tecnologias: [
      "Power BI",
      "SQL",
      "Excel",
      "Automação",
      "Indicadores",
    ],
    descricao:
      "Monitoramento completo de entregas, custos logísticos, SLA, transportadoras, produtividade e indicadores em tempo real.",
    imagem: dashboardLogistico,
  },

  {
    titulo: "Dashboard Financeiro",
    categoria: "Business Intelligence",
    resultado: "+32% velocidade nas análises",
    tecnologias: [
      "Power BI",
      "SQL",
      "Python",
      "Financeiro",
      "DRE",
    ],
    descricao:
      "Fluxo de caixa, faturamento, margem, despesas, contas a pagar, contas a receber e indicadores financeiros.",
    imagem: dashboardFinanceiro,
  },

  {
    titulo: "Dashboard Comercial",
    categoria: "Power BI • Comercial",
    resultado: "+25% produtividade da equipe",
    tecnologias: [
      "Power BI",
      "CRM",
      "SQL",
      "KPIs",
      "Vendas",
    ],
    descricao:
      "Funil comercial, metas, ticket médio, conversão, vendas e desempenho da equipe.",
    imagem: dashboardComercial,
  },
];

function Portfolio() {

  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <>
      <section className="portfolio" id="portfolio">

        <div className="portfolio-header">

          <span>Projetos Desenvolvidos</span>

          <h2>
            Dashboards que transformam dados em decisões estratégicas.
          </h2>

          <p>
            Conheça alguns exemplos das soluções desenvolvidas pela Duo Insight
            para empresas de diferentes segmentos.
          </p>

        </div>

        <div className="portfolio-grid">

          {projetos.map((projeto) => (

            <div
              className="portfolio-card"
              key={projeto.titulo}
            >

              <img
                src={projeto.imagem}
                alt={projeto.titulo}
              />

              <div className="portfolio-content">

                <span className="portfolio-category">
                  {projeto.categoria}
                </span>

                <h3>{projeto.titulo}</h3>

                <p>{projeto.descricao}</p>

                <div className="portfolio-result">
                  Resultado: {projeto.resultado}
                </div>

                <button
                  onClick={() => setProjetoSelecionado(projeto)}
                >
                  Ver Projeto Completo →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {projetoSelecionado && (

        <div
          className="portfolio-modal-overlay"
          onClick={() => setProjetoSelecionado(null)}
        >

          <div
            className="portfolio-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-modal"
              onClick={() => setProjetoSelecionado(null)}
            >
              ✕
            </button>

            <img
              src={projetoSelecionado.imagem}
              alt={projetoSelecionado.titulo}
            />

            <div className="modal-content">

              <span className="portfolio-category">
                {projetoSelecionado.categoria}
              </span>

              <h2>
                {projetoSelecionado.titulo}
              </h2>

              <p>
                {projetoSelecionado.descricao}
              </p>

              <div className="tech-list">

                {projetoSelecionado.tecnologias.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="portfolio-result">
                Resultado obtido: {projetoSelecionado.resultado}
              </div>

              <a
                href="#contato"
                className="modal-button"
                onClick={() => setProjetoSelecionado(null)}
              >
                Solicitar Demonstração
              </a>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default Portfolio;