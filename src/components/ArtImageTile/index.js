import { Link, useParams } from "react-router-dom";

function ArtImageTile({ art }){
    let { galleryId } = useParams()
    let gallery = galleryId
    console.log("artimagetile", gallery)
    console.log(useParams().galleryId)


    return (
        <div>
            <Link to={"/galleries/"+ gallery + "/art/" + art.imageid}>
                <img src={art.baseimageurl}></img>
            </Link>
        </div>
    )
}
export default ArtImageTile;
