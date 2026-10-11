import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky-top bg-white border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light py-2">
        <div className="container-xl">
          <Link
            className="navbar-brand d-flex align-items-center gap-2 fw-bold text-dark text-decoration-none"
            to="/"
            onClick={closeMenu}
          >
            <div
              className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center shadow-sm"
              style={{ width: "38px", height: "38px", fontSize: "1.1rem" }}
            >
              <i className="bi bi-cpu-fill"></i>
            </div>
            <div className="d-flex flex-column">
              <span className="fs-5 lh-1 text-primary-emphasis">Prem Supthaksina</span>
              <span className="text-secondary fw-normal" style={{ fontSize: "0.75rem" }}>
                Robotics & Software Engineer
              </span>
            </div>
          </Link>

          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navCollapse"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"} fs-4`}></i>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navCollapse"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center gap-1 my-2 my-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-2 ${isActive ? "active fw-semibold text-primary" : "text-dark"}`
                  }
                  to="/"
                  end
                  onClick={closeMenu}
                >
                  <i className="bi bi-house-door me-1"></i> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-2 ${isActive ? "active fw-semibold text-primary" : "text-dark"}`
                  }
                  to="/projects"
                  onClick={closeMenu}
                >
                  <i className="bi bi-collection me-1"></i> Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-2 ${isActive ? "active fw-semibold text-primary" : "text-dark"}`
                  }
                  to="/about"
                  onClick={closeMenu}
                >
                  <i className="bi bi-person me-1"></i> About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-2 ${isActive ? "active fw-semibold text-primary" : "text-dark"}`
                  }
                  to="/contact"
                  onClick={closeMenu}
                >
                  <i className="bi bi-envelope me-1"></i> Contact
                </NavLink>
              </li>
              <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                <a
                  href="https://github.com/Pr3mz"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-outline-dark d-inline-flex align-items-center gap-1 rounded-pill px-3 py-1"
                >
                  <i className="bi bi-github"></i>
                  <span>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
