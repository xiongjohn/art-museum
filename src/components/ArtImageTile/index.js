import { Link, useParams } from "react-router-dom";

function ArtImageTile({ art, galleryId }){

    return (
        <div>
            <Link to={"/galleries/" + galleryId + "/art/" + art.imageid}>
                <img src={art.baseimageurl}></img>
            </Link>
        </div>
    )
}
export default ArtImageTile;
