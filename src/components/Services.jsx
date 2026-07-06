import "../styles/services.css";
import {
  FaChartLine,
  FaRobot,
  FaChartBar,
  FaCogs,
  FaTruck,
  FaCoins,
  FaDatabase,
  FaLaptopCode,
  FaProjectDiagram,
  FaTasks,
} from "react-icons/fa";

const services = [
  {
    icon: <FaChartBar />,
    title: "Dashboard Power BI",
    description: "Dashboards interativos para acompanhamento dos principais indicadores do negócio.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Intelligence",
    description: "Transformamos dados em informações estratégicas para apoiar decisões.",
  },
  {
    icon: <FaRobot />,
    title: "Inteligência Artificial",
    description: "Aplicações de IA para otimizar processos e aumentar produtividade.",
  },
  {
    icon: <FaCogs />,
    title: "Automação de Processos",
    description: "Automatizamos tarefas repetitivas reduzindo custos operacionais.",
  },
  {
    icon: <FaTruck />,
    title: "Consultoria Logística",
    description: "Melhoria de processos logísticos, transporte e distribuição.",
  },
  {
    icon: <FaCoins />,
    title: "Consultoria Financeira",
    description: "Indicadores financeiros para apoiar a gestão da empresa.",
  },
  {
    icon: <FaTasks />,
    title: "Indicadores (KPIs)",
    description: "Criação e acompanhamento de indicadores estratégicos.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Desenvolvimento de Sistemas",
    description: "Soluções sob medida para apoiar a operação da empresa.",
  },
  {
    icon: <FaDatabase />,
    title: "Integração de Dados",
    description: "Centralização de dados provenientes de diferentes sistemas.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Gestão de Processos",
    description: "Mapeamento, padronização e melhoria contínua dos processos.",
  },
];

function Services() {
  return (
    <section className="services" id="servicos">

      <div className="services-header">

        <h2>Nossas Soluções</h2>

        <p>
          Desenvolvemos soluções inteligentes para empresas que desejam
          aumentar produtividade, reduzir custos e tomar decisões baseadas em dados.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service) => (

          <div className="service-card" key={service.title}>

            <div className="service-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;