import Navbar from "../Components/Navbar";
import ArtistSelection from "../Components/ArtistSelection";

function Home() {
  return (
    <>
      <h1 className="home-title">Artist Music Bracket</h1>
      <h2 className="choose-artist">Choose an artist!</h2>
      <ArtistSelection />
    </>
  );
}

export default Home;
