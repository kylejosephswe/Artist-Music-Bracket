import TaylorSwiftSongData from "../Data/TaylorSwiftSongData";
import SongBracket from "../Components/SongBracket";

function TaylorSwift() {
  return (
    <div>
      <h1 className="artist-page-title">Taylor Swift Music Bracket</h1>
      <SongBracket
        artistName="Taylor Swift"
        artistSongData={TaylorSwiftSongData}
      />
    </div>
  );
}

export default TaylorSwift;
