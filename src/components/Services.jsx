import "../styles/services.css";

const services = [
  "Dashboard Power BI",
  "Business Intelligence",
  "Inteligência Artificial",
  "Automação de Processos",
  "Consultoria Logística",
  "Consultoria Financeira",
  "Indicadores (KPIs)",
  "Desenvolvimento de Sistemas",
  "Integração de Dados",
  "Gestão de Processos"
];

function Services() {
  return (
    <section className="services" id="solucoes">

      <h2>Nossas Soluções</h2>

      <p>
        Soluções inteligentes para transformar dados em resultados.
      </p>

      <div className="services-grid">

        {services.map((item) => (

          <div className="service-card" key={item}>

            <h3>{item}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;