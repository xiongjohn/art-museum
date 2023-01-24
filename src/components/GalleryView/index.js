import { Outlet, Route, Routes, useParams } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import Home from "../Home";

function GalleryView({ galleries }) {
  let { galleryId } = useParams();
  let gallery = galleries.find((x) => x.galleryid == galleryId);

  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{gallery.name}</h2>
      <Outlet context={gallery} />
    </div>
  );
}

export default GalleryView;
