import { useParams } from "react-router-dom"
import ArtImageTile from "../ArtImageTile";

function GalleryView ({ galleries }) {
    let {galleryId} = useParams();
    let gallery = galleries.find(x => x.galleryid == galleryId) 
    // console.log(gallery)

    console.log("Gallery", galleryId)
    return (
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>{gallery.name}</h2>
            {gallery.objects.map(function (art, index){
                return (
                    <div key={index}>
                        <ArtImageTile art= {art.images[0]} galleryid = {gallery}/>
                    </div>
                )
            })}
        </div>
    )
}

export default GalleryView