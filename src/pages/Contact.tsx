import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const emailAddress = "premsupthaksina@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className="py-5 bg-light min-vh-100">
      <div className="container-xl">
        <div className="text-center mb-5">
          <h6 className="text-primary text-uppercase fw-bold small">Get In Touch</h6>
          <h2 className="fw-bold mb-2">Let's Connect & Collaborate</h2>
          <p className="text-secondary small mx-auto" style={{ maxWidth: "600px" }}>
            Whether you want to discuss robotics, embedded engineering, computer vision projects, or prospective opportunities, feel free to reach out.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Contact Methods Cards */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              {/* Email Card */}
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "48px", height: "48px", fontSize: "1.25rem" }}
                  >
                    <i className="bi bi-envelope-at-fill"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="fw-bold text-dark mb-1">Email</h6>
                    <p className="text-secondary small mb-2">{emailAddress}</p>
                    <div className="d-flex gap-2">
                      <a
                        href={`mailto:${emailAddress}`}
                        className="btn btn-sm btn-primary rounded-pill px-3"
                      >
                        <i className="bi bi-send me-1"></i> Send Mail
                      </a>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                        onClick={handleCopyEmail}
                      >
                        <i className={`bi ${copied ? "bi-check2" : "bi-clipboard"} me-1`}></i>
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Card */}
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="bg-dark text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "48px", height: "48px", fontSize: "1.25rem" }}
                  >
                    <i className="bi bi-github"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="fw-bold text-dark mb-1">GitHub</h6>
                    <p className="text-secondary small mb-2">Explore my repositories and code</p>
                    <a
                      href="https://github.com/Pr3mz"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-dark rounded-pill px-3"
                    >
                      <i className="bi bi-box-arrow-up-right me-1"></i> github.com/Pr3mz
                    </a>
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-start gap-3">
                  <div
                    className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "48px", height: "48px", fontSize: "1.25rem" }}
                  >
                    <i className="bi bi-linkedin"></i>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="fw-bold text-dark mb-1">LinkedIn</h6>
                    <p className="text-secondary small mb-2">Professional networking & career</p>
                    <a
                      href="https://linkedin.com/in/Pr3mz"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-primary rounded-pill px-3"
                    >
                      <i className="bi bi-box-arrow-up-right me-1"></i> linkedin.com/in/Pr3mz
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="bg-danger-subtle text-danger rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: "48px", height: "48px", fontSize: "1.25rem" }}
                  >
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold text-dark mb-0">Location</h6>
                    <p className="text-secondary small mb-0">Bangkok, Thailand • KMUTT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white h-100">
              <h5 className="fw-bold text-dark mb-1">Send a Direct Message</h5>
              <p className="text-secondary small mb-4">
                Leave a message and I'll get back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <div className="alert alert-success rounded-4 p-4 text-center my-auto">
                  <i className="bi bi-check-circle-fill fs-1 text-success d-block mb-2"></i>
                  <h5 className="fw-bold">Thank You!</h5>
                  <p className="small text-secondary mb-3">
                    Your message draft has been prepared. You can also reach out directly via email at{" "}
                    <strong>{emailAddress}</strong>.
                  </p>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-success rounded-pill px-4"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-secondary">
                        Your Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-secondary">
                        Your Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-3"
                        required
                        placeholder="e.g. alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-secondary">Subject</label>
                    <input
                      type="text"
                      className="form-control rounded-3"
                      placeholder="e.g. Engineering Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-secondary">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control rounded-3"
                      rows={5}
                      required
                      placeholder="Describe your inquiry or project details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 py-2 mt-2 fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="bi bi-send-fill"></i>
                    <span>Submit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
