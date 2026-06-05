import Icon from "./Icon.jsx";
import JobVisual from "./JobVisual.jsx";
import SectionHeading from "./SectionHeading.jsx";

function RecentJobs({ jobs }) {
  return (
    <section className="section section--deep" id="recent-jobs">
      <div className="section-container">
        <div className="split-heading split-heading--light">
          <SectionHeading
            eyebrow="Recent Jobs"
            title="Selected work you can update from JSON"
          />
          <p>
            Add, remove, or reorder entries in{" "}
            <strong>src/data/portfolio.json</strong> under
            <strong> recentJobs</strong>; these cards update automatically.
          </p>
        </div>

        <div className="jobs-grid">
          {jobs.map((job) => (
            <article className="job-card" key={job.title}>
              {job.image ? (
                <img src={job.image} alt="" loading="lazy" />
              ) : (
                <JobVisual
                  icon={job.visual?.icon}
                  variant={job.visual?.variant}
                />
              )}
              <div className="job-card__body">
                <div className="job-card__meta">
                  <span>{job.category}</span>
                  <span>{job.year}</span>
                </div>
                <h3>{job.title}</h3>
                <p>{job.summary}</p>
                <div className="job-card__result">{job.result}</div>
                <div className="tag-list">
                  {job.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <a className="text-link" href={job.link}>
                  View details
                  <Icon name="ExternalLink" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentJobs;
