import { useOutletContext, useParams, Link } from "react-router-dom";

function ArtDesciption() {
  let { artID, galleryId } = useParams();
  const art = useOutletContext();

  console.log("galleryID", galleryId);

  let imageArray = [];
  let descriptions = [];
  for (let i = 0; i < art.objects.length; i++) {
    if (art.objects[i].images.find((x) => x.imageid == artID) !== undefined) {
      imageArray = art.objects[i].images.find((x) => x.imageid == artID);
      descriptions = art.objects[i];
    }
  }

  let artPhotos = descriptions.images.map((photo, index) => {
    return (
      <div key={index}>
        <Link to={"/galleries/" + galleryId + "/art/" + photo.imageid}>
          <img src={photo.baseimageurl} className="small-image" />
        </Link>
      </div>
    );
  });
  let galleryName = art.name;

  console.log("gallery", art);
  console.log("art", art.name);
  console.log("image", imageArray);
  console.log("description", descriptions);

  let imageDescription = "";

  if (descriptions.description) {
    imageDescription = (
      <li>
        description:
        {descriptions.description};
      </li>
    );
  }

  return (
    <div>
      <a href={descriptions.url}>
        <img src={imageArray.baseimageurl} className="selected-img" />
      </a>
      <p>Photo © {imageArray.copyright}</p>
      <h2>{descriptions.title}</h2>
      <ul>
        <li>Dated: {descriptions.dated}</li>
        <li>Dimensions: {descriptions.dimensions}</li>
        {imageDescription}
        <li>Medium: {descriptions.medium}</li>
        <li>Culture: {descriptions.culture}</li>
      </ul>
      <div className="art-list">{artPhotos}</div>
      <Link to="..">
        <h3>Return to {galleryName} gallery</h3>
      </Link>
    </div>
  );
}

export default ArtDesciption;
