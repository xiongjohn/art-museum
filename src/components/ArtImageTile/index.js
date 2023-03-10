import { Link, useOutletContext, useParams } from "react-router-dom";

function ArtImageTile() {
  let { galleryId } = useParams();
  const art = useOutletContext();

  let imageTile = art.objects.map((artImages) => {
    let imageAlt = artImages.title;
    return artImages.images.map((image, index) => {
      return (
        <div>
          <Link
            key={index}
            to={"/galleries/" + galleryId + "/art/" + image.imageid}
          >
            <img
              src={image.baseimageurl}
              className="gallery-images border-hover"
              alt={imageAlt}
            ></img>
          </Link>
        </div>
      );
    });
  });

  return <div className="grid">{imageTile}</div>;
}
export default ArtImageTile;
