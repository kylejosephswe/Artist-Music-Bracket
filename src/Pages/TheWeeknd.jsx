import theWeekndSongData from "../Data/theWeekndSongData";
import SongBracket from "../Components/SongBracket";

function TheWeeknd() {
  return (
    <div>
      <h1 className="artist-page-title">The Weeknd Music Bracket</h1>
      <SongBracket artistName="Keshi" artistSongData={theWeekndSongData} />
    </div>
  );
}

export default TheWeeknd;
