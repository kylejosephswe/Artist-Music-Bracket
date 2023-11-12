import {Link} from 'react-router-dom'

import ArtistCard from "./ArtistCard"
import KeshiImage from '../Images/keshiImage.jpg'

function ArtistSelection() {
  return (
    <div className="artist-selection-flexbox">
      <Link to="/theweeknd" className="links">
      <ArtistCard artistName="The Weeknd" artistImage="https://www.theweeknd.com/files/2021/10/photo_202110_07_GENERAL-BRIANZIFF_THEWEEKND_800_1-WITH-BEAUTY-crop-1.jpeg" />
      </Link>
      <Link to="/keshi" className="links">
      <ArtistCard artistName="Keshi" artistImage={KeshiImage} />
      </Link>
      <Link to="/giveon" className="links">
      <ArtistCard artistName="Giveon" artistImage="https://www.giveonofficial.com/dist/img/merch/GIV-DELUXE7%20(1)%20(1)%5B10%5D.jpg" />
      </Link>
    </div>
  )
}

export default ArtistSelection