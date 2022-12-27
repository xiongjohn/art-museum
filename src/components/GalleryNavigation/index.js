import { NavLink } from "react-router-dom"
import "./GalleryNavigation.css"

function GalleryNavigation ({ galleries }) {

    console.log(galleries[1].galleryId)
    return (
        <nav>
            <NavLink to="/" end><h1>Galleries</h1></NavLink>

            {galleries.map(gallery => 
                <div key={gallery.id}>
                    <NavLink to={'/galleries/' + gallery.galleryid} >{gallery.name}</NavLink>
                </div>
            )}
        </nav>
    )
}

export default GalleryNavigation