import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Services({ services }) {
  return (
    <section className="section services-section" id="services">
      <div className="section-container">
        <div className="split-heading">
          <SectionHeading eyebrow="Services" title="High-impact GIS services for practical business needs" />
          <p>
            Choose a focused service or combine several into a full geospatial workflow, from discovery and
            analysis to delivery and training.
          </p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.title}>
              <span className="service-row__icon">
                <Icon name={service.icon} />
              </span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
