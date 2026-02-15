import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import PORT_HOME from "../assets/PORT_HOME.png";

export default function Home() {
  const topProjects = projects.slice(0, 3);

  return (
    <div className="container-xl">
      {/* Profile Section */}
      <div className="text-center my-5">
        <img
          src={PORT_HOME}
          alt="Prem"
          className="img-fluid rounded-circle shadow"
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
      </div>

      <section>
        <h3>Highlighted Projects</h3>
        <div className="row">
          {topProjects.map((project) => (
            <div key={project.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5>{project.title}</h5>
                  <p>{project.short}</p>
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-sm btn-outline-primary"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
