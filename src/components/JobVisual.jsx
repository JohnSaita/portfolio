import Icon from "./Icon.jsx";

function JobVisual({ icon = "MapPinned", variant = "spatial" }) {
  return (
    <div className={`job-visual job-visual--${variant}`} aria-hidden="true">
      <div className="job-visual__map">
        <span />
        <span />
        <span />
      </div>
      <div className="job-visual__icon">
        <Icon name={icon} size={42} strokeWidth={1.6} />
      </div>
    </div>
  );
}

export default JobVisual;
