import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <h2>Page Not Found</h2>
      <h2>Page Not Found</h2>
      <p>
        Try another page or head back to the{" "}
        <NavLink to="/" end>
          Gallery
        </NavLink>
      </p>
    </div>
  );
}

export default PageNotFound;
