import SectionHeading from "./SectionHeading.jsx";

function About({ profile }) {
  return (
    <section className="section about-section" id="about">
      <div className="section-container about-grid">
        <div className="about-media">
          <img src={import.meta.env.BASE_URL + profile.portrait} alt={`${profile.name} portrait`} />
        </div>
        <div>
          <SectionHeading eyebrow="About" title={profile.aboutTitle}>
            {profile.intro}
          </SectionHeading>
          <div className="rich-text">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
