import beyonceSongData from "../Data/beyonceSongData";
import SongBracket from "../Components/SongBracket";

function Beyonce() {
  return (
    <div>
      <h1 className="artist-page-title">Beyonce Music Bracket</h1>
      <SongBracket artistName="Beyonce" artistSongData={beyonceSongData} />
    </div>
  );
}

export default Beyonce;
