import Navbar from '../Components/Navbar'
import ArtistSelection from '../Components/ArtistSelection'

function Home() {
  return (
    <>
    <h1 className="choose-artist">Choose an artist!</h1>
    <ArtistSelection />
    </>
  )
}

export default Home