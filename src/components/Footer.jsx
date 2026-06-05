import Icon from "./Icon.jsx";

function Footer({ profile, navigation }) {
  return (
    <footer className="site-footer">
      <div className="section-container footer-grid">
        <div>
          <a
            className="brand brand--footer"
            href="#top"
            aria-label={`${profile.name} homepage`}
          >
            <span className="brand__mark">JS</span>
            <span>
              <strong>{profile.name}</strong>
              <small>{profile.role}</small>
            </span>
          </a>
          <p>{profile.intro}</p>
        </div>

        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="footer-contact">
          <a href={`mailto:${profile.email}`}>
            <Icon name="Mail" size={18} />
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`}>
            <Icon name="Phone" size={18} />
            {profile.phone}
          </a>
        </div>
      </div>
      <div className="section-container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
