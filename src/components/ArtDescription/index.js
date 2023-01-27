import { useOutletContext, useParams, Link } from "react-router-dom";

function ArtDesciption() {
  let { artID } = useParams();
  const art = useOutletContext();

  let imageArray = [];
  let descriptions = [];
  for (let i = 0; i < art.objects.length; i++) {
    if (art.objects[i].images.find((x) => x.imageid == artID) !== undefined) {
      imageArray = art.objects[i].images.find((x) => x.imageid == artID);
      descriptions = art.objects[i];
    }
  }

  let galleryName = art.name;

  console.log("gallery", art);
  console.log("art", art.name);
  console.log("image", imageArray);
  console.log("description", descriptions);

  return (
    <div>
      <h2>ArtDesciption</h2>
      <img src={imageArray.baseimageurl} />
      <Link to="..">
        <h3>Return to {galleryName} gallery</h3>
      </Link>
    </div>
  );
}

export default ArtDesciption;
