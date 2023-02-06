import { Outlet, useParams } from "react-router-dom";

function GalleryView({ galleries }) {
  let { galleryId } = useParams();
  let gallery = galleries.find((x) => x.galleryid == galleryId);

  return (
    <div className="wrapper">
      <h1 className="text-center p-4">{gallery.name}</h1>
      <Outlet context={gallery} />
    </div>
  );
}

export default GalleryView;
