import { Link, useOutletContext, useParams } from "react-router-dom";

function ArtImageTile() {
  let { galleryId } = useParams();
  const art = useOutletContext();
  console.log("testing", art);

  let imageTile = art.objects.map((art, index) => {
    return (
      <Link
        key={index}
        to={"/galleries/" + galleryId + "/art/" + art.images[0].imageid}
      >
        <img src={art.images[0].baseimageurl}></img>
      </Link>
    );
  });

  return <div>{imageTile}</div>;
}
export default ArtImageTile;
