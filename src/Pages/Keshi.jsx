import SongBracket from '../Components/SongBracket'
import KeshiSongData from '../Data/KeshiSongData'

function Keshi() {
  return (
    <div>
        <h1 className="artist-page-title">Keshi Music Bracket</h1>
        <SongBracket artistName="Keshi" artistSongData={KeshiSongData} />
    </div>
  )
}

export default Keshi