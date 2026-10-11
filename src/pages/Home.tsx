import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../types";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Take top 3 projects for the highlight section
  const topProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 bg-gradient-light border-bottom position-relative overflow-hidden">
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-primary-subtle text-primary border border-primary-subtle mb-3 small fw-semibold">
                <i className="bi bi-mortarboard-fill"></i>
                <span>Aspiring Computer & Robotics Engineer • KMUTT</span>
              </div>
              <h1 className="display-4 fw-bold text-dark tracking-tight mb-3">
                Hello, I'm <span className="text-primary">Prem Supthaksina</span>
              </h1>
              <p className="lead text-secondary mb-4 lh-base">
                Passionate about embedded systems, robotics, and computer vision. I design and build end-to-end hardware-software systems — from circuit boards and low-level firmware to IoT dashboards and intelligent control algorithms.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link to="/projects" className="btn btn-primary btn-lg rounded-pill px-4 shadow-sm">
                  <i className="bi bi-collection-fill me-2"></i> Explore Projects
                </Link>
                <Link to="/about" className="btn btn-outline-dark btn-lg rounded-pill px-4">
                  <i className="bi bi-person-lines-fill me-2"></i> About Me
                </Link>
                <Link to="/contact" className="btn btn-light border btn-lg rounded-pill px-4">
                  <i className="bi bi-envelope-fill me-2"></i> Contact
                </Link>
              </div>

              <div className="d-flex align-items-center gap-4 pt-3 border-top text-secondary small">
                <div>
                  <strong className="text-dark fs-5 d-block">8+</strong>
                  <span>Engineered Projects</span>
                </div>
                <div className="border-start ps-4">
                  <strong className="text-dark fs-5 d-block">Robotics & Vision</strong>
                  <span>WRO Patrol Bot & OpenCV</span>
                </div>
                <div className="border-start ps-4">
                  <strong className="text-dark fs-5 d-block">IoT & Embedded</strong>
                  <span>Sensors, PLC & ESP32/C++</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="position-relative">
                <div className="rounded-4 overflow-hidden shadow-lg border bg-white p-2">
                  <img
                    src="/assets/PORT_HOME.png"
                    alt="Prem Supthaksina Portfolio Banner"
                    className="img-fluid rounded-3 w-100 object-fit-cover"
                    style={{ maxHeight: "420px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Pillars */}
      <section className="py-5 bg-white border-bottom">
        <div className="container-xl">
          <div className="text-center mb-5">
            <h6 className="text-primary text-uppercase fw-bold small">Core Disciplines</h6>
            <h2 className="fw-bold">What I Engineer & Build</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 rounded-4 border bg-light h-100 shadow-sm transition-all hover-elevate">
                <div
                  className="rounded-3 bg-primary text-white d-flex align-items-center justify-content-center mb-3 shadow-sm"
                  style={{ width: "48px", height: "48px", fontSize: "1.25rem" }}
                >
                  <i className="bi bi-robot"></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">Robotics & Vision</h5>
                <p className="text-secondary small mb-0">
                  Autonomous path-finding, obstacle avoidance algorithms, and camera vision telemetry using OpenCV, Python, and sensor arrays.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 border bg-light h-100 shadow-sm transition-all hover-elevate">
                <div
                  className="rounded-3 bg-success text-white d-flex align-items-center justify-content-center mb-3 shadow-sm"
                  style={{ width: "48px", height: "48px", fontSize: "1.25rem" }}
                >
                  <i className="bi bi-cpu"></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">Embedded Systems</h5>
                <p className="text-secondary small mb-0">
                  Firmware development in C/C++, microcontroller control (Arduino, ESP32, STM32), ultrasonic/gas sensors, and automated actuators.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 rounded-4 border bg-light h-100 shadow-sm transition-all hover-elevate">
                <div
                  className="rounded-3 bg-info text-white d-flex align-items-center justify-content-center mb-3 shadow-sm"
                  style={{ width: "48px", height: "48px", fontSize: "1.25rem" }}
                >
                  <i className="bi bi-wifi"></i>
                </div>
                <h5 className="fw-bold text-dark mb-2">IoT & Smart Systems</h5>
                <p className="text-secondary small mb-0">
                  End-to-end connected platforms linking hardware devices with cloud telemetry dashboards, real-time logging, and remote controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlighted Projects */}
      <section className="py-5 bg-light">
        <div className="container-xl">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <h6 className="text-primary text-uppercase fw-bold small">Portfolio Showcase</h6>
              <h2 className="fw-bold mb-1">Highlighted Projects</h2>
              <p className="text-secondary small mb-0">
                A selection of recent robotics, smart automation, and microcontroller solutions.
              </p>
            </div>
            <Link
              to="/projects"
              className="btn btn-outline-primary rounded-pill px-4 mt-3 mt-md-0 d-inline-flex align-items-center gap-2"
            >
              <span>View All {projects.length} Projects</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="row g-4">
            {topProjects.map((project) => (
              <div key={project.id} className="col-md-4">
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-5 bg-dark text-white text-center position-relative">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3">Ready to Discuss a Project or Opportunity?</h2>
              <p className="lead text-white-50 mb-4">
                I am actively building new systems and welcoming discussions for engineering collaborations, research, or study programs.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-4">
                  <i className="bi bi-envelope-fill me-2"></i> Reach Out
                </Link>
                <a
                  href="https://github.com/Pr3mz"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-lg rounded-pill px-4"
                >
                  <i className="bi bi-github me-2"></i> GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
