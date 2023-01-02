import { Route, Routes, useParams } from "react-router-dom"
import ArtImageTile from "../ArtImageTile";
import Home from "../Home";

function GalleryView ({ galleries }) {
    let { galleryId } = useParams();
    let gallery = galleries.find(x => x.galleryid == galleryId)
    console.log(galleryId)
    // let gallery = galleries.find(({galleryid}) => galleryid == galleryId)
    // console.log(useParams())
    // console.log(galleries)


    // let artImages =  gallery.objects.map(function (art, index){
    //                     console.log(art.images[0])
           
    //                     return (
    //                             <div key={index}>
    //                                 <ArtImageTile art={art.images[0]} galleryId={gallery.galleryid}/>
    //                             </div>
    //                     )
    //     })


    const artImages = gallery.objects.map(function (art, index){
        console.log(art.images[0])

        return (
                <Route path="/galleries/:galleryId" key={index} element={<ArtImageTile art={art.images[0]} galleryId={gallery.galleryid}/>} />
        )
        });
    
    const testImages = gallery.objects.map((art,index) => (<div key={index}> <ArtImageTile art={art.images[0]} galleryId={gallery.galleryid}/></div>))

    
   
    return (
        <div>
            <h1>Hello from GalleryView</h1>
            <h2>{gallery.name}</h2>
            <Routes>
                <Route exact path="/galleries/:galleryId" element= {testImages} />
                
            </Routes>
            
            {testImages}
        </div>
    )
}

export default GalleryView