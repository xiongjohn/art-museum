import { useParams } from "react-router-dom"
import ArtImageTile from "../ArtImageTile";

function GalleryView ({ galleries }) {
    let { galleryId } = useParams();
    let gallery = galleries.find(x => x.galleryid == galleryId)
    // let gallery = galleries.find(({galleryid}) => galleryid == galleryId)
    console.log(useParams())
    console.log(galleries)
    console.log(gallery.galleryid)
    return (
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>{gallery.name}</h2>
            {gallery.objects.map(function (art, index){
                console.log(art)
                return (
                    <div key={index}>
                        <ArtImageTile 
                            art={art.images[0]} 
                            galleryId={gallery.galleryid}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default GalleryView