import { useOutletContext, useParams, Link } from "react-router-dom";
import "../../index.css";

function ArtDesciption() {
  let { artID, galleryId } = useParams();
  const art = useOutletContext();

  console.log("galleryID", galleryId);

  let imageArray = [];
  let descriptions = [];
  for (let i = 0; i < art.objects.length; i++) {
    // eslint-disable-next-line
    if (art.objects[i].images.find((x) => x.imageid == artID) !== undefined) {
      // eslint-disable-next-line
      imageArray = art.objects[i].images.find((x) => x.imageid == artID);
      descriptions = art.objects[i];
    }
  }

  let artPhotos = descriptions.images.map((photo, index) => {
    return (
      <div key={index} className="border-hover">
        <Link to={"/galleries/" + galleryId + "/art/" + photo.imageid}>
          <img
            src={photo.baseimageurl}
            className="small-image"
            alt={descriptions.title}
          />
        </Link>
      </div>
    );
  });
  let galleryName = art.name;

  let imageDescription = "";

  if (descriptions.description) {
    imageDescription = (
      <li className="p-2">description: {descriptions.description};</li>
    );
  }

  return (
    <div>
      <a href={descriptions.url} className="d-flex justify-content-center">
        <img
          src={imageArray.baseimageurl}
          className="selected-img"
          alt={descriptions.title}
        />
      </a>
      <p className="text-center text-secondary box-shadow">
        Photo © President and Fellows of Harvard College
      </p>
      <h2>Title : {descriptions.title}</h2>
      <ul className="description-list ps-0">
        <li className="p-2">Dated: {descriptions.dated}</li>
        <li className="p-2">Dimensions: {descriptions.dimensions}</li>
        {imageDescription}
        <li className="p-2">Medium: {descriptions.medium}</li>
        <li className="p-2">Culture: {descriptions.culture}</li>
      </ul>
      <div className="art-list d-flex  gap-4  align-items-center flex-nowrap overflow-auto">
        {artPhotos}
      </div>
      <Link to=".." className="text-decoration-none ">
        <h3 className="text-black text-center return-link pb-5 mt-5 pt-5">
          Return to {galleryName} gallery
        </h3>
      </Link>
    </div>
  );
}

export default ArtDesciption;
