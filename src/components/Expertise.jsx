import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Expertise({ expertise, tools }) {
  return (
    <section className="section section--soft" id="expertise">
      <div className="section-container">
        <SectionHeading eyebrow="Expertise" title="Spatial thinking across the full GIS workflow">
          From raw location data to final maps and web tools, each capability supports practical decisions.
        </SectionHeading>

        <div className="feature-grid">
          {expertise.map((item) => (
            <article className="feature-card" key={item.title}>
              <span className="feature-card__icon">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="tool-strip" aria-label="Tools and technologies">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
