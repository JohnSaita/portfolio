import { useMemo, useState } from "react";
import Icon from "./Icon.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Contact({ profile, services }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: services[0]?.title || "GIS Analysis",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry: ${form.service}`);
    const body = encodeURIComponent(
      `Hello John,\n\nMy name is ${form.name || "[your name]"}.\n\n${form.message || "I would like to discuss a geospatial project."}\n\nReply email: ${form.email || "[your email]"}`,
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [form, profile.email]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-container contact-grid">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's turn your spatial data into a clear next move">
            Send a quick note with the kind of work you need, and the form will open your email app with the
            details prepared.
          </SectionHeading>

          <div className="contact-methods">
            {profile.socials.map((item) => (
              <a href={item.url} key={item.label}>
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input name="name" type="text" value={form.name} onChange={updateField} placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
              placeholder="you@example.com"
            />
          </label>
          <label>
            <span>Service</span>
            <select name="service" value={form.service} onChange={updateField}>
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="5"
              placeholder="Tell me about the project, data, timeline, or mapping challenge."
            />
          </label>
          <button className="button" type="submit">
            <Icon name="Send" size={18} />
            Prepare email
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
