import { useOutletContext, useParams } from "react-router-dom";

function ArtDesciption() {
  let { artID } = useParams();
  const art = useOutletContext();

  let imageArray = [];
  for (let i = 0; i < art.objects.length; i++) {
    if (art.objects[i].images.find((x) => x.imageid == artID) !== undefined) {
      imageArray = art.objects[i].images.find((x) => x.imageid == artID);
    }
  }

  return (
    <div>
      <h2>ArtDesciption</h2>
      <img src={imageArray.baseimageurl} />
    </div>
  );
}

export default ArtDesciption;
