import Icon from "./Icon.jsx";

function Hero({ profile }) {
  return (
    <section className="hero" id="top" style={{ "--hero-image": `url(${profile.heroImage})` }}>
      <div className="hero__overlay" />
      <div className="section-container hero__content">
        <p className="eyebrow">{profile.availability}</p>
        <h1>{profile.heroTitle}</h1>
        <p className="hero__lead">{profile.heroSubtitle}</p>

        <div className="hero__actions">
          <a className="button" href="#recent-jobs">
            View recent jobs
            <Icon name="ArrowRight" size={18} />
          </a>
          <a className="button button--ghost" href={`mailto:${profile.email}`}>
            <Icon name="Mail" size={18} />
            Email John
          </a>
        </div>
      </div>

      <div className="hero__stats section-container" aria-label="Portfolio highlights">
        {profile.stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
