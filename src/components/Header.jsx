import { useEffect, useState } from "react";
import Icon from "./Icon.jsx";

function Header({ profile, navigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="#top" aria-label={`${profile.name} homepage`} onClick={closeMenu}>
        <span className="brand__mark">JS</span>
        <span>
          <strong>{profile.name}</strong>
          <small>{profile.role}</small>
        </span>
      </a>

      <button
        className="icon-button site-header__toggle"
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <Icon name={isOpen ? "X" : "Menu"} />
      </button>

      <nav className={`site-nav ${isOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="button button--small" href="#contact" onClick={closeMenu}>
          <Icon name="Send" size={17} />
          Let's work
        </a>
      </nav>
    </header>
  );
}

export default Header;
