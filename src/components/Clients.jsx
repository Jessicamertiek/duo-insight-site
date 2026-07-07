import { useState } from "react";
import "../styles/clients.css";

const especialidades = [
  {
    titulo: "🚛 Transportadoras",
    descricao:
      "Desenvolvemos dashboards para gestão de fretes, entregas, SLA, custos operacionais, produtividade da frota e desempenho logístico.",
    itens: [
      "Dashboards Power BI",
      "Custos de Frete",
      "Indicadores de SLA",
      "Performance Operacional",
      "Integração de Dados",
    ],
  },
  {
    titulo: "📦 Distribuidoras",
    descricao:
      "Soluções para distribuição, armazenagem, estoque, produtividade e acompanhamento das operações em tempo real.",
    itens: [
      "Controle de Estoque",
      "Distribuição",
      "Produtividade",
      "Indicadores",
      "Power BI",
    ],
  },
  {
    titulo: "📊 Dashboards Power BI",
    descricao:
      "Painéis personalizados para acompanhamento dos principais indicadores do seu negócio.",
    itens: [
      "KPIs",
      "Indicadores",
      "Relatórios",
      "Tomada de decisão",
      "Visualização em tempo real",
    ],
  },
  {
    titulo: "📈 Business Intelligence",
    descricao:
      "Transformamos dados em informações estratégicas para apoiar decisões mais rápidas e inteligentes.",
    itens: [
      "BI",
      "Power BI",
      "SQL",
      "Modelagem",
      "Análise de Dados",
    ],
  },
  {
    titulo: "🤖 Automação de Processos",
    descricao:
      "Automatizamos atividades repetitivas reduzindo custos e aumentando a produtividade.",
    itens: [
      "Automações",
      "Integrações",
      "Fluxos",
      "Eficiência",
      "IA",
    ],
  },
  {
    titulo: "⚙️ Gestão de Operações",
    descricao:
      "Indicadores operacionais para melhorar produtividade, qualidade e eficiência dos processos.",
    itens: [
      "KPIs",
      "Produtividade",
      "Operações",
      "Eficiência",
      "Monitoramento",
    ],
  },
  {
    titulo: "🔗 Integração de Dados",
    descricao:
      "Centralizamos dados provenientes de ERPs, planilhas e sistemas diversos em um único ambiente.",
    itens: [
      "ERP",
      "Excel",
      "Banco de Dados",
      "APIs",
      "Power BI",
    ],
  },
  {
    titulo: "📉 Indicadores (KPIs)",
    descricao:
      "Criamos indicadores personalizados para acompanhar os resultados da empresa.",
    itens: [
      "KPIs",
      "Performance",
      "Resultados",
      "Gestão",
      "Dashboards",
    ],
  },
];

function Clients() {
  const [aberto, setAberto] = useState(0);

  return (
    <section className="clients">

      <div className="clients-header">

        <span>Nossas Especialidades</span>

        <h2>
          Soluções especializadas para operações, logística e inteligência de
          dados.
        </h2>

        <p>
          Clique em uma especialidade para conhecer como a Duo Insight pode
          ajudar sua empresa.
        </p>

      </div>

      <div className="accordion">

        {especialidades.map((item, index) => (

          <div
            className={`accordion-item ${
              aberto === index ? "active" : ""
            }`}
            key={item.titulo}
          >

            <button
              className="accordion-header"
              onClick={() =>
                setAberto(aberto === index ? -1 : index)
              }
            >

              <span>{item.titulo}</span>

              <span className="accordion-icon">
                {aberto === index ? "−" : "+"}
              </span>

            </button>

            {aberto === index && (

              <div className="accordion-content">

                <p>{item.descricao}</p>

                <div className="accordion-tags">

                  {item.itens.map((tag) => (

                    <span key={tag}>{tag}</span>

                  ))}

                </div>

                <a
                  href="#contato"
                  className="accordion-button"
                >
                  Solicitar Demonstração
                </a>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Clients;