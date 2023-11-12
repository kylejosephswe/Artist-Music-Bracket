import { Link } from "react-router-dom";

import ArtistCard from "./ArtistCard";
import KeshiImage from "../Images/keshiImage.jpg";

function ArtistSelection() {
  return (
    <div className="artist-selection-flexbox">
      <Link to="/theweeknd" className="links">
        <ArtistCard
          artistName="The Weeknd"
          artistImage="https://www.theweeknd.com/files/2021/10/photo_202110_07_GENERAL-BRIANZIFF_THEWEEKND_800_1-WITH-BEAUTY-crop-1.jpeg"
        />
      </Link>
      <Link to="/keshi" className="links">
        <ArtistCard artistName="Keshi" artistImage={KeshiImage} />
      </Link>
      <Link to="/taylorswift" className="links">
        <ArtistCard
          artistName="Taylor Swift"
          artistImage="https://cdn.britannica.com/85/182085-050-EB0D9C57/Taylor-Swift-2013.jpg"
        />
      </Link>
      <Link to="/straykids" className="links">
        <ArtistCard
          artistName="Stray Kids"
          artistImage="https://assets.teenvogue.com/photos/612f8bf4e8c260b3d41cc82c/1:1/w_2000,h_2000,c_limit/Stray%20Kids%20(1).jpg"
        />
      </Link>
      <Link to="/beyonce" className="links">
        <ArtistCard
          artistName="Beyonce"
          artistImage="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2022-03/220323-beyonce-ew-510p-86a49a.jpg"
        />
      </Link>
    </div>
  );
}

export default ArtistSelection;
