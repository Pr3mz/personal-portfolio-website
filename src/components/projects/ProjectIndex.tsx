import { useState, useMemo } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "accordion">("grid");

  const categories = ["All", "Robotics", "IoT", "Embedded"];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" ||
        p.category === selectedCategory ||
        p.tags?.some((t) => t.toLowerCase() === selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.short.toLowerCase().includes(query) ||
        (p.long && p.long.toLowerCase().includes(query)) ||
        p.tags?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="container-xl">
      {/* Header & Controls */}
      <div className="mb-4">
        <div className="row g-3 align-items-center justify-content-between mb-3">
          <div className="col-md-6">
            <h2 className="fw-bold mb-1">Featured Projects & Systems</h2>
            <p className="text-secondary small mb-0">
              Explore robotics, embedded systems, IoT platforms, and control algorithms.
            </p>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className="input-group shadow-sm rounded-pill overflow-hidden border">
              <span className="input-group-text bg-white border-0 ps-3">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-0 py-2"
                placeholder="Search projects, sensors, tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="btn btn-white border-0 text-secondary"
                  type="button"
                  onClick={() => setSearchQuery("")}
                >
                  <i className="bi bi-x"></i>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Badges & View Switcher */}
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 pt-2 border-top">
          <div className="d-flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`btn btn-sm rounded-pill px-3 transition-all ${
                  selectedCategory === cat
                    ? "btn-primary shadow-sm"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="btn-group btn-group-sm shadow-sm rounded-pill overflow-hidden border">
            <button
              type="button"
              className={`btn ${viewMode === "grid" ? "btn-dark" : "btn-white text-muted"}`}
              onClick={() => setViewMode("grid")}
              title="Grid View"
            >
              <i className="bi bi-grid-fill me-1"></i> Grid
            </button>
            <button
              type="button"
              className={`btn ${viewMode === "accordion" ? "btn-dark" : "btn-white text-muted"}`}
              onClick={() => setViewMode("accordion")}
              title="Accordion View"
            >
              <i className="bi bi-view-list me-1"></i> List
            </button>
          </div>
        </div>
      </div>

      {/* Projects Display */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-5 bg-white rounded-4 border shadow-sm my-4">
          <i className="bi bi-search fs-1 text-muted opacity-50 mb-3 d-block"></i>
          <h5 className="fw-semibold text-dark">No projects matched your criteria</h5>
          <p className="text-muted small mb-3">
            Try searching for something else or reset your filter.
          </p>
          <button
            type="button"
            className="btn btn-outline-primary btn-sm rounded-pill px-4"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === "grid" ? (
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </div>
          ))}
        </div>
      ) : (
        <div className="accordion shadow-sm rounded-4 overflow-hidden border" id="portfolioAccordion">
          {filteredProjects.map((p, index) => {
            const id = `collapse-${p.id}`;
            const headerId = `heading-${p.id}`;
            return (
              <div className="accordion-item border-0 border-bottom" key={p.id}>
                <h2 className="accordion-header" id={headerId}>
                  <button
                    className={`accordion-button ${index === 0 ? "" : "collapsed"} py-3`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={id}
                  >
                    <div className="d-flex align-items-center gap-3 w-100 me-3">
                      <span className="fw-bold text-dark">{p.title}</span>
                      {p.category && (
                        <span className="badge bg-primary-subtle text-primary border border-primary-subtle ms-auto">
                          {p.category}
                        </span>
                      )}
                    </div>
                  </button>
                </h2>
                <div
                  id={id}
                  className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                  data-bs-parent="#portfolioAccordion"
                >
                  <div className="accordion-body p-4 bg-light bg-opacity-25">
                    <div className="row g-4">
                      <div className="col-md-4">
                        {p.image ? (
                          <img
                            src={p.image}
                            alt={p.title}
                            className="img-fluid rounded-3 border shadow-sm w-100 object-fit-cover"
                            style={{ maxHeight: "200px" }}
                          />
                        ) : null}
                      </div>
                      <div className="col-md-8 d-flex flex-column">
                        <h6 className="fw-semibold text-dark mb-1">{p.short}</h6>
                        {p.long && <p className="text-secondary small mb-3">{p.long}</p>}
                        <div className="d-flex flex-wrap gap-1 mb-3">
                          {p.tags?.map((t) => (
                            <span key={t} className="badge bg-secondary-subtle text-dark border">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="d-flex flex-wrap gap-2 mt-auto">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-primary"
                            onClick={() => setSelectedProject(p)}
                          >
                            <i className="bi bi-arrows-fullscreen me-1"></i> View Details
                          </button>
                          {p.repo && (
                            <a
                              className="btn btn-sm btn-outline-dark"
                              href={p.repo}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bi bi-github me-1"></i> Repository
                            </a>
                          )}
                          {p.report && (
                            <a
                              className="btn btn-sm btn-success"
                              href={p.report}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="bi bi-file-earmark-pdf me-1"></i> Documentation
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
