import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light pt-5 pb-4 mt-auto">
      <div className="container-xl">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold text-white mb-2">Prem Supthaksina</h5>
            <p className="text-secondary small mb-3">
              Aspiring Computer & Robotics Engineering student focused on Embedded Systems, Computer Vision, and IoT integrations.
            </p>
            <div className="d-flex gap-2">
              <a
                href="https://github.com/Pr3mz"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="mailto:premsupthaksina@gmail.com"
                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
              <a
                href="https://linkedin.com/in/Pr3mz"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-6">
            <h6 className="text-uppercase fw-semibold text-white-50 small mb-3">Navigation</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/" className="text-secondary text-decoration-none hover-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-secondary text-decoration-none hover-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary text-decoration-none hover-link">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary text-decoration-none hover-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 col-6">
            <h6 className="text-uppercase fw-semibold text-white-50 small mb-3">Focus Areas</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
              <li>• Embedded Systems & Firmware</li>
              <li>• Computer Vision (OpenCV)</li>
              <li>• Robotics & Microcontrollers</li>
              <li>• IoT Telemetry & Control</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12">
            <h6 className="text-uppercase fw-semibold text-white-50 small mb-3">Let's Connect</h6>
            <p className="text-secondary small mb-2">
              Interested in collaborating or discussing engineering projects?
            </p>
            <Link to="/contact" className="btn btn-primary btn-sm px-3">
              Get in Touch <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 small text-secondary">
          <div>
            © {currentYear} Prem Supthaksina. All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript & Vite
          </div>
        </div>
      </div>
    </footer>
  );
}
