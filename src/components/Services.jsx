import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/services.css";

import {
  FaChartBar,
  FaChartLine,
  FaCogs,
  FaTruck,
  FaDatabase,
  FaTasks,
} from "react-icons/fa";

const services = [
  {
    icon: <FaChartBar />,
    title: "Dashboard Power BI",
    short:
      "Dashboards interativos para acompanhar indicadores operacionais, logísticos e estratégicos em tempo real.",

    description:
      "Desenvolvemos dashboards personalizados em Power BI para acompanhar indicadores de desempenho, custos, produtividade, SLA, entregas, faturamento e diversos outros KPIs da operação.",

    benefits: [
      "Indicadores em tempo real",
      "Redução do tempo nas análises",
      "Maior controle operacional",
      "Tomada de decisão baseada em dados",
    ],
  },

  {
    icon: <FaChartLine />,
    title: "Business Intelligence",

    short:
      "Transformamos dados em informações estratégicas para apoiar decisões mais rápidas e inteligentes.",

    description:
      "Estruturamos informações provenientes de diversos sistemas para transformar dados em inteligência de negócio, permitindo análises mais rápidas e decisões mais assertivas.",

    benefits: [
      "Centralização dos dados",
      "Informações confiáveis",
      "Análises estratégicas",
      "Mais produtividade",
    ],
  },

  {
    icon: <FaCogs />,
    title: "Automação de Processos",

    short:
      "Automatizamos tarefas repetitivas para reduzir custos, aumentar produtividade e eliminar retrabalho.",

    description:
      "Criamos automações para reduzir atividades manuais, eliminar erros operacionais e aumentar a produtividade das equipes.",

    benefits: [
      "Menos retrabalho",
      "Redução de custos",
      "Mais velocidade",
      "Padronização dos processos",
    ],
  },

  {
    icon: <FaTruck />,
    title: "Consultoria Logística",

    short:
      "Análise operacional, indicadores, transporte, distribuição e melhoria contínua dos processos logísticos.",

    description:
      "Apoiamos empresas na melhoria da operação logística através da análise de processos, indicadores, produtividade, transporte e distribuição.",

    benefits: [
      "Maior eficiência",
      "Redução de desperdícios",
      "Melhoria operacional",
      "Gestão baseada em indicadores",
    ],
  },

  {
    icon: <FaDatabase />,
    title: "Integração de Dados",

    short:
      "Centralizamos informações de planilhas, ERPs, bancos de dados e outros sistemas em um único ambiente.",

    description:
      "Integramos diferentes fontes de dados para que todas as informações estejam disponíveis em um único painel de controle.",

    benefits: [
      "Dados integrados",
      "Menos planilhas",
      "Informações centralizadas",
      "Mais confiabilidade",
    ],
  },

  {
    icon: <FaTasks />,
    title: "Indicadores (KPIs)",

    short:
      "Desenvolvimento de indicadores personalizados para monitorar desempenho e apoiar a gestão estratégica.",

    description:
      "Criamos indicadores específicos para cada operação, permitindo acompanhar resultados em tempo real e apoiar a tomada de decisão.",

    benefits: [
      "KPIs personalizados",
      "Gestão por indicadores",
      "Acompanhamento diário",
      "Mais controle",
    ],
  },
];

function Services() {
  const [modal, setModal] = useState(null);

  const navigate = useNavigate();

  function abrir(service) {
    setModal(service);
  }

  function fechar() {
    setModal(null);
  }

  function solicitar() {
    fechar();

    navigate("/contato");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="services" id="servicos">
      <div className="services-header">
        <span>Nossas Soluções</span>

        <h2>
          Como ajudamos sua operação a tomar decisões melhores.
        </h2>

        <p>
          Somos especialistas em Business Intelligence para operações,
          logística e transportes, desenvolvendo dashboards, indicadores e
          automações que aumentam a produtividade e apoiam decisões baseadas
          em dados.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.short}</p>

            <button
              className="service-button"
              onClick={() => abrir(service)}
            >
              Saiba mais →
            </button>

          </div>
        ))}
      </div>
            {modal && (

        <div
          className="services-modal-overlay"
          onClick={fechar}
        >

          <div
            className="services-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="services-close"
              onClick={fechar}
            >
              ×
            </button>

            <div className="services-modal-icon">

              {modal.icon}

            </div>

            <h2>

              {modal.title}

            </h2>

            <p className="services-modal-description">

              {modal.description}

            </p>

            <h4>

              O que sua empresa ganha

            </h4>

            <div className="services-benefits">

              {modal.benefits.map((item) => (

                <span key={item}>

                  {item}

                </span>

              ))}

            </div>

            <p className="services-call">

              Quer entender como essa solução pode ser aplicada na sua empresa?
              Nossa equipe pode apresentar uma demonstração personalizada para
              sua operação.

            </p>

            <div className="services-actions">

              <button
                className="service-button"
                onClick={solicitar}
              >

                Solicitar Demonstração

              </button>

              <button
                className="services-secondary"
                onClick={fechar}
              >

                Fechar

              </button>

            </div>

          </div>

        </div>

      )}

    </section>

  );

}

export default Services;