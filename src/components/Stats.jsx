import "../styles/stats.css";

const indicadores = [
  {
    numero: "+50",
    titulo: "Dashboards Desenvolvidos",
  },
  {
    numero: "98%",
    titulo: "Satisfação dos Clientes",
  },
  {
    numero: "24h",
    titulo: "Prazo para Demonstração",
  },
  {
    numero: "100%",
    titulo: "Soluções Personalizadas",
  },
];

function Stats() {
  return (
    <section className="stats">

      <div className="stats-header">
        <h2>Nossos Resultados</h2>

        <p>
          Desenvolvemos soluções inteligentes para transformar dados em
          decisões estratégicas e aumentar a performance das empresas.
        </p>
      </div>

      <div className="stats-grid">

        {indicadores.map((item) => (
          <div className="stat-card" key={item.titulo}>

            <h3>{item.numero}</h3>

            <p>{item.titulo}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;