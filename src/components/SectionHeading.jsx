function SectionHeading({ eyebrow, title, children, align = "left" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p className="section-heading__copy">{children}</p> : null}
    </div>
  );
}

export default SectionHeading;
