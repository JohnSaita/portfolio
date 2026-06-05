import SectionHeading from "./SectionHeading.jsx";

function Clients({ clients }) {
  return (
    <section className="section clients-section" id="clients">
      <div className="section-container">
        <SectionHeading
          eyebrow="Clients"
          title="Brands and collaborators I have supported"
          align="center"
        >
          Experience across consulting, training, web mapping, spatial data, and
          cartographic delivery.
        </SectionHeading>

        <div className="client-grid">
          {clients.map((client) => (
            <div className="client-logo" key={client.name}>
              <img
                src={import.meta.env.BASE_URL + client.logo}
                alt={`${client.name} logo`}
                loading="lazy"
              />
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
