import SectionHeading from "./SectionHeading.jsx";

function Testimonials({ testimonials }) {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-container">
        <SectionHeading eyebrow="Testimonials" title="Reviews from real clients" />

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <p>“{testimonial.quote}”</p>
              <div className="testimonial-card__author">
                <img src={testimonial.avatar} alt="" loading="lazy" />
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
