import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

function GalleryNavigation({ galleries }) {
  return (
    <nav>
      <NavLink to="/" end>
        <h2 className="text-center">Galleries</h2>
      </NavLink>
      <div className="nav-grid">
        {galleries.map((gallery) => (
          <div key={gallery.id}>
            <NavLink to={"/galleries/" + gallery.galleryid}>
              {gallery.name}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default GalleryNavigation;
