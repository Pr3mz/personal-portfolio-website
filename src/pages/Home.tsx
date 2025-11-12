import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-xl">
      <section className="page-hero d-flex align-items-center">
        <div>
          <h1 className="display-6">Prem — Computer Engineering Student</h1>
          <p className="lead">
            I build embedded systems, robots, and AI solutions. Browse my
            projects and code.
          </p>
          <div className="mt-3">
            <Link to="/projects" className="btn btn-primary me-2">
              View Projects
            </Link>
            <Link to="/about" className="btn btn-outline-secondary">
              About Me
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h3>Highlighted Projects</h3>
        <p>
          Quick showcase of top 3 projects. For full list go to Projects page.
        </p>
        {/* you can later map top 3 here */}
      </section>
    </div>
  );
}
