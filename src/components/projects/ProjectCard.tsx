import type { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden project-card-hover transition-all">
      <div
        className="position-relative overflow-hidden bg-light cursor-pointer"
        style={{ height: "200px", cursor: "pointer" }}
        onClick={() => onSelect(project)}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-100 h-100 object-fit-cover project-card-img"
          />
        ) : (
          <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
            <i className="bi bi-image fs-1 opacity-50"></i>
          </div>
        )}
        <div className="position-absolute top-0 start-0 m-3 d-flex gap-1">
          {project.category && (
            <span className="badge bg-dark bg-opacity-75 text-white backdrop-blur px-2 py-1">
              {project.category}
            </span>
          )}
        </div>
        {project.year && (
          <div className="position-absolute top-0 end-0 m-3">
            <span className="badge bg-light text-dark shadow-sm px-2 py-1">
              {project.year}
            </span>
          </div>
        )}
      </div>

      <div className="card-body d-flex flex-column p-4">
        <h5
          className="card-title fw-bold text-dark mb-2 cursor-pointer text-truncate"
          onClick={() => onSelect(project)}
          title={project.title}
          style={{ cursor: "pointer" }}
        >
          {project.title}
        </h5>
        <p className="card-text text-secondary small flex-grow-1 line-clamp-3 mb-3">
          {project.short}
        </p>

        {project.tags && project.tags.length > 0 && (
          <div className="d-flex flex-wrap gap-1 mb-3">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="badge bg-primary-subtle text-primary-emphasis border border-primary-subtle"
                style={{ fontSize: "0.75rem" }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span
                className="badge bg-light text-secondary border"
                style={{ fontSize: "0.75rem" }}
              >
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        )}

        <div className="d-flex align-items-center justify-content-between pt-2 border-top mt-auto">
          <button
            type="button"
            className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1 rounded-pill px-3"
            onClick={() => onSelect(project)}
          >
            <span>Details</span>
            <i className="bi bi-arrow-right-short"></i>
          </button>

          <div className="d-flex gap-2">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-light border rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "32px", height: "32px" }}
                title="View Source Code"
              >
                <i className="bi bi-github"></i>
              </a>
            )}
            {project.report && (
              <a
                href={project.report}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-success-subtle text-success border border-success-subtle rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "32px", height: "32px" }}
                title="View Document / Report"
              >
                <i className="bi bi-file-earmark-pdf"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
