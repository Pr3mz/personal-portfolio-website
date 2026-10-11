import type { Project } from "../../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.65)", zIndex: 1050 }}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
          <div className="modal-header bg-light border-0 px-4 py-3">
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle">
                  {project.category || "Project"}
                </span>
                {project.year && (
                  <span className="badge bg-light text-secondary border">
                    {project.year}
                  </span>
                )}
              </div>
              <h4 className="modal-title fw-bold text-dark mb-0">{project.title}</h4>
            </div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          <div className="modal-body p-4">
            {project.image && (
              <div
                className="mb-4 rounded-3 overflow-hidden bg-light text-center border"
                style={{ maxHeight: "360px" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid w-100 object-fit-cover"
                  style={{ maxHeight: "360px", objectFit: "contain" }}
                />
              </div>
            )}

            <div className="mb-3">
              <h6 className="fw-semibold text-secondary text-uppercase small mb-2">Overview</h6>
              <p className="fs-6 fw-medium text-dark">{project.short}</p>
              {project.long && <p className="text-muted lh-base">{project.long}</p>}
            </div>

            {project.tags && project.tags.length > 0 && (
              <div className="mb-4">
                <h6 className="fw-semibold text-secondary text-uppercase small mb-2">
                  Technologies & Skills
                </h6>
                <div className="d-flex flex-wrap gap-1">
                  {project.tags.map((t) => (
                    <span key={t} className="badge bg-secondary-subtle text-dark border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="d-flex flex-wrap gap-2 pt-2 border-top">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-dark d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-github"></i>
                  <span>View Repository</span>
                </a>
              )}
              {project.report && (
                <a
                  href={project.report}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-success d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-file-earmark-pdf-fill"></i>
                  <span>Project Document / Report</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          <div className="modal-footer bg-light border-0 px-4 py-2">
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
