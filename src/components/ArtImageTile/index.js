import { Link, useOutletContext, useParams } from "react-router-dom";

function ArtImageTile() {
  let { galleryId } = useParams();
  const art = useOutletContext();

  let imageTile = art.objects.map((artImages) => {
    return artImages.images.map((image, index) => {
      return (
        <Link
          key={index}
          to={"/galleries/" + galleryId + "/art/" + image.imageid}
        >
          <img src={image.baseimageurl}></img>
        </Link>
      );
    });
  });

  return <div>{imageTile}</div>;
}
export default ArtImageTile;
