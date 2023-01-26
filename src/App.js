import { Route, Routes, useParams } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import PageNotFound from "./components/PageNotFound";
import harvardArt from "./data/harvardArt";
import Home from "./components/Home";
import ArtImageTile from "./components/ArtImageTile";
import ArtDesciption from "./components/ArtDescription";

function App() {
  let { galleryId } = useParams();
  console.log(galleryId);
  console.log(harvardArt.records);

  let artImages = harvardArt.records.map((index) => {
    return (
      <Route
        key={index}
        exact
        path="/galleries/:galleryId/"
        element={<ArtImageTile />}
      ></Route>
    );
  });

  console.log("app", harvardArt);
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          path="/galleries/:galleryId/"
          element={<GalleryView galleries={harvardArt.records} />}
        >
          {artImages}
          <Route
            path="/galleries/:galleryId/art/:artID"
            element={<ArtDesciption />}
          />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
