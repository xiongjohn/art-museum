import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation({ galleries }) {
  return (
    <nav className="gallery-navigation">
      <NavLink to="/" end>
        <h2 className="home text-center ">Harvard Art Museum</h2>
      </NavLink>

      <ul className="nav-item d-flex flex-wrap gap-4 justify-content-center pt-2">
        {galleries.map((gallery) => (
          <li key={gallery.id}>
            <NavLink to={"/galleries/" + gallery.galleryid} className="p-2">
              {gallery.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GalleryNavigation;
