import { Link, useParams } from "react-router-dom";

function ArtImageTile({ art }){
    let { galleryId } = useParams()
    // let gallery = galleryId
    console.log("artimagetile", art)
    console.log(useParams())
    // console.log(useParams().galleryId)

    let imageTile = art.objects.map((art, index)=> {
        return (
            <Link key={index} to={"/galleries/"+galleryId+"/art/" +art.images[0].imageid}>
                <img src={art.images[0].baseimageurl}></img>
            </Link>

        )
    })

    return (
        <div>
            {imageTile}
        </div>
    )
}
export default ArtImageTile;
