import "../styles/process.css";

import {
  FaSearch,
  FaLaptopCode,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const etapas = [
  {
    icon: <FaSearch />,
    numero: "01",
    titulo: "Diagnóstico",
    descricao:
      "Entendemos o negócio, analisamos processos e identificamos oportunidades de melhoria.",
  },
  {
    icon: <FaLaptopCode />,
    numero: "02",
    titulo: "Desenvolvimento",
    descricao:
      "Criamos dashboards, automações e soluções personalizadas alinhadas aos objetivos da empresa.",
  },
  {
    icon: <FaRocket />,
    numero: "03",
    titulo: "Implantação",
    descricao:
      "Realizamos a implantação das soluções e acompanhamos toda a fase de entrega.",
  },
  {
    icon: <FaHeadset />,
    numero: "04",
    titulo: "Suporte Contínuo",
    descricao:
      "Monitoramos os resultados e evoluímos continuamente as soluções implementadas.",
  },
];

function Process() {
  return (
    <section className="process">

      <div className="process-header">

        <span>Como Trabalhamos</span>

        <h2>
          Um processo simples, transparente e focado em resultados.
        </h2>

        <p>
          Desenvolvemos cada projeto de forma personalizada para garantir que
          a tecnologia gere valor real para o seu negócio.
        </p>

      </div>

      <div className="process-grid">

        {etapas.map((etapa) => (

          <div
            className="process-card"
            key={etapa.numero}
          >

            <div className="process-number">
              {etapa.numero}
            </div>

            <div className="process-icon">
              {etapa.icon}
            </div>

            <h3>
              {etapa.titulo}
            </h3>

            <p>
              {etapa.descricao}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Process;