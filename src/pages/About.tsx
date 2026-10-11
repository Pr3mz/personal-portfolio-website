import { Link } from "react-router-dom";

export default function About() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "bi-code-slash",
      skills: ["C", "C++", "Python", "TypeScript", "JavaScript", "HTML5 / CSS3"]
    },
    {
      category: "Robotics & Computer Vision",
      icon: "bi-robot",
      skills: ["OpenCV", "Obstacle Avoidance", "WRO Future Engineers", "Image Processing", "Autonomous Navigation"]
    },
    {
      category: "Embedded & Hardware",
      icon: "bi-cpu",
      skills: ["Arduino", "ESP32", "Sensor Interfacing", "Actuator Controls", "Circuit Prototyping", "PLC Logic"]
    },
    {
      category: "Software & Web Development",
      icon: "bi-laptop",
      skills: ["React", "Vite", "Bootstrap", "Git / GitHub", "IoT Cloud Dashboards", "REST APIs"]
    }
  ];

  return (
    <div className="py-5 bg-light min-vh-100">
      <div className="container-xl">
        {/* Profile Introduction Card */}
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5">
          <div className="card-body p-4 p-md-5">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4 text-center">
                <div
                  className="mx-auto rounded-4 overflow-hidden shadow border p-2 bg-white"
                  style={{ maxWidth: "280px" }}
                >
                  <img
                    src="/assets/PREM.png"
                    alt="Prem Supthaksina"
                    className="img-fluid rounded-3 w-100 object-fit-cover"
                    style={{ maxHeight: "320px" }}
                  />
                </div>
                <div className="mt-3">
                  <h4 className="fw-bold mb-1">Prem Supthaksina</h4>
                  <p className="text-secondary small mb-2">
                    Aspiring Computer & Robotics Engineer
                  </p>
                  <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill">
                    <i className="bi bi-mortarboard-fill me-1"></i> Target: KMUTT University
                  </span>
                </div>
              </div>

              <div className="col-lg-8">
                <h6 className="text-primary text-uppercase fw-bold small">Biography</h6>
                <h2 className="fw-bold mb-3">About Me & My Passion</h2>
                <div className="text-secondary lh-base d-flex flex-column gap-3">
                  <p className="mb-0">
                    I am <strong>Prem Supthaksina</strong>, an aspiring Computer Engineering student with a focused commitment to pursuing my studies at <strong>KMUTT (King Mongkut's University of Technology Thonburi)</strong>. My primary interests lie in embedded systems, robotics, and computer vision, where hardware and software converge to create intelligent, real-world solutions.
                  </p>
                  <p className="mb-0">
                    I am particularly driven by <em>system-level thinking</em> — understanding how sensors, microcontrollers, control algorithms, and software architectures integrate into a cohesive, reliable system.
                  </p>
                  <p className="mb-0">
                    I enjoy building full-stack IoT prototypes that connect hardware, firmware, and cloud-based dashboards into unified platforms. From designing circuits and writing low-level firmware to developing interactive user interfaces, I value the complete engineering pipeline that transforms concepts into functional prototypes.
                  </p>
                </div>

                <div className="p-3 rounded-3 bg-light border-start border-primary border-4 mt-4">
                  <p className="fst-italic text-dark mb-0 small">
                    "My goal is not only to write code, but to engineer solutions — systems that are reliable, scalable, and purposeful."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <h6 className="text-primary text-uppercase fw-bold small">Competencies</h6>
            <h2 className="fw-bold">Technical Skills & Tooling</h2>
            <p className="text-secondary small">Technologies and tools applied across my engineering projects.</p>
          </div>

          <div className="row g-4">
            {skillCategories.map((group) => (
              <div key={group.category} className="col-md-6">
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div
                      className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center"
                      style={{ width: "42px", height: "42px", fontSize: "1.2rem" }}
                    >
                      <i className={`bi ${group.icon}`}></i>
                    </div>
                    <h5 className="fw-bold mb-0">{group.category}</h5>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Objectives Card */}
        <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8">
              <h4 className="fw-bold mb-2">Education & Future Horizons</h4>
              <p className="text-secondary mb-3">
                Preparing for Computer Engineering and Robotics studies at KMUTT University. Focusing on autonomous robotic platforms, sensor fusion, distributed computing, and intelligent edge processing.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link to="/projects" className="btn btn-primary rounded-pill px-4">
                  <i className="bi bi-collection me-1"></i> View Projects Portfolio
                </Link>
                <Link to="/contact" className="btn btn-outline-dark rounded-pill px-4">
                  <i className="bi bi-chat-dots me-1"></i> Get in Touch
                </Link>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="p-3 rounded-4 bg-light border">
                <i className="bi bi-award-fill text-warning fs-1 mb-2 d-block"></i>
                <h6 className="fw-bold text-dark mb-1">Dedication to Excellence</h6>
                <p className="text-muted small mb-0">Continuous learning, rapid prototyping, and empirical problem solving.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
