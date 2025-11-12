import { projects } from "../data/projects";
import type { Project } from "../types";

function ProjectPanel({ p, index }: { p: Project; index: number }) {
  const id = `collapse-${p.id}`;
  const headerId = `heading-${p.id}`;
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headerId}>
        <button
          className={`accordion-button ${index === 0 ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded={index === 0 ? "true" : "false"}
          aria-controls={id}
        >
          {p.title}
        </button>
      </h2>

      <div
        id={id}
        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
        data-bs-parent="#portfolioAccordion"
      >
        <div className="accordion-body">
          <div className="row g-3">
            <div className="col-md-4">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="img-fluid rounded project-card"
                />
              ) : null}
            </div>
            <div className="col-md-8">
              <p className="mb-1">
                <strong>{p.short}</strong>
              </p>
              {p.long && <p className="mb-2">{p.long}</p>}
              <div className="mb-2">
                {p.tags?.map((t) => (
                  <span key={t} className="badge bg-secondary me-1">
                    {t}
                  </span>
                ))}
              </div>
              <div>
                {p.repo && (
                  <a
                    className="btn btn-sm btn-outline-primary me-2"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
                {p.demo && (
                  <a
                    className="btn btn-sm btn-primary"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectIndex() {
  return (
    <div className="container-xl">
      <h2 className="mb-3">Projects</h2>
      <div className="accordion" id="portfolioAccordion">
        {projects.map((p, i) => (
          <ProjectPanel key={p.id} p={p} index={i} />
        ))}
      </div>
    </div>
  );
}
