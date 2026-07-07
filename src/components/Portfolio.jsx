import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/portfolio.css";

import dashboardLogistico from "../assets/Dashboard_Logistico.png";
import dashboardTransportes from "../assets/Dashboard_Transportes.png";
import dashboardDistribuicao from "../assets/Dashboard_Distribuicao.png";

const projetos = [

  {

    titulo: "Controle Logístico",

    categoria: "Power BI • Logística",

    resultado: "Redução dos custos operacionais",

    descricao:
      "Acompanhe entregas, custos logísticos, SLA, produtividade e desempenho da operação em tempo real através de dashboards desenvolvidos especialmente para transportadoras e distribuidoras.",

    tecnologias: [
      "Power BI",
      "Indicadores",
      "SLA",
      "Custos",
      "Logística"
    ],

    imagem: dashboardLogistico,

  },

  {

    titulo: "Gestão de Transportes",

    categoria: "Power BI • Transportes",

    resultado: "Maior eficiência na operação",

    descricao:
      "Monitore frota, consumo de combustível, quilômetros rodados, ocupação dos veículos, desempenho das viagens e produtividade da operação.",

    tecnologias: [
      "Power BI",
      "Transportes",
      "Frota",
      "Rotas",
      "Indicadores"
    ],

    imagem: dashboardTransportes,

  },

  {

    titulo: "Gestão da Distribuição",

    categoria: "Power BI • Distribuição",

    resultado: "Mais produtividade e nível de serviço",

    descricao:
      "Controle expedição, produtividade do centro de distribuição, nível de serviço, pedidos expedidos e desempenho das entregas.",

    tecnologias: [
      "Power BI",
      "Distribuição",
      "Centro de Distribuição",
      "Expedição",
      "Indicadores"
    ],

    imagem: dashboardDistribuicao,

  },

];

function Portfolio() {

  const [modal, setModal] = useState(null);

  const navigate = useNavigate();

  function abrirProjeto(projeto) {

    setModal(projeto);

  }

  function fecharProjeto() {

    setModal(null);

  }

  function solicitar() {

    fecharProjeto();

    navigate("/contato");

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  }

  return (

    <section className="portfolio">

      <div className="portfolio-header">

        <span>Soluções Desenvolvidas</span>

        <h2>

          Soluções desenvolvidas para aumentar a eficiência da sua operação logística.

        </h2>

        <p>

          Conheça algumas soluções desenvolvidas especialmente para transportadoras e distribuidoras.

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

              <h3>

                {projeto.titulo}

              </h3>

              <p>

                {projeto.descricao}

              </p>

              <div className="portfolio-result">

                Resultado esperado: {projeto.resultado}

              </div>

              <button

                className="portfolio-button"

                onClick={() => abrirProjeto(projeto)}

              >

                Ver Solução →

              </button>

            </div>

          </div>

        ))}

      </div>
            {modal && (

        <div
          className="portfolio-modal-overlay"
          onClick={fecharProjeto}
        >

          <div
            className="portfolio-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="portfolio-close"
              onClick={fecharProjeto}
            >
              ×
            </button>

            <img
              src={modal.imagem}
              alt={modal.titulo}
            />

            <div className="portfolio-modal-content">

              <span className="portfolio-category">

                {modal.categoria}

              </span>

              <h2>

                {modal.titulo}

              </h2>

              <p>

                {modal.descricao}

              </p>

              <div className="portfolio-result">

                Benefício: {modal.resultado}

              </div>

              <h4>

                O que você acompanha nesse painel

              </h4>

              <div className="portfolio-tags">

                {modal.tecnologias.map((item) => (

                  <span key={item}>

                    {item}

                  </span>

                ))}

              </div>

              <div className="portfolio-actions">

                <button
                  className="portfolio-button"
                  onClick={solicitar}
                >

                  Solicitar Demonstração

                </button>

                <button
                  className="portfolio-secondary"
                  onClick={fecharProjeto}
                >

                  Fechar

                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>

  );

}

export default Portfolio;