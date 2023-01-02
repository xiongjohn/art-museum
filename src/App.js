import { Route, Routes } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import PageNotFound from "./components/PageNotFound";
import harvardArt from "./data/harvardArt";
import Home from "./components/Home";



function App() {

console.log("app", harvardArt)
  return (
    <div>
        <GalleryNavigation galleries = {harvardArt.records} />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/galleries/:galleryId/*" element={<GalleryView galleries = {harvardArt.records}/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
    );
}

export default App;
