import StrayKidsSongData from "../Data/StrayKidsSongData";
import SongBracket from "../Components/SongBracket";

function StrayKids() {
  return (
    <div>
      <h1 className="artist-page-title">Stray Kids Music Bracket</h1>
      <SongBracket artistName="Stray Kids" artistSongData={StrayKidsSongData} />
    </div>
  );
}

export default StrayKids;
