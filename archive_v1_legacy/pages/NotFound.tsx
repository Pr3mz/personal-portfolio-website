import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-5 my-5 text-center">
      <div className="container-xl">
        <div className="display-1 fw-bold text-primary mb-3">404</div>
        <h2 className="fw-bold mb-2">Page Not Found</h2>
        <p className="text-secondary mb-4">
          The page or project route you are looking for does not exist.
        </p>
        <Link to="/" className="btn btn-primary rounded-pill px-4">
          <i className="bi bi-house-door me-2"></i> Return to Homepage
        </Link>
      </div>
    </div>
  );
}
